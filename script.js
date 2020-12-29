const novaTarefa = document.getElementById('criar-tarefa');
const nomeNovaTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTarefas = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');
const salvaTarefas = document.getElementById('salvar-tarefas');

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

function removerFinalizados() {
  const finalizados = listaTarefas.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    listaTarefas.removeChild(finalizados[finalizados.length - 1]);
  }
}

removeFinalizados.addEventListener('click', removerFinalizados);

function salvarTarefas() {
  const lista = listaTarefas.getElementsByTagName('li');
  const tarefas = [];
  const completos = [];
  for (let index = 0; index < lista.length; index += 1) {
    tarefas[index] = lista[index].textContent;
    if (lista[index].classList.contains('completed')) {
      completos.push(index);
    }
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  localStorage.setItem('completas', JSON.stringify(completos));
}

salvaTarefas.addEventListener('click', salvarTarefas);

function tarefasSalvasCompletas(index, tarefa) {
  const completas = JSON.parse(localStorage.getItem('completas'));
  const counter = localStorage.getItem('completas').split(',');
  for (let helper = 0; helper < counter.length; helper += 1) {
    if (completas[helper] === index) {
      tarefa.classList.add('completed');
    }
  }
}

function tarefasSalvas() {
  const salvas = JSON.parse(localStorage.getItem('tarefas'));
  const counter = localStorage.getItem('tarefas').split(',');
  for (let index = 0; index < counter.length; index += 1) {
    const tarefa = document.createElement('li');
    tarefa.innerText = salvas[index];
    tarefasSalvasCompletas(index, tarefa);
    listaTarefas.appendChild(tarefa);
  }
}

tarefasSalvas();
