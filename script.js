// This script can handle additional interactivity in the future if needed.//
// JavaScript for handling hover effects and image transition on hover
document.querySelectorAll('.header-image').forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0';
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});
