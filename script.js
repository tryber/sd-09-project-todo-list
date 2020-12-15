// created a function to encapsulate all dynamic HTML sctructure
function structure() {
  let append = document.getElementById('infoSection');
  let createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);

  let createOL = document.createElement('ol');
  createOL.id = 'lista-tarefas';
  append.appendChild(createOL);
  let createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  append.appendChild(createButton);

  let createInput = document.createElement('input');
  createInput.id = 'texto-tarefa'
  createInput.setAttribute('type', 'text');
  append.appendChild(createInput);
}

function addAssignment() {
  document.getElementById('criar-tarefa');
  console.log('botão ok no listener, abaixo texte de console de input');
  let getInput = document.getElementById('texto-tarefa').value;
  console.log(getInput);
  
// pega texto do contido no input
// onclick conteudo do input = createElement li append ol
}

// created a function to encapsulate all listeners/function callers
function listeners() {
let addLI = document.getElementById('criar-tarefa');
addLI.addEventListener('click', addAssignment)
}

window.onload = function() {
  structure();
  listeners();
}
// pixel art => modificar botão para input de valores; acrescentar função no VQV onde let base = ' ' copiar função de criação de base, adicionar if input tem numero adicionar  valor a base, if input < 5 || > 50 alert, if input é texto e não numero alert