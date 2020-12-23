const buttonAddTasks = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');

function createTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return alert('não é possível criar task vazia.');
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

function dbClickCompleted(event) {
  event.target.classList.toggle('completed');
}

function deleteAllTasks() {
  const tasksCreated = document.querySelectorAll('.task');
  for (let index = 0; index < tasksCreated.length; index += 1) {
    listTask.removeChild(tasksCreated[index]);
  }
}

function removeTasksFinished() {
  const tasksSelected = document.querySelectorAll('.completed');
  for (let index = 0; index < tasksSelected.length; index += 1) {
    listTask.removeChild(tasksSelected[index]);
  }
}

function eventsListenersAll() {
  buttonAddTasks.addEventListener('click', createTask);
  listTask.addEventListener('click', bgTaskColorChange);
  listTask.addEventListener('dblclick', dbClickCompleted);
  buttonDelete.addEventListener('click', deleteAllTasks);
  buttonRemoveFinished.addEventListener('click', removeTasksFinished);
}

eventsListenersAll();
