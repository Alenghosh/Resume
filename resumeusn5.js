// script.js
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const personalInfoSection = document.querySelector(".personal-info");

  toggleButton.addEventListener("click", function() {
    personalInfoSection.classList.toggle("hidden");
  });
});

