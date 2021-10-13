//Declaracion de variables
var num = window.prompt("Introduce el numero de la tabla: ")
var color = window.prompt("Introduce el color del texto (en ingles): ")
var tamanio = window.prompt("Introduce el tamaño de tabla que deseas") + 'em'
var tabla = ""
var contenedor = document.getElementById("contenedorTabla")

//Modificamos el estilo del contenedor
contenedor.style.color=color;
contenedor.style.fontSize=tamanio;

//Agregamos el elemento tabla y la cabecera
tabla += '<table><tr><td id="cabecera" colspan="5">Tabla de multiplicar del '
+ 'numero ' + num + '</td></tr>'

//Generamos la tabla dinamica
for (let i = 1; i <= 10; i++) {
    tabla += 
    '<tr>'
    +   '<td>' + num + '</td>'
    +   '<td>X</td>'
    +   '<td>' + i + '</td>'
    +   '<td>=</td>'
    +   '<td>' + (num * i) + '</td>'
    + '</tr>'
}

//Cerramos la tabla
tabla += '</table>'

//Escribimos en el documento
contenedor.innerHTML = tabla

