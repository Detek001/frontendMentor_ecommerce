import { registerCounterButton } from "./registerCounterButton.js"
import {registerCartButton} from "./registerCartButton.js"


export const init = () => {
  registerCounterButton()
  registerCartButton()
}