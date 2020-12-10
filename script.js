function generateInput() {
  const container = document.querySelector('.inputs');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';
  newInput.placeholder = 'Type a new task here.';

  container.appendChild(newInput);
}

function generateOrderedList() {
  const taskContainer = document.querySelector('.tasks');
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
  const container = document.querySelector('.inputs');
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
  const container = document.querySelector('.inputs');
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
  const container = document.querySelector('.inputs');
  const newButton = document.createElement('button');
  newButton.id = 'remover-finalizados';
  newButton.innerText = 'Delete completed tasks';

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

function generateSaveTasksButton() {
  const container = document.querySelector('.inputs');
  const newButton = document.createElement('button');
  newButton.id = 'salvar-tarefas';
  newButton.innerText = 'Save tasks';

  container.appendChild(newButton);
  newButton.addEventListener('click', function () {
    const taskList = document.getElementsByTagName('li');
    if (typeof (Storage) !== 'undefined') {
      const newArray = []; // Array of objects

      for (let i = 0; i < taskList.length; i += 1) {
        newArray.push({ value: taskList[i].innerHTML, class: taskList[i].className });
      }
      localStorage.setItem('tasks', JSON.stringify(newArray));
    }
  });
}

function moveUp() {
  const currentTask = document.querySelector('#selected');
  if (currentTask !== null && currentTask.previousElementSibling !== null) {
    const replacedText = { // Auxiliary object
      innerText: currentTask.previousElementSibling.innerText,
      class: currentTask.previousElementSibling.className,
      backgroundColor: currentTask.previousElementSibling.style.backgroundColor,
      id: currentTask.previousElementSibling.id,
    };

    // Replacing upper task info with selected task info
    currentTask.previousElementSibling.innerText = currentTask.innerText;
    currentTask.previousElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
    currentTask.previousElementSibling.className = currentTask.className;
    currentTask.previousElementSibling.id = currentTask.id;

    // Replacing selected task info with upper task info
    currentTask.innerText = replacedText.innerText;
    currentTask.style.backgroundColor = replacedText.backgroundColor;
    currentTask.className = replacedText.class;
    currentTask.id = replacedText.id;
  }
}

function moveDown() {
  const currentTask = document.querySelector('#selected');
  if (currentTask !== null && currentTask.nextElementSibling !== null) {
    const replacedText = { // Auxiliary object
      innerText: currentTask.nextElementSibling.innerText,
      class: currentTask.nextElementSibling.className,
      backgroundColor: currentTask.nextElementSibling.style.backgroundColor,
      id: currentTask.nextElementSibling.id,
    };

    // Replacing lower task info with selected task info
    currentTask.nextElementSibling.innerText = currentTask.innerText;
    currentTask.nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
    currentTask.nextElementSibling.className = currentTask.className;
    currentTask.nextElementSibling.id = currentTask.id;

    // Replacing selected task info with lower task info
    currentTask.innerText = replacedText.innerText;
    currentTask.style.backgroundColor = replacedText.backgroundColor;
    currentTask.className = replacedText.class;
    currentTask.id = replacedText.id;
  }
}

function generateUpAndDownButtons() {
  const container = document.querySelector('.inputs');
  const upButton = document.createElement('button');
  upButton.id = 'mover-cima';
  upButton.innerText = 'Task Up';

  const downButton = document.createElement('button');
  downButton.id = 'mover-baixo';
  downButton.innerText = 'Task Down';

  container.appendChild(upButton);
  upButton.addEventListener('click', moveUp);

  container.appendChild(downButton);
  downButton.addEventListener('click', moveDown);
}

function generateSelectedTaskButton() {
  const container = document.querySelector('.inputs');
  const selectedButton = document.createElement('button');
  selectedButton.id = 'remover-selecionado';
  selectedButton.innerText = 'Delete selected task';

  container.appendChild(selectedButton);
  selectedButton.addEventListener('click', function () {
    const target = document.querySelector('#selected');
    target.parentNode.removeChild(target);
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
        items[i].id = '';
      }
      selectedItem.target.style.backgroundColor = 'rgb(128, 128, 128)';
      selectedItem.target.id = 'selected';
    }
  });

  listItem.addEventListener('dblclick', completedListItem);
}

function loadSavedTasks() {
  const taskList = document.getElementById('lista-tarefas');
  let savedTasksObj = {
    class: '',
    value: '',
  };

  if (localStorage.length > 0) {
    savedTasksObj = JSON.parse(localStorage.getItem('tasks')); // Recover saved tasks
    for (let i = 0; i < savedTasksObj.length; i += 1) {
      const newTask = document.createElement('li');
      newTask.innerText = savedTasksObj[i].value;
      newTask.className = savedTasksObj[i].class;
      taskList.appendChild(newTask);
    }
  }
}

window.onload = function () {
  generateOrderedList();
  generateInput();
  generateAddTaskButton();
  generateSaveTasksButton();
  generateSelectedTaskButton();
  generateRemoveAllTasksButton();
  generateRemoveCompletedTasksButton();
  generateUpAndDownButtons();
  selectListItem();
  loadSavedTasks();
};
