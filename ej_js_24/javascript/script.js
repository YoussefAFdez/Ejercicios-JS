window.addEventListener('load', carga);

function carga() {

    var direcciones = [
        "paginas/pagina1.html",
        "paginas/pagina2.html",
        "paginas/pagina3.html",
        "paginas/pagina4.html",
        "paginas/pagina5.html"
    ]
    
    var boton = document.getElementById("btn");
    boton.addEventListener('click', function() {
        var radios = document.querySelectorAll("input[type='checkbox']:checked");
        console.log(radios);

        for (let i = 0, fin = radios.length; i < fin; i++) {
            var nuevaVentana = window.open(direcciones[radios[i].value]);
        }
        window.focus();
    })

}