const cart = [];

const buyButton = document.querySelector(".buy-button");
const cartToggle = document.querySelector("#cart-toggle");
const cartPanel = document.querySelector("#cart-panel");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const closeCart = document.querySelector("#close-cart");
const buyButtons = document.querySelectorAll(".buy-button");
const checkoutButton = document.querySelector("#checkout-button");
const checkoutPanel = document.querySelector("#checkout-panel");
const checkoutItems = document.querySelector("#checkout-items");
const checkoutSubtotal = document.querySelector("#checkout-subtotal");
const checkoutTotal = document.querySelector("#checkout-total");

const productSelection = document.querySelector(".products");
const paymentButton = document.querySelector("#payment-button");
const paymentStatus = document.querySelector("#payment-status");
const continueShopping = document.querySelector("#continue-shopping");


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

checkoutButton.addEventListener("click", function() {
    checkoutItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(function(item) {
        const product = document.createElement("p");

        product.textContent =
        item.name +" - $" + item.price.toFixed(2);

        checkoutItems.appendChild(product);

        subtotal += item.price;
    });

    const tax = 1.00;
    const total = subtotal +tax;

    checkoutSubtotal.textContent = subtotal.toFixed(2);
    checkoutTotal.textContent = total.toFixed(2);

    cartPanel.hidden = true;
    productSelection.hidden =  true;
    checkoutPanel.hidden = false;
});

paymentButton.addEventListener("click", function() {
    paymentButton.textContent = "Processing...";
    paymentButton.disabled = true;

    paymentStatus.textContent = "Please wait while we process your order!"

    setTimeout(function() {
        paymentButton.textContent = "Purchase Complete!";
        paymentStatus.textContent = "Payment Successful! Thank you for shopping!";
        continueShopping.hidden = false;
    }, 3000);

});

continueShopping.addEventListener("click", function(){
    cart.length = 0;
    updateCart();

    checkoutPanel.hidden = true;
    productSelection.hidden = false;

    paymentButton.disabled = false;
    paymentButton.textContent = "Make Payment";

    paymentStatus.textContent = "";
    continueShopping.hidden = true;
});