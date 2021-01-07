const taskCreationButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreation() {
  const inputText = document.getElementById('texto-tarefa').value;
  const taskText = taskList.appendChild(document.createElement('li'));
  taskText.innerHTML = inputText;
  taskText.className = 'uncomplete';
  document.getElementById('texto-tarefa').value = '';
}

function changeTaskColor(originEvent) {
  const taskCollection = document.querySelectorAll('li');
  for (let index = 0; index < taskCollection.length; index += 1) {
    taskCollection[index].style.backgroundColor = 'white';
  }
  originEvent.target.style.backgroundColor = 'gray';
}

function taskCompletion(originEvent) {
  if (originEvent.target.style.textDecoration === 'line-through') {
    originEvent.target.style.textDecoration = 'none';
    originEvent.target.className = 'uncomplete';
  } else {
    originEvent.target.style.textDecoration = 'line-through';
    originEvent.target.className = 'completed';
  }
}

taskCreationButton.addEventListener('click', taskCreation);
taskList.addEventListener('click', changeTaskColor);
taskList.addEventListener('dblclick', taskCompletion);
