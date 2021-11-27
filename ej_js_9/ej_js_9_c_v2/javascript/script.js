/*
 * Script que crea 4 botones que permiten cambiar el fondo del documento 
 */

    const colors = ['red', 'green', 'blue', 'yellow'];
    const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];


window.addEventListener('DOMContentLoaded', () => {
    //Declaracion de variables
    var contenido = document.getElementById("contenido");
    var btn;
    var texto;

    //Declaramos el codigo para la generacion de los botones
    for (let i = 0, fin = colores.length; i < fin; i++) {
        btn = document.createElement("button");
        texto = document.createTextNode(colores[i]);
        btn.appendChild(texto);
        btn.setAttribute('onclick', 'cambiaFondo("' + colors[i] + '")');
        contenido.appendChild(btn);
    }

    btn = document.createElement("button");
    texto = document.createTextNode("Cambia");
    btn.appendChild(texto);
    btn.setAttribute('onclick', 'rotacion()');
    contenido.appendChild(btn);
    
});

function cambiaFondo(color) {
    document.body.style.background = color;
}

function rotacion() {
    var i = colors.indexOf(document.body.style.background);
    if (i == -1) alert("Hay un error con los colores");
    else if (i == colors.length - 1) document.body.style.background = colors[0];
    else document.body.style.background = colors[++i];
}
