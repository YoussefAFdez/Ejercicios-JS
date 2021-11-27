window.addEventListener('DOMContentLoaded', function() {
    
    var dias = diasRestantes(new Date(), new Date('12/23/2021'));

    //Calculamos el número en las distintas posiciones
    var decenas = Math.trunc(dias / 10);
    var unidades = dias % 10;
    
    modificaImagenes(decenas, unidades);

})


/**
 * Calcula el número de días entre la fecha de mayor valor y la de menor
 * @param {*} fechaIni Objeto tipo Date con la fecha de inicio deseada
 * @param {*} fechaFinal Objeto tipo Date con la fecha de fin deseada
 * @returns Devuelve un entero la diferencia de días entre la fecha posterior y la anterior
 */
function diasRestantes(fechaIni, fechaFinal) {

    //Cálculo de días
    var diferenciaMS = fechaFinal.getTime() - fechaIni.getTime();
    var dias = Math.abs(Math.ceil(diferenciaMS / (1000 * 3600 * 24)));

    return dias;
}

/**
 * Modifica el src de la imagen seleccionando una de las imágenes almacenadas.
 * @param {*} decenas Referencia la imagen a la izquierda.
 * @param {*} unidades Referencia la imagen a la derecha.
 */
function modificaImagenes(decenas, unidades) {
    
    //Declaramos el array de imagenes
    imagenes = [
        "img/0.png",
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
        "img/7.png",
        "img/8.png",
        "img/9.png"
    ];

    //Recogemos los distintos nodos de imagen
    imgDecenas = document.getElementById("decenas");
    imgUnidades = document.getElementById("unidades");

    imgDecenas.src = imagenes[decenas];
    imgUnidades.src = imagenes[unidades];
    
}