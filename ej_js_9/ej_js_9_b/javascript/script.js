//Declaracion de variables
var contenedor = document.getElementById("contenedor")
var botones = ""

//Declaramos el codigo para la generacion de los botones
botones += ''
    + '<button type="button" onclick="cambioFondo(0)">Rojo</button>'
    + '<button type="button" onclick="cambioFondo(1)">Verde</button>'
    + '<button type="button" onclick="cambioFondo(2)">Azul</button>'
    + '<button type="button" onclick="cambioFondo(3)">Amarillo</button>'

//Asignamos los botones al contenedor
contenedor.innerHTML = botones

//Creamos la funcion de cambio de color
function cambioFondo(color) {
    var color1 = 'red'
    var color2 = 'green'
    var color3 = 'blue'
    var color4 = 'yellow'
    var colores = [color1, color2, color3, color4]
    document.bgColor=colores[color]
}
