const product = {
    name: "Product Name",
    description: "Product Description",
    price: 9.99
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const priceElement = document.getElementById("price");
    priceElement.innerText = product.price.toFixed(2);
    
    const addToCartButton = document.getElementById("add-to-cart");
    addToCartButton.addEventListener("click", function() {
      // Add the product to the shopping cart
      // You can use localStorage or a server-side API to store the shopping cart
      alert("Product added to cart!");
    });
  });  