document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const successMessage = document.getElementById("contactSuccess");
  successMessage.textContent = "Message sent successfully!";
  successMessage.style.display = "block";

  // Optionally reset the form
  this.reset();
});
