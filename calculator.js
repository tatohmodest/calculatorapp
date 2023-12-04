// Function to append the clicked button value to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

// Function to calculate the expression entered in the display
function calculate() {
  const display = document.getElementById('display');
  const expression = display.value;

  // Using the eval() function to evaluate the expression
  // Note: The eval() function is used here for simplicity, but it's generally not recommended for security reasons in production code.
  try {
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
