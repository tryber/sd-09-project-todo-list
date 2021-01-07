const buttonCriarTarefa = document.querySelector("#criar-tarefa");

function checkInput() {
    let textoTarefa = document.querySelector("#texto-tarefa").value;
    let adicionaTarefa = document.querySelector("#lista-tarefa");
    let criaTarefa = document.querySelector("li");

    adicionaTarefa.appendChild(criaTarefa).innerText = textoTarefa;
    document.querySelector("#texto-tarefa").value = "";
}

buttonCriarTarefa.addEventListener("click", checkInput);

