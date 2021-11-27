/*
* Script que imprime la tabla del numero previamente definido
*/

const numero = 7;

window.addEventListener('DOMContentLoaded', () => {
    //Recogemos el contenedor
    var contenedor = document.getElementById("contenedor");
    //Creamos la variable que vamos a ir construyendo y definimos la tabla y cabecera
    var salida = '<table><tr><th colspan="5">Tabla de multiplicar del numero ' + numero + '</th></tr>';
    
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
    contenedor.innerHTML += salida;
});


