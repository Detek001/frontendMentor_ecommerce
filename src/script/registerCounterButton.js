export const registerCounterButton = () => {
  
  const getItems = (datattr) => {
    return document.querySelectorAll(datattr)
  }

  const executeOperation = (operation) => {
    let number = document.querySelector(".number")
    let currentValue = parseInt(number.textContent)

    if(operation == "minus") {
      currentValue -= 1
    } else {
      currentValue += 1
    }
    if (currentValue < 1) {
      return number.textContent = 1
    } else {
      return number.textContent = currentValue
    }
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