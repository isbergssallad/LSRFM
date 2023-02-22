const params = new URLSearchParams(window.location.search)
const productid = Number(params.get("product_id"))

const product = window.products.find(p => p.id === productid) //global

document.getElementById("product-name").textContent = product.name;
document.getElementById("product-description").textContent = product.description;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-image").src = product.image;

const cartButton = document.getElementById("buy-button")

cartButton.onclick = () => {
    const previousCartString = localStorage.getItem("cart")

    let previousCart = []
    if (previousCartString) {
        previousCart = JSON.parse(previousCartString)
    }

    localStorage.setItem("cart", JSON.stringify(previousCart.concat(productid)))

    cartButton.textContent = "Added"

}