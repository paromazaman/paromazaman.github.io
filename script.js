// This script can handle additional interactivity in the future if needed.//

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the 'enlarged' class when the image is clicked
        image.classList.toggle('enlarged');
    });
});
