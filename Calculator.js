class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { //  for input 
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {// for clear all 
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined // if we doesnot select any operator 
    }
  
    delete() {  // for delete simgle digits
      this.currentOperand = this.currentOperand.toString().slice(0, -1)// deletes from last element first
    }
  
    appendNumber(number) { // for giving numbers 
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()// . conveted in to string and currentnumber also converted in to string for number and single . only concated otherwise so manydots it can take  
    }
  
    chooseOperation(operation) { // selecting operator
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()// for we selected single operator nd single value it is calculate ex: (1+2)(+1)this another likethis
      }                                                                                     //(|->1 compute)
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() { // operations done 
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''// for after calculation only show 1 value not show what we added previously 
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
      console.log("hello");
      calculator.appendNumber(button.innerText)// innertext means inside the button text that means numbers 
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })