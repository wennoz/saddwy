function verificar() {
    if (usuario_txt.value != "Tati" || password_txt.value != "Tati123") {
        mensaje_error.innerHTML = "Usuario/Contraseña incorrectos."
        usuario_txt.classList.add("datos_incorrectos")
        password_txt.classList.add("datos_incorrectos")
    } else {
        usuario_txt.classList.remove("datos_incorrectos")
        password_txt.classList.remove("datos_incorrectos")
        window.location.href = "../navegacion/Principal.html"
    }
}