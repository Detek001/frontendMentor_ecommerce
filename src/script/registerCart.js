export const registerCart = () => {

  const getItem = () => {
    return document.querySelector(".add-to-cart")
  }

  const setOpacity = (opacity) => {
    console.log("hallo")
    const cartContainer = document.querySelector(".cart-container")
    cartContainer.style.setProperty('--opacity', opacity)
  }

  const eventListener = (event, opacity) => {
    cart.addEventListener(event, (e) => {
      setOpacity(opacity)
    })
  }

  const cart = getItem()
  eventListener("mouseover", 1)
  eventListener("mouseout", 0)
}