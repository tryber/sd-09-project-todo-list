function removeSelectedClass() {
  const listItemArray = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItemArray.length; index += 1) {
    listItemArray[index].classList.remove('selected');
  }
}

function addSelectedClass(event) {
  removeSelectedClass();
  event.classList += ' selected';
}

function addCompletedClass(event) {
  if (event.classList.contains('completed')) {
    event.classList.remove('completed');
  } else {
    event.classList += ' completed';
  }
}

function clearTaskList() {
  const taskList = document.querySelector('#lista-tarefas');
  const listItemArray = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItemArray.length; index += 1) {
    const listItem = listItemArray[index];
    taskList.removeChild(listItem);
  }
}

function removeCompletedTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  const completedTasksArray = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasksArray.length; index += 1) {
    const completedTask = completedTasksArray[index];
    taskList.removeChild(completedTask);
  }
}

function addNewTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  if (inputField.value.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    listItem.className = 'list-item';
    listItem.addEventListener('click', function () {
      addSelectedClass(listItem);
    });
    listItem.addEventListener('dblclick', function () {
      addCompletedClass(listItem);
    });
    taskList.appendChild(listItem);
    inputField.value = '';
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
}

window.onload = function () {
  const addButton = document.querySelector('#criar-tarefa');
  const clearButton = document.querySelector('#apaga-tudo');
  const removeButton = document.querySelector('#remover-finalizados');
  addButton.addEventListener('click', addNewTask);
  clearButton.addEventListener('click', clearTaskList);
  removeButton.addEventListener('click', removeCompletedTasks);
};
