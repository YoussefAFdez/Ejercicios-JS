document.addEventListener("DOMContentLoaded",function(){

    document.getElementsByTagName("div")[0].addEventListener("click",volver)

    function volver(){
        this.addEventListener("click",function(){
            window.open("index.html","_self")
        })
    }
})
