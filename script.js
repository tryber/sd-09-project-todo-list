function createOrganizedList() {
  const organizedList = document.getElementById('lista-tarefas');
  const createTaskButton = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  createTaskButton.addEventListener('click', function () {
    const newTask = input.value;
    const newList = document.createElement('li');
    newList.classList.add('tarefa');
    newList.innerText = newTask;
    organizedList.appendChild(newList);
    input.value = '';
  });
}

function addSelectedClassToOneItem() {
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('click', function (event) {
    const selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected')
    }
    event.target.classList.add('selected');
  });
}

function completedTasks() {
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function cleanAllTasks() {
  const deleteButton = document.getElementById('apaga-tudo');
  deleteButton.addEventListener('click', function () {
    const tasks = document.querySelectorAll('li');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].remove();
    }
  });
}

function cleanCompletedItems() {
  const deleteCompletedButton = document.getElementById('remover-finalizados');
  deleteCompletedButton.addEventListener('click', function () {
    const completedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItems.length; index += 1) {
      completedItems[index].remove();
    }
  });
}

function removeSelectedItem() {
  const deleteSelectButton = document.getElementById('remover-selecionado');
  deleteSelectButton.addEventListener('click', function () {
    const selectedItems = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedItems.length; index += 1) {
      selectedItems[index].remove();
    }
  });
}


function moveUp() {
  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', function () {
    const organizedList = document.getElementById('lista-tarefas');
    const selectedItem = document.querySelectorAll('.selected')[0];
    if (selectedItem === undefined) {
      alert('Selecione uma tarefa primeiro!');
    } else {
      const previousItem = selectedItem.previousElementSibling;
      if (previousItem !== null) {
        organizedList.removeChild(selectedItem);
        previousItem.before(selectedItem);
      }
    }
  });
}

function moveDown() {
  const moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', function () {
    const organizedList = document.getElementById('lista-tarefas');
    const selectedItem = document.querySelectorAll('.selected')[0];
    if (selectedItem === undefined) {
      alert('Selecione uma tarefa primeiro!');
    } else {
      const nextItem = selectedItem.nextElementSibling;
      if (nextItem !== null) {
        organizedList.removeChild(selectedItem);
        nextItem.after(selectedItem);
      }
    }
  });
}

window.onload = function () {
  createOrganizedList();
  addSelectedClassToOneItem();
  completedTasks();
  cleanAllTasks();
  cleanCompletedItems();
  removeSelectedItem();
  moveUp();
  moveDown();
}
