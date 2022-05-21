import { getItems } from "./utilities/getItems.js"

export const registerCartDeleteButton = () => {

  const deleteCart = () => {
    getItems(".content").classList.toggle("display-none")
    getItems(".empty").classList.toggle("display-none")
    const addToCart = getItems("[data-nav-cart]")
    addToCart.style.setProperty('--opacity', 0) 
  }

  const eventListener = () => {
    const deleteCartButton = getItems(".cart-delete-button")
    deleteCartButton.addEventListener("click", () => {
      deleteCart()
    })
  }
  eventListener()
}