export const registerCart = () => {

  const eventListener = () => {
    document.addEventListener("click", (e) => {
      let clickedElement = e.target
      const cartContainer = document.querySelector(".cart-container")
     
      if(clickedElement.closest(".add-to-cart")) {
        cartContainer.classList.toggle("opacity")
      } 
      else if (clickedElement.closest(".cart-container")) {
        return  
      } 
      else if (clickedElement.closest(".btn-wrapper")) {
        return
      } else {
        cartContainer.classList.add("opacity")
      }
    })
  }
  eventListener()
}