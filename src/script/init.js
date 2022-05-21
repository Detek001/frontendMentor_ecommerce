import { registerAmountButton } from "./registerAmountButton.js"
import { registerAddToCartButton } from "./registerAddToCartButton.js"
import { registerCart } from "./registerCart.js"
import { registerCartDeleteButton } from "./registerCartDeleteButton.js"
import { registerThumbnailToggler } from "./registerThumbnailToggler.js"

export const init = () => {
  registerAmountButton()
  registerAddToCartButton()
  registerCart()
  registerCartDeleteButton()
  registerThumbnailToggler()
}