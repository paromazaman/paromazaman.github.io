// Handle gallery image enlargement

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        if (!this.classList.contains('enlarged')) {
            // Add enlarged class to the clicked image
            this.classList.add('enlarged');

            // Prevent scrolling while the image is open
            document.body.classList.add('image-open');

            // Close image on clicking it again
            this.addEventListener('click', () => {
                this.classList.remove('enlarged');
                document.body.classList.remove('image-open');
            }, { once: true }); // Ensure this event listener runs only once
        }
    });
});
