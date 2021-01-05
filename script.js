const novaTarefa = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const createButton = document.getElementById('criar-tarefa');
const tarefas = document.getElementsByTagName('li');

function criarTarefa () {
    const novoElemento = document.createElement('li');
    novoElemento.innerText = novaTarefa.value;
    listaDeTarefas.appendChild(novoElemento);
    novoElemento.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
        if (selected){
            selected.classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
    novoElemento.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains("completed")) {
            event.target.classList.remove("completed");
        } else {
            event.target.classList.add("completed");
        }
    })
    novaTarefa.value = '';
}

createButton.addEventListener("click", criarTarefa);
