function pushTaskToList() {
  const createTaskBtn = document.getElementById('criar-tarefa');
  createTaskBtn.addEventListener('click', function () {
    const inputText = document.querySelector('#texto-tarefa').value;
    const taskLine = document.createElement('li');
    const taskList = document.querySelector('#lista-tarefas');
    document.getElementById('texto-tarefa').value = ';
    taskLine.innerText = inputText;
    taskLine.className = 'linha';
    taskList.appendChild(taskLine);
  });
}
pushTaskToList();

function selectTaskOnList() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', function (event) {
    const allItens = document.querySelectorAll('.linha');
    if (event.target.className.indexOf('selecionado') === -1) {
      for (let index = 0; index < allItens.length; index += 1) {
        allItens[index].classList.remove('selecionado');
      }
      event.target.classList.add('selecionado');
    } else {
      event.target.classList.remove('selecionado');
    }
  });
}
selectTaskOnList();

function completeTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.className.indexOf('completed') === -1) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}
completeTask();

function eraseList() {
  const eraseListBtn = document.getElementById('apaga-tudo');
  eraseListBtn.addEventListener('click', function () {
    const allList = document.querySelector('#lista-tarefas');
    while (allList.firstChild) {
      allList.removeChild(allList.firstChild);
    }
  });
}
eraseList();

function removeCompleted() {
  const eraseCompletedBtn = document.querySelector('#remover-finalizados');
  eraseCompletedBtn.addEventListener('click', function () {
    const completedTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < completedTasks.length; index += 1) {
      document
        .querySelector('#lista-tarefas')
        .removeChild(completedTasks[index]);
    }
  });
}
removeCompleted();
