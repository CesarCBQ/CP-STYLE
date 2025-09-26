const track = document.querySelector('.carrusel-track');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const images = document.querySelectorAll('.carrusel img');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth + 20; 
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});
nextBtn.addEventListener('click', () => {
  Cadenas = (Cadenas + 1) % images.length;
  updateCarousel();
});
prevBtn.addEventListener('click', () => {
  Cadenas = (Cadenas - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
