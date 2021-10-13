//Declaracion de variables
var contenedor = document.getElementById("contenedor")
var botones = ""

//Declaramos el codigo para la generacion de los botones
botones += ''
    + '<button type="button" onclick="document.bgColor=\'red\'">Rojo</button>'
    + '<button type="button" onclick="document.bgColor=\'green\'">Verde</button>'
    + '<button type="button" onclick="document.bgColor=\'blue\'">Azul</button>'
    + '<button type="button" onclick="document.bgColor=\'yellow\'">Amarillo</button>'

//Asignamos los botones al contenedor
contenedor.innerHTML = botones