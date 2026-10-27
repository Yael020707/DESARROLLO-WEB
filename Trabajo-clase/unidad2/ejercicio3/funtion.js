document.addEventListener('DOMContentLoaded', () => {
  const btnChangeColors = document.getElementById('btnChangeColors');
  const title = document.querySelector('.title');
  const cajas = document.querySelectorAll('.main > div');

  function ejecutarCambioPizarron() {
    if (title) {
      title.textContent = "¡Título Cambiado!";
      title.style.opacity = "1"; // para que se vuelva a ver después de desaparecer
      title.style.color = "#ffcc00";
    }
    // Fondo rojo a TODOS los divs
    cajas.forEach(caja => {
      caja.classList.add('fondo-rojo'); // usé add, no toggle, para que no se quite si le picas 2 veces
    });
  }

  if (btnChangeColors) {
    btnChangeColors.addEventListener('click', ejecutarCambioPizarron);
  }
});