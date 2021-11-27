var incorrecta = true;
var user;
var passwd;

window.addEventListener('DOMContentLoaded', () => {
    user = window.prompt("Introduce tu usuario: ");
    passwd = window.prompt("Introduce la clave: ");
    
    if (user.length && passwd.length) {
        incorrecta = false;
        document.images["checker"].src = `${user}${passwd}.png`;
    }

});

function testPasswd() {
    if (!incorrecta)  {
        location.replace(`${user}${passwd}.html`);
    }
}

function passwdError() {
    incorrecta = true;
    document.images["checker"].src = "invisible.png";
    alert("La clave introducida no es correcta");
}