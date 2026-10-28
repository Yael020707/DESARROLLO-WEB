// Cargar DOM
document.addEventListener("DOMContentLoaded", () => {
  
  // Formulario contacto
  const formulario = document.querySelector(".formulario-contacto");

  if (formulario) {
    // Evento enviar
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      // Leer campos
      const nombre = document.getElementById("nombre").value;

      // Mostrar mensaje
      alert(`¡Gracias por tu mensaje, ${nombre}!`);
      
      // Limpiar datos
      formulario.reset();
    });
  }

});