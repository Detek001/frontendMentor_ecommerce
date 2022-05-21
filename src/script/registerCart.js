import { getItems } from "./utilities/getItems.js"

export const registerCart = () => {
  const eventListener = () => {
    document.addEventListener("click", (e) => {
      let clickedElement = e.target
      const cartContainer = getItems(".cart-container")

      if(clickedElement.closest(".add-to-cart")) {
        cartContainer.classList.toggle("opacity")
      } else if (clickedElement.closest(".cart-container") || clickedElement.closest(".btn-wrapper")) {
        return  
      } else {
        cartContainer.classList.add("opacity")
      }
    })
  }
  eventListener()
}