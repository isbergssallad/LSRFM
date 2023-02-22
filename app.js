// Store the product data in an array of objects
const products = [
    {
        id: 0,
        name: "Polaroid One Step 2",
        price: "$120.00",
        description: "The One-step 2 is an analog instant camera for the modern era, blending classic design with contemporary style. It's inspired by Polaroid's original One-step, but updated to create a simple, easy-to-use instant camera that works straight out of the box. It's got a high quality lens and a powerful flash to give you great photos every time, and its long-lasting rechargeable battery means you'll always be ready to shoot, whether you're on a brief excursion or a journey round the world.",
        image: "./product images/polaroid one step 2.png",
    },
    {
        id: 1,
        name: "Canon QL17 G-III",
        price: "$295.00",
        description: "35mm rangefinder camera released by Canon in 1972 featuring shutter-priority auto exposure and full manual, although the meter is inactive in manual mode. Also features Canon's quick-loading (QL) system. Metal body available in silver & black.",
        image: "./product images/canon ql17 giii.png",
    }
];

const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

products.forEach(product => {
    const productElement = document.getElementById(id);
    productElement.addEventListener("click", () => {
      // Update the product display elements with the data of the selected product
      document.getElementById("product-title").textContent = product.title;
      document.getElementById("product-description").textContent = product.description;
      document.getElementById("product-price").textContent = product.price;
      document.getElementById("product-image").src = product.image;
    });
  });


