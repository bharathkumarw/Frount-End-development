// Prompt the user to enter two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Check if the input is valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
    // Calculate the sum and multiplication
    const sum = num1 + num2;
    const multiply = num1 * num2;

    // Display the results in the console
    console.log(`Sum: ${sum}`);
    console.log(`Multiplication: ${multiply}`);
} else {
    console.log("Please enter valid numbers.");
}
