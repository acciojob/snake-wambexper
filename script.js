// script.js

function calculateMinCost() {
  // Get the input value
  const inputElement = document.getElementById('rope-lengths');
  const inputValues = inputElement.value.trim();

  // Parse the input values into an array
  const ropeLengths = inputValues.split(',').map(length => parseInt(length.trim(), 10));

  // Check if all values are valid numbers
  if (ropeLengths.some(isNaN)) {
    document.getElementById('result').innerText = 'Invalid input. Please enter valid numbers separated by commas.';
    return;
  }

  // Calculate the minimum cost (You need to implement this part based on your requirements)
  const minCost = calculateMinimumCost(ropeLengths);

  // Display the result
  document.getElementById('result').innerText = `Minimum cost: ${minCost}`;
}

// Example function for calculating minimum cost (replace this with your actual implementation)
function calculateMinimumCost(ropeLengths) {
  // Replace this with your actual logic to calculate the minimum cost
  // This is just a placeholder example
  return ropeLengths.reduce((sum, length) => sum + length, 0);
}
