document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 6: Variables and data types =====");
    const studentName = "Atymtay Berdikhan";
    let studentAge = 18;
    const isStudent = true;
    let favouriteColour = "sage green";
    
    console.log("Full name:", studentName, "| type:", typeof studentName);
    console.log("Age:", studentAge, "| type:", typeof studentAge);
    console.log("Student status:", isStudent, "| type:", typeof isStudent);
    console.log("Favourite colour:", favouriteColour, "| type:", typeof favouriteColour);
    
    studentAge = 19;
    console.log("Updated age:", studentAge);
    
    console.log("Explanation: const is suitable for values that should not be reassigned. let is used for studentAge because its value changes.");
  });
});
