// componentes.js (Único archivo JavaScript)
document.addEventListener('DOMContentLoaded', () => {
    const miBoton = document.getElementById('miBoton');
    const botonSegundo = document.getElementById('botonSegundo');

    miBoton.addEventListener('click', () => {
        // Cambiar el color del botón en el segundo componente
        const customEvent = new CustomEvent('cambiar-color', {
            detail: { color: 'orange' }
        });
        document.dispatchEvent(customEvent);
    });

    document.addEventListener('cambiar-color', (event) => {
        // Manejar el evento para cambiar el color del botón en el segundo componente
        botonSegundo.style.backgroundColor = event.detail.color;
    });
});
