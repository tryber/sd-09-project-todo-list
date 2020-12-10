function setFocusToInputText() {
  inputText = document.getElementById('texto-tarefa');
  inputText.focus();
}

function createTask() {
  const inputTextOfTask = document.getElementById('texto-tarefa');
  const taskTextTyped = inputTextOfTask.value;
  const taskList = document.getElementById('lista-tarefas');
  const newTaskElement = document.createElement('li');
  if (taskTextTyped === '') {
    alert('Please type some text to describe your task!');
    setFocusToInputText();
    return null;
  }
  newTaskElement.classList.add('task-item');
  newTaskElement.innerText = taskTextTyped;
  taskList.appendChild(newTaskElement);
  inputTextOfTask.value = '';
  setFocusToInputText();
  return 0;
}

function unselectTaskItem() {
  const taskItems = document.querySelectorAll('.task-item');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskItems[index].classList.remove('selected-task');
  }
}

function selectTaskItem(evt) {
  if (evt.target.className) {
    unselectTaskItem();
    evt.target.classList.add('selected-task');
    setFocusToInputText();
  }
}

const createTaskButton = document.getElementById('criar-tarefa');
const taskOrderedList = document.getElementById('lista-tarefas');
taskOrderedList.addEventListener('click', selectTaskItem);
createTaskButton.addEventListener('click', createTask);

