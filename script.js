// Cart functionality
let cart = [];

// Add to cart function
function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);
    alert(${productName} has been added to your cart!);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>
                              <button onclick="removeFromCart(${index})">Remove</button>`;
        cartContainer.appendChild(cartItem);
    });
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Submit contact form
function submitContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
}