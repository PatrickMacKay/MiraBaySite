document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slideshow-container .slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  showSlide(slideIndex);
});
