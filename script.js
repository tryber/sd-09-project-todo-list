function generateInput() {
  const container = document.getElementById('inputs');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';
  newInput.placeholder = 'Type a new task here.';

  container.appendChild(newInput);
}

function generateOrderedList() {
  const taskContainer = document.getElementById('tasks');
  const newList = document.createElement('ol');
  newList.id = 'lista-tarefas';

  taskContainer.appendChild(newList);
}

function addNewTask(inputContent) {
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = inputContent;
  taskList.appendChild(newTask);
}

function generateAddTaskButton() {
  const container = document.getElementById('inputs');
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerText = 'Create task';

  container.appendChild(newButton);
  newButton.addEventListener('click', function () {
    const inputContent = document.getElementById('texto-tarefa');
    addNewTask(inputContent.value);
    inputContent.value = '';
  });
}

function generateRemoveAllTasksButton() {
  const container = document.getElementById('inputs');
  const newButton = document.createElement('button');
  newButton.id = 'apaga-tudo';
  newButton.innerText = 'Delete all tasks';

  container.appendChild(newButton);
  newButton.addEventListener('click', function () {
    const taskList = document.querySelectorAll('li');
    for (let i = 0; i < taskList.length; i += 1) {
      taskList[i].parentNode.removeChild(taskList[i]);
    }
  });
}

function generateRemoveCompletedTasksButton() {
  const container = document.getElementById('inputs');
  const newButton = document.createElement('button');
  newButton.id = 'remover-finalizados';
  newButton.innerText = 'Remove completed tasks';

  container.appendChild(newButton);
  newButton.addEventListener('click', function () {
    const taskList = document.querySelectorAll('li');
    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i].className === 'completed') {
        taskList[i].parentNode.removeChild(taskList[i]);
      }
    }
  });
}

function completedListItem(item) {
  const selectedItem = item.target.style.backgroundColor;
  if (selectedItem === 'rgb(128, 128, 128)' && item.target.className !== 'completed') {
    item.target.className = 'completed';
  } else {
    item.target.className = '';
  }
}

function selectListItem() {
  const listItem = document.getElementById('lista-tarefas');
  const items = document.getElementsByTagName('li');
  listItem.addEventListener('click', function (selectedItem) {
    if (selectedItem.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
      for (let i = 0; i < items.length; i += 1) {
        items[i].style.backgroundColor = '';
      }
      selectedItem.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });

  listItem.addEventListener('dblclick', completedListItem);
}

window.onload = function () {
  generateOrderedList();
  generateInput();
  generateAddTaskButton();
  generateRemoveAllTasksButton();
  generateRemoveCompletedTasksButton();
  selectListItem();
};
