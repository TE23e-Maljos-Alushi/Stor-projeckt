let cart = [];


function addToCart(button) {
    let product = button.parentElement;
    let name = product.getAttribute("data-name");
    let price = parseInt(product.getAttribute("data-price"));


    cart.push({ name, price });
    updateCart();
    document.getElementById("cart").style.display = "block"; // Show the cart when adding an item
}


function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    cartList.innerHTML = ""; // Clear the cart before updating


    let total = 0;
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> - $${item.price}
                        <span class='remove-item' onclick='removeFromCart(${index})'>&times;</span>`;
        cartList.appendChild(li);
        total += item.price;
    });


    totalPrice.textContent = total;
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function clearCart() {
    cart = [];
    updateCart();
}


document.querySelector(".cart-toggle").addEventListener("click", () => {
    let cartDiv = document.getElementById("cart");
    cartDiv.style.display = cartDiv.style.display === "block" ? "none" : "block";
});
