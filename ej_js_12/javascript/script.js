var contenido = document.getElementById("contenido")
var imagen = document.getElementById("imagen")
var parrafo = document.getElementById("parrafo")
var rutaImg = "img/"


//Creamos el intervalo cada 2 segundos
var rotacion = setInterval(cambioImagen, 2000)


//Creamos la funcion de cambio de imagen
function cambioImagen() {
    //Declaramos el array de imagenes y colores
    var imagenes = ["logo1.png", "logo2.png", "logo3.png", "logo4.png"]
    var colores = ["black", "red", "#AA00FF", "Orange"]

    //Hayamos la posicion de la imagen actual
    var posicion = imagenes.indexOf(document.getElementById("imagen").src.split('/').pop())

    //Comprobamos si la imagen es la ultima del array, si lo es, escogemos la primera y el primer color
    if (posicion + 1 == imagenes.length) {
        imagen.src = rutaImg + imagenes[0]
        parrafo.style.color=colores[0]
    } else {
        imagen.src = rutaImg + imagenes[posicion + 1]
        parrafo.style.color=colores[posicion + 1]
    }
}
