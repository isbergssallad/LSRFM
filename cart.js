const cartString = localStorage.getItem("cart") //create a constant that gets data from "cart" in localstorage 

let cart = [] //cart is equal to an array id
if (cartString) {
    cart = JSON.parse(cartString)
}

let total = 0

cart.forEach((productid, index) => {
    const product = window.products.find(p => p.id === productid)
    total = total + product.price //assign the new total value

    const productImage = document.createElement("img") //create constant product image as html img tag
    const cartItem = document.createElement("li") //create constant cartItem as html list tag
    const productNameLabel = document.createElement("span") //create constant product name as html span tag
    productImage.src = product.image //productImg src is equal to product image from array
    //height and width of product image in cart
    productImage.width = 50 
    productImage.height = 50
    productNameLabel.textContent = product.name //product name is equal to product name from product array
    productNameLabel.className = "cart-item-name" //give productNameLabel a class
    cartItem.className = "cart-item" //give cartItem a class

    const productPrice = document.createElement("span") 
    productPrice.textContent = "$" + product.price

    const imageNameSpacing = document.createElement("div")
    imageNameSpacing.className = "imageNameSpacing"
    imageNameSpacing.appendChild(productImage) 
    imageNameSpacing.appendChild(productNameLabel)

    const productItemInformation = document.createElement("div")
    productItemInformation.className = "cart-item-info"
    productItemInformation.appendChild(imageNameSpacing)
    productItemInformation.appendChild(productPrice)
    

    




    const removeButton = document.createElement("button")
    removeButton.onclick = () => {
        const newCart = [].concat(
            cart.slice(0, index),
            cart.slice(index + 1) 
            )
        localStorage.setItem("cart", JSON.stringify(newCart))
        location.reload()

    }
    removeButton.textContent = "Remove"
    removeButton.className = "cart-remove-button"

    cartItem.appendChild(productItemInformation)
    cartItem.appendChild(removeButton)


    document.getElementById("cart").appendChild(cartItem)
})

document.getElementById("total").textContent = "Total: $" + total 



