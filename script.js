function createTask() {
  const inputTextOfTask = document.getElementById('texto-tarefa');
  const taskTextTyped = inputTextOfTask.value;
  const taskList = document.getElementById('lista-tarefas');
  const newTaskElement = document.createElement('li');
  if (taskTextTyped === '') {
    alert('Please type some text to describe your task!');
    return null;
  }
  newTaskElement.innerText = taskTextTyped;
  taskList.appendChild(newTaskElement);
  inputTextOfTask.value = '';
}

let createTaskButton = document.getElementById('criar-tarefa');
createTaskButton.addEventListener('click', createTask);