const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');

function colorTask(event) {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach((task) => {
    task.style.backgroundColor = '';
  });
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function toggleCompletedTask(event) {
  event.target.classList.toggle('completed');
}

function addToDo() {
  const createTask = document.createElement('li');
  createTask.innerText = inputElement.value;
  listElement.appendChild(createTask);

  createTask.addEventListener('dblclick', toggleCompletedTask);
  createTask.addEventListener('click', colorTask);
  inputElement.value = '';
}

buttonCreateTask.addEventListener('click', addToDo);
