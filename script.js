function enviarWhatsApp(element) {
    // Obtenemos la información del producto al que pertenece el botón
    var producto = element.closest('.producto');
    var nombreProducto = producto.querySelector('.nombre-producto').innerText;
    var descripcionProducto = producto.querySelector('.descripcion-producto').innerText;
    var precioProducto = producto.querySelector('.precio-producto').innerText;

    // Creamos el mensaje que será enviado por WhatsApp
    var mensaje = `Hola, estoy interesado en el siguiente producto:\n\n` +
                  `*Producto:* ${nombreProducto}\n` +
                  `*Descripción:* ${descripcionProducto}\n` +
                  `*Precio:* ${precioProducto}\n\n` +
                  `¿Está disponible?`;

    // Codificamos el mensaje para que funcione en la URL de WhatsApp
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp al que se enviará el mensaje (con código de país)
    var telefono = "573123700678";  // Reemplaza con el número de WhatsApp de la tienda

    // Enlace de WhatsApp con el mensaje prellenado
    var url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    // Redirigimos al usuario a WhatsApp con el enlace generado
    window.open(url, '_blank');
}
function buscarProducto() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const productos = document.getElementsByClassName('producto');

    Array.from(productos).forEach(function (producto) {
        const nombreProducto = producto.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (nombreProducto.includes(input)) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    });
}
