// Create Task in list
function createTaskElement(taskName) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.classList.add('secondary-color');
  taskElement.innerText = taskName;
  return taskElement;
}

// Add task in list
function addTaskInlist(button, inputText) {
  const listContainer = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function() {
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
}
