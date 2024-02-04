let currentDisplay = '0';

function updateDisplay() {
  document.getElementById('display').innerText = currentDisplay;
}

function number(num) {
  if (currentDisplay === '0') {
    currentDisplay = num.toString();
  } else {
    currentDisplay += num.toString();
  }
  updateDisplay();
}

function operator(operator) {
  currentDisplay += operator;
  updateDisplay();
}

function equal() {
  try {
    currentDisplay = eval(currentDisplay).toString();
  } catch (error) {
    currentDisplay = 'Error';
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = '0';
  updateDisplay();
}

function reset() {
  clearDisplay();
}
