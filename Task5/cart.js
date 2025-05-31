let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card');
    const name = product.querySelector('h3').textContent;
    const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    cart.push({ name, price });

    alert(`${name} has been added to the cart.`);

    localStorage.setItem('cart', JSON.stringify(cart));
  });
});

window.addEventListener('load', () => {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalSpan = document.getElementById('cartTotal');
  if (!cartItemsDiv || !cartTotalSpan) return;

  let total = 0;
  cartData.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  cartTotalSpan.textContent = total.toFixed(2);
});
