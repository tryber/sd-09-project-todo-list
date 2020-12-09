function createButton(idC, name, father) {
  const button = document.createElement('button');
  button.id = idC;
  button.innerText = name;
  const buttonFather = document.querySelector(father);
  buttonFather.appendChild(button);
}

createButton('criar-tarefa', 'Adicionar', '.create-task');
const buttonTask = document.querySelector('#criar-tarefa');

function addListTask(task) {
  const list = document.createElement('li');
  list.className = 'task-list';
  list.innerText = task;
  const listOrd = document.querySelector('#lista-tarefas')
  listOrd.appendChild(list)
}

function createTask() {
  const textInput = document.querySelector('#texto-tarefa');
  if (textInput.value === '') {
    return;
  }
  texto = textInput.value;
  textInput.value = '';
  addListTask(texto);
}

buttonTask.addEventListener('click', createTask);
