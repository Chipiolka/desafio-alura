let amigos=[];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo=inputAmigo.value;

    if (!amigo) {
        alert("Debes ingresar un nombre para continuar");
        return;
    }
    amigos.push(amigo);
    inputAmigo.value = "";
    inputAmigo.focus();
}