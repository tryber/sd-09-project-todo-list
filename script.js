const taskCreationButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreation() {
  const inputText = document.getElementById('texto-tarefa').value;
  const taskText = taskList.appendChild(document.createElement('li'));
  taskText.innerHTML = inputText;
  document.getElementById('texto-tarefa').value = '';
}

taskCreationButton.addEventListener('click', taskCreation);
