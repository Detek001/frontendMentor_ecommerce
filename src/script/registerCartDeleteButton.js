export const registerCartDeleteButton = () => {
  const getItem = () => {
    return document.querySelector(".cart-delete-button")
  }

  const deleteCart = () => {
    document.querySelector(".content").classList.add("display-none")
    document.querySelector(".empty").classList.remove("display-none")
    const addToCart = document.querySelector("[data-nav-cart]")
    addToCart.style.setProperty('--opacity', 0) 
  }

  const eventListener = () => {
    deleteCartButton.addEventListener("click", (e) => {
      deleteCart()
    })
  }

  const deleteCartButton = getItem()
  eventListener()
}