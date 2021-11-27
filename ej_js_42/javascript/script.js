//Declaramos las variables que vamos a utilizar a lo largo del programa
const provincias = {
    'Jaén' : ['Jaén', 'Baeza', 'Ibros', 'Linares', 'Cazorla'],
    'Málaga' : ['Málaga', 'Ronda', 'Torremolinos', 'Nerja', 'Marbella'],
    'Huelva' : ['Huelva', 'Ayamonte', 'Aracena', 'Palos de la Frontera', 'Niebla'],
    'Córdoba' : ['Córdoba', 'Lucena', 'Baena', 'Montilla', 'Puente Genil'],
    'Almería' : ['Almería', 'Vélez Blanco', 'Níjar', 'Mojácar', 'Abrucena'],
    'Cádiz' : ['Cádiz', 'Arcos de la Frontera', 'Jerez de la frontera', 'Tarifa', 'Chipiona'],
    'Sevilla' : ['Sevilla', 'Écija', 'Estepa', 'Carmona', 'Constantina'],
    'Granada' : ['Granada', 'Almuñécar', 'Motril', 'Salobreña', 'Guadix']
};

var revision = [0, 0, 0, 0, 0, 0, 0, 0];

const imagenes = [
    'jaen.png',
    'malaga.png',
    'huelva.png',
    'cordoba.png',
    'almeria.png',
    'cadiz.png',
    'sevilla.png',
    'granada.png'
];

document.addEventListener('DOMContentLoaded', () => {


    //Cargamos los elementos que vamos a utilizar
    var listaNodosCb = document.getElementsByName("cbProvincia");
    var nodoImagen = document.getElementById("imagen");
    var btn = document.getElementById('btnParar');

    //Deshabilitamos el checkbox, este ejercicio es aleatorio
    document.getElementById("tbPueblo").disabled = true;

    //Comprobamos la existencia de todos los nodos
    if (listaNodosCb && nodoImagen) {
        //Asignamos un intervalo de 2 segundos
        var intervalo = window.setInterval(() => {
            console.log(revision);
            if (revision.indexOf(0) == -1) recargaRevision();
            let propiedad = Math.floor(Math.random() * 8);
            let posArray = Math.floor(Math.random() * 5);
            let pueblo = cargaPueblo(propiedad, posArray);
            if (pueblo != -1) {
                let posicion = compruebaValor(pueblo, provincias);
                if (posicion != -1)  {
                    nodoImagen.src = cambiaImagen(imagenes, posicion, 'img/');
                    listaNodosCb[posicion].checked = true;
                }
            }
        }, 2000);

        btn.addEventListener('click', () => clearInterval(intervalo));
    } 

});

/**
 * Comprueba que exista una palabra en un objeto que contiene arrays de cadenas
 * @param {*} palabra Palabra a buscar
 * @param {*} lista Objeto
 * @returns Devuelve la posicion en la que se ha encontrado dicha palabra o -1 en caso contrario
 */
function compruebaValor(palabra, lista) {
    let num = 0;

    for (const item in lista) {
        if(lista[item].indexOf(palabra) != -1) break;
        else num++;
    }

    if (num > Object.keys(lista).length - 1) return -1;
    else return num;
}

/**
 * Funcion que cambia la imagen dada una lista, la posicion del elemento y un prefijo
 * @param {*} lista Array con el nombre de las imagenes
 * @param {*} posicion Posicion en la que se encuentra la imagen que queremos
 * @param {*} ruta Prefijo que precede la imagen
 * @returns Devuelve la ruta completa.
 */
function cambiaImagen(lista, posicion, ruta) {
    return `${ruta}${lista[posicion]}`;
}

function cargaPueblo(pos1, pos2) {

    let i = 0;
    let key = "";

    for(const element in provincias) {
        if (pos1 == i && revision[i] == 0) { key = element; revision[i] = 1; break; }
        else i++;
    }

    if (i == 8) return -1;
    else return provincias[key][pos2];

}

function recargaRevision() {
    for (let i = 0; i < 8; i++) revision[i] = 0;
}