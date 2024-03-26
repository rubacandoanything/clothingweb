const categoryContent = document.getElementById('categoryContent');

const categoryImages = {
    'New': ['img/nav1.jpg', 'img/f1.jpg', 'img/f10.jpg'],
    'Clothing': ['img/floral1.jpg', 'img/floral2.jpg', 'img/f11.jpg'],
    'Tops': ['img/top1.jpg', 'img/top2.jpg', 'img/top3.jpg'],
    'Dresses': ['img/dress1.jpg', 'img/dress2.jpg', 'img/dress3.jpg'],
    'Tunics': ['img/tunic1.jpg', 'img/tunic2.jpg', 'img/tunic3.jpg'],
    'Shoes and accessories': ['img/sandel.jpg', 'img/jewel2.jpg', 'img/access1.jpg'],
    'Sale': ['img/sale1.jpg', 'img/sale1.jpg', 'img/sale1.jpg']
};

function showCategoryContent(category) {
    // Remove existing content
    removeAllChildren(categoryContent);

    // Create content based on the selected category
    const heading = document.createElement('h2');
    heading.textContent = category;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Create and append images to image container
    categoryImages[category].forEach(imageUrl => {
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = category + ' Image';
        image.classList.add('category-image');

          // Set width and height properties for the images
        image.style.width = '200px'; // Set desired width
        image.style.height = '300px'; // Maintain aspect ratio  


        imageContainer.appendChild(image);
    });

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Explore our ' + category.toLowerCase() + ' collection.';
    paragraph.classList.add('additional-text');

    // Add more text
    paragraph.textContent += 'We have a wide range of products to choose from,oribus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?olor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates volupta ';
    paragraph.textContent += 'Shop now and enjoy free shipping on orders over $50.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?  ';
    paragraph.textContent += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'

    // Adjust the height of the categoryContent container
    categoryContent.style.height = ''; // Set height to auto to fit content
    categoryContent.style.minHeight = ''; // Set a minimum height

    // Append elements to the categoryContent
    categoryContent.appendChild(heading);
    categoryContent.appendChild(imageContainer);
    categoryContent.appendChild(paragraph);
}

   function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Event listeners for hover effect
document.querySelectorAll('nav a').forEach(link => {
    const category = link.textContent.trim();
    link.addEventListener('mouseover', function () {
        showCategoryContent(category);
    });

     // Add mouseleave event listener
     link.addEventListener('mouseleave', function () {
        removeAllChildren(categoryContent); 
    });
});

function addToCart(productName, price) {
   
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push({ name: productName, price: price });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page (replace 'cart.html' with your actual cart page)
    window.location.href = 'cart.html';
}
