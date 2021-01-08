const textTask = document.querySelector('#texto-tarefa');
const buttonCreate = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
const buttonRemoveAll = document.querySelector('#apaga-tudo');
const buttonRemoveAllCompleted = document.querySelector('#remover-finalizados');

// Button to create a new li
buttonCreate.addEventListener('click', function () {
  if (textTask.value !== '') {
    const addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    addTask.style.marginTop = '3px';
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});

// Creates li element by pressing ENTER
textTask.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
    buttonCreate.click();
  }
});

// Add a 'selected' class when clicking on a li - only one li can have this class
taskList.addEventListener('click', function (itemList) {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    // selectedItem.className = '';
    selectedItem.classList.remove('selected');
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)';
  }
  if (itemList.target.className !== 'completed') {
    itemList.target.className = 'selected';
    itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Add a 'completed' class and a 'checked' symbol when double-clicking on a li
taskList.addEventListener('dblclick', function (itemList) {
  itemList.target.style.backgroundColor = 'rgb(255, 255, 255)';
  if (itemList.target.className === 'completed') {
    itemList.target.className = '';
    itemList.target.style.textDecoration = 'none';
  } else {
    itemList.target.className = 'completed';
    itemList.target.style.textDecoration = 'line-through';
  }
});

// Function to remove items
function removeItems() {
  const itemsToRemove = document.querySelectorAll('li');
  for (let index = 0; index < itemsToRemove.length; index += 1) {
    itemsToRemove[index].remove(li);
  }
}

// Button to remove all li
// if (confirm('Você tem certeza que deseja apagar todas as tarefas?')) {
  buttonRemoveAll.addEventListener('click', function () {
    if (document.querySelectorAll('li').length > 0) {
      removeItems('li');
    }
  });
// }

// Button to remove a selected li
buttonRemoveSelected.addEventListener('click', function () {
  if (document.querySelectorAll('.selected').length > 0) {
    removeItems('.selected');
  }
});

// Button to remove all completed li
buttonRemoveAllCompleted.addEventListener('click', function () {
  if (document.querySelectorAll('.completed').length > 0) {
    removeItems('.completed');
  }
});
