/*
    Ejercicio que cumple lo siguiente:
    Coge 5 frases de un array de 10 de forma aleatoria y las muestra cada 3 segundos
    Coge 3 logos de un array de 5 aleatoriamente que cambien cada 10 segundos

    Se deben recorrer todos los elementos del array antes de que se vuelvan
    a repetir elementos.
*/



/*
* Genera 2 intervalos que a su vez llaman a mas funciones
* No recibe parametros
* No devuelve nada
*/
function generarElementos() {
    intervaloFrases = window.setInterval(generarFrase, 3000);
    intervaloImagen = window.setInterval(generarImagen, 10000);
}


function generarFrase() {
    //Definimos el array de frases
    let frases = [
        "En un lugar de la mancha",
        "",
        
    ]
}


function generarImagen() {

}