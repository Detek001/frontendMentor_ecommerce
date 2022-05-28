import { operators } from "./helper/operators.js"
import { getItems } from "./helper/getItems.js"

export const registerAmountButton = () => {

  const executeOperation = (operation) => {
    let number = getItems(".number")
    let currentValue = parseInt(number.textContent)
    currentValue =  operators[operation](currentValue, 1)

    return currentValue > 1 ? number.textContent = currentValue : number.textContent = 1
  }

  const eventListener = () => {
    const counterButtons = getItems("[data-counter-button]")
    counterButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const operation = e.currentTarget.dataset.counterButton
        executeOperation(operation)
      })
    })
  }
  eventListener()
}