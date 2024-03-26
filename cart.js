document.addEventListener("DOMContentLoaded", function () {
    // Retrieve cart items from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update the cart display
    function updateCartDisplay() {
        let cartItemsElement = document.getElementById("cart-items");
        let totalElement = document.getElementById("total");
        let total = 0;

        // Clear existing cart display
        cartItemsElement.innerHTML = "";

        // Iterate through cart items and display them
        cart.forEach(function (item, index) {
            let listItem = document.createElement("li");

            // Create image element and set its source to the imageUrl
            let img = document.createElement("img");
            img.src = item.imageUrl;
            img.alt = item.name;
            listItem.appendChild(img);


            // Display product name and price
            let productNameElement = document.createElement("span");
            productNameElement.textContent = item.name;
            listItem.appendChild(productNameElement);

            // Display product name and price
            let priceElement = document.createElement("span");
            priceElement.textContent = `$${item.price}`;
            listItem.appendChild(priceElement);


            listItem.textContent = `${item.name} - $${item.price}`;

            // Add buttons to control quantity
            let addButton = document.createElement("button");
            addButton.textContent = "+";  
            addButton.classList.add("add-button"); 
            addButton.onclick = function() {
                addToCart(item.name, item.price, item.imageUrl);
            };
            listItem.appendChild(addButton);

            let removeButton = document.createElement("button");
            removeButton.textContent = "-";
            removeButton.classList.add("remove-button"); 
            removeButton.onclick = function() {
                removeFromCart(index);
            };
            listItem.appendChild(removeButton);

            cartItemsElement.appendChild(listItem);
            total += item.price;
        });

        // Display total cost
        totalElement.textContent = total.toFixed(2);

        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Function to add an item to the cart
    function addToCart(productName, price, imageUrl) {
        cart.push({ name: productName, price: price, imageUrl: imageUrl });
        updateCartDisplay();
    }

    // Function to remove an item from the cart
    function removeFromCart(index) {
        
            cart.splice(index, 1);
        updateCartDisplay();
    }

    // Initial update of the cart display
    updateCartDisplay();
});