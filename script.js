function checkText(task) {
  if (task === '') {
    alert('FUDEEEEEEEEEEEEU');
  } else {
    const taskList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.className = 'task';

    taskList.appendChild(listItem);
    document.querySelector('#texto-tarefa').value = '';
  }
}

function addTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const inputBox = document.querySelector('#texto-tarefa');
  addButton.addEventListener('click', function () {
      checkText(inputBox.value);
  });
  inputBox.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    checkText(inputBox.value);
    }
  });
}

addTask();

function changeBackgroundColor() {
    const list = document.querySelector('ol#lista-tarefas');
    list.addEventListener('click', function (eventT) {
      const listElements = document.querySelectorAll('ol#lista-tarefas li');
      for (let index = 0; index < listElements.length; index += 1) {
        listElements[index].style.backgroundColor = '';
      }
      eventT.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
}

changeBackgroundColor();

function clearAll() {
  const clearButton = document.querySelector('#apaga-tudo');

  clearButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const task = document.querySelectorAll('.task');

    for (let index = 0; index < task.length; index += 1) {
      taskList.removeChild(task[index]);
    }
  });
}

changeBackgroundColor();
clearAll();
