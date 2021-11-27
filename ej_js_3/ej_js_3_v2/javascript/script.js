/*
 * Script que permite calcular la ecuación de segundo grado
 */

window.addEventListener('DOMContentLoaded', () => {

    var nodoContenido = document.getElementById("contenido");

    //Recogemos los números introducidos por el usuario
    var a = parseFloat(window.prompt("Introduce el valor de A: "));
    var b = parseFloat(window.prompt("Introduce el valor de B: "));
    var c = parseFloat(window.prompt("Introduce el valor de C: "));
    var opcion = window.prompt("Deseas mostrar únicamente soluciones reales [true/false]");

    //Comprobamos la validez de los numeros
    if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
        //Comprobamos que exista el nodo Contenido
        if(nodoContenido) {
            if (opcion != "false") nodoContenido.innerHTML += ec2g(a, b, c, true);
            else nodoContenido.innerHTML += ec2g(a, b, c);
        }
    }

});


/**
 * Calcula la ecuación de segundo grando de 3 números.
 * @param float a Valor A.
 * @param float b Valor B.
 * @param float c Valor C.
 * @param boolean real Valor que indica si queremos mostrar únicamente soluciones reales o no.
 * @returns Código HTML con las salidas pertinentes.
 */
function ec2g(a, b, c, real = false) {
    var determinante = Math.pow(b, 2) + (-4 * a * c);
    
    var sol1 = Math.round((-b + Math.sqrt(determinante)) / (2 * a));
    var sol2 = Math.round((-b - Math.sqrt(determinante)) / (2 * a));

    var salida = "";

    if (real && determinante < 0) salida = "<p>No existen soluciones reales.</p>";
    else salida = '<p>Solucion 1<sup>a</sup>: ' + sol1 + '</p><p>Solucion 2<sup>a</sup>: ' + sol2 + '</p>';
    
    return salida;
}