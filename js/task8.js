document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 8: Sum and arithmetic =====");
    const firstInput = prompt("Enter the first number (try 12):");
    const secondInput = prompt("Enter the second number (try 5):");
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);
    
    if (firstInput === null || secondInput === null ||
        firstInput.trim() === "" || secondInput.trim() === "" ||
        !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
      alert("Please run the task again and enter two valid numbers.");
    } else if (secondNumber === 0) {
      alert("The second number must not be zero for division and remainder.");
    } else {
      console.log("First number:", firstNumber);
      console.log("Second number:", secondNumber);
      console.log("Sum:", firstNumber + secondNumber);
      console.log("Difference:", firstNumber - secondNumber);
      console.log("Product:", firstNumber * secondNumber);
      console.log("Quotient:", firstNumber / secondNumber);
      console.log("Remainder:", firstNumber % secondNumber);
      console.log('"12" + "5" =', "12" + "5");
      console.log('Number("12") + Number("5") =', Number("12") + Number("5"));
    }
  });
});
