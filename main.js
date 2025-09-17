document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
});

let currentSlide = 0;

// Mueve el carrusel en la dirección especificada
function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-inner img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Función para avanzar automáticamente cada 2 segundos
function autoMoveCarousel() {
    setInterval(() => {
        moveCarousel(1); // Avanza una imagen cada 2 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
}

// Inicia el movimiento automático al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    autoMoveCarousel(); // Activa el carrusel automático
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

