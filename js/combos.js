document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const track = carrusel.querySelector(".carrusel-track");
    const prevBtn = carrusel.querySelector(".carrusel-btn.prev");
    const nextBtn = carrusel.querySelector(".carrusel-btn.next");
    let index = 0;

    // Mover al siguiente elemento
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % track.children.length;  // Asegura que se regrese al primer elemento cuando llegue al final
      track.style.transform = `translateX(-${index * 100}%)`; // Desplazamiento de las imágenes
    });

    // Mover al elemento anterior
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + track.children.length) % track.children.length; // Asegura que se regrese al último elemento cuando llegue al principio
      track.style.transform = `translateX(-${index * 100}%)`; // Desplazamiento de las imágenes
    });
  });
});
