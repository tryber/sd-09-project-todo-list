const novaTarefa = document.getElementById('criar-tarefa');
const nomeNovaTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  let tarefa = document.createElement('li');
  tarefa.innerText = nomeNovaTarefa.value;
  listaTarefas.appendChild(tarefa);
  nomeNovaTarefa.value = '';
}

novaTarefa.addEventListener('click', criarTarefa);
