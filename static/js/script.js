// parallax.js
document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const x = (window.innerWidth - e.pageX * depth) / 100;
        const y = (window.innerHeight - e.pageY * depth) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// JavaScript to add parallax effect on hover
document.querySelectorAll('.parallax').forEach(container => {
    container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        container.style.transform = `rotateY(${x / 20}deg) rotateX(${y / 20}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotateY(0) rotateX(0)';
    });
});
