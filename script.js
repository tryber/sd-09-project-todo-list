const novaTarefa = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const createButton = document.getElementById('criar-tarefa');
const tarefas = document.getElementsByTagName('li');
const clearButton = document.getElementById('apaga-tudo');
const completed = document.getElementsByClassName("completed");
const clearCompletedButton = document.getElementById('remover-finalizados');

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
        event.target.classList.toggle("completed");
    })
    novaTarefa.value = '';
}

function limparTarefas () {
    for (let index = (tarefas.length - 1); index >= 0; index -= 1) {
        const tarefa = tarefas[index];
        tarefa.remove();
    }
}

function limparCompletadas () {
    for (let index = (completed.length - 1); index >= 0; index -= 1) {
        const completedTask = completed[index];
        completedTask.remove();
    }
}

createButton.addEventListener('click', criarTarefa);
clearButton.addEventListener('click', limparTarefas);
clearCompletedButton.addEventListener('click', limparCompletadas);
