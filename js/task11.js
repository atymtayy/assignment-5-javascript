document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 11: A calculation from the lecture =====");
    function convertDogAge(dogAge) {
      const humanAge = (dogAge - 2) * 4 + 21;
      console.log(`A dog age of ${dogAge} gives a calculated human age of ${humanAge}.`);
    }
    
    convertDogAge(2);
    convertDogAge(5);
    console.log("This is the arithmetic formula provided in the assignment, not veterinary advice.");
  });
});
