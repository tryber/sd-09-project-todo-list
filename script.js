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

window.onload = function() {
  structure();
}