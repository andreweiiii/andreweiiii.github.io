const screen = document.getElementById('calc-screen');
let currentValue = '0';
let storedOperator = null;
let previousValue = null;

function addDigit(digit) {
  if (currentValue === '0') {
    currentValue = digit.toString();
  } else {
    currentValue += digit.toString();
  }
  updateScreen();
}

function addDecimal() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateScreen();
  }
}

function setOperator(op) {
  if (storedOperator !== null) {
    calculateFinalResult();
  }
  storedOperator = op;
  previousValue = currentValue;
  currentValue = '0';
}

function calculateFinalResult() {
  if (storedOperator === null || previousValue === null) return;

  let result;
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  switch (storedOperator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
  }

  currentValue = result.toString();
  storedOperator = null;
  previousValue = null;
  updateScreen();
}

function clearAll() {
  currentValue = '0';
  storedOperator = null;
  previousValue = null;
  updateScreen();
}

function toggleNumberSign() {
  currentValue = (parseFloat(currentValue) * -1).toString();
  updateScreen();
}

function computePercentage() {
  currentValue = (parseFloat(currentValue) / 100).toString();
  updateScreen();
}

function updateScreen() {
  screen.textContent = currentValue;
}