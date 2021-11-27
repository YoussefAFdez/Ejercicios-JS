window.addEventListener('DOMContentLoaded', carga);

function carga() {

    var direcciones = [
        "paginas/pagina1.html",
        "paginas/pagina2.html",
        "paginas/pagina3.html",
        "paginas/pagina4.html",
        "paginas/pagina5.html"
    ]
    
    var boton = document.getElementById("btn");
    if (boton) boton.addEventListener('click', function() {
        var opciones = document.querySelectorAll("option:checked");
        //console.log(opciones);

        if (opciones) {
            for (let i = 0, fin = opciones.length; i < fin; i++) {
                var nuevaVentana = window.open(direcciones[opciones[i].value]);
            }
        }
        
        window.focus();
    });

}