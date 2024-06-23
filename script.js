
document.addEventListener('DOMContentLoaded', function() {
    var nextButton1 = document.getElementById('nextButton1');
    var nextButton2 = document.getElementById('nextButton2');
    var nextButton3 = document.getElementById('nextButton3');
    var nextButton4 = document.getElementById('nextButton4');
    var happyButton = document.getElementById('happyButton');
    var responseMessage = document.getElementById('responseMessage');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var page4 = document.getElementById('page4');
    var page5 = document.getElementById('page5');
    var backgroundMusic = document.getElementById('backgroundMusic');
    var imageGallery = document.getElementById('imageGallery');
    var galleryImages = imageGallery.getElementsByTagName('img');
    var currentIndex = 0;

    nextButton1.addEventListener('click', function() {
        page1.classList.remove('active');
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        page2.classList.add('active');
        backgroundMusic.play();
    });

    nextButton2.addEventListener('click', function() {
        page2.classList.remove('active');
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        page3.classList.add('active');
        animateImages();
    });

    nextButton3.addEventListener('click', function() {
        page3.classList.remove('active');
        page3.classList.add('hidden');
        page4.classList.remove('hidden');
        page4.classList.add('active');
    });

    nextButton4.addEventListener('click', function() {
        page4.classList.remove('active');
        page4.classList.add('hidden');
        page5.classList.remove('hidden');
        page5.classList.add('active');
    });

    happyButton.addEventListener('click', function() {
        happyButton.style.display = 'none';
        responseMessage.classList.remove('hidden');
        responseMessage.classList.add('animated', 'fadeIn');
    });

    function animateImages() {
        if (currentIndex < galleryImages.length) {
            galleryImages[currentIndex].classList.add('animated', 'fadeIn');
            currentIndex++;
            setTimeout(animateImages, 500); // Adjust the delay as needed
        }
    }

    // Initially show page 1
    page1.classList.add('active');
});
