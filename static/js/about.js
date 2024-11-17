// Parallax Scrolling Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
