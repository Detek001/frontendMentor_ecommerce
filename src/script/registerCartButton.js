import { data } from "./data.js"
import { operators } from "./utilities/operators.js"
export const registerCartButton = () => {


  const getItem = () => {
    return document.querySelector(".add-to-cart-button")
  }

  const saveData = () => {


    const currentValue = document.querySelector(".number").textContent

    const sum = operators['*'](data[0].current_price, currentValue)

    document.querySelector("[data-product-title]").textContent = data[0].product_title 
    document.querySelector("[data-price-amount]").textContent = data[0].current_price + "x" + currentValue
    document.querySelector("[data-sum-sum]").textContent = sum
    document.querySelector("[data-product-image]").setAttribute("src", data[0].image)
    
    alert()
  }

  const eventListener = () => {
    addToCartButton.addEventListener("click", (e) => {
      saveData()
    })
  }

  const addToCartButton = getItem()
  eventListener()

}