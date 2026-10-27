document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const contactForm = document.getElementById('contactForm');

  // 1. Abrir/Cerrar Menú Móvil
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 2. Cerrar menú al hacer clic en una opción
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // 3. Envío del Formulario
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por contactar a Chevrolet! Nos comunicaremos contigo pronto.');
      contactForm.reset();
    });
  }
});