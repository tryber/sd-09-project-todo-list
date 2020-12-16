function createTitle() {
  const headerAccess = document.querySelector('header');
  const definitionTitle = document.createElement('h1');
  headerAccess.appendChild(definitionTitle);
  definitionTitle.innerText = 'Minha Lista de Tarefas';
}

function createParagraph() {
  const mainAccess = document.querySelector('main');
  const definitionParagraph = document.createElement('p');
  mainAccess.appendChild(definitionParagraph);
  definitionParagraph.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  definitionParagraph.id = 'funcionamento';
}

function createInputTextArea() {
  const mainAccess = document.querySelector('main');
  const definitionInnerTextArea = document.createElement('input');
  mainAccess.appendChild(definitionInnerTextArea);
  definitionInnerTextArea.type = 'text';
  definitionInnerTextArea.id = 'texto-tarefa';
  definitionInnerTextArea.placeholder = 'Digite seu texto aqui!';
}

function createOrderedList() {
  const mainAccess = document.querySelector('main');
  const definitionOrderedList = document.createElement('ol');
  mainAccess.appendChild(definitionOrderedList);
  definitionOrderedList.id = 'lista-tarefas';
}

function createButtonAddItem() {
  const mainAccess = document.querySelector('main');
  const definitionButtonAddItem = document.createElement('button');
  mainAccess.appendChild(definitionButtonAddItem);
  definitionButtonAddItem.id = 'criar-tarefa';
  definitionButtonAddItem.innerText = 'Criar tarefa';
}

function clickAddItem() {
  const buttonAccess = document.querySelector('#criar-tarefa');
  const olAccess = document.querySelector('#lista-tarefas');
  buttonAccess.addEventListener('click' , function () {
    const elementList = document.createElement('li');
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    olAccess.appendChild(elementList);
    elementList.innerText = inputValue;
    input.value = '';
  });
}

function selectedItemList() {
  const itensList = document.getElementById('lista-tarefas');
    itensList.addEventListener('click' , function(event) {
      const selectedClass = document.querySelectorAll('.selected');
      for(let index = 0; index < selectedClass.length; index += 1) {
        selectedClass[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
}

function selectedCompletedItem() {
  const itensList = document.getElementById('lista-tarefas');
    itensList.addEventListener('dblclick' , function(event) {
      event.target.classList.add('completed');
    })
}

// const itensList = document.getElementById('lista-tarefas');
//   const selectedClass = document.querySelectorAll('.completed');
//   selectedClass.addEventListener('dblclick' , function(event){
//     for(let index = 0; index < itensList.length; index += 1) {
//       itensList[index].classList.remove('completed');
//     }
//   })

function removeCompletedItem() {
  const removeCompleted = document.getElementById('lista-tarefas');
  for(index = 0; index < removeCompleted.length; index += 1) {
    const itensListClass = removeCompleted.children[index];
    itensListClass.addEventListener('dblclick' , function () {
      itensListClass[index].classList.remove('completed');
    })
  }
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInputTextArea();
  createOrderedList();
  createButtonAddItem();
  clickAddItem();
  selectedItemList();
  selectedCompletedItem();
  removeCompletedItem();
};
