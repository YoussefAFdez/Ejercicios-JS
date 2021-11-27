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
      
        //Recogemos el radio seleccionado
        var radio = document.querySelector("input[type='radio']:checked");
        //Comprobamos que existe dicho radio y abrimos una ventana nueva
        if (radio) var nuevaVentana = window.open(direcciones[radio.value]);
        else alert('No se ha encontrado una opción seleccionada');
        
    })
    

}