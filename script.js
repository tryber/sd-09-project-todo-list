const novaTarefa = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const createButton = document.getElementById('criar-tarefa');
const tarefas = document.getElementsByTagName('li');

function criarTarefa () {
    const novoElemento = document.createElement('li');
    novoElemento.innerText = novaTarefa.value;
    listaDeTarefas.appendChild(novoElemento);
    novoElemento.addEventListener('click', function(event) {
        let teste = document.querySelector('.selected');
        if (teste){
            teste.classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
    novaTarefa.value = '';
}

createButton.addEventListener("click", criarTarefa);
