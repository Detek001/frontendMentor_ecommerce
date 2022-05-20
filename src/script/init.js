import { registerCounterButton } from "./registerCounterButton.js"
import {registerCartButton} from "./registerCartButton.js"
import { registerCart } from "./registerCart.js"


export const init = () => {
  registerCounterButton()
  registerCartButton()
  registerCart()
}