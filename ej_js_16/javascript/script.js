/*
    Se pide una cadena y se recuentan vocales y consonatnes.
*/

/*
* Cuenta las vocales y consonantes que hay en una cadena
* No recibe parametros, los datos se toman dentro
* @return Devuelve una cadena Indicando las vocales y las consonantes
*/
function cuentaLetras() {
    //Tomamos la frase del usuario
    let frase = window.prompt("Introduce la frase que deseas contar: ");

    //Declaramos las vocales existentes
    let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';

    //Declaramos las expresiones regulares
    let regexVocales = new RegExp('[' + vocales + ']');
    let regexConsonantes = new RegExp('[a-zA-Z]');

    //Declaramos los contadores
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    //Recorremos la frase para hacer el recuento
    for (let i = 0; i < frase.length; i++) {
        //Comprobamos si una frase
        if (frase.charAt(i).match(regexVocales)) contadorVocales++;
        else if (frase.charAt(i).match(regexConsonantes)) contadorConsonantes++;
    }

    //Construimos la salida
    let salida = 'La frase \'' + frase + '\' tiene ' + contadorVocales + ' vocales y '
    + contadorConsonantes + ' consonantes.';

    return salida;
}