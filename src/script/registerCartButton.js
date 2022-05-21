import { data } from "./data.js"
import { operators } from "./utilities/operators.js"
import { getItems } from "./utilities/getItems.js"

export const registerCartButton = () => {

  const getAmount = () => {    
    const amount = "'" + getItems(".number").textContent + "'"
    return amount
  }

  const changeCart = () => {
    const addToCart = getItems("[data-nav-cart]")
    addToCart.style.setProperty('--amount', getAmount())
    addToCart.style.setProperty('--opacity', 1) 
  }

  const saveData = () => {
    const currentValue = getItems(".number").textContent
    const sum = operators['*'](data[0].current_price, parseInt(currentValue))
    getItems(".content").classList.remove("display-none")
    getItems(".empty").classList.add("display-none")
    getItems("[data-product-title]").textContent = data[0].product_title 
    getItems("[data-price-amount]").textContent = data[0].current_price + "x" + currentValue
    getItems("[data-sum-sum]").textContent = "$" +  sum
    getItems("[data-product-image]").setAttribute("src", data[0].image)
  }

  const eventListener = () => {
    addToCartButton.addEventListener("click", (e) => {
      saveData()
      changeCart()
    })
  }

  const addToCartButton = getItems(".add-to-cart-button")
  eventListener()
}