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

function girar(){
    var card=document.getElementById('card')
    var card2=document.getElementById('card2')

    card.classList.add('d-none')
    card2.classList.remove('d-none')
}
function volver(){
    var card=document.getElementById('card')
    var card2=document.getElementById('card2')

    card2.classList.add('d-none')
    card.classList.remove('d-none')
}