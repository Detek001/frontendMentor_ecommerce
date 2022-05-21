import { registerCounterButton } from "./registerCounterButton.js"
import {registerCartButton} from "./registerCartButton.js"
import { registerCart } from "./registerCart.js"
import {registerCartDeleteButton} from "./registerCartDeleteButton.js"
import { registerthumbnailToggler } from "./registerthumbnailToggler.js"

export const init = () => {
  registerCounterButton()
  registerCartButton()
  registerCart()
  registerCartDeleteButton()
  registerthumbnailToggler()
}