// Functionality for the e-commerce site

// Example: Show an alert when a "Buy Now" button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-item .btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            alert('Item added to cart!');
        });
    });
});

// Example: Toggle mobile menu (if you want to add a mobile nav later)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
