let amigos=[];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo=inputAmigo.value;

    if (!amigo) {
        alert("Debes ingresar un nombre para continuar");
        return;
    };
    amigos.push(amigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
};

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for (let index = 0; index < amigos.length; index++) {
        let item=document.createElement("li");
        item.textContent=amigos[index];
        listaAmigos.appendChild(item);
    };
};

function sortearAmigo() {
    if (!amigos.length) {
        alert("no hay amigos en la lista");
    };
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado= amigos[randomIndex];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML="el amigo secreto es" + " " + amigoSorteado;
};