const BASE_API_URL = 'http://localhost:3000/api/sweets'; 

function showMessage(elementId, message, isError = false) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<div class="message ${isError ? 'error' : 'success'}">${message}</div>`;
    setTimeout(() => element.innerHTML = '', 3000);
}

function displaySweets(sweets) {
    const container = document.getElementById('sweetsContainer');
    const display = document.getElementById('sweetsDisplay');

    if (!sweets || sweets.length === 0) {
        container.innerHTML = '<p>No sweets found.</p>';
        display.style.display = 'block';
        return;
    }

    container.innerHTML = sweets.map(sweet => `
                <div class="sweet-item">
                    <h4>${sweet.name}</h4>
                    <div class="sweet-details">
                        <span>Category: ${sweet.category}</span>
                        <span>Price: ${sweet.price}</span>
                        <span>Quantity: ${sweet.quantity}</span>
                    </div>
                </div>
            `).join('');

    display.style.display = 'block';
}

// Add Sweet
document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('addName').value,
                category: document.getElementById('addCategory').value,
                price: parseFloat(document.getElementById('addPrice').value),
                quantity: parseInt(document.getElementById('addQuantity').value)
            })
        });
        const data = await response.json();
        showMessage('addMessage', data.message || data.error, !response.ok);
        if (response.ok) e.target.reset();
    } catch (error) {
        showMessage('addMessage', 'Error: ' + error.message, true);
    }
});

// Delete Sweet
document.getElementById('deleteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/delete`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('deleteName').value
            })
        });
        const data = await response.json();
        showMessage('deleteMessage', data.message || data.error, !response.ok);
        if (response.ok) e.target.reset();
    } catch (error) {
        showMessage('deleteMessage', 'Error: ' + error.message, true);
    }
});

// Search by Name
document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('searchName').value
            })
        });
        const data = await response.json();
        if (response.ok) {
            displaySweets([data.sweet]);
        } else {
            showMessage('searchMessage', data.error, true);
        }
    } catch (error) {
        showMessage('searchMessage', 'Error: ' + error.message, true);
    }
});

// Search by Category
document.getElementById('categoryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/category`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: document.getElementById('searchCategory').value
            })
        });
        const data = await response.json();
        if (response.ok) {
            displaySweets(data.sweet);
        } else {
            showMessage('categoryMessage', data.error, true);
        }
    } catch (error) {
        showMessage('categoryMessage', 'Error: ' + error.message, true);
    }
});

// Search by Price Range
document.getElementById('priceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/price`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                minPrice: parseFloat(document.getElementById('minPrice').value),
                maxPrice: parseFloat(document.getElementById('maxPrice').value)
            })
        });
        const data = await response.json();
        if (response.ok) {
            displaySweets(data.sweet);
        } else {
            showMessage('priceMessage', data.error, true);
        }
    } catch (error) {
        showMessage('priceMessage', 'Error: ' + error.message, true);
    }
});

// Purchase Sweet
document.getElementById('purchaseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/purchase`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('purchaseName').value,
                quantity: parseInt(document.getElementById('purchaseQuantity').value)
            })
        });
        const data = await response.json();
        showMessage('purchaseMessage', data.message || data.error, !response.ok);
        if (response.ok) e.target.reset();
    } catch (error) {
        showMessage('purchaseMessage', 'Error: ' + error.message, true);
    }
});

// Restock Sweet
document.getElementById('restockForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_API_URL}/restock`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('restockName').value,
                quantity: parseInt(document.getElementById('restockQuantity').value)
            })
        });
        const data = await response.json();
        showMessage('restockMessage', data.message || data.error, !response.ok);
        if (response.ok) e.target.reset();
    } catch (error) {
        showMessage('restockMessage', 'Error: ' + error.message, true);
    }
});

// View All Sweets
async function viewAllSweets() {
    try {
        const response = await fetch(`${BASE_API_URL}/all`);
        const data = await response.json();
        if (response.ok) {
            displaySweets(data.allSweets);
        } else {
            showMessage('allSweetsMessage', data.error, true);
        }
    } catch (error) {
        showMessage('allSweetsMessage', 'Error: ' + error.message, true);
    }
}