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


function changeSelected(origin) {
  console.log('NM');
  if (origin.target.className == 'task-list') {
    origin.target.className += ' selected';
  } else {
    origin.target.className = 'task-list';
  } 
}

function taskListLoop() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].addEventListener('click', changeSelected);
  }
}

function createTask() {
  const textInput = document.querySelector('#texto-tarefa');
  if (textInput.value === '') {
    return;
  }
  texto = textInput.value;
  textInput.value = '';
  addListTask(texto);
  taskListLoop();
}

buttonTask.addEventListener('click', createTask);


function colorList() {
  
}

