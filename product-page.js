const params = new URLSearchParams(window.location.search) //use url search query to get a product id
const productid = Number(params.get("product_id")) //get a value from product id

const product = window.products.find(p => p.id === productid) //create a product constant that finds products in the product list array by using the id from url search query

//ids are from product-page.html
document.getElementById("product-category").textContent = product.category; //set content to html code with this id tag
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-description").textContent = product.description;
document.getElementById("product-price").textContent = "$" + product.price;
document.getElementById("product-image").src = product.image;

const cartButton = document.getElementById("buy-button") //create cart button constant with buy-button id from html

cartButton.onclick = () => { //when cart button is clicked
    const previousCartString = localStorage.getItem("cart")

    let previousCart = [] //previous cart = an array
    //cart here will just be an array of ids
    if (previousCartString) { //if truthy
        previousCart = JSON.parse(previousCartString) //convert previousCartString to array
    }

    localStorage.setItem("cart", JSON.stringify(previousCart.concat(productid))) //store ids in localstorage as strings in an array

    cartButton.textContent = "Added!" //change button text to added

}