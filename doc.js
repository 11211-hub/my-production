// ================================
// Header Toggle (Mobile Navigation)
// ================================
const headerToggle = document.querySelector(".header-toggle");
const header = document.querySelector(".header");

if (headerToggle) {
  headerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
  });
}

// ================================
// AOS Initialization (Animate on Scroll)
// ================================
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false
});

// ================================
// GLightbox (for future if you add images/videos)
// ================================
const lightbox = GLightbox({
  selector: ".glightbox"
});

// ================================
// Swiper (for sliders if needed)
// ================================
const swiper = new Swiper(".swiper-container", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


    window.addEventListener("load", function () {
      let preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    });
  





    





















