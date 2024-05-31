document.addEventListener('DOMContentLoaded', (event) => {
    loadProducts();
});

function loadProducts() {
    const products = [
        {
            image: 'product1.png',
            name: 'Product 1',
            description: 'Polo Collar Casual T-shirt',
            price: 1192,
            originalPrice: 1590,
            discount: 25,
            rating: 3.9,
            reviews: 67,
            availability: 'Only Few Left!'
        },
        {
            image: 'product2.png',
            name: 'Product 2',
            description: 'Round Neck Regular T-shirt',
            price: 899,
            originalPrice: 1199,
            discount: 25,
            rating: 4.2,
            reviews: 45,
            availability: 'Limited Stock'
        },
        // Add more products here
    ];

    const productContainer = document.querySelector('#products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="product-details">
                <p>${product.description}</p>
                <div class="price-section">
                    <span class="price">Rs. ${product.price}</span>
                    <span class="discount">Rs. ${product.originalPrice} (${product.discount}% OFF)</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <p class="availability">${product.availability}</p>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

function fetchLambdaInfo() {
    fetch('https://your-api-gateway-url/lambdas')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

function fetchS3Info() {
    fetch('https://your-api-gateway-url/s3buckets')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = JSON.stringify(data, null, 2);
}

function openChat() {
    alert("Opening chat support...");
}

function logIn() {
    alert("Log In functionality coming soon!");
}

function signUp() {
    alert("Sign Up functionality coming soon!");
}
