/*
 * Script que crea 4 botones que permiten cambiar el fondo del documento 
 */

window.addEventListener('DOMContentLoaded', () => {
    //Declaracion de variables
    var contenido = document.getElementById("contenido");
    var colors = ['red', 'green', 'blue', 'yellow'];
    var colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];


    //Declaramos el codigo para la generacion de los botones
    for (let i = 0, fin = colores.length; i < fin; i++) {
        var btn = document.createElement("button");
        var texto = document.createTextNode(colores[i]);
        btn.appendChild(texto);
        btn.setAttribute('onclick', 'cambiaFondo("' + colors[i] + '")');
        contenido.appendChild(btn);
    }
    
});

function cambiaFondo(color) {
    document.body.style.background = color;
}
