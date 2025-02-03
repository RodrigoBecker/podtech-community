document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  const itemsPerView = window.innerWidth < 768 ? 1 : 2; // 1 item no mobile, 2 no desktop

  function moveSlide(step) {
    index = (index + step + totalItems) % totalItems;
    const offset = -(index * (100 / itemsPerView));
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Torna a função disponível globalmente
  window.moveSlide = moveSlide;
});

