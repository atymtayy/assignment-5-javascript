document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 12: Functions =====");
    function greetUser(name) {
      console.log(`Hello, ${name}! Welcome back.`);
    }
    
    function calculateSum(a, b) {
      return a + b;
    }
    
    function calculateRectangleArea(width, height) {
      return width * height;
    }
    
    greetUser("Atymtay");
    greetUser("CookFromHome visitor");
    
    console.log("Sum (4, 6):", calculateSum(4, 6));
    console.log("Sum (12, 5):", calculateSum(12, 5));
    
    console.log("Rectangle area (3, 7):", calculateRectangleArea(3, 7));
    console.log("Rectangle area (5, 5):", calculateRectangleArea(5, 5));
  });
});
