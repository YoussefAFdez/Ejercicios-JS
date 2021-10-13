var contenido = document.getElementById("contenido");
var frase = window.prompt("Introduce el texto que deseas");


function cuentaLetras(frase) {
    let vocales = cuentaVocales(frase);
    let consonantes = cuentaConsonantes(frase);

    imprimir(vocales, consonantes, contenido);
}

function cuentaVocales(frase) {
    let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

    return contadorVocales;
}

function cuentaConsonantes(frase) {
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

    return contador(frase, consontantes);
}

function contador(frase, divisor) {
    let contador = 0;

    for (let i = 0; i < frase.length(); i++) {
        if (divisor.indexOf(frase.charAt(i)) != 0) contador++;
    }

    return contador;
}

function imprimir(vocales, consonantes, contenido) {
    contenido.innerHtml('<p>Hay ' + vocales + ' vocales</p><p>Hay ' + consonantes + ' consonantes</p>');
}