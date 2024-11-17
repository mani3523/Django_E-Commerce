document.getElementById('izml').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any field is empty
    if (!fullName || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return; // Stop further execution if fields are empty
    }

    try {
        const response = await fetch('/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // Required for Django CSRF protection
            },
            body: JSON.stringify({
                fullName,
                email,
                message
            })
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('izml').reset();
        } else {
            alert('There was an issue sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    }
});

// CSRF token helper function for Django
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
