window.addEventListener('load', carga);

function carga() {

    var direcciones = [
        "paginas/pagina1.html",
        "paginas/pagina2.html",
        "paginas/pagina3.html",
        "paginas/pagina4.html",
        "paginas/pagina5.html"
    ]
    
    var select = document.querySelector("#form1 select");
    select.addEventListener('change', function() {
        var opcion = document.querySelector("option:checked").value;
        var ventana = window.open(direcciones[opcion]);
        window.focus();

    })

}