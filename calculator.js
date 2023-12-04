document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.calculator button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const value = this.textContent;

      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearDisplay();
      } else {
        appendToDisplay(value);
      }
    });
  });

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculate() {
    const expression = display.value;

    try {
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
});
