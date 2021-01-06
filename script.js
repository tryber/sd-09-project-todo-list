const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');

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

document.querySelector('#criar-tarefa').addEventListener('click', addToDo);

// LIMPA LISTA
function clearList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', clearList);
