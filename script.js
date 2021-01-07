const addTasksButton = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');

function createTasks() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return alert('É impossível adicionar tarefa vazia, digite uma tarefa porfavor!');
  }
  const createList = document.createElement('li');
  createList.innerText = inputTask.value;
  createList.className = 'task';
  listOfTasks.appendChild(createList);
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

const delButton = document.querySelector('#apaga-tudo');

function delAllTasks() {
  const tasksCreated = document.querySelectorAll('.task');
  for (let reset = 0; reset < tasksCreated.length; reset += 1) {
    listOfTasks.removeChild(tasksCreated[reset]);
  }
}

const rmButton = document.querySelector('#remover-finalizados');

function rmTasksFinished() {
  const selectedTasks = document.querySelectorAll('.completed');
  for (let eletask = 0; eletask < selectedTasks.length; eletask += 1) {
    listOfTasks.removeChild(selectedTasks[eletask]);
  }
}

function eventsListenersAll() {
  addTasksButton.addEventListener('click', createTasks);
  listOfTasks.addEventListener('click', bgTaskColorChange);
  listOfTasks.addEventListener('dblclick', dbClickCompleted);
  delButton.addEventListener('click', delAllTasks);
  rmButton.addEventListener('click', rmTasksFinished);
}

eventsListenersAll();
createTasks();
bgTaskColorChange();
dbClickCompleted();
delAllTasks();
rmTasksFinished();