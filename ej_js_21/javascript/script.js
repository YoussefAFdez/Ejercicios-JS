/*
 * Programa que recoge numeros por teclado y los imprime posteriormente resaltando el mayor y menor con colores diferentes. 
 */

window.addEventListener('DOMContentLoaded', function() {

    const numerosARecoger = 10;

    var nums = [];

    for (let i = 0; i < numerosARecoger; i++) {
        nums[i] = window.prompt("Introduce el " + (i + 1) + " numero: ");
    }

    var mayor = Math.max(...nums);
    var menor = Math.min(...nums);

    var salida = "<p>";

    for (let i = 0; i < numerosARecoger; i++) {
        if (nums[i] == mayor) salida += '<span id="mayor">' + nums[i] + ' </span>';
        else if (nums[i] == menor) salida += '<span id="menor">' + nums[i] + ' </span>';
        else salida += nums[i] + " ";
    }

    salida += "</p>"

    var documento = document.getElementById("contenido");
    documento.innerHTML = salida;

})