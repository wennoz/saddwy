let botonActual = null;

function Cambiar_Color(button) {
    // Restablecer el color del botón anterior (si hay uno)
    if (botonActual !== null) {
        botonActual.classList.remove("clicked");
    }
    // Establecer el color del botón actual
    button.classList.add("clicked");
    // Actualizar el botón actual
    botonActual = button;
}