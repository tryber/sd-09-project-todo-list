const listaTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagaTudo = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const salvaLista = document.querySelector('#salvar-tarefas');
const moveCima = document.querySelector('#mover-cima');
const moveBaixo = document.querySelector('#mover-baixo');
const apagaSelecionado = document.querySelector('#remover-selecionado');

window.onload = function () {
  listaTarefas.innerHTML = localStorage.toDoList;
};

function addTask() {
  criarTarefa.addEventListener('click', function () {
    const itemTarefa = document.createElement('li');
    itemTarefa.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(itemTarefa);
    textoTarefa.value = '';
  });
}
addTask();

function selectItem() {
  listaTarefas.addEventListener('click', function (event) {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      const selecionado = document.querySelector('.selected');
      if (selecionado) {
        selecionado.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}
selectItem();

function completeItem() {
  listaTarefas.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}
completeItem();

function deleteAll() {
  apagaTudo.addEventListener('click', function () {
    const item = document.querySelectorAll('li');
    for (let index = 0; index < item.length; index += 1) {
      item[index].remove();
    }
  });
}
deleteAll();

function deleteCompleted() {
  apagaFinalizados.addEventListener('click', function () {
    const completed = document.querySelectorAll('.completed');
    for (let index = 0; index < completed.length; index += 1) {
      completed[index].remove();
    }
  });
}
deleteCompleted();

function saveList() {
  salvaLista.addEventListener('click', function () {
    localStorage.toDoList = listaTarefas.innerHTML;
  });
}
saveList();

function moveUp() {
  moveCima.addEventListener('click', function () {
    const selecionado = document.querySelector('.selected');
    if (selecionado !== null && selecionado !== selecionado.parentNode.firstChild) {
      const selecionadoText = selecionado.innerText;
      const selecionadoClass = selecionado.className;
      selecionado.innerText = selecionado.previousElementSibling.innerText;
      selecionado.previousElementSibling.innerText = selecionadoText;
      selecionado.className = selecionado.previousElementSibling.className;
      selecionado.previousElementSibling.className = selecionadoClass;
    }
  });
}
moveUp();

function moveDown() {
  moveBaixo.addEventListener('click', function () {
    const selecionado = document.querySelector('.selected');
    if (selecionado !== null && selecionado !== selecionado.parentNode.lastChild) {
      const selecionadoText = selecionado.innerText;
      const SelecionadoClass = selecionado.className;
      selecionado.innerText = selecionado.nextElementSibling.innerText;
      selecionado.nextElementSibling.innerText = selecionadoText;
      selecionado.className =selecionado.nextElementSibling.className;
      selecionado.nextElementSibling.className = SelecionadoClass;
    }
  });
}
moveDown();

function removeSelected() {
  const selecionado = document.getElementsByClassName('selected');
  apagaSelecionado.addEventListener('click', function () {
    for (let index = 0; index < selecionado.length; index += 1) {
      selecionado[index].remove();
    }
  });
}
removeSelected();
