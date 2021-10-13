var contenedor = document.getElementById("contenedor")

var numero = 8

contenedor.innerHTML+='<table id="tabla">'
var tabla = document.getElementById("tabla") //Se crea el elemento tabla
tabla.innerHTML+='<tr><td id="cabeceraTabla" colspan="5">Tabla de multiplicar del numero ' + numero + '</td></tr>'

for(let i = 1; i <= 10; i++) {
    tabla.innerHTML+=
    '<tr>'
        + '<td>' + numero + '</td>'
        + '<td>x</td>'
        + '<td>' + i + '</td>'
        + '<td>=</td>'
        + '<td>' + (numero * i) +'</td>'
    +'</tr>'
}

contenedor.innerHTML+='</table>'