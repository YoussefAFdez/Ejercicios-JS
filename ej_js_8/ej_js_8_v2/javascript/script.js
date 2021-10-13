//Declaramos variables
var contenedor = document.getElementById("contenedor")
var tabla = ""

//Generacion de tabla
tabla += ''
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
                + navigator.appCodeName
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
                    + '<li>'
                        + 'Plataforma: ' + navigator.platform
                    + '</li>'
                + '</ul>'
            + '</td>'
        + '</tr>'
    + '</table>'

//Asignacion de contenido al contenedor
contenedor.innerHTML = tabla
