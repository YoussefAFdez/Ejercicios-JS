/*
    Aplicacion que genere un titulo que tenga movimiento
*/

/*
    NOTAS:
    - No pilla el espacio decorativo
    - Me gustaria que pillara y devolviera un parametro, pero el set interval va raro
*/

//Solicitamos el titulo al usuario al entrar, el espacio al final es decorativo
let titulo = window.prompt("Introduce el titulo de la pagina") + ' ';

//Definimos el titulo de la pagina por primera vez
document.title = titulo;

setInterval(mueveTitulo, 500);


/*
* Va rotando los caracteres del titulo de la ventana, poniendo el primero el ultimo
* y pasando el resto una posicion adelante continuamente
* No tecibe ningun parametro
* No devuelve nada.
*/
function mueveTitulo() {
    let tituloActual = document.title;
    let longitud = tituloActual.length; //Calculamos la longitud solo una vez
    let auxiliar = tituloActual.charAt(0); //Guardamos el primer caracter en variable
    let nuevoTitulo = "";

    for (let i = 0; i < longitud; i++) {
        if (i + 1 != longitud) nuevoTitulo += tituloActual.charAt(i + 1);
    }

    nuevoTitulo += auxiliar;
    document.title = nuevoTitulo;

}