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

buttons.forEach(button => {
  button.addEventListener('click', () => {
      const buttonValue = button.textContent;

      if (!isNaN(buttonValue) || buttonValue === '.') {
          currentValue += buttonValue;
          updateDisplay(currentValue);
      } else if (['+', '-', '*', '/'].includes(buttonValue)) {
          previousValue = currentValue;
          operator = buttonValue;
          currentValue = ''; 
      } else if (buttonValue === '=') {
          const result = calculate();
          updateDisplay(result);
          currentValue = result;
          previousValue = '';
          operator = '';
      } else if (buttonValue === 'C') {
          currentValue = '';
          previousValue = '';
          operator = '';
          updateDisplay('');
      }
  });
})