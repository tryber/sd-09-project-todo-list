function inputTaskOnTheList() {
  const taskList = document.querySelector('#lista-tarefas');
  const taskText = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  
  if (taskText.value !== '') {
  listElement.innerText = taskText.value;
  taskList.appendChild(listElement);
  taskText.value = '';
  }
}

function taskButton() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', inputTaskOnTheList);
}

taskButton();