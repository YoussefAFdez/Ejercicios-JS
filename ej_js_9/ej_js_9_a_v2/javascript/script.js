/*
 * Script que crea 4 botones que permiten cambiar el fondo del documento 
 */

window.addEventListener('DOMContentLoaded', () => {
    //Declaracion de variables
    var contenido = document.getElementById("contenido");
    var colores = ['red', 'green', 'blue', 'yellow'];
    //Declaramos el codigo para la generacion de los botones

    for (color of colores) {
        var btn = document.createElement("button");
        var texto = document.createTextNode(color);
        btn.appendChild(texto);
        btn.setAttribute('onclick', 'document.bgColor="' + color + '"');
        contenido.appendChild(btn);
    }
    
});
