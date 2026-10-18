document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 7: Input and a greeting =====");
    const enteredName = prompt("What is your name?");
    if (enteredName !== null && enteredName.trim() !== "") {
      alert(`Hello, ${enteredName.trim()}! Welcome to the JavaScript practice kitchen.`);
    } else {
      alert("Hello! Welcome to the JavaScript practice kitchen.");
    }
    
    const studentGreeting = "Atymtay Berdikhan" + " — MT-2503";
    console.log(studentGreeting);
    console.log(`Hello from ${"Atymtay Berdikhan"} in group ${"MT-2503"}!`);
  });
});
