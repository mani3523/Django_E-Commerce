document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Mobile menu toggle
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        menuIcon.classList.toggle("open");
    });

    // Slideshow functionality
    const slides = document.querySelectorAll(".swiper-slide");
    const paginationDotsContainer = document.querySelector(".swiper-pagination");

    let slideIndex = 0; // Starting slide index

    // Create pagination dots based on the number of slides
    if (slides.length > 1 && paginationDotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("swiper-pagination-bullet");
            dot.addEventListener("click", () => {
                slideIndex = index;
                showSlides();
            });
            paginationDotsContainer.appendChild(dot);
        });
    }

    // Function to show the slides
    function showSlides() {
        // Check if slides are available
        if (slides.length === 0) return;

        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        // Remove active class from all dots
        const dots = document.querySelectorAll(".swiper-pagination-bullet");
        dots.forEach((dot) => dot.classList.remove("swiper-pagination-bullet-active"));

        // Ensure slideIndex wraps around to the start when it reaches the end
        slideIndex = (slideIndex >= slides.length) ? 0 : slideIndex;

        // Check if current slide and dot are defined before accessing their properties
        if (slides[slideIndex]) {
            slides[slideIndex].style.display = "block";
        }
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add("swiper-pagination-bullet-active");
        }

        // Move to the next slide after a delay
        slideIndex++;
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    // Start the slideshow
    showSlides();
});
