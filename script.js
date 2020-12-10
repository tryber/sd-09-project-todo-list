let liSelected;
const completedTasks = [];

function saveTasks() {
  const elements = document.querySelectorAll('#lista-tarefas li');
  const objs = [];
  for (let index = 0; index < elements.length; index += 1) {
    objs.push({
      value: elements[index].innerText,
      class: elements[index].className,
    });
  }
  localStorage.setItem('tasks', JSON.stringify(objs));
}

function removeSelected() {
  const ol = document.querySelector('#lista-tarefas');
  ol.removeChild(liSelected);
}

function recoveryPosition(listElements) {
  if (liSelected !== undefined) {
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index] === liSelected) {
        return index;
      }
    }
    return -1;
  }
  return -1;
}

function moveToUpper() {
  const listElements = document.querySelectorAll('#lista-tarefas li');
  const ol = document.querySelector('#lista-tarefas');
  const index = recoveryPosition(listElements);
  if (liSelected !== undefined && listElements.length !== 1) {
    if (index > 0) {
      const valueToBeReplaced = listElements[index - 1];
      ol.replaceChild(liSelected, valueToBeReplaced);
      ol.insertBefore(valueToBeReplaced, listElements[index + 1]);
      listElements[index - 1] = liSelected;
      listElements[index] = valueToBeReplaced;
    }
    saveTasks();
  }
}

function moveToDown() {
  const listElements = document.querySelectorAll('#lista-tarefas li');
  const ol = document.querySelector('#lista-tarefas');
  const index = recoveryPosition(listElements);
  if (liSelected !== undefined && listElements.length !== 1) {
    if (index < listElements.length && index < listElements.length - 1) {
      const valueToBeReplaced = listElements[index + 1];
      ol.replaceChild(liSelected, valueToBeReplaced);
      ol.insertBefore(valueToBeReplaced, listElements[index]);
    }
    saveTasks();
  }
}

function createNewLi() {
  const li = document.createElement('li');
  return li;
}

function setTasks(itensList) {
  const ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < itensList.length; index += 1) {
    const li = createNewLi();
    li.innerText = itensList[index].value;
    li.className = itensList[index].class;
    ol.appendChild(li);
  }
}

function loadTasks() {
  const elements = JSON.parse(localStorage.getItem('tasks'));
  if (elements !== null) {
    setTasks(elements);
  }
}

function clearDonedTasks() {
  const listOfLi = document.querySelectorAll('#lista-tarefas li');
  const ol = document.querySelector('#lista-tarefas');
  for (const index in listOfLi) {
    if (listOfLi[index].className === 'completed') {
      ol.removeChild(listOfLi[index]);
    }
  }
  saveTasks();
}

function clearTasks() {
  const listOfLi = document.querySelector('#lista-tarefas').children;
  const size = listOfLi.length;
  const ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < size; index += 1) {
    ol.firstElementChild.remove();
  }
  saveTasks();
}

function markAsDone(event) {
  if (completedTasks.includes(event.target)) {
    const index = completedTasks.indexOf(event.target);
    completedTasks.splice(index, 1);
    event.target.className = '';
  } else {
    completedTasks.push(event.target);
    event.target.className = 'completed';
  }
  saveTasks();
}

function changeBackground(event) {
  if (liSelected !== event.target && liSelected !== undefined) {
    liSelected.style.backgroundColor = '';
    event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
    liSelected = event.target;
  } else {
    event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
    liSelected = event.target;
  }
}

function selectedItem(event) {
  if (event.target.localName === 'li') {
    changeBackground(event);
  }
}

function listSelector(listId) {
  const id = `#${listId}`;
  const list = document.querySelector(id);
  list.addEventListener('click', selectedItem);
  list.addEventListener('dblclick', markAsDone);
}

function clearInput(inputId) {
  const id = `#${inputId}`;
  const input = document.querySelector(id);
  input.value = '';
}

function addTask() {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = createNewLi();
  li.innerText = input.value;
  clearInput(input.id);
  ol.appendChild(li);
  saveTasks();
}

function buttons() {
  const buttonCreateTask = document.querySelector('#criar-tarefa');
  buttonCreateTask.addEventListener('click', addTask);
  const buttonClearTasks = document.querySelector('#apaga-tudo');
  buttonClearTasks.addEventListener('click', clearTasks);
  const buttonClearDonedTasks = document.querySelector('#remover-finalizados');
  buttonClearDonedTasks.addEventListener('click', clearDonedTasks);
  const buttonSaveTasks = document.querySelector('#salvar-tarefas');
  buttonSaveTasks.addEventListener('click', saveTasks);
  const buttonMoveDown = document.querySelector('#mover-baixo');
  buttonMoveDown.addEventListener('click', moveToDown);
  const buttonMoveUpper = document.querySelector('#mover-cima');
  buttonMoveUpper.addEventListener('click', moveToUpper);
  const buttonRemoveSelected = document.querySelector('#remover-selecionado');
  buttonRemoveSelected.addEventListener('click', removeSelected);
}

function actionManagement() {
  buttons();
  listSelector('lista-tarefas');
}

window.onload = function () {
  actionManagement();
  loadTasks();
};
