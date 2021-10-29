var mispaginas =["pagdefecto.html","pagina1.html","pagina2.html","pagina3.html","pagina4.html","pagina5.html","pagina6.html"];

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("aceptar").addEventListener("click",function(){
        opcion=document.querySelectorAll("input[type=radio]:checked")[0];//nada o un nodo

        indice = parseInt(opcion.value);//número o nan
        if (isNaN(indice)||indice<0||indice>mispaginas.length){indice=0} //igualo al último valor

        window.open(mispaginas[indice],"_self");

    })
})

