const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');

// TASK SELECIONADA (FUNDO CINZA)
function colorTask(event) {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach((task) => {
    task.style.backgroundColor = '';
  });
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// TASKS COMPLETADAS (RISCADO)
function toggleCompletedTask(event) {
  event.target.classList.toggle('completed');
}

// ADICIONA TO DO
function addToDo() {
  const taskElement = document.createElement('li');
  taskElement.innerText = inputElement.value;
  listElement.appendChild(taskElement);

  taskElement.addEventListener('dblclick', toggleCompletedTask);
  taskElement.addEventListener('click', colorTask);
  inputElement.value = '';
}

buttonCreateTask.addEventListener('click', addToDo);

