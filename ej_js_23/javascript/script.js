window.addEventListener('load', carga);

function carga() {

    //var radio = new URLSearchParams(window.location.search).get('radio');
    //var listaRadios = document.getElementsByName("radio");
    var radio = document.querySelector("input[type='radio']:checked");
    var direcciones = [
        "paginas/pagina1.html",
        "paginas/pagina2.html",
        "paginas/pagina3.html",
        "paginas/pagina4.html",
        "paginas/pagina5.html"
    ]

    var boton = document.getElementById("btn");
    boton.addEventListener('click', function() {
        //console.log("Click");
        
        var nuevaVentana = window.open(direcciones[radio.value]);
        
        /* for (let i = 0, fin = listaRadios.length; i < fin; i++) {
            if (listaRadios[i].checked) {
                var nuevaVentana = window.open(direcciones[i]);
                nuevaVentana.focus;
            }
        } */
    })

    //alert(radio);
    //alert(typeof(radio));
    

}