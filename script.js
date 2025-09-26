document.querySelectorAll('.carrusel').forEach(carrusel => {
  const track = carrusel.querySelector('.carrusel-track');
  const prevBtn = carrusel.querySelector('.carrusel-btn.prev');
  const nextBtn = carrusel.querySelector('.carrusel-btn.next');
  const images = carrusel.querySelectorAll('img');

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

  window.addEventListener('resize', updateCarousel);
});
