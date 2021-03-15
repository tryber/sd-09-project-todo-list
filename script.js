function createTask() {
  const btnAddTask = document.querySelector('#criar-tarefa');
  btnAddTask.addEventListener('click', () => {
    const taskText = document.querySelector('#texto-tarefa');
    const task = document.createElement('li');

    task.innerText = taskText.value;
    document.querySelector('#lista-tarefas').appendChild(task);
    taskText.value = '';
  });
}
createTask();

function changeTaskColor() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', (event) => {
    for (let index = 0; index < taskList.childElementCount; index += 1) {
      taskList.children[index].removeAttribute('style');
    }
    const task = event.target;
    task.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
}
changeTaskColor();

function completedTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', (event) => {
    const task = event.target;
    if (task.className !== 'completed') {
      task.className = 'completed';
    } else {
      task.classList.remove('completed');
    }
  });
}
completedTask();

function clearTasks() {
  const btnClearTasks = document.querySelector('#apaga-tudo');
  btnClearTasks.addEventListener('click', () => {
    const parentTaskList = document.querySelector('#lista-tarefas');
    const taskList = document.querySelectorAll('#lista-tarefas > li');

    for (let index = 0; index < taskList.length; index += 1) {
      parentTaskList.removeChild(taskList[index]);
    }
  });
}
clearTasks();

function removeFinishedTasks() {
  const btnremoveFinishedTasks = document.querySelector('#remover-finalizados');
  btnremoveFinishedTasks.addEventListener('click', () => {
    const parentTaskList = document.querySelector('#lista-tarefas');
    const finishedTaskList = document.querySelectorAll('.completed');

    for (let index = 0; index < finishedTaskList.length; index += 1) {
      parentTaskList.removeChild(finishedTaskList[index]);
    }
  });
}
removeFinishedTasks();

function saveTasks() {
  const btnSaveTasks = document.querySelector('#salvar-tarefas');
  btnSaveTasks.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    localStorage.setItem('tasklist', taskList.innerHTML);
  });
}
saveTasks();

function loadTasks() {
  const storageList = localStorage.getItem('tasklist');
  const taskList = document.querySelector('#lista-tarefas');
  taskList.innerHTML = storageList;
}
loadTasks();

function moveToUp() {
  const btnMoveToUp = document.querySelector('#mover-cima');
  btnMoveToUp.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    for (let i = 0; i < taskList.childElementCount; i += 1) {
      if (taskList.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        if (taskList.children[i].previousSibling) {
          taskList.insertBefore(taskList.children[i], taskList.children[i].previousSibling);
        }
      }
    }
  });
}
moveToUp();

function moveToDown() {
  const btnMoveToDown = document.querySelector('#mover-baixo');
  btnMoveToDown.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    for (let i = 0; i < taskList.childElementCount; i += 1) {
      if (taskList.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        if (taskList.children[i].nextSibling) {
          taskList.insertBefore(taskList.children[i + 1],
            taskList.children[i + 1].previousSibling);
        }
      }
    }
  });
}
moveToDown();
