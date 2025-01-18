// Handle gallery image enlargement

const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        if (!this.classList.contains('enlarged')) {
            // Add enlarged class to the clicked image
            this.classList.add('enlarged');

            // Prevent scrolling while the image is open
            document.body.classList.add('image-open');

            // Dynamically calculate the maximum size the image can be
            const imageWidth = this.naturalWidth;
            const imageHeight = this.naturalHeight;

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Calculate the scale factor based on the aspect ratio
            const aspectRatio = imageWidth / imageHeight;

            let maxWidth = screenWidth * 0.9; // 90% of screen width
            let maxHeight = screenHeight * 0.9; // 90% of screen height

            // Adjust max dimensions based on aspect ratio
            if (aspectRatio > 1) { // Landscape orientation
                maxHeight = maxWidth / aspectRatio;
            } else { // Portrait orientation
                maxWidth = maxHeight * aspectRatio;
            }

            // Apply the calculated max dimensions to the image
            this.style.maxWidth = `${maxWidth}px`;
            this.style.maxHeight = `${maxHeight}px`;

            // Close the enlarged image on clicking the image again
            this.addEventListener('click', () => {
                this.classList.remove('enlarged');
                document.body.classList.remove('image-open');
                this.style.maxWidth = ''; // Reset max width
                this.style.maxHeight = ''; // Reset max height
            }, { once: true }); // Ensure this event listener runs only once
        }
    });
});

