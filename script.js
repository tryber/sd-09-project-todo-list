const liSelected = '';

function selectedItem(event) {
  if (event.target.localName === 'li') {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.style.color = 'white';
  }
}

function listSelector(listId) {
  const id = `#${listId}`;
  const list = document.querySelector(id);
  list.addEventListener('click', selectedItem);
}

function clearInput(inputId) {
  const id = `#${inputId}`;
  const input = document.querySelector(id);
  input.value = '';
}

function createNewLi() {
  const li = document.createElement('li');
  return li;
}

function addTask() {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = createNewLi();
  li.innerText = input.value;
  clearInput(input.id);
  ol.appendChild(li);
}

function buttonAddTask(buttonId) {
  const id = `#${buttonId}`
  const button = document.querySelector(id);
  button.addEventListener('click', addTask);
}

function actionManagement() {
  buttonAddTask('criar-tarefa');
  listSelector('lista-tarefas');
}

window.onload = function () {
  actionManagement();
}
