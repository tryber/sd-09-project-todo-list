const buttonAddTasks = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function createTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return;
  }
  const createLi = document.createElement('li');
  createLi.innerText = inputTask.value;
  createLi.className = 'task';
  listTask.appendChild(createLi);
  inputTask.value = '';
}

function bgTaskColorChange(event) {
  const tasksList = document.querySelector('.selected');
  if (tasksList !== null) {
    tasksList.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function eventsListenersAll() {
  buttonAddTasks.addEventListener('click', createTask);
  listTask.addEventListener('click', bgTaskColorChange);
}

eventsListenersAll();
