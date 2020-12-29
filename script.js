const container = document.querySelector('#container');

function addContainerTask() {
  const containerTask = document.createElement('div');
  containerTask.id = 'container-task';
  container.appendChild(containerTask);
}

function addInput() {
  const containerTask = document.getElementById('container-task');
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('placeholder', 'Task');
  containerTask.appendChild(createInput);
}

function addList() {
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  container.appendChild(createList);
}

function handleTaskClick(event) {
  const listItem = event.target;
  const selectedItems = document.getElementsByTagName('li');
  for (let index = 0; index < selectedItems.length; index += 1) {
    const isSelected = selectedItems[index].classList.contains('selected');
    if (isSelected) {
      selectedItems[index].classList.remove('selected');
    }
  }
  listItem.classList.add('selected');
}

function handleTaskCompleted(event) {
  const task = event.target;
  const checkTaskCompleted = task.classList.contains('completed');
  if (checkTaskCompleted) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function loadListInStorage() {
  if (localStorage.length !== 0) {
    const getTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let index = 0; index < getTasks.length; index += 1) {
      const list = document.getElementById('lista-tarefas');
      const createListItem = document.createElement('li');
      createListItem.innerText = getTasks[index].text;
      createListItem.className = getTasks[index].class;
      createListItem.addEventListener('click', handleTaskClick);
      createListItem.addEventListener('dblclick', handleTaskCompleted);
      list.appendChild(createListItem);
    }
  }
}

function handleAddListItem() {
  const createListItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const task = inputText.value;
  createListItem.innerText = task;
  createListItem.addEventListener('click', handleTaskClick);
  createListItem.addEventListener('dblclick', handleTaskCompleted);
  list.appendChild(createListItem);
  inputText.value = '';
}

function addButton() {
  const containerTask = document.getElementById('container-task');
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.className = 'btn';
  createButton.innerText = 'ADICIONAR';
  createButton.addEventListener('click', handleAddListItem);
  containerTask.appendChild(createButton);
}

function generateContainerButtons() {
  const containerButtons = document.createElement('div');
  containerButtons.id = 'container-buttons';
  container.appendChild(containerButtons);
}

function handleRemoveList() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].parentNode.removeChild(listItems[index]);
  }
}

function generateButtonRemove() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.id = 'apaga-tudo';
  createButton.className = 'btn';
  createButton.innerText = 'Limpar Lista';
  createButton.addEventListener('click', handleRemoveList);
  containerButtons.appendChild(createButton);
}

function handleRemoveListCompleted() {
  const taskCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < taskCompleted.length; index += 1) {
    taskCompleted[index].parentNode.removeChild(taskCompleted[index]);
  }
}

function generateButtonRemoveTasksCompleted() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.innerText = 'Remover Completos';
  createButton.id = 'remover-finalizados';
  createButton.className = 'btn';
  createButton.addEventListener('click', handleRemoveListCompleted);
  containerButtons.appendChild(createButton);
}

function handleSaveTasks() {
  if (typeof (Storage) !== 'undefined') {
    localStorage.clear();
    const tasks = [];
    let isCompleted = false;
    const listItems = document.querySelectorAll('li');
    for (let index = 0; index < listItems.length; index += 1) {
      isCompleted = listItems[index].classList.contains('completed');
      if (isCompleted) {
        tasks.push({
          text: listItems[index].innerText,
          class: 'completed',
        });
      } else {
        tasks.push({
          text: listItems[index].innerText,
          class: '',
        });
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    alert('Sorry! No Web Storage support..');
  }
}

function generateButtonSaveTasks() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.id = 'salvar-tarefas';
  createButton.innerText = 'Salvar Tarefas';
  createButton.className = 'btn';
  createButton.addEventListener('click', handleSaveTasks);
  containerButtons.appendChild(createButton);
}

function handleMoveUp() {
  const listItemSelected = document.querySelector('.selected');
  if (listItemSelected !== null) {

    const listItemParent = listItemSelected.parentNode;
    const firstChild = listItemParent.firstChild;
    if (listItemSelected !== firstChild) {
      const previousSibling = listItemSelected.previousSibling;
      listItemParent.insertBefore(listItemSelected, previousSibling);
    }
  } else {
    alert('Selecione uma tarefa!');
  }
}

function generateButtonUp() {
  const containerButtons = document.getElementById('container-buttons');
  const createButtonUp = document.createElement('button');
  createButtonUp.id = 'mover-cima';
  createButtonUp.className = 'btn';
  createButtonUp.innerHTML = '&#708';
  createButtonUp.addEventListener('click', handleMoveUp);
  containerButtons.appendChild(createButtonUp);
}

function handleMoveDown() {
  const listItemSelected = document.querySelector('.selected');
  if (listItemSelected !== null) {
    const listItemParent = listItemSelected.parentNode;
    const lastChild = listItemParent.lastChild;
    if (listItemSelected !== lastChild) {
      const nextSibling = listItemSelected.nextSibling;
      listItemParent.insertBefore(nextSibling, listItemSelected);
    }
  } else {
    alert('Selecione uma tarefa!');
  }
}

function generateButtonDown() {
  const containerButtons = document.getElementById('container-buttons');
  const createButtonDown = document.createElement('button');
  createButtonDown.id = 'mover-baixo';
  createButtonDown.className = 'btn';
  createButtonDown.innerHTML = '&#709';
  createButtonDown.addEventListener('click', handleMoveDown);
  containerButtons.appendChild(createButtonDown);
}

function handleRemoveSelected() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    const list = selectedItem.parentNode;
    list.removeChild(selectedItem);
  } else {
    alert('Selecione uma tarefa!');
  }
}

function generateButtonRemoveSelected() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.id = 'remover-selecionado';
  createButton.className = 'btn';
  createButton.innerText = 'Remover selecionado';
  createButton.addEventListener('click', handleRemoveSelected);
  containerButtons.appendChild(createButton);
}

window.onload = function () {
  addContainerTask();
  addInput();
  addList();
  addButton();
  loadListInStorage();
  generateContainerButtons();
  generateButtonRemove();
  generateButtonRemoveTasksCompleted();
  generateButtonSaveTasks();
  generateButtonUp();
  generateButtonDown();
  generateButtonRemoveSelected();
};
