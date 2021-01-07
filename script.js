const taskCreationButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

taskCreationButton.addEventListener('click', taskCreation);

function taskCreation() {
  let inputText = document.getElementById('texto-tarefa').value;
  let taskText = taskList.appendChild(document.createElement('li'));
  taskText.innerHTML = inputText;
  console.log(taskText);
}
