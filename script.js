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

            // Scale image to fit within the viewport while maintaining aspect ratio
            const imageWidth = this.naturalWidth;
            const imageHeight = this.naturalHeight;

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const aspectRatio = imageWidth / imageHeight;

            if (imageWidth > screenWidth || imageHeight > screenHeight) {
                let scale = 1;

                // Scale down the image if it exceeds the screen's width or height
                if (screenWidth / imageWidth < screenHeight / imageHeight) {
                    scale = screenWidth / imageWidth;
                } else {
                    scale = screenHeight / imageHeight;
                }

                // Apply the scale dynamically
                this.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }

            // Close image on clicking it again
            this.addEventListener('click', () => {
                this.classList.remove('enlarged');
                document.body.classList.remove('image-open');
                this.style.transform = 'translate(-50%, -50%)'; // Reset transform when closed
            }, { once: true }); // Ensure this event listener runs only once
        }
    });
});

