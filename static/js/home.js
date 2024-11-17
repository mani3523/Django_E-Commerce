// Initialize Swiper for the image slider
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        // Swiper options
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

// // Example: Display an alert when the "Add to Cart" button is clicked
// const addToCartButtons = document.querySelectorAll('.product-card a');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent the default anchor behavior
//         // alert('Item added to cart!');
//     });
// });
