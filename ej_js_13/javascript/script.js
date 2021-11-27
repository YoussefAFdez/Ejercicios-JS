window.addEventListener('DOMContentLoaded', () => {
    //Recogemos las imagenes
    var listaNodosImagenes = document.getElementsByTagName("img");
    for (let i = 0, fin = listaNodosImagenes.length; i < fin; i++) {
        listaNodosImagenes[i].addEventListener('click', () => {
            ampliacion(i);
        });
    }
});

//Creamos la funcion de ampliacion
function ampliacion(imagen) {
    //Rescatamos el Elemento
    switch (imagen) {
        case 0:
            var nombreImagen = document.getElementById("foto1");
            break;
        case 1:
            var nombreImagen = document.getElementById("foto2");
            break;
        case 2:
            var nombreImagen = document.getElementById("foto3");
            break;
        case 3:
            var nombreImagen = document.getElementById("foto4");
            break;
    }
    //Nos quedamos solo con el nombre de la imagen
    nombreImagen = nombreImagen.src.split('/').pop();

    //Navegamos a la nueva pagina
    window.location.assign("ampliada.html?img=" + 'img/' + nombreImagen);
}