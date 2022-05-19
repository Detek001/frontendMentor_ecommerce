import { operators } from "./utilities/operators.js"

export const registerCounterButton = () => {
  
  const getItems = (datattr) => {
    return document.querySelectorAll(datattr)
  }

  const executeOperation = (operation) => {
    let number = document.querySelector(".number")
    let currentValue = parseInt(number.textContent)
    currentValue =  operators[operation](currentValue, 1)

    return currentValue > 1 ? number.textContent = currentValue : number.textContent = 1
  }

  const eventListener = () => {
    counterButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const operation = e.currentTarget.dataset.counterButton
        executeOperation(operation)
        
      })
    })
  }

  const counterButtons = getItems("[data-counter-button]")
  eventListener()
}