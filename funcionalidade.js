const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


let currentValue = '';
let previousValue = ''; 
let operator = '';


function updateDisplay(value) {
    display.value = value;
}


function calculate() {
  if (previousValue && currentValue && operator) {
      switch (operator) {
          case '+':
              return parseFloat(previousValue) + parseFloat(currentValue);
          case '-':
              return parseFloat(previousValue) - parseFloat(currentValue);
          case '*':
              return parseFloat(previousValue) * parseFloat(currentValue);
          case '/':
              return parseFloat(previousValue) / parseFloat(currentValue);
          default:
              return '';
      }
  }
  return '';
}
