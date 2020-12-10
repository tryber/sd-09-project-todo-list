// Mark
function markCompletedTask(event) {
  event.target.classList.toggle('completed');
}

// Change Background
function selectedElement(event) {
  const taskElements = document.querySelectorAll('.task');
  taskElements.forEach((task) => {
    if (task.style.backgroundColor === 'rgb(128, 128, 128)') {
      task.style.backgroundColor = '';
    }
  });
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Create Task in list
function createTaskElement(taskName) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.classList.add('block-text-selected');
  taskElement.innerText = taskName;
  taskElement.addEventListener('click', selectedElement);
  taskElement.addEventListener('dblclick', markCompletedTask);
  return taskElement;
}

// Add task in list
function addTaskInlist(button, inputText) {
  const listContainer = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    const valueInput = inputText.value;
    const taskElement = createTaskElement(valueInput);
    listContainer.appendChild(taskElement);
    inputText.value = '';
  });
}

window.onload = function () {
  const textTaskInput = document.querySelector('#texto-tarefa');
  const buttonAddTask = document.querySelector('#criar-tarefa');
  addTaskInlist(buttonAddTask, textTaskInput);
};
