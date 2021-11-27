/*
* Script que imprime la tabla del numero introducido por el usuario
*/

window.addEventListener('DOMContentLoaded', () => {

    var numero = window.prompt("Introduce el número del cual deseas hayar su tabla de multiplicar");

    //Recogemos el contenedor
    var contenido = document.getElementById("contenido");
    //Creamos la variable que vamos a ir construyendo y definimos la tabla y cabecera
    var salida = '<table><tr><th colspan="5">Tabla de multiplicar del número ' + numero + '</th></tr>';
    
    //Generamos el resto de filas de la tabla
    for(let i = 1; i <= 10; i++) {
        salida +=
        '<tr>'
            + '<td>' + numero + '</td>'
            + '<td>X</td>'
            + '<td>' + i + '</td>'
            + '<td>=</td>'
            + '<td>' + (numero * i) +'</td>'
        +'</tr>';
    }

    //Cerramos la tabla
    salida += '</table>'
    //Agregamos la tabla entera 'salida' al div contenedor
    contenido.innerHTML += salida;
});
