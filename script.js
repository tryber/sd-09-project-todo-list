const taskCreationButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreation() {
  const inputText = document.getElementById('texto-tarefa').value;
  const taskText = taskList.appendChild(document.createElement('li'));
  taskText.innerHTML = inputText;
  document.getElementById('texto-tarefa').value = '';
}

function changeTaskColor(originEvent) {
  let taskCollection = document.querySelectorAll('li');
  for (index = 0; index < taskCollection.length; index += 1) {
    taskCollection[index].style.backgroundColor = 'white';
  }
  originEvent.target.style.backgroundColor = 'gray';
}

taskCreationButton.addEventListener('click', taskCreation);
taskList.addEventListener('click', changeTaskColor);
