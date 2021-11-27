window.addEventListener('DOMContentLoaded', function() {

    var dias = diasRestantes(new Date(), new Date('12/23/2021'));
    var parrafo = document.querySelector('#parrafo');
    parrafo.textContent = `¡Quedan ${dias} para las vacaciones! Un empujoncito más.`;

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