window.addEventListener('DOMContentLoaded', principal)

function principal() {
    console.log("Iniciado");
    var elementos = document.querySelectorAll(".menu li");

    for (let i = 0, fin = elementos.length; i < fin; i++) {
        elementos[i].addEventListener('mouseover', enciendeApagaFondo);
        elementos[i].addEventListener('mouseout', enciendeApagaFondo);
    }

    /*
    function agregaFondo(nodo) {
        nodo.classList.add("resaltado");
    }

    function quitaFondo(nodo) {
        nodo.classList.remove("resaltado");
    }
    */

    function enciendeApagaFondo(event) {
        event.target.classList.toggle("resaltado");
    }

}