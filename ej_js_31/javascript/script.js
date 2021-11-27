window.addEventListener('DOMContentLoaded', function() {

    //Declaramos las variables que vamos a ir usando 
    let listaPalabras = [
        'girafa',
        'tigre',
        'halcon',
        'hipopotamo'
    ];
    let palabraBusqueda = [];
    let palabraEscrita = [];




    //Recogemos los nodos y comprobamos que existen
    let nodoEntrada = document.querySelector('#tbEntrada');
    let nodoBoton = document.querySelector('#btnComprobar');
    let nodoResultado = document.querySelector('#resultado');
    let nodoVidas = document.querySelector('#vidas');
    let nodoUsadas = document.querySelector('#letrasUsadas');

    if (nodoEntrada && nodoBoton && nodoResultado && nodoVidas && nodoUsadas) {
        
    } else {
        alert('No se han podido cargar correctamente los elementos');
    }
    
});