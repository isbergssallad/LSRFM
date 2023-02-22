const container = document.getElementById("trending-products")

window.products.forEach(product => {
    const link = document.createElement("a")
    link.href = "product-page.html?product_id=" + product.id



    const image = document.createElement("img")
    image.src = product.image

    link.appendChild(image)

    container.appendChild(link)
});
