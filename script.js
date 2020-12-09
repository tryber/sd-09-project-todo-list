window.onload = function () {
  actionManagement();
}

function actionManagement(element) {
    buttonAddTask('criar-tarefa');
}

function buttonAddTask(buttonId) {
  const id = '#' + buttonId;
  const button = document.querySelector(id);
  button.addEventListener('click', addTask);
}

function addTask() {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = createNewLi();
  li.innerText = input.value;
  clearInput(input.id);
  ol.appendChild(li);
}

function createNewLi() {
  const li = document.createElement('li');
  return li;
}

function clearInput(inputId) {
  const id = '#' + inputId;
  const input = document.querySelector(id);
  input.value = '';
}
