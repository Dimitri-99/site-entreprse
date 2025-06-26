// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuBtn.addEventListener('click', function () {
    if (navMenu.style.display === 'none') {
      navMenu.style.display = 'block';
    } else {
      navMenu.style.display = 'none';
    }
  });
});
// Carrousel simple
const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
let index = 0;
setInterval(() => {
  const carousel = document.getElementById('carousel');
  if (carousel) {
    index = (index + 1) % images.length;
    carousel.src = images[index];
  }
}, 3000);
// Scroll effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
    }
  });
});

document.querySelectorAll('.scroll-effect').forEach(el => observer.observe(el));