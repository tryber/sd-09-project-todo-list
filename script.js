const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');

function selectTask(event) {
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
  const taskElement = document.createElement('li');
  taskElement.innerText = inputElement.value;
  listElement.appendChild(taskElement);

  taskElement.addEventListener('dblclick', toggleCompletedTask);
  taskElement.addEventListener('click', selectTask);
  inputElement.value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addToDo);

function clearList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', clearList);

function removeCompletedTasks() {
  const tasksCreated = document.querySelectorAll('#lista-tarefas li');
  tasksCreated.forEach((task) => {
    if (task.classList.contains('completed')) {
      listElement.removeChild(task);
    }
  });
}

document.querySelector('#remover-finalizados').addEventListener('click', removeCompletedTasks);
