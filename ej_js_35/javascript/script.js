window.addEventListener('DOMContentLoaded', () => {

    //Recogemos los nodos
    var nodoNombre = document.querySelector("#tbNombre");
    var nodoAlias = document.querySelector("#tbAlias");
    var nodoClave = document.querySelector("#tbClave");
    var nodoClave2 = document.querySelector("#tbClave2");
    var nodoListaSexo = document.getElementsByName("rbSexo");
    var nodoDdlAnio = document.querySelector("#ddlAnio");
    var nodoListaAficiones = document.getElementsByName("cbAficiones");
    var btnEnviar = document.querySelector("#btnEnviar");

    //Comprobamos la existencia de los nodos
    if (nodoNombre && nodoAlias && nodoClave && nodoClave2 && nodoListaSexo && nodoDdlAnio && nodoListaAficiones && btnEnviar) {

        //Desactivamos el botón inicialmente
        btnEnviar.disabled = true;

        //Cargamos el Select con valores
        nodoDdlAnio.innerHTML += cargaSelectNumeros(1990, 21);

        nodoAlias.addEventListener('change', () => {
            var valor = consultarGalleta(nodoAlias.value);
            console.log({valor});
            if (valor != -1) {
                console.log('encontrado');
                valor = valor.split(',');

                //Cargamos todos los elementos
                nodoNombre.value = valor[0];
                nodoClave.value = valor[1];
                nodoClave2.value = valor[1];
                nodoListaSexo[valor[2]].checked = true;
                nodoDdlAnio.selectedIndex = valor[3];
                for (let i = 4, fin = valor.length; i < fin; i++) {
                    nodoListaAficiones[valor[i]].checked = true;
                }
            }
        });

        
        //Asignamos evento change al formulario, para ello tomamos cualquier nodo
        btnEnviar.form.addEventListener('change', () => {
            //Comprobamos la validez de todos los campos
            var validezNombre = testNombre(nodoNombre.value);
            var validezAlias = testNombre(nodoAlias.value);            
            var validezClave = testClave(nodoClave.value, nodoClave2.value);
            var validezRb = testSeleccionado(nodoListaSexo);
            var validezDdl = testSelect(nodoDdlAnio.selectedIndex);
            var validezCb = testSeleccionado(nodoListaAficiones);

            //Comprobamos y mostramos error en caso de que un campo no sea válido
            if (!validezNombre) error(nodoNombre);
            if (!validezAlias) error(nodoAlias);
            if (!validezClave) {
                error(nodoClave2);
            }
            if (!validezDdl) error(nodoDdlAnio)

            if(validezNombre && validezAlias && validezClave && validezRb && validezDdl && validezCb)
            btnEnviar.disabled = false;
            else btnEnviar.disabled = true;

            btnEnviar.addEventListener('click', () => {
                var rbSeleccionado = document.querySelector('input[type="radio"]:checked');
                console.log(rbSeleccionado);
                var aficiones = cargarAficiones(nodoListaAficiones);
                document.cookie = `${nodoAlias.value}=${nodoNombre.value},${nodoClave.value},${rbSeleccionado.value},${nodoDdlAnio.selectedIndex},${aficiones}`;

            })

            /**
             * Modifica nodos agregándoles una clase css de error y un listener, para que cuando se realice algún cambio esta clase se elimine.
             * @param {*} nodo Nodo que se va a modificar
             */
             function error(nodo) {
                 //Comprobar si es una lista de nodos, por ejemplo un RadioButton o CheckBox.
                if (NodeList.prototype.isPrototypeOf(nodo)) {

                }
                nodo.classList.add("error");
                switch (nodo.nodeName) {
                    case 'SELECT':
                        nodo[0].text = "Debes seleccionar un elemento";
                        break;
                    case 'INPUT':
                        nodo.value = "";
                        nodo.placeholder = "dato erroneo";
                        break;
                }

                nodo.addEventListener('input', () => {
                    nodo.classList.remove("error");
                });
            }

            /**
             * Comprueba que un nombre esté compuesto únicamente por letras.
             * @param {*} cadena cadena que se va a comprobar.
             * @returns Devuelve true si la cadena está compuesta solo por letras y false en caso contrario.
             */
             function testNombre(cadena) {
                let regex = /^[a-z]{2,}$/i;
                return regex.test(cadena);
            }

            /**
             * 
             * @param {*} clave1 
             * @param {*} clave2 
             * @returns 
             */
            function testClave(clave1, clave2) {
                let regex = /[\w-\.]+/i;
                return (regex.test(clave2) && clave1 == clave2);
            }


            function testSeleccionado(listaNodos) {
                valido = false;
                listaNodos.forEach(item => { if (item.checked) valido = true; });
                return valido;
            }

            /**
             * Comprueba que el valor seleccionado de la lista no sea el primero (por defecto).
             * @param {*} indice Posición del elemento seleccionado. 
             * @returns Devuelve true si se ha seleccionado algún elemento que no sea el primero, por defecto y false en caso contrario.
             */
             function testSelect(indice) {
                return indice != 0;
            }


        });


        function cargaSelectNumeros(inicio, longitud) {
            let salida = "";
            
            for (let i = 0; i <= longitud; i++) {
                salida += '<option value="' + i + '">' + (inicio + i) + '</option>'
            }
            
            return salida;
        }

        function cargarAficiones(lista) {
            salida = "";
            for (let i = 0, fin = lista.length; i < fin; i++) if (lista[i].checked) salida += i;

            salida = salida.split('');
            salida = salida.join(',');

            return salida;
        }

        
    }    
});

function consultarGalleta(clave) {
    var busqueda = `${clave}=`;
    if (document.cookie.length > 0) {
        var i = document.cookie.indexOf(busqueda);
        if (i != -1) {
            i += busqueda.length;
            j = document.cookie.indexOf(";", i);
            if (j == -1) {
                j = document.cookie.length;
                return unescape (document.cookie.substring(i, j));
            }
        }
    }
    return -1;
}