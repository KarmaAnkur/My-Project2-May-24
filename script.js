document.addEventListener('DOMContentLoaded', (event) => {
    loadProducts();
});

function loadProducts() {
    const products = [
        {
            image: 'product1.png',
            name: 'Product 1',
            price: '$10.00'
        },
        {
            image: 'product2.png',
            name: 'Product 2',
            price: '$20.00'
        },
        // Add more products here
    ];

    const productContainer = document.querySelector('.products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
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
