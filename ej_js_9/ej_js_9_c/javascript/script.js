//Declaracion de variables
var contenedor = document.getElementById("contenedor")
var botones = ""

//Declaramos el codigo para la generacion de los botones
botones += ''
    + '<button type="button" onclick="cambioFondo(0)">Rojo</button>'
    + '<button type="button" onclick="cambioFondo(1)">Verde</button>'
    + '<button type="button" onclick="cambioFondo(2)">Azul</button>'
    + '<button type="button" onclick="cambioFondo(3)">Amarillo</button>'
    + '<button type="button" onclick="rotacion()">Mas</button>'

//Asignamos los botones al contenedor
contenedor.innerHTML = botones

//Declaramos los botones y la lista de estos
var color1 = 'red'
var color2 = 'green'
var color3 = 'blue'
var color4 = 'yellow'
var colores = [color1, color2, color3, color4]

//Creamos la funcion de cambio de color
function cambioFondo(color) {
    document.bgColor=colores[color]
}

//Creamos la funcion de rotacion de color
function rotacion() {
    var indice = colores.indexOf(document.bgColor)
    if (indice == -1) alert("Hay un error con los colores")
    else if (indice == colores.length - 1) document.bgColor=colores[0]
    else document.bgColor=colores[++indice]
}