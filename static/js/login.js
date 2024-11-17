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
