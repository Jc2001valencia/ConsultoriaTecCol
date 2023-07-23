

  // Obtener el formulario de comentarios
  const formulario = document.getElementById('comentario-formulario');

  // Escuchar el evento de envío del formulario
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const calificacion = document.getElementById('calificacion').value;

    // Crear una nueva tarjeta de comentario
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('card');
    nuevaTarjeta.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${mensaje}</p>
        <p class="card-text">${calificacion} estrellas</p>
      </div>
    `;

    // Agregar la nueva tarjeta al contenedor de comentarios
    const contenedorComentarios = document.getElementById('comentarios');
    contenedorComentarios.appendChild(nuevaTarjeta);

    // Limpiar los campos del formulario
    formulario.reset();
  });

  // Agregar función para formatear el precio en pesos colombianos
function formatPrice(price) {
  return price.toLocaleString("es-CO", { style: "currency", currency: "COP" });
}

// Actualizar los precios en la sección de consultorías
document.addEventListener("DOMContentLoaded", function () {
  const prices = document.querySelectorAll(".package-card p.price");
  prices.forEach((price) => {
    const originalPrice = parseInt(price.textContent.replace("$", ""));
    const formattedPrice = formatPrice(originalPrice);
    price.textContent = formattedPrice;
  });
});

$(document).ready(function() {
  $(".slider").slick({
    arrows: false, // Desactivar las flechas de navegación
    autoplay: true, // Habilitar la reproducción automática
    autoplaySpeed: 5000, // Intervalo de tiempo entre transiciones (5 segundos en este caso)
    fade: true, // Efecto de transición de fundido
    speed: 1000, // Duración de la transición (1 segundo en este caso)
  });
});




  