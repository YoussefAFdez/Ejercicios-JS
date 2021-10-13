//Declaramos la variable ventana y sus caracteristicas
var ventana = "nueva"
var ancho = 200
var alto = 200
var maxAlto = window.screen.availHeight
var maxAncho = window.screen.availWidth
var posIzq = (maxAncho - ancho) / 2
var posTop = (maxAlto - alto) / 2
var posicion = "left=" + posIzq + ", top=" + posTop
var caracteristicas = "width=" + ancho + "px, height=" + alto + "px, " + posicion

//Creamos la funcion de creacion de ventana y le damos sus caracteristicas adicionales
function crearVentana() {

    //Comprobamos si la ventana esta o no creada
    //Si no esta creada la creamos en el centro y si lo esta la desplazamos
    if (ventana == "nueva") {
        ventana = window.open("", "Ventana", caracteristicas)
        ventana.document.bgColor="orange"
        ventana.document.body.innerHTML="<p>Hola</p>"
    } else {
        ventana.focus()
        ventana.moveTo(posIzq, posTop)
    }
}

//Creamos la funcion que movera la ventana
function moverVentana(position) {
    switch(position) {
        case 0: //Superrior-Izquierda
            ventana.focus()
            ventana.moveTo(0,0)
            break
        case 1: //Superior-Derecha
            ventana.focus()
            ventana.moveTo(maxAncho, 0)
            break
        case 2: //Inferior-Derecha
            ventana.focus()
            ventana.moveTo(maxAncho, maxAlto)
            break
        case 3: //Inferior-Izquierda
            ventana.focus()
            ventana.moveTo(0, maxAlto)
            break
        default:
    }
}