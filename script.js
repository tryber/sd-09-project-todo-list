const novaTarefa = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const createButton = document.getElementById('criar-tarefa');

function criarTarefa () {
    const novoElemento = document.createElement('li');
    novoElemento.innerText = novaTarefa.value;
    console.log(novoElemento.innerText);
    listaDeTarefas.appendChild(novoElemento);
    novaTarefa.value = '';
}

createButton.addEventListener("click", criarTarefa);
