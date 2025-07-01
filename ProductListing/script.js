const products = [
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.5 },
  { name: "Bluetooth Speaker", category: "electronics", price: 99, rating: 4.3 },
  { name: "Laptop", category: "electronics", price: 1099, rating: 4.8 },
  { name: "LED TV", category: "electronics", price: 499, rating: 4.4 },
  { name: "Jeans", category: "clothing", price: 39, rating: 4.2 },
  { name: "T-Shirt", category: "clothing", price: 15, rating: 4.1 },
  { name: "Leather Jacket", category: "clothing", price: 129, rating: 4.6 },
  { name: "Sneakers", category: "clothing", price: 89, rating: 4.5 },
  { name: "Office Chair", category: "furniture", price: 159, rating: 4.3 },
  { name: "Wooden Table", category: "furniture", price: 259, rating: 4.4 },
  { name: "Bookshelf", category: "furniture", price: 199, rating: 4.2 },
  { name: "Tennis Racket", category: "sports", price: 79, rating: 4.5 },
  { name: "Football", category: "sports", price: 29, rating: 4.1 },
  { name: "Yoga Mat", category: "sports", price: 25, rating: 4.3 },
  { name: "Running Shoes", category: "sports", price: 69, rating: 4.6 },
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
    `;
    productContainer.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filteredProducts = [...products];

  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  const sortValue = sortOption.value;
  if (sortValue === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating-high-low") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

displayProducts(products);
