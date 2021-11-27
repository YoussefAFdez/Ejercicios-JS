document.addEventListener('DOMContentLoaded', function() {

    let resultado = document.querySelector('#calculadora th');
    let botones = document.querySelectorAll('#calculadora button');
    let simbolos = "/x+-=.";
    let simbolo;
    let reinicio = false; //Determina;
    let num1;
    let num2;

    console.log(num1);

    sw = 0;

    //Comprobamos la existencia de todos los nodos
    if (resultado && botones) {
        //Asignamos el listener a los botones
        for (btn of botones) {
            btn.addEventListener('click', botonAction);
        }
    }
    
    function botonAction(event) {
        
        btnPulsado = event.target.textContent;
        
        if (sw == 0) {

            if (simbolos.indexOf(btnPulsado) == -1) {
                actualizaResultado(btnPulsado);
            } else if (btnPulsado != '=' && btnPulsado != '.') {
                num1 = parseInt(resultado.textContent);
                resultado.textContent = '0';
                simbolo = btnPulsado;
                reinicio = false;
                sw = 1;
            }
        } else {
            if (simbolos.indexOf(btnPulsado) == -1) {
                actualizaResultado(btnPulsado);
            } else if (btnPulsado == '=') {
                num2 = parseInt(resultado.textContent);
                console.log('IGUAL');
                resultado.textContent = calculaResultado(btnPulsado);
                reinicio = false;
                sw = 0;
            }
        }
    }

    function actualizaResultado(valor) {

        console.log("actualizando");

        if (!reinicio) {
            resultado.textContent = valor;
            reinicio = true;
        } else {
            resultado.textContent += valor;
        }
    }

    function calculaResultado() {
        var salida;
        
        switch(simbolo) {
            case '/':
                salida = Math.round((num1 / num2) * 10000) / 10000;
                break;
            case 'x':
                salida = num1 * num2;
                break;
            case '+':
                salida = num1 + num2;
                break;
            case "-":
                salida = num1 - num2;
                break;

        }

        return salida;
    }

})