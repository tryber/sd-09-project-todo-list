// created a function to encapsulate all dynamic HTML sctructure and getting all onload of page
function structure() {
  const append = document.getElementById('infoSection');
  const createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);

  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerText = 'Create Task';
  createButton.classList = 'styleButtons';
  append.appendChild(createButton);

  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('type', 'text');
  createInput.name = 'inputAssigment';
  createInput.classList = 'styleButtons';
  append.appendChild(createInput);

  const createRemoveButton = document.createElement('button');
  createRemoveButton.id = 'remover-selecionado';
  createRemoveButton.innerText = 'Remove Choosed Task';
  createRemoveButton.classList = 'styleButtons';
  append.appendChild(createRemoveButton);

  const createclearAllButton = document.createElement('button');
  createclearAllButton.id = 'apaga-tudo';
  createclearAllButton.innerText = 'Remove All Tasks';
  createclearAllButton.classList = 'styleButtons';
  append.appendChild(createclearAllButton);

  const removeFinishedButton = document.createElement('button');
  removeFinishedButton.id = 'remover-finalizados';
  removeFinishedButton.innerText = 'Remove Finished Tasks';
  removeFinishedButton.classList = 'styleButtons';
  append.appendChild(removeFinishedButton);

  const saveAllAssigment = document.createElement('button');
  saveAllAssigment.id = 'salvar-tarefas';
  saveAllAssigment.innerText = 'Save Tasks';
  saveAllAssigment.classList = 'styleButtonSaveTasks';
  append.appendChild(saveAllAssigment);

  const buttonUP = document.createElement('button');
  buttonUP.id = 'mover-cima';
  buttonUP.classList = 'mover-cima';
  buttonUP.innerText = 'UP Task';
  append.appendChild(buttonUP);

  const buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  buttonDown.classList = 'mover-baixo';
  buttonDown.innerText = 'DOWN Task';
  append.appendChild(buttonDown);

  const createOL = document.createElement('ol');
  createOL.id = 'lista-tarefas';
  append.appendChild(createOL);
}
// get text from input and create LI with the input context
function addAssignment() {
  document.getElementById('criar-tarefa');
  const getInput = document.getElementById('texto-tarefa').value;
  if (getInput !== '') {
    const addLI = document.createElement('li');
    const getID = document.getElementById('lista-tarefas');
    getID.appendChild(addLI);
    addLI.innerHTML = getInput;
    addLI.classList = 'assigmentList';
  }
}
// href: https://pt.stackoverflow.com/questions/299730/limpando-campos-do-formul%C3%A1rio
// for each inputed element on 'inputAssigment' change value for ' ';
// function to clean up inputed elements after assigment
function cleanAssigmentInput() {
  const inputed = document.getElementsByName('inputAssigment');
  inputed.forEach((element) => {
    element.value = '';
  });
}
// function to set bgColor on choosed element of assigment list
// and remove bgColor when choose another element from list
function chooseAssigmentList(event) {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('backgroundList')) {
      element.classList.remove('backgroundList');
    }
  }
  event.target.classList.add('backgroundList');
}
// function to set line-through assigment and set off line through assigment
function lineThroughAssigment(event) {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// function to remove all itens from class 'completed' also remove from storage too
function removeCompleted() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('completed')) {
      tarefas.removeChild(element);
      const assigmentToRemove = {
        text: element.innerText,
        class: element.className,
      };
      localStorage.removeItem(index, JSON.stringify(assigmentToRemove));
    }
  }
}
// function to removel all itens from assigment list
function removeAll() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    if (elementAssigmentList[index].classList.value.includes('assigmentList')) {
      tarefas.removeChild(elementAssigmentList[index]);
      localStorage.clear();
    }
  }
}
// function to remove iten by selection also add remove from storage too
function removeChoosed() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('backgroundList')) {
      tarefas.removeChild(element);
      const assigmentToRemove = {
        text: element.innerText,
        class: element.className,
      };
      localStorage.removeItem(index, JSON.stringify(assigmentToRemove));
    }
  }
}
// function to get iten position on assigment list by index
function selectedElement() {
  const liItens = document.querySelectorAll('li');
  for (let index = 0; index < liItens.length; index += 1) {
    if (liItens[index].classList.value.includes('backgroundList')) {
      const element = liItens[index];
      return element;
    }
  }
}
// function to move up on index the choosed task by pressing button up
// href https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moveUpTask() {
  const moveUP = selectedElement();
  if (selectedElement() === undefined) {
    return;
  } else if (moveUP.previousElementSibling) {
    moveUP.parentNode.insertBefore(moveUP, moveUP.previousElementSibling);
  }
}
// function to move down on index the choosed task by pressing button down
// href https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moveDownTask() {
  const moveDown = selectedElement();
  if (selectedElement() === undefined) {
    return;
  } else if (moveDown.nextElementSibling) {
    moveDown.parentNode.insertBefore(moveDown.nextElementSibling, moveDown);
  }
}
// function to save tasks when press save tasks button
function buttonSaveAllTasks() {
  const assigmentTasks = document.getElementsByTagName('li');
  for (let index = 0; index < assigmentTasks.length; index += 1) {
    assigmentTasks[index].classList.add('saved-items');
    const assigmentToSave = {
      text: assigmentTasks[index].innerText,
      class: assigmentTasks[index].className,
    };
    localStorage.setItem(index, JSON.stringify(assigmentToSave));
  }
}
// function to auto recovery stored tasks when open or refresh page
function recoveryLocalStorage() {
  const inputedTasks = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const recoveredTasks = document.createElement('li');
    const objectString = JSON.parse(localStorage.getItem(index));
    recoveredTasks.innerText = objectString.text;
    recoveredTasks.className = objectString.class;
    inputedTasks.appendChild(recoveredTasks);
  }
}
// created a function to encapsulate all listeners/function callers
function listeners () {
  const getInput = document.getElementById('criar-tarefa');
  getInput.addEventListener('click', addAssignment);
  const cleanInput = document.getElementById('criar-tarefa');
  cleanInput.addEventListener('click', cleanAssigmentInput);
  const chooseList = document.querySelector('#lista-tarefas');
  chooseList.addEventListener('click', chooseAssigmentList);
  const lineThrough = document.querySelector('#lista-tarefas');
  lineThrough.addEventListener('dblclick', lineThroughAssigment);
  const removeCompletedLI = document.getElementById('remover-finalizados');
  removeCompletedLI.addEventListener('click', removeCompleted);
  const removeAllList = document.getElementById('apaga-tudo');
  removeAllList.addEventListener('click', removeAll);
  const removeChoosedIten = document.getElementById('remover-selecionado');
  removeChoosedIten.addEventListener('click', removeChoosed);
  const upTask = document.getElementById('mover-cima');
  upTask.addEventListener('click', moveUpTask);
  const downTask = document.getElementById('mover-baixo');
  downTask.addEventListener('click', moveDownTask);
  const buttonStorage = document.getElementById('salvar-tarefas');
  buttonStorage.addEventListener('click', buttonSaveAllTasks);
}
// functions to be opened when open browser
window.onload = function () {
  structure();
  listeners();
  recoveryLocalStorage();
};
