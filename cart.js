const cartString = localStorage.getItem("cart")

let cart = [] //cart = array av cart id
if (cartString) {
    cart = JSON.parse(cartString)
}

let total = 0  //deklarera en variabel

cart.forEach((productid, index) => {
    const product = window.products.find(p => p.id === productid)
    total = total + product.price //assign ett nytt värde

    const productImage = document.createElement("img")
    const cartItem = document.createElement("li")
    const productNameLabel = document.createElement("span")
    productImage.src = product.image
    productImage.width = 50
    productImage.height = 50
    productNameLabel.textContent = product.name
    productNameLabel.className = "cart-item-name"
    cartItem.className = "cart-item"

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



//cart just nu är en array av id
