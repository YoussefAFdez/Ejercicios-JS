window.addEventListener('DOMContentLoaded', carga);

function carga() {

    const direcciones = [
        "paginas/pagina1.html",
        "paginas/pagina2.html",
        "paginas/pagina3.html",
        "paginas/pagina4.html",
        "paginas/pagina5.html"
    ];
    
    var select = document.querySelector("#form1 select");
    if (select) select.addEventListener('change', function() {
        var opcion = document.querySelector("option:checked").value;
        if (opcion != -1) var ventana = window.open(direcciones[opcion]);
    });

}