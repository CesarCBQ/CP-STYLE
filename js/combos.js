const track = document.querySelector('.carrusel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carrusel-btn.prev');
const nextButton = document.querySelector('.carrusel-btn.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop al inicio
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop al final
  }
  updateCarousel();
});

// Para cargar bien la posición al iniciar
window.addEventListener('resize', updateCarousel);
updateCarousel();
