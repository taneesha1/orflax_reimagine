var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slides[currentSlide].style.opacity = 1;
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);