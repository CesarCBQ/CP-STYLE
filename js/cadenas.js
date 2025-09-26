document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const track = carrusel.querySelector(".carrusel-track");
    const prevBtn = carrusel.querySelector(".carrusel-btn.prev");
    const nextBtn = carrusel.querySelector(".carrusel-btn.next");
    let index = 0;

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % track.children.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + track.children.length) % track.children.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    });
  });
});

