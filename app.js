let carts = document.querySelectorAll(".add-cart")


let products = [
    {
        name: ""
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        console.log("added to cart");
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);
    localStorage.setItem("cartNumbers", 1);
}