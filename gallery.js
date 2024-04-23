document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modalImage');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const closeButton = document.querySelector('.close');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentImageIndex = 0;


    function openModal(imageSrc) {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }


    function closeModal() {
        modal.style.display = 'none';
    }


    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }
        modalImage.src = galleryImages[currentImageIndex].src;
    }


    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        modalImage.src = galleryImages[currentImageIndex].src;
    }


    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target.classList.contains('close')) {
            closeModal();
        }
    });


    galleryImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            openModal(image.src);
            currentImageIndex = index;
        });
    });


    nextButton.addEventListener('click', nextImage);


    prevButton.addEventListener('click', prevImage);


    closeButton.addEventListener('click', closeModal);


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});