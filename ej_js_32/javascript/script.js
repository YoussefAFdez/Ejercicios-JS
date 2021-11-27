/**
 * Programa que valida los diferentes campos de un formulario.
 */

window.addEventListener('DOMContentLoaded', () => {

    //Recogemos todos los nodos
    var nodoNombre = document.querySelector("#tbNombre");
    var nodoDireccion = document.querySelector("#tbDireccion");
    var nodoTelefono = document.querySelector("#tbTelefono");
    var nodoDni = document.querySelector("#tbDni");
    var nodoEmail = document.querySelector("#tbEmail");
    var nodoLocalidad = document.querySelector("#tbLocalidad");
    var nodoProvincia = document.querySelector("#ddlProvincia");
    var btnEnviar = document.querySelector("#btnEnviar");

    //Comprobamos la existencia de todos los nodos {
    if (nodoNombre && nodoDireccion && nodoTelefono && nodoDni && nodoEmail && nodoLocalidad && nodoProvincia && btnEnviar) {
        //Asignamos al boton un evento de click
        btnEnviar.addEventListener('click', () => {
            //Debemos de comprobar que los campos tienen valores correctos
            var validarNombre = comprobarNombre(nodoNombre.value);
            var validarDireccion = comprobarDireccion(nodoDireccion.value);
            var validarTelefono = comprobarTelefono(nodoTelefono.value);
            var validarDni = comprobarDni(nodoDni.value);
            var validarEmail = comprobarEmail(nodoEmail.value);
            var validarLocalidad = comprobarLocalidad(nodoLocalidad.value);
            var validarProvincia = comprobarDdl(nodoProvincia.selectedIndex);

            //Comprobamos y mostramos error en caso de que un campo no contenga valores válidos
            if (!validarNombre) error(nodoNombre);
            if (!validarDireccion) error(nodoDireccion);
            if (!validarTelefono) error(nodoTelefono);
            if (!validarDni) error(nodoDni);
            if (!validarEmail) error(nodoEmail);
            if (!validarLocalidad) error(nodoLocalidad);
            if (!validarProvincia) error(nodoProvincia);

            //Comprobamos la validez de todos los campos
            if (validarNombre && validarDireccion && validarTelefono
                && validarDni && validarEmail && validarLocalidad && validarProvincia)
                btnEnviar.form.submit();
            

            /**
             * Modifica nodos agregándoles una clase css de error y un listener, para que cuando se realice algún cambio esta clase se elimine.
             * @param {*} nodo Nodo que se va a modificar
             */
            function error(nodo) {
                nodo.classList.add("error");
                switch (nodo.nodeName) {
                    case 'SELECT':
                        nodo[0].text = "dato erroneo";
                        break;
                    case 'INPUT':
                        nodo.value = "";
                        nodo.placeholder = "dato erroneo";
                        break;
                }

                nodo.addEventListener('change', () => {
                    nodo.classList.remove("error");
                });

            }
            
            /**
             * Comprueba que un nombre esté compuesto únicamente por letras.
             * @param {*} cadena cadena que se va a comprobar.
             * @returns Devuelve true si la cadena está compuesta solo por letras y false en caso contrario.
             */
            function comprobarNombre(cadena) {
                let regex = /^[a-z]{2,}$/i;
                return regex.test(cadena);
            }

            /**
             * Comprueba que una dirección tenga una longitud mínima de 10 caracteres.
             * @param {*} cadena Dirección que se envía.
             * @returns Devuelve true si dirección mide al menos 10 caracteres, false en caso contrario.
             */
            function comprobarDireccion(cadena) {
                let regex = /\w/;
                return regex.test(cadena);
            }

            /**
             * Comprueba que un número de teléfono esté compuesto por 9 dígitos.
             * @param {*} cadena Número de teléfono.
             * @returns Devuelve true si el número está compuesto por 9 dígitos y false en caso contrario.
             */
            function comprobarTelefono(cadena) {
                let regex = /^\d{9}$/;
                return regex.test(cadena);
            }

            /**
             * Comprueba que un DNI tenga un formático válido y además comprueba según la letra que lo sea.
             * @param {*} cadena DNI que se quiere comprobar.
             * @returns Devuelve true si el formato del DNI es correcto y además es válido según su letra y false en caso contrario.
             */
            function comprobarDni(cadena) {
                let letrasComprobacion = "TRWAGMYFPDXBNJZSQVHLCKET";  
                let numerosDni = cadena.substring(0, 8);
                let letraDni = cadena.substring(8).toUpperCase();
                let regex = /^\d{8}[a-z]$/i;

                return (regex.test(cadena) && letrasComprobacion.charAt(numerosDni % 23) == letraDni);
            }

            /**
             * Comprueba que una dirección de correo electrónico sea válida.
             * @param {*} cadena Dirección de correo electrónico a comprobar.
             * @returns Devuelve true si la dirección de correo electrónico es válida y false en caso contrario.
             */
            function comprobarEmail(cadena) {
                let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
                return regex.test(cadena);
            }

            /**
             * Comprueba que una localidad no tenga caracteres extraños ni números.
             * @param {*} cadena La localidad que queremos comprobar.
             * @returns Devuelve true si la localidad está compuesta únicamente por letras y false en caso contrario.
             */
            function comprobarLocalidad(cadena) {
                let regex = /[a-z]/i;
                return regex.test(cadena);
            }

            /**
             * Comprueba que el valor seleccionado de la lista no sea el primero (por defecto).
             * @param {*} indice Posición del elemento seleccionado. 
             * @returns Devuelve true si se ha seleccionado algún elemento que no sea el primero, por defecto y false en caso contrario.
             */
            function comprobarDdl(indice) {
                return indice != 0;
            }

        });

    }

});