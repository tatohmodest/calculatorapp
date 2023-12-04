document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');

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
  document.getElementById('btn-0').addEventListener('click', function(){
    appendToDisplay('0')
})

  document.getElementById('btn-1').addEventListener('click', function() {
    appendToDisplay('1');
  });
  document.getElementById('btn-2').addEventListener('click', function() {
    appendToDisplay('2');
  });
  document.getElementById('btn-3').addEventListener('click', function() {
    appendToDisplay('3');
  });
  document.getElementById('btn-4').addEventListener('click', function() {
    appendToDisplay('4');
  });
  document.getElementById('btn-5').addEventListener('click', function() {
    appendToDisplay('5');
  });
  document.getElementById('btn-6').addEventListener('click', function() {
    appendToDisplay('6');
  });
  document.getElementById('btn-7').addEventListener('click', function() {
    appendToDisplay('7');
  });
  document.getElementById('btn-8').addEventListener('click', function() {
    appendToDisplay('8');
  });
  document.getElementById('btn-9').addEventListener('click', function() {
    appendToDisplay('9');
  });




  document.getElementById('btn-add').addEventListener('click', function() {
    appendToDisplay('+');
  });

  document.getElementById('btn-subtract').addEventListener('click', function() {
    appendToDisplay('-');
  });

  document.getElementById('btn-multiply').addEventListener('click', function() {
    appendToDisplay('*');
  });

  document.getElementById('btn-divide').addEventListener('click', function() {
    appendToDisplay('/');
  });

  // Add event listeners for other operator buttons in a similar way

  // Event listener for equal button
  document.getElementById('btn-equal').addEventListener('click', function() {
    calculate();
  });

  // Event listener for clear button
  document.getElementById('btn-clear').addEventListener('click', function() {
    clearDisplay();
  });
});