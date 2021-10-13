//Declaracion de variables
var num = window.prompt("Introduce el numero de la tabla: ")
var tabla = ""
var contenedor = document.getElementById("contenedorTabla")

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