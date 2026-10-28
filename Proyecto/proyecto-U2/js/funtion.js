// Esperar a que todo el contenido HTML esté cargado en el navegador
document.addEventListener("DOMContentLoaded", () => {
  
  /* =========================================================
     1. HIGHLIGHT / RESALTADO AUTOMÁTICO EN EL MENÚ NAVEGABLE
     ========================================================= */
  const paginaActual = window.location.pathname.split("/").pop();
  const enlacesNav = document.querySelectorAll(".navlista-enlaces a");

  enlacesNav.forEach((enlace) => {
    const hrefEnlace = enlace.getAttribute("href");
    if (hrefEnlace === paginaActual) {
      enlace.style.backgroundColor = "#0284c7";
      enlace.style.color = "#ffffff";
      enlace.style.fontWeight = "600";
    }
  });

  /* =========================================================
     2. BUSCADOR Y VERIFICADOR DE COBERTURA (cobertura.html)
     ========================================================= */
  const inputBuscar = document.getElementById("buscar-zona");
  const resultadoBox = document.getElementById("resultado-cobertura");

  // Lista simulada de zonas con cobertura
  const zonasCobertura = [
    "santa teresa", "citara", "el dorado", "la guadalupana", "urbi villa",
    "las misiones", "huehuetoca centro", "jorobas", "coyotepec", "teoloyucan",
    "tepotzotlan", "zumpango", "san miguel jagüeyes", "los pinos", "san antonio"
  ];

  if (inputBuscar && resultadoBox) {
    inputBuscar.addEventListener("input", (e) => {
      const busqueda = e.target.value.toLowerCase().trim();

      if (busqueda.length === 0) {
        resultadoBox.style.display = "none";
        return;
      }

      // Comprobar si coincide con alguna zona
      const coincide = zonasCobertura.some((zona) => zona.includes(busqueda));

      resultadoBox.style.display = "block";
      if (coincide) {
        resultadoBox.style.backgroundColor = "#dcfce7"; // Verde claro
        resultadoBox.style.borderColor = "#22c55e";
        resultadoBox.style.color = "#15803d";
        resultadoBox.innerHTML = `<strong>¡Excelente noticia!</strong> Contamos con cobertura disponible en o cerca de <em>"${busqueda}"</em>. Contáctanos para realizar tu prueba de señal.`;
      } else {
        resultadoBox.style.backgroundColor = "#fee2e2"; // Rojo claro
        resultadoBox.style.borderColor = "#ef4444";
        resultadoBox.style.color = "#b91c1c";
        resultadoBox.innerHTML = `No encontramos coincidencias automáticas para <em>"${busqueda}"</em>. ¡No te preocupes! Déjanos tu dirección en la sección de <a href="contacto.html" style="color:#b91c1c; font-weight:bold;">Contacto</a> y realizaremos un estudio de factibilidad sin costo.`;
      }
    });
  }

  /* =========================================================
     3. VALIDACIÓN DEL FORMULARIO DE CONTACTO (contacto.html)
     ========================================================= */
  const formularioContacto = document.querySelector(".formulario-contacto");

  if (formularioContacto) {
    formularioContacto.addEventListener("submit", (e) => {
      e.preventDefault(); // Evitar recarga inmediata de la página

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const telefono = document.getElementById("telefono").value.trim();

      if (nombre === "" || correo === "" || telefono === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      // Mensaje de éxito
      alert(`¡Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje y te responderemos al correo: ${correo}`);
      
      // Limpiar el formulario
      formularioContacto.reset();
    });
  }

});