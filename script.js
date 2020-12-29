const novaTarefa = document.getElementById('criar-tarefa');
const nomeNovaTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTarefas = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');
const salvaTarefas = document.getElementById('salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');

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
  for (let helper = 0; helper < completas.length; helper += 1) {
    if (completas[helper] === index) {
      tarefa.classList.add('completed');
    }
  }
}

function tarefasSalvas() {
  if (localStorage.length > 0) {
    const salvas = JSON.parse(localStorage.getItem('tarefas'));
    for (let index = 0; index < salvas.length; index += 1) {
      const tarefa = document.createElement('li');
      tarefa.innerText = salvas[index];
      tarefasSalvasCompletas(index, tarefa);
      listaTarefas.appendChild(tarefa);
    }
  }
}

tarefasSalvas();

function descobreTarefaSelecionada(lista) {
  let tarefaSelecionada;
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].classList.contains('selecionado')) {
      tarefaSelecionada = index;
    }
  }
  return tarefaSelecionada;
}

function tarefaSobe() {
  const tarefa = listaTarefas.getElementsByClassName('selecionado');
  const lista = listaTarefas.getElementsByTagName('li');
  const helper = document.createElement('li');
  if (tarefa.length === 0) {
    return;
  }
  const tarefaSelecionada = descobreTarefaSelecionada(lista);
  if (tarefaSelecionada === 0) {
    return;
  }
  helper.classList = lista[tarefaSelecionada].classList;
  helper.textContent = lista[tarefaSelecionada].textContent;
  lista[tarefaSelecionada].classList = lista[tarefaSelecionada - 1].classList;
  lista[tarefaSelecionada].textContent = lista[tarefaSelecionada - 1].textContent;
  lista[tarefaSelecionada - 1].classList = helper.classList;
  lista[tarefaSelecionada - 1].textContent = helper.textContent;
}

moverCima.addEventListener('click', tarefaSobe);

function tarefaDesce() {
  const tarefa = listaTarefas.getElementsByClassName('selecionado');
  const lista = listaTarefas.getElementsByTagName('li');
  const helper = document.createElement('li');
  if (tarefa.length === 0) {
    return;
  }
  const tarefaSelecionada = descobreTarefaSelecionada(lista);
  if (tarefaSelecionada === lista.length - 1) {
    return;
  }
  helper.classList = lista[tarefaSelecionada].classList;
  helper.textContent = lista[tarefaSelecionada].textContent;
  lista[tarefaSelecionada].classList = lista[tarefaSelecionada + 1].classList;
  lista[tarefaSelecionada].textContent = lista[tarefaSelecionada + 1].textContent;
  lista[tarefaSelecionada + 1].classList = helper.classList;
  lista[tarefaSelecionada + 1].textContent = helper.textContent;
}

moverBaixo.addEventListener('click', tarefaDesce);
