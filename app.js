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



function changeImage(element) {

    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
    

}