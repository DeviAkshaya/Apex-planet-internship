// Cart Functionality
let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  const cartList = document.getElementById("cart-list");
  if (cartList) {
    cartList.innerHTML = cartItems.map(item => `<div class="cart-item">${item}</div>`).join('');
  }
  alert(`${productName} added to cart!`);
}

// Form Submission
function handleFormSubmit(event, formId, messageId) {
  event.preventDefault();
  document.getElementById(messageId).style.display = "block";
}
