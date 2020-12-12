const listaTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagaTudo = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const salvaLista = document.querySelector('#salvar-tarefas');
const moveCima = document.querySelector('#mover-cima');
const moveBaixo = document.querySelector('#mover-baixo');

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
    const selecionadoClass = selecionado.classList.value;
    if (selecionado) {
      const previous = selecionado.previousSibling;
      if (previous) {
        const previousValue = previous.innerText;
        const previousClass = previous.classList.value;
        previous.innerText = selecionado.innerText;
        previous.classList.value = selecionadoClass;
        selecionado.innerText = previousValue;
        selecionado.classList.value = previousClass;
        
      }
    }
  });
}
moveUp();

function moveDown() {
  moveBaixo.addEventListener('click', function () {
    const selecionado = document.querySelector('.selected');
    const selecionadoClass = selecionado.classList.value;
    if (selecionado) {
      const next = selecionado.nextSibling;
      if (next) {
        const nextValue = next.innerText;
        const nextClass = next.classList.value;
        next.innerText = selecionado.innerText;
        next.classList.value = selecionadoClass;
        selecionado.innerText = nextValue;
        selecionado.classList.value = nextClass;
      }
    }
  });
}
moveDown();

