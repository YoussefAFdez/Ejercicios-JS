//Obtenemos la URL de la imagen
var param = new URLSearchParams(window.location.search).get('img')
    
//En el nuevo documento agregamos la imagen al src
document.getElementById("fotoAmpliada").src = param