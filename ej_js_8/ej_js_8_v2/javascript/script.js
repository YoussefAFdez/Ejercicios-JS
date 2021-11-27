/*
 * Script que genera una tabla con datos sobre el navegador actual. 
 */

window.addEventListener('DOMContentLoaded', () => {

    //Recogemos el nodo que contiene el contenido
    var nodoContenido = document.getElementById("contenido");
    var salida = "";

    //Comprobamos el navegador
    var nombreNavegador;

    if (navigator.userAgent.indexOf("Firefox") != -1) nombreNavegador = "Firefox";
    else if (navigator.userAgent.indexOf("Edg") != -1) nombreNavegador = "Edge";
    else if (navigator.userAgent.indexOf("OPR") != -1) nombreNavegador = "Opera";
    else if (navigator.userAgent.indexOf("Chrome") != -1) nombreNavegador = "Chrome";
    else nombreNavegador = "Desconocido";
    

    //Generacion de tabla
    salida += ''
    +   '<table border="1">'
            + '<tr>'
                + '<td colspan="2">'
                    + '<p align="center">Información del navegador</p>'
                + '</td>'
            + '</tr>'
            + '<tr>'
                + '<td style="text-align:center">'
                    + 'Nombre:'
                + '</td>'
                + '<td style="text-align:center">'
                    + nombreNavegador
                + '</td>'
            + '</tr>'
            + '<tr>'
                + '<td style="text-align:center">'
                    + 'Versión:'
                + '</td>'
                + '<td style="text-align:center">'
                    + navigator.userAgent
                + '</td>'
            + '</tr>'
            + '<tr>'
                + '<td style="text-align:center">'
                    + 'Características:'
                + '</td>'
                + '<td>'
                    + '<ul>'
                        + '<li>'
                            + 'Cookies: ' + navigator.cookieEnabled
                        + '</li>'
                        + '<li>'
                            + 'Idioma: ' + navigator.language
                        + '</li>'
                    + '</ul>'
                + '</td>'
            + '</tr>'
        + '</table>'

    //Asignacion de contenido al contenedor
    contenido.innerHTML = salida;
});


