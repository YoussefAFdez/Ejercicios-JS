/*
* Este ejercicio recoge 5 nombres y 5 edades y las presenta posteriormente
*/

/*
    --DATOS DE INTERES--
    El ejercicio no tiene encuenta si alguien introduce por teclado caracteres especiales como los
    utilizados en el array 'separadores'
    Se utiliza una variable global en vez de enviar otra como parametro, hablo de cadenaSalida
*/

//Generamos las variables
var contenido = document.getElementById("contenido");

const ROWS = 5;
const COLS = 2;

//Genramos la matriz y sus arrays
var listas = new Array(COLS);
for (let i = 0; i < COLS; i++) listas[i] = new Array(ROWS);

/*
    listas[0] = nombres
    listas[1] = edades
    listas[2] = sexo
*/

/*
Generamos un array que nos indicara de los distintos elementos en el prompt
Deben de haber tantos elementos como columnas
*/

//Declaramos una lista con los elementos para luego mostrarlos
var elementos = new Array(COLS); 
elementos[0] = "nombre";
elementos[1] = "edad";
//elementos[2] = "sexo";

//Debemos de realizar lo mismo para los separadores que se utilizaran en la construccion de la cadena
var separadores = new Array(COLS);
separadores[0] = "*";
separadores[1] = "#";
//separadores[2] = "&";



//Declaramos la variable de salida que almacenara el texto como global
var cadenaSalida = "";

/*
* Recoge multiples parametros por teclado y los almacena en una matriz que posteriormente transforma en una cadena personalizada
* No recibe ningun parametro
* @return Devuelve una cadena compuesta por todos los elementos
*/
function crearCadena() {

    if (cadenaSalida.length > 0) cadenaSalida = ""; // Reiniciamos la variable en caso de tener algo

    //Recogemos los datos en la array
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
            //Comprobamos que el elemento del array no este sin definir
            let texto = (typeof elementos[i] != 'undefined') ? elementos[i] : ""
            listas[i][j] = window.prompt("Introduce " + texto + "[" + (j + 1) + "]: ");
        }
    }

    //Construimos la cadena
    for(let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            //Comprobamos que el separador del array no este sin definir
            let texto = (typeof separadores[j] != 'undefined') ? separadores[j] : "."
            cadenaSalida += listas[j][i] + texto;
        }
    }

    //Devolvemos la cadena completa
    return cadenaSalida;

}


/*
* Funcion que toma la cadena generada anteriormente y la divide en la tabla correspondiente
* No recibe parametros
* No devuelve nada, imprime codigo html directamente sobre la tabla con id='tabla'
*/
function romperCadena() {
    let cadenaDividida = cadenaSalida.split('#'); //Dividimos por primera vez
    cadenaDividida.pop(); //Eliminamos el ultimo elemento del array (cadena en blanco)

    /*
        El array generado queda tal que:
        ['nombre*edad', 'nombre2*edad2']
    */


    let tabla = "<tr><td>NOMBRE</td><td>EDAD</td></tr>"; //Preparamos la cadena que contendra toda la tabla y vamos a construir

    //Construimos los arrays para poder invertir el segundo
    let col1 = new Array(ROWS);
    let col2 = new Array(ROWS);

    //Recogemos la informacion de las cadenas
    for (let i = 0; i < cadenaDividida.length; i++) {
        col1[i] = cadenaDividida[i].split('*')[0];
        col2[cadenaDividida.length - i - 1] = cadenaDividida[i].split('*')[1];
    }

    //Generamos el resto de la tabla ahora que ya tenemos los datos
    for (let i = 0; i < ROWS; i++) {
        tabla += '<tr><td>' + col1[i] + '</td><td>' + col2[i] + '</td></tr>';
    }

    
    //Escribimos el contenido de la tabla sobre la misma
    //console.log(cadenaDividida);
    //console.log(tabla);
    document.getElementById("tabla").innerHTML = tabla;
    
}
