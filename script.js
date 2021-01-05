const criarTarefa = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function adicionarTarefa () {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  textoTarefa.value = '';
  listaTarefas.appendChild(tarefa);
}

function backgroundItemSelecionado(event) {
  if (event.target == listaTarefas) {
    return;
  }
  const listaItens = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listaItens.length; index += 1) {
    listaItens[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function completarTarefa (event) {
  event.target.classList.toggle('completed');
}

criarTarefa.addEventListener ('click', adicionarTarefa);

listaTarefas.addEventListener('click', backgroundItemSelecionado);

listaTarefas.addEventListener('dblclick', completarTarefa);
