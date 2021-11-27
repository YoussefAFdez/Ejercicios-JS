window.addEventListener('DOMContentLoaded', function() {

    //Declaramos las variables que vamos a utilizar
    const listaPalabras = [
        'girafa',
        'tigre',
        'halcon',
        'hipopotamo'
    ];

    //Recogemos todos los nodos que vamos a utilizar
    var nodoTbEntrada = document.getElementById("tbEntrada");
    var btnComprobar = document.getElementById("btnComprobar");
    var nodoImagen = document.getElementById("img");
    var nodoResultado = document.getElementById("resultado");
    var nodoVidas = document.getElementById("vidas");
    var nodoLetras = document.getElementById("letrasUsadas");
    var vidas = 8;
    var letrasUsadas = "";

    //Comprobamos que existan todos los nodos 
    if (nodoTbEntrada && btnComprobar && nodoImagen && nodoResultado && nodoVidas && nodoLetras) {
        var palabraABuscar = generaPalabra(listaPalabras);
        var palabraJugador = generaPalabraJugador(palabraABuscar);
        nodoResultado.textContent = palabraJugador.join(' ');
        nodoVidas.textContent = vidas;

        btnComprobar.addEventListener('click', () => {
            var letra = nodoTbEntrada.value;
            if (letra.length) {
                comprobacion(letra);
                actualizacion();
                if (!vidas) {
                    alert(`Has perdido... La palabra que buscabas era ${palabraABuscar}`);
                    window.location.reload();
                }
            }
            else console.log('ups');
        });
    }

    function comprobacion(letra) {
        salida = "";

        if (letrasUsadas.indexOf(letra) == -1) {
            letrasUsadas += letra;
            if (palabraABuscar.indexOf(letra) != -1) {
                for (let i = 0, fin = palabraABuscar.length; i < fin; i++) {
                    if (palabraABuscar[i] == letra) {
                        palabraJugador[i] = letra;
                        if (compruebaArrays(palabraABuscar.split(''), palabraJugador)) {
                            alert(`Felicidades Has Ganado! Encontraste la palabra ${palabraABuscar}`);
                            window.location.reload();
                        }
                    }
                }
            } else vidas--;
        } else alert('Ya has escrito esa letra!');
    }

    function actualizacion() {
        nodoResultado.textContent = palabraJugador.join(' ');
        nodoVidas.textContent = vidas;
        nodoLetras.textContent = letrasUsadas;
        nodoTbEntrada.value = "";
    }

});


function generaPalabra(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function generaPalabraJugador(palabra) {
    var salida = "";
    for (let i = 0, fin = palabra.length; i < fin; i++) salida += '_';
    salida = salida.split('');

    return salida;
}

function compruebaArrays(arr1, arr2) {
    salida = true;

    for (let i = 0, fin = arr1.length; i < fin; i++) {
        if (arr1[i] != arr2[i]) salida = false;
    }

    return salida;
}