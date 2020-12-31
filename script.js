function moveUp(list) {
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('selected')) {
        let selectedItem = list.childNodes[index].innerText;
        let prevItem = list.childNodes[index - 1].innerText;
        list.childNodes[index - 1].innerText = selectedItem;
        list.childNodes[index].innerText = prevItem;
        list.childNodes[index - 1].classList.add('selected');
        list.childNodes[index].classList.remove('selected');
      }
    }
  });
}

function moveDown(list) {
  const btnDown = document.querySelector('#mover-baixo');
  btnDown.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('selected')) {
        let selectedItem = list.childNodes[index].innerText;
        let nextItem = list.childNodes[index + 1].innerText;
        list.childNodes[index + 1].innerText = selectedItem;
        list.childNodes[index].innerText = nextItem;
        list.childNodes[index + 1].classList.add('selected');
        list.childNodes[index].classList.remove('selected');
        return;
      }
    }
  });
}

// Delete Tasks Completed
function removeCompleted() {
  const btnDeleteComplete = document.querySelector('#remover-finalizados');
  const list = document.querySelector('#lista-tarefas');
  btnDeleteComplete.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('completed')) {
        list.removeChild(list.childNodes[index]);
      }
    }
  });
}

// Mark
function taskCompleted(event) {
  event.target.classList.toggle('completed');
  removeCompleted();
}

// Change Background
function selectedElement(event) {
  const taskElements = document.querySelectorAll('.task');
  taskElements.forEach((task) => {
    if (task.classList.contains('selected')) {
      task.classList.remove('selected');
    }
  });
  event.target.classList.add('selected');
}

// Create Task in list
function createTaskElement(taskName) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.classList.add('block-text-selected');
  taskElement.innerText = taskName;
  taskElement.addEventListener('click', selectedElement);
  taskElement.addEventListener('dblclick', taskCompleted);
  return taskElement;
}

// Add task in list
function addTaskInlist(button, inputText, taskList) {
  button.addEventListener('click', function () {
    const valueInput = inputText.value;
    if (!valueInput) {
      alert('Por favor, digite uma tarefa');
      return;
    }
    const taskElement = createTaskElement(valueInput);
    taskList.appendChild(taskElement);
    inputText.value = '';
  });
}

// Delete All Tasks
function deleteAllTasks(taskList) {
  const btnDeleteAll = document.querySelector('#apaga-tudo');
  btnDeleteAll.addEventListener('click', function () {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  });
}

window.onload = function () {
  const textTaskInput = document.querySelector('#texto-tarefa');
  const buttonAddTask = document.querySelector('#criar-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  addTaskInlist(buttonAddTask, textTaskInput, taskList);
  deleteAllTasks(taskList);
  moveDown(taskList);
  moveUp(taskList);
};
