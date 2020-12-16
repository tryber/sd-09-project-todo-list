window.onload = function() {
  const getAddButton = document.getElementById('criar-tarefa');
  getAddButton.addEventListener('click', addTask);
  const getRemoveBtn = document.getElementById('apaga-tudo');
  getRemoveBtn.addEventListener('click', removeAll);
  const getRemoveSelectedBtn = document.getElementById('remover-finalizados');
  getRemoveSelectedBtn.addEventListener('click', removeSelected);
};

function addTask() {
  let getInputValue = document.getElementById('texto-tarefa');
  let getList = document.getElementById('lista-tarefas');
  let createLists = document.createElement('li');
  getList.appendChild(createLists);
  createLists.addEventListener('dblclick', selectTask);
  createLists.addEventListener('click', addBackgroundList);
  createLists.innerText = getInputValue.value;
  getInputValue.value = '';
}

function selectTask(event) {
  let getTargetList = event.target;
  let toggleTeste = getTargetList.classList.toggle('completed');
}

function addBackgroundList(event) {
  const listOfTasks = document.querySelector('.colored');
  if (listOfTasks !== null) {
    listOfTasks.classList.remove('colored');
  }
  event.target.classList.toggle('colored');
}

function removeAll() {
  const getLists = document.getElementById('lista-tarefas');
  const teste = getLists.children.length - 1;
  for (let index = teste; index <= teste; index -= 1) {
    getLists.removeChild(getLists.children[index]);
  }
}

function removeSelected() {
  const getSelecteds = document.getElementsByClassName('completed');
  const getLists = document.getElementById('lista-tarefas');
  const teste = getSelecteds.length - 1;
  for (let index = teste; index >= teste; index -= 1) {
    getLists.removeChild(getSelecteds[index]);
  }
}
