let amigos=[];
let contadorSortados = 0;

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
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.onclick = () => eliminarParticipante(index);
        botonEliminar.className = "button-eliminar";
        item.appendChild(botonEliminar);
        item.appendChild(document.createTextNode(amigos[index]));
        listaAmigos.appendChild(item);
    };
};

function eliminarParticipante(index) {
    amigos.splice(index, 1);
    renderizarAmigos();
};

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("No hay participantes para el sorteo");
        return
    };

    if (amigos.length < 2 && contadorSortados === 0) {
        alert("Debe haber al menos 2 amigos para hacer el sorteo.");
        return;
    };

    contadorSortados++;
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado= amigos[randomIndex];
    let numeroSorteo = document.getElementById("numeroSorteo");
    numeroSorteo.innerHTML = `Sorteos realizados: ${contadorSortados}`;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`El amigo sorteado es: ${amigoSorteado}`;
    eliminarParticipante(randomIndex);
};
