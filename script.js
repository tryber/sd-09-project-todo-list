const buttonAddTasks = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function createTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return;
  };
  const createLi = document.createElement('li');
  createLi.innerText = inputTask.value;
  createLi.className = 'task';
  listTask.appendChild(createLi);
  inputTask.value = '';
}

function buttonAddTaskList() {
  buttonAddTasks.addEventListener('click', createTask);
}

buttonAddTaskList();
