window.onload = function() {
  const getAddButton = document.getElementById('criar-tarefa');
  getAddButton.addEventListener('click', addTask);
  const getRemoveBtn = document.getElementById('apaga-tudo');
  getRemoveBtn.addEventListener('click', removeAll);
  const getRemoveCompletedBtn = document.getElementById('remover-finalizados');
  getRemoveCompletedBtn.addEventListener('click', removeCompleted);
  const getRemoveSelectedBtn = document.getElementById('remover-selecionado');
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
  while (getLists.children.length > 0) {
    getLists.removeChild(getLists.children[0]);
  }
}

function removeCompleted() {
  const getCompleteds = document.getElementsByClassName('completed');
  const getLists = document.getElementById('lista-tarefas');
  while (getCompleteds.length > 0) {
    getLists.removeChild(getCompleteds[0]);
  }
}

function removeSelected() {
  const getSelecteds = document.getElementsByClassName('colored');
  const getLists = document.getElementById('lista-tarefas');
  while (getSelecteds.length > 0) {
    getLists.removeChild(getSelecteds[0]);
  }
}
