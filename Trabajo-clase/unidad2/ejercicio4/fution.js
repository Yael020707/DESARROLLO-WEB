const btnModo = document.getElementById('btn-modo');
const imgReferencia = document.getElementById('imagen-referencia');
const ingredientes = document.querySelectorAll('.lista-ingredientes li');
const tituloPrincipal = document.querySelector('.titulo'); // Referencia al título <h1>

// 1. Cambiar imagen al pasar el mouse por los ingredientes
ingredientes.forEach((ingrediente) => {
  ingrediente.addEventListener('mouseenter', () => {
    const nuevaImagen = ingrediente.getAttribute('data-img');
    if (nuevaImagen) {
      imgReferencia.src = nuevaImagen;
    }
  });
});

// 2. Evento del botón: Cambia modo oscuro/claro Y cambia el texto del título
btnModo.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    btnModo.textContent = 'Modo Claro';
    tituloPrincipal.textContent = 'Agua de Limón'; // Cambia el texto del título
  } else {
    btnModo.textContent = 'Modo Oscuro';
    tituloPrincipal.textContent = 'Recetario';    // Regresa al título original
  }
});