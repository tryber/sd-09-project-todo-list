function addTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', function () {
    const inputTask = document.getElementById('texto-tarefa');
    if (inputTask.value !== '') {
      const ol = document.getElementById('lista-tarefas');
      const li = document.createElement('li');
      li.innerHTML = inputTask.value;
      ol.appendChild(li);
      inputTask.value = '';
    }
  });
}

function selectItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('click', function (event) {
    const selectedItem = document.getElementsByClassName('selected');
    if (selectedItem[0]) {
      selectedItem[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function completedItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

function clearList() {
  const buttonClearList = document.getElementById('apaga-tudo');
  buttonClearList.addEventListener('click', function () {
    const listItem = document.getElementById('lista-tarefas');
    while (listItem.firstChild) {
      listItem.removeChild(listItem.firstChild);
    }
  });
}

function clearListCompleted() {
  const buttonclearListCompleted = document.getElementById('remover-finalizados');
  buttonclearListCompleted.addEventListener('click', function () {
    const listCompleted = document.getElementsByClassName('completed');
    while (listCompleted[0]) {
      listCompleted[0].parentNode.removeChild(listCompleted[0]);
    }
  });
}

function saveList() {
  const buttonSaveList = document.getElementById('salvar-tarefas');
  buttonSaveList.addEventListener('click', function () {
    const list = document.getElementsByTagName('li');
    let index = 0;
    let listObject = {};
    while (list[index]) {
      listObject = {
        item: list[index].innerHTML,
        class: list[index].className,
      };
      localStorage.setItem(index, JSON.stringify(listObject));
      index += 1;
    }
  });
}

function uploadTasks() {
  const list = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const li = document.createElement('li');
    const listObject = JSON.parse(localStorage.getItem(index));
    li.innerText = listObject.item;
    li.className = listObject.class;
    list.appendChild(li);
  }
}

function moveUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', function () {
    const list = document.getElementById('lista-tarefas');
    const selectedItem = document.getElementsByClassName('selected');
    if (selectedItem[0]) {
      if (selectedItem[0].previousSibling !== null && selectedItem[0]) {
        list.insertBefore(selectedItem[0], selectedItem[0].previousSibling);
      }
    }
  });
}

function moveDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', function () {
    const list = document.getElementById('lista-tarefas');
    const selectedItem = document.getElementsByClassName('selected');
    if (selectedItem[0]) {
      if (selectedItem[0].nextSibling !== null) {
        list.insertBefore(selectedItem[0].nextSibling, selectedItem[0]);
      }
    }
  });
}

function removeSelected() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');
  buttonRemoveSelected.addEventListener('click', function () {
    const selectedItems = document.getElementsByClassName('selected');
    const selectedItem = selectedItems[0];
    selectedItem.parentNode.removeChild(selectedItem);
  });
}

window.onload = function () {
  addTask();
  selectItem();
  completedItem();
  clearList();
  clearListCompleted();
  saveList();
  uploadTasks();
  moveUp();
  moveDown();
  removeSelected();
};
