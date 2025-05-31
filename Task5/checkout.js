document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const successMessage = document.getElementById("checkoutSuccess");
  successMessage.textContent = "Checkout completed successfully!";
  successMessage.style.display = "block";

  // Optionally reset the form
  this.reset();
});
