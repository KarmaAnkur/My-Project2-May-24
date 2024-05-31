// script.js

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
