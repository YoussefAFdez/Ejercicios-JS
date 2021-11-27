var debug = false;

window.addEventListener('DOMContentLoaded', () => {
    //Declaramos la variable ventana y sus caracteristicas
    var ventana = "nueva"
    var ancho = 200
    var alto = 200
    var maxAlto = window.screen.availHeight
    var maxAncho = window.screen.availWidth
    var posIzq = (maxAncho - ancho) / 2
    var posTop = (maxAlto - alto) / 2
    var posicion = "left=" + posIzq + ", top=" + posTop
    var caracteristicas = "width=" + ancho + "px, height=" + alto + "px, " + posicion
    
    //Recogemos el nodo del boton para crear la ventana
    var btnCrear = document.querySelector('.btnCrear');
    if (btnCrear) btnCrear.addEventListener('click', crearVentana);

    //Recogemos los botones que posicionan a la ventana
    var listaBotones = document.querySelectorAll('.btnMover');
    for (let i = 0, fin = listaBotones.length; i < fin; i++) {
        listaBotones[i].addEventListener('click', () => {
            moverVentana(i);
        });
    }

    //Recogemos el boton que activa el movimiento de rotación de la ventana
    var btnVueltas = document.getElementById("btnVueltas");
    if (btnVueltas) btnVueltas.addEventListener('click', desplazar);



    //Creamos la funcion de creacion de ventana y le damos sus caracteristicas adicionales
    function crearVentana() {
        //Comprobamos si la ventana esta o no creada
        //Si no esta creada la creamos en el centro y si lo esta la desplazamos
        if (ventana == "nueva") {
            ventana = window.open("", "Ventana", caracteristicas)
            ventana.document.bgColor="orange"
            ventana.document.body.innerHTML="<p>Hola</p>"
        } else {
            ventana.focus()
            ventana.moveTo(posIzq, posTop)
        }
    }
    
    //Creamos la funcion que movera la ventana
    function moverVentana(position) {
        switch(position) {
            case 0: //Superrior-Izquierda
                ventana.focus()
                ventana.moveTo(0,0)
                break
            case 1: //Superior-Derecha
                ventana.focus()
                ventana.moveTo(maxAncho, 0)
                break
            case 2: //Inferior-Derecha
                ventana.focus()
                ventana.moveTo(maxAncho, maxAlto)
                break
            case 3: //Inferior-Izquierda
                ventana.focus()
                ventana.moveTo(0, maxAlto)
                break
            default:
        }
    }

    function desplazar() {
        var anchoVentana = ventana.outerWidth;
        var altoVentana = ventana.outerHeight;
        var x = 0;
        var maxX = window.screen.availWidth - anchoVentana;
        var minX = 0;
        var y = 0;
        var maxY = window.screen.availHeight - altoVentana;
        var minY = ventana.outerHeight / 2;

        ventana.focus();
        ventana.moveTo(0,0);

        var intervalo = setInterval(moveR, 1);

        function moveR() {
            if (minX >= maxX && minY >= maxY) clearInterval(intervalo);
            else if (x >= maxX) {
                clearInterval(intervalo);
                maxX -= anchoVentana / 2;
                if (debug) console.log({minY, maxY, minX, maxX, x, y});
                intervalo = setInterval(moveD, 1);
            } else ventana.moveTo(++x, y);
        }

        function moveD() {
            if (minX >= maxX && minY >= maxY) clearInterval(intervalo);
            else if (y >= maxY) {
                clearInterval(intervalo);
                maxY -= altoVentana / 2;
                if (debug) console.log({minY, maxY, minX, maxX, x, y});
                intervalo = setInterval(moveL, 1)
            } else ventana.moveTo(x, ++y);
        }

        function moveL() {
            if (minX >= maxX && minY >= maxY) clearInterval(intervalo);
            else if (x <= minX) {
                clearInterval(intervalo);
                minX += anchoVentana / 2;
                if (debug) console.log({minY, maxY, minX, maxX, x, y});
                intervalo = setInterval(moveU, 1);
            } else ventana.moveTo(--x, y);
        }

        function moveU() {
            if (minX >= maxX && minY >= maxY) clearInterval(intervalo);
            else if (y <= minY) {
                clearInterval(intervalo);
                minY += altoVentana / 2;
                if (debug) console.log({minY, maxY, minX, maxX, x, y});
                intervalo = setInterval(moveR, 1)
            } else ventana.moveTo(x, --y);
        }
    }
    
});
