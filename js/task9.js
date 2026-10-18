document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    console.clear();
    console.log("===== TASK 9: Strings =====");
    const fullName = "Atymtay Berdikhan";
    const firstPhrase = "Learning JavaScript";
    const secondPhrase = "one task at a time.";
    
    console.log("Full name:", fullName);
    console.log("Length:", fullName.length);
    console.log("Uppercase:", fullName.toUpperCase());
    console.log("Lowercase:", fullName.toLowerCase());
    console.log("First three characters:", fullName.slice(0, 3));
    console.log("Combined sentence:", firstPhrase + " " + secondPhrase);
  });
});
