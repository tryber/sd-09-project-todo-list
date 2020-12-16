// created a function to encapsulate all dynamic HTML sctructure
function structure() {
  let append = document.getElementById('infoSection');
  let createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);
  let createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  append.appendChild(createButton);
  let createInput = document.createElement('input');
  createInput.id = 'texto-tarefa'
  createInput.setAttribute('type', 'text');
  createInput.name = "inputAssigment"
  append.appendChild(createInput);
  let createRemoveButton = document.createElement('button');
  createRemoveButton.id = 'remover-selecionado';
  append.appendChild(createRemoveButton);
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
  }
}
// href: https://pt.stackoverflow.com/questions/299730/limpando-campos-do-formul%C3%A1rio
// for each inputed element on 'inputAssigment' change value for ' ';
// function to clean up inputed elements after assigment
function cleanAssigmentInput() {
  let inputed = document.getElementsByName("inputAssigment");
  inputed.forEach(element => {    
    element.value = '';
  })
}
// created a function to encapsulate all listeners/function callers
function listeners() {
let getInput = document.getElementById('criar-tarefa');
getInput.addEventListener('click', addAssignment);
let cleanInput = document.getElementById('criar-tarefa');
cleanInput.addEventListener('click', cleanAssigmentInput);
}


window.onload = function() {
  structure();  
  listeners();
}
// pixel art => modificar botão para input de valores; acrescentar função no VQV onde let base = ' ' copiar função de criação de base, adicionar if input tem numero adicionar  valor a base, if input < 5 || > 50 alert, if input é texto e não numero alert





