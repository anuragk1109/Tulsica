document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    const message = document.getElementById('message');
    if (response.ok) {
        message.textContent = 'Data submitted successfully!';
        message.style.color = 'green';
    } else {
        message.textContent = `Error: ${result.message}`;
        message.style.color = 'red';
    }
});
