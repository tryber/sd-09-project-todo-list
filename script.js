const taskCreationButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function taskCreation() {
  const inputText = document.getElementById('texto-tarefa').value;
  const taskText = taskList.appendChild(document.createElement('li'));
  taskText.innerHTML = inputText;
  document.getElementById('texto-tarefa').value = '';
}

function changeTaskColor(originEvent) {
  originEvent.target.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
  console.log(originEvent.target)
}

taskCreationButton.addEventListener('click', taskCreation);
taskList.addEventListener('click', changeTaskColor);
