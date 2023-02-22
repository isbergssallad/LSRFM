const cartString = localStorage.getItem("cart")

let cart = [] //cart = array av cart id
if (cartString) {
    cart = JSON.parse(cartString)
}

cart.forEach((productid, index) => {
    const product = window.products.find(p => p.id === productid)

    const cartItem = document.createElement("li")
    cartItem.textContent = product.name
    cartItem.className = "cart-item-name"

    const removeButton = document.createElement ("button")
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

    cartItem.appendChild(removeButton)

    document.getElementById("cart").appendChild(cartItem)
})

//cart just nu är en array av id
