const display = document.getElementById('display');
const buttons = document.getElementById('.btn');

let currentValue = '';
let previuosValue = '';
let operator = '';

function updateDisplay(value){
  display.value = value;
}

buttons.forEach( button =>{
  buttons.addEventListener('click', () => {
  const buttonValue = button.textContent;

  if( !isNaN(buttonValue) || buttonValue === '.'){
    currentValue += buttonValue
    updateDisplay(currentValue);
  }

  if(['+', '-', '*', '/'].includes(buttonValue)){
    previuosValue = currentValue;
    operator = buttonValue;
    currentValue = '';
  }

  if(buttonValue === '='){
    if(currentValue && previuosValue && operator){
      const result = eval(`${previuosValue} ${operator} ${currentValue}`);
      updateDisplay(result);
      currentValue = result;
      previuosValue = '';
      operator = '';
    }
  }

  if(buttonValue === 'C'){
    currentValue ='';
    previuosValue = '';
    operator = '';
  }
});
});
