const menu = document.querySelector("#menu")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")


abrir.addEventListener("click", () => {
  menu.classList.remove('d-none')
  menu.classList.remove("d-md-none")
})

cerrar.addEventListener("click",() =>{
    menu.classList.add('d-none')
    menu.classList.add("d-md-none")
})