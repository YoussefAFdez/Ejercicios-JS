window.addEventListener('DOMContentLoaded', function() {
    
    listaResoluciones = ["800x600", "1024x768", "1280x720", "1366x768", "1920x1080", "1920x1200", "2560x1080", "2560x1440", "3840x2160"];
    resolucion = "" + window.screen.availWidth + "x" + window.screen.availHeight;

    salida = '<p>Tu resolucion es: </p>';
    formulario =    '<form action="" id="form1">';

    for (let i = 0, fin = listaResoluciones.length; i < fin; i++) {
        formulario += '<p><label for="radio">' + listaResoluciones[i] + '</label>'
        if (listaResoluciones[i] != resolucion) formulario += '<input type="radio" value="' + i + '" name="radio"/>';
        else formulario += '<input type="radio" value="' + i + '" name="radio" checked/>';
        formulario += '</p>';
    }
    
    formulario += '</form>';
    salida += formulario;

    var contenido = document.getElementById("contenido");
    contenido.innerHTML = salida;

})