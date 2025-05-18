document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-form");
    const formWrapper = document.getElementById("form-wrapper");
  
    toggleButton.addEventListener("click", function () {
      if (formWrapper.style.display === "none") {
        formWrapper.style.display = "block";
      } else {
        formWrapper.style.display = "none";
      }
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "m" && event.shiftKey) {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });