// created a function to encapsulate all dynamic HTML sctructure
function structure() {
  let append = document.getElementById('infoSection');
  let createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);
  let createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerText = 'Create Task';
  createButton.classList = 'styleButtons';
  append.appendChild(createButton);
  let createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('type', 'text');
  createInput.name = 'inputAssigment';
  createInput.classList = 'styleButtons';
  append.appendChild(createInput);
  let createRemoveButton = document.createElement('button');
  createRemoveButton.id = 'remover-selecionado';
  createRemoveButton.innerText = 'Remove Choosed Task';
  createRemoveButton.classList = 'styleButtons';
  append.appendChild(createRemoveButton);
  let createclearAllButton = document.createElement('button');
  createclearAllButton.id = 'apaga-tudo';
  createclearAllButton.innerText = 'Remove All Tasks';
  createclearAllButton.classList = 'styleButtons';
  append.appendChild(createclearAllButton);
  let removeFinishedButton = document.createElement('button');
  removeFinishedButton.id = 'remover-finalizados';
  removeFinishedButton.innerText = 'Remove Finished Tasks';
  removeFinishedButton.classList = 'styleButtons';
  append.appendChild(removeFinishedButton);
  let saveAllAssigment = document.createElement('button');
  saveAllAssigment.id = 'salvar-tarefas';
  saveAllAssigment.innerText = 'Save Tasks';
  saveAllAssigment.classList = 'styleButtonSaveTasks';
  append.appendChild(saveAllAssigment);
  let buttonUP = document.createElement('button');
  buttonUP.id = 'mover-cima';
  buttonUP.innerText = 'UP Task';
  append.appendChild(buttonUP);
  let buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  buttonDown.innerText = 'DOWN Task';
  append.appendChild(buttonDown);
  let createOL = document.createElement('ol');
  createOL.id = 'lista-tarefas';
  append.appendChild(createOL);
}
// get text from input and create LI with the input context
function addAssignment() {
  document.getElementById('criar-tarefa');  
  let getInput = document.getElementById('texto-tarefa').value;
  if(getInput != "") {
    let addLI = document.createElement('li');    
    let getID = document.getElementById('lista-tarefas');
    getID.appendChild(addLI);
    addLI.innerHTML = getInput;
    addLI.classList = 'assigmentList';
  }
}
// href: https://pt.stackoverflow.com/questions/299730/limpando-campos-do-formul%C3%A1rio
// for each inputed element on 'inputAssigment' change value for ' ';
// function to clean up inputed elements after assigment
function cleanAssigmentInput() {
  let inputed = document.getElementsByName('inputAssigment');
  inputed.forEach(element => {
    element.value = '';
  })
}
// function to set bgColor on choosed element of assigment list and remove bgColor when choose another element from list
function chooseAssigmentList(event) {
  let elementAssigmentList = document.querySelectorAll('.assigmentList');  
  for(let index = 0; index < elementAssigmentList.length; index += 1) {
    let element = elementAssigmentList[index];    
    if(element.classList.value.includes('backgroundList')) {
      element.classList.remove('backgroundList')
    }
  }
  event.target.classList.add('backgroundList');
}
// function to set line-through assigment and set off line through assigment
function lineThroughAssigment(event) {
  if(event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
  event.target.classList.add('completed');
}
}
// function to remove all itens from class 'completed'
function removeCompleted() {
  let elementAssigmentList = document.querySelectorAll('.assigmentList');  
  let tarefas = document.getElementById('lista-tarefas');
  for(let index = 0; index < elementAssigmentList.length; index += 1) {
    let element = elementAssigmentList[index];
    if(element.classList.value.includes('completed')) {
      tarefas.removeChild(element);
    }
  }
}
// function to removel all itens from assigment list
function removeAll() {
  let elementAssigmentList = document.querySelectorAll('.assigmentList');  
  let tarefas = document.getElementById('lista-tarefas');
  for(let index = 0; index < elementAssigmentList.length; index += 1) {
    let element = elementAssigmentList[index];    
    if(element.classList.value.includes('assigmentList')) {
      tarefas.removeChild(element);
    }
  }
}
// function to remove iten by selection
function removeChoosed() {
  let elementAssigmentList = document.querySelectorAll('.assigmentList');
  let tarefas = document.getElementById('lista-tarefas');
  for(let index = 0; index < elementAssigmentList.length; index += 1) {
    let element = elementAssigmentList[index];
    if(element.classList.value.includes('backgroundList')) {
      tarefas.removeChild(element);
    }
  }
}
// created a function to encapsulate all listeners/function callers
function listeners() {
let getInput = document.getElementById('criar-tarefa');
getInput.addEventListener('click', addAssignment);
let cleanInput = document.getElementById('criar-tarefa');
cleanInput.addEventListener('click', cleanAssigmentInput);
let chooseList = document.querySelector('#lista-tarefas');
chooseList.addEventListener('click', chooseAssigmentList);
let lineThrough = document.querySelector('#lista-tarefas');
lineThrough.addEventListener('dblclick', lineThroughAssigment);
let removeCompletedLI = document.getElementById('remover-finalizados');
removeCompletedLI.addEventListener('click', removeCompleted);
let removeAllList = document.getElementById('apaga-tudo');
removeAllList.addEventListener('click', removeAll);
let removeChoosedIten = document.getElementById('remover-selecionado');
removeChoosedIten.addEventListener('click', removeChoosed);
}
// functions to be opened when open browser
window.onload = function() {
  structure();
  listeners();
}
// pixel art => modificar botão para input de valores; acrescentar função no VQV onde let base = ' ' copiar função de criação de base, adicionar if input tem numero adicionar  valor a base, if input < 5 || > 50 alert, if input é texto e não numero alert
