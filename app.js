// create a container constant
const container = document.getElementById("trending-products"); //id is trending products div in index.html

// shuffle products in the product list array
const shuffledProducts = window.products.sort(() => Math.random() - 0.5);

// show random 4 shuffled products
shuffledProducts.slice(0, 4).forEach(product => { //slice/take out the first 4 products in the array
  const link = document.createElement("a"); //create a link constant as an html a tag
  link.href = "product-page.html?product_id=" + product.id; //set the link constant as product page html + product id

  const image = document.createElement("img"); //create image constant as an html img
  image.src = product.image; //image constant src is equal to product image from product list/array

  link.appendChild(image); //add the image to the link

  container.appendChild(link); //add the link (now image) to container
});
