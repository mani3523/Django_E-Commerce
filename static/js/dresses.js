document.addEventListener("DOMContentLoaded", function() {
    // Parallax effect on scroll
    const parallaxSection = document.querySelector(".parallax-section");
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        parallaxSection.style.backgroundPositionY = offset * 0.5 + "px";
    });

    // Add 3D rotation on mouse movement over cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left - rect.width / 2;
            let y = e.clientY - rect.top - rect.height / 2;

            card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${y * -0.05}deg) scale(1.05)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0) rotateX(0) scale(1)";
        });
    });
    
    // Add tag-based filtering
    const tags = document.querySelectorAll(".badge");
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            filterProducts(tag.innerText);
        });
    });
});

function filterProducts(tag) {
    const products = document.querySelectorAll(".card");
    products.forEach(product => {
        const productTag = product.parentElement.getAttribute("data-tag");
        
        // Show or hide products based on tag
        if (productTag === tag || tag === "All") {
            product.parentElement.style.display = "block";
        } else {
            product.parentElement.style.display = "none";
        }
    });
}
