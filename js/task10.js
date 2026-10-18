document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 10: Increment and assignment operators =====");
    let counter = 10;
    console.log("Start:", counter);
    
    counter++;
    console.log("After ++:", counter);
    
    counter--;
    console.log("After --:", counter);
    
    counter += 5;
    console.log("After += 5:", counter);
    
    counter -= 3;
    console.log("After -= 3:", counter);
    
    counter *= 2;
    console.log("After *= 2:", counter);
    
    counter /= 4;
    console.log("After /= 4:", counter);
  });
});
