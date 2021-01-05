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
  if (!event.target.style.backgroundColor == "rgb(128,128,128") {
    event.target.style.backgroundColor = rgb(128,128,128);
  }
}

criarTarefa.addEventListener ('click', adicionarTarefa);

listaTarefas.addEventListener("click", backgroundItemSelecionado);



