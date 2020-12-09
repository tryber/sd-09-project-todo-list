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

function changeNotSelected() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].className = 'task-list';
  }
}

function changeCompleted() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    if (listTask[index].className == 'task-list completed') {
      listTask[index].className = 'task-list completed';
    } else if (listTask[index].className == 'task-list completed selected') {
      listTask[index].className = 'task-list completed';
    } else if (listTask[index].className == 'task-list selected completed') {
      listTask[index].className = 'task-list completed';
    } else {
      listTask[index].className = 'task-list';
    }
  }
}

function changeSelected(origin) {
  if (origin.target.className == 'task-list') {
    changeCompleted()
    origin.target.className += ' selected';
  } else if (origin.target.className == 'task-list completed') {
    changeCompleted();
    origin.target.className += ' selected';
  } else { 
    changeCompleted();
  }
}

function completedTask(origin) {
  if (origin.target.className == 'task-list') {
    origin.target.className += ' completed';
  } else if (origin.target.className == 'task-list selected') {
    origin.target.className += ' completed';
  } else if (origin.target.className == 'task-list selected completed') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className == 'task-list completed selected') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className == 'task-list completed') {
    origin.target.className = 'task-list';
  }
}

function taskListLoop() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].addEventListener('click', changeSelected);
    listTask[index].addEventListener('dblclick', completedTask)
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
