const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`; // Move the slider
}

// Auto-slide every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slideImages.length; // Loop back to the first slide
  showSlide(currentIndex);
}, 2000);
