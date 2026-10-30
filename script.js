const cart = [];

const buyButton = document.querySelector(".buy-button");
const cartToggle = document.querySelector("#cart-toggle");
const cartPanel = document.querySelector("#cart-panel");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const closeCart = document.querySelector("#close-cart");
const buyButtons = document.querySelectorAll(".buy-button");


buyButtons.forEach(function(button){
    button.addEventListener("click", function() {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);


        cart.push({
            name: productName,
            price: productPrice
        });

        updateCart();
    });
});

function updateCart() {
    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let subtotal = 0;



    cart.forEach(function(item){
        const product = document.createElement("p");
        
        product.textContent =
        item.name + " - $" + item.price.toFixed(2);

        cartItems.appendChild(product);

        subtotal += item.price;

    });

    cartTotal.textContent =  subtotal.toFixed(2);
}

cartToggle.addEventListener("click", function() {
    cartPanel.hidden = !cartPanel.hidden;
});

closeCart.addEventListener("click", function() {
    cartPanel.hidden = true;
});


