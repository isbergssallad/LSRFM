 
const container = document.getElementById("trending-products");

// shuffle products som finns i product array
const shuffledProducts = window.products.sort(() => Math.random() - 0.5);

// visa de 4 "shuffled produkter"
shuffledProducts.slice(0, 4).forEach(product => {
  const link = document.createElement("a");
  link.href = "product-page.html?product_id=" + product.id;

  const image = document.createElement("img");
  image.src = product.image;

  link.appendChild(image);

  container.appendChild(link);
});
