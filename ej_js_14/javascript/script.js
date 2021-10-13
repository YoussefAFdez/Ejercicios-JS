//Declaramos variables
var parrafoFecha = document.getElementById("fecha");
var parrafoHora = document.getElementById("hora");

var fecha = new Date;
var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();
var fechaSalida = 'Fecha: ' + dia + '/' + (mes + 1) + '/' + anio;
var fechaLarga = "Hoy es ";
var diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var tiempo = "";

//Hayamos el dia de la semana y lo agregamos a la variable fechaLarga
fechaLarga += diaSemana[fecha.getDay()];

//Escribimos el dia en numero, si es menor que 10 agregamos un 0 delante
(dia < 10) ? fechaLarga += ' 0' + dia + ' de ' : fechaLarga += dia + ' de ';

//Agregamos el nombre del mes
fechaLarga += mesAnio[mes] + ' de ';

//Finalizamos agregando el año completo
fechaLarga += anio;

//Mostramos por pantalla la fecha
parrafoFecha.innerHTML = fechaSalida + '<br/>' + fechaLarga;


//Montamos el reloj en un intervalo
setInterval(reloj, 1000);

function reloj() {
    fecha = new Date;
    tiempo = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    parrafoHora.innerHTML = tiempo;
}


