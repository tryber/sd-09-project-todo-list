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

function generateTaskButton() {
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

function selectListItem() {
  const listItem = document.getElementById('lista-tarefas');
  const items = document.getElementsByTagName('li');
  listItem.addEventListener('click', function (selectedItem) {
    if (selectedItem.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
      for (let i = 0; i < items.length; i += 1) {
        items[i].style.backgroundColor = '';
      }
      selectedItem.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      selectedItem.target.style.backgroundColor = '';
    }
  });
}

window.onload = function () {
  generateOrderedList();
  generateInput();
  generateTaskButton();
  selectListItem();
};
