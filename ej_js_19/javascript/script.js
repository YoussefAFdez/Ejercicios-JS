/*
    Ejercicio que cumple lo siguiente:
    Coge 5 frases de un array de 10 de forma aleatoria y las muestra cada 3 segundos
    Coge 3 logos de un array de 5 aleatoriamente que cambien cada 10 segundos

    Se deben recorrer todos los elementos del array antes de que se vuelvan
    a repetir elementos.
*/


//Declaramos los intervalos con el objetivo de poder activarlos y detenerlos cuando queramos
var intervaloFrases;
var intervaloImagen;

//Para comprobar si una imagen o frase ha salido vamos a usar un array auxiliar, hay que declararla global.
let frasesValidacion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let imagenesValidacion = [0, 0, 0, 0, 0];


/*
* Activa 2 intervalos que a su vez llaman a mas funciones
* No recibe parametros
* No devuelve nada
*/
function generarElementos() {
    intervaloFrases = window.setInterval(generarFrase, 3000);
    intervaloImagen = window.setInterval(generarImagen, 5000);
}


/**
 * Detiene los intervalos, parando la rotación de imágenes y frases
 */
function detenerRotacion() {
    clearInterval(intervaloFrases);
    clearInterval(intervaloImagen);
}


/**
 * Crea un array con 5 frases aleatorias que posteriormente será enviado a otra función
 */
function generarFrase() {
    //Definimos el array de frases
    let frases = [
        "En un lugar de la mancha",
        "Erase una vez, hace mucho tiempo",
        "Hola don Pepito, hola don José",
        "Tengo una historia que contar",
        "La historia de un soñador",
        "Los buhos son criaturas fascinantes",
        "El producto recomendado de la semana es...",
        "Me quedo ya sin frases que escribir",
        "Si pudiera elegir un poder sería ser invisible",
        "¡Esta semana voy a hacer muchos amigos!"
    ];

    var arrayAuxiliar = new Array(5); //Array en el que almacenaremos las freses de salida

    //Escogemos 5 frases aleatorias
    for (let i = 0; i < 5; i++) {

        //Comprobamos y reiniciamos el array si es necesario
        reiniciaArray(compruebaArray(frasesValidacion), frasesValidacion);

        do {
            var num = Math.trunc(Math.random() * 10);
        } while (frasesValidacion[num] == 1);

        arrayAuxiliar[i] = frases[num];

        frasesValidacion[num] = 1;
    }

    imprime(constructorCadenaSalida(arrayAuxiliar, 0), "frases");
}


/**
 * Crea un array con el nombre de 3 imágenes que posteriormente enviará para imprimirlo
 */
function generarImagen() {
    //Definimos el array de imagenes
    let imagenes = [
        "fondo1.jpg",
        "fondo2.jpg",
        "fondo3.jpg",
        "fondo4.jpg",
        "fondo5.jpg"
    ];

    var arrayAuxiliar = new Array(3); //Array en el que almacenaremos las imagenes de salida

    //Escogemos 3 imagenes aleatorias
    for (let i = 0; i < 3; i++) {

        //Comprobamos y reiniciamos el array si es necesario
        reiniciaArray(compruebaArray(frasesValidacion), frasesValidacion);

        do {
            var num = Math.trunc(Math.random() * 5);
        } while (imagenesValidacion[num] == 1);

        arrayAuxiliar[i] = imagenes[num];

        imagenesValidacion[num] = 1;
    }

    imprime(constructorCadenaSalida(arrayAuxiliar, 1), "imagenes");
}


/**
 * Comprueba si todos los elementos de un array han sido utilizados
 * @param {*} lista Array a comprobar
 * @returns Devuelve un booleando indicando si la lista está completa
 */
function compruebaArray(lista) {
    var ok = true;

    for (let i = 0, fin = lista.length; i < fin; i++) {
        if (lista[i] == 0) ok = false;
    }

    return ok;
}


/**
 * En caso necesario, vuelve a poner todos los valores de la lista a 0, para que puedan volver a imprimirse
 * @param {*} seReinicia Indica si la lista está completa o no
 * @param {*} lista El array que debe ser reiniciado
 */
function reiniciaArray(seReinicia, lista) {

    if (seReinicia) {
        for (let i = 0, fin = lista.length; i < fin; i++) {
            lista[i] = 0;
        }
    }

}


/**
 * Construye la cadena final que se imprimirá
 * @param {*} lista Array que contiene los elementos a ser impresos.
 * @param {*} modo Indica si se debe construir una cadena de salida con la etiqueta imagen.
 * @returns Devuelve la cadena formateada en estilo parrafo o imagen
 */
function constructorCadenaSalida(lista, modo) {
    var cadenaSalida = ""; //Contiene el codigo html a imprimir

    if (modo == 0) {
        for (let i = 0, fin = lista.length; i < fin; i++) {
            cadenaSalida += '<p>' + lista[i] + '</p>';
        }
    } else if (modo == 1) {
        for (let i = 0, fin = lista.length; i < fin; i++) {
            cadenaSalida += '<img src="img/' + lista[i] + '" alt="'+ lista[i] +'" />';
        }
    }

    return cadenaSalida;
}


/**
 * Imprime un array linea por linea en uno de los 2 bloques existentes
 * @param {*} lista Array que se va a imprimir
 * @param {*} lugar Indica el bloque en el que se escribira la informacion
 */
function imprime(salida, lugar) {
    var destino = document.getElementById(lugar);

    destino.innerHTML = salida;
}