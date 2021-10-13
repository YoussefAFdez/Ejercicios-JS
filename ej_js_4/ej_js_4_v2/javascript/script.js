//Declaracion de variables
texto = window.prompt("Introduce una palabra o frase")
tamanio = window.prompt("Introduce el tamaño de la letra que deseas visualizar")
contenedor = document.getElementById("contenedor")

if (texto == null) alert("¡No has introducido texto!")
if (!Number.isInteger(parseInt(tamanio, 10))) alert("¡No has introducido un numero valido!")
else contenedor.innerHTML = '<p style="font-size:' + tamanio + 'em;">'+ texto +'</p>'
