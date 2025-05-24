

const products = [
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.5, image: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Laptop", category: "electronics", price: 999, rating: 4.7, image: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Headphones", category: "electronics", price: 199, rating: 4.2, image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF1000,1000_QL80_.jpg" },
  { name: "The Alchemist", category: "books", price: 15, rating: 4.0, image: "https://m.media-amazon.com/images/I/91uwocAMtSL.jpg" },
  { name: "Atomic Habits", category: "books", price: 20, rating: 4.3, image: "https://m.media-amazon.com/images/I/71KilybDOoL.jpg" },
  { name: "T-Shirt", category: "fashion", price: 25, rating: 3.9, image: "https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY1000_.jpg" },
  { name: "Jeans", category: "fashion", price: 50, rating: 4.1, image: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY1000_.jpg" },
  { name: "Bluetooth Speaker", category: "electronics", price: 299, rating: 4.6, image: "https://th.bing.com/th/id/OIP.rNxkdzB6EsyKwx3tG_OZvAHaHa?cb=iwc2&rs=1&pid=ImgDetMain" },
  { name: "Travel Backpack", category: "fashion", price: 45, rating: 4.0, image: "https://i5.walmartimages.com/seo/Large-Travel-Backpack-Women-Men-Carry-On-Traveling-Airplane-Laptop-Shoe-Compartment-Flight-Approved-Personal-Item-Bag-Waterproof-Luggage-Pink_05d44376-cc85-4de9-8b50-6e45382cea8f.699e2f864e14de7b10f07d65c6a91342.jpeg" },
  { name: "Notebook", category: "books", price: 10, rating: 3.8, image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
  { name: "DSLR Camera", category: "electronics", price: 450, rating: 4.4, image: "https://www.bhphotovideo.com/images/images2000x2000/canon_9126b003_eos_a_rebel_t5_dslr_1030209.jpg" },
  { name: "Running Shoes", category: "fashion", price: 60, rating: 4.3, image: "https://imgix.bustle.com/uploads/image/2020/5/14/d5b1aec5-9595-4704-b340-145870d82cfa-best-running-shoes-for-beginners-with-flat-feet-asics-gel-kayano-26.jpg?w=400&h=234&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" },
  { name: "The Book Thief", category: "books", price: 18, rating: 4.2, image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" }
];

function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'projects') renderProducts();
}

function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';
  let filtered = [...products];

  const category = document.getElementById('categoryFilter').value;
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = document.getElementById('sortBy').value;
  if (sort === 'price') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<img src="${product.image}" alt="${product.name}"/><h3>${product.name}</h3><p>Category: ${product.category}</p><p>Price: $${product.price}</p><p>Rating: ${product.rating}</p>`;
    list.appendChild(div);
  });
}

function filterProducts() {
  renderProducts();
}

function sortProducts() {
  renderProducts();
}

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const education = document.getElementById('education').value;
  document.getElementById('successMsg').textContent =
    `Your details are submitted successfully:\n\nName: ${name}\nEmail: ${email}\nEducation: ${education}`;
}
