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
  createLi.addEventListener('click', bgTaskColorChange);
}

function bgTaskColorChange(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function eventsListenersAll() {
  buttonAddTasks.addEventListener('click', createTask);

}

eventsListenersAll();
