// script.js
document.getElementById('check-btn').addEventListener('click', async () => {
    const text = document.getElementById('text-input').value;

    try {
        const response = await fetch('http://localhost:5000/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        const result = await response.json();
        const errorsDiv = document.getElementById('errors');
        errorsDiv.innerHTML = '';

        if (result.errors.length > 0) {
            const ul = document.createElement('ul');
            result.errors.forEach(error => {
                const li = document.createElement('li');
                li.textContent = error;
                ul.appendChild(li);
            });
            errorsDiv.appendChild(ul);
        } else {
            errorsDiv.innerHTML = '<p>No errors found!</p>';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
