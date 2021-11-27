/*
 * Script que solicita 1 número y un texto a un usuario y le da al texto el tamaño de ese nuemro 
 */
window.addEventListener('DOMContentLoaded', () => {
    var texto = window.prompt("Introduce una palabra o frase: ");
    var numero = window.prompt("Introduce el tamaño de fuente de la letra: ");

    var contenido = document.getElementById("contenido");
    if (contenido) {
        if (texto.length == 0) alert("¡No has introducido texto!");
        if (!Number.isInteger(parseInt(numero, 10))) alert("¡No has introducido un numero valido!")
        else contenido.innerHTML = '<p style="font-size:' + numero + 'rem;">'+ texto +'</p>'
    }

});







