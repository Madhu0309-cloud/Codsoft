// script.js
let displayValue = '';
let operator = null;
let firstOperand = null;

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function operate(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (operator) {
    firstOperand = calculate();
  }
  operator = op;
  displayValue = '';
}

function calculate() {
  if (firstOperand !== null && operator && displayValue) {
    const secondOperand = parseFloat(displayValue);
    switch (operator) {
      case '+':
        firstOperand += secondOperand;
        break;
      case '-':
        firstOperand -= secondOperand;
        break;
      case '*':
        firstOperand *= secondOperand;
        break;
      case '/':
        firstOperand /= secondOperand;
        break;
    }
  }
  displayValue = firstOperand;
  operator = null;
  updateDisplay();
  return firstOperand;
}

function clearDisplay() {
  displayValue = '';
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}