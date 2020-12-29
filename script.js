const novaTarefa = document.getElementById('criar-tarefa');
const nomeNovaTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTarefas = document.getElementById('apaga-tudo');

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = nomeNovaTarefa.value;
  listaTarefas.appendChild(tarefa);
  nomeNovaTarefa.value = '';
}

novaTarefa.addEventListener('click', criarTarefa);

function selecionarTarefa(event) {
  const tarefa = event.target;
  const lista = listaTarefas.getElementsByTagName('li');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].classList.remove('selecionado');
  }
  tarefa.classList.add('selecionado');
}

listaTarefas.addEventListener('click', selecionarTarefa);

function completarTarefa(event) {
  const tarefa = event.target;
  if (tarefa.classList.contains('completed')) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}

listaTarefas.addEventListener('dblclick', completarTarefa);

function apagaTudo() {
  const lista = listaTarefas.getElementsByTagName('li');
  while (lista.length > 0) {
    listaTarefas.removeChild(lista[lista.length - 1]);
  }
}

apagaTarefas.addEventListener('click', apagaTudo);
