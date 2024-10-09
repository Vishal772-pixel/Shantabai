document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('registrationForm').innerText = 'Error loading data.';
    }
}

function renderData(data) {
    const formDiv = document.getElementById('registrationForm');
    formDiv.innerHTML = ''; // Clear any existing content

    // Assuming data is an array of objects
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3> <!-- Adjust based on your data structure -->
            <p>${item.description}</p> <!-- Adjust based on your data structure -->
        `;
        formDiv.appendChild(itemDiv);
    });
}
