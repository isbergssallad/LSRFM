const cartString = localStorage.getItem("cart") //create a constant that gets data from "cart" in localstorage 

let cart = [] //let cart equal to an empty array
if (cartString) { //if cartString is truthy then
    cart = JSON.parse(cartString) //convert cartString to array, and cart equal to said cartString array
}

//cart will be equal to an array of id

let total = 0 

cart.forEach((productid, index) => {
    const product = window.products.find(p => p.id === productid) //create constant product equal to product id
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

    const productPrice = document.createElement("span") //create price element as span in cart
    productPrice.textContent = "$" + product.price //set its text content to $ + product price

    const imageNameSpacing = document.createElement("div") //bad name, create a div with image and product name inside to style it
    imageNameSpacing.className = "imageNameSpacing"
    imageNameSpacing.appendChild(productImage) 
    imageNameSpacing.appendChild(productNameLabel)

    const productItemInformation = document.createElement("div") //bad name, create a div with the previous div and price to style it
    productItemInformation.className = "cart-item-info"
    productItemInformation.appendChild(imageNameSpacing)
    productItemInformation.appendChild(productPrice)
    

    




    const removeButton = document.createElement("button") //create a button constant
    removeButton.onclick = () => { //remove button on click
        const newCart = [].concat( //remove an item from array
            cart.slice(0, index), 
            cart.slice(index + 1) 
            )
        localStorage.setItem("cart", JSON.stringify(newCart)) //set cart to newCart in localstorage
        location.reload() //reload html page to update

    }
    removeButton.textContent = "Remove" //remove button text
    removeButton.className = "cart-remove-button" //give remove button a class

    cartItem.appendChild(productItemInformation) //add the divs earlier (image, product name, price) to cartItem
    cartItem.appendChild(removeButton) //add remove button to cartItem


    document.getElementById("cart").appendChild(cartItem) 
})

document.getElementById("total").textContent = "Total: $" + total //price total



