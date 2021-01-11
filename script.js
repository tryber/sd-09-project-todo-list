function createTitle() {
  const header = document.querySelector('header');
  const heading = document.createElement('h1');
  header.appendChild(heading);
  heading.innerText = 'Minha Lista de Tarefas';
  heading.style.color = 'black';
  heading.style.textAlign = 'center';
  heading.style.border = '1px solid purple';
}

function createParagraph() {
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  paragraph.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
  main.appendChild(paragraph);
}

function createInput() {
  const main = document.querySelector('main');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Digite item para adicionar a lista';
  main.appendChild(input);
}

const list = document.querySelector('#lista-tarefas');
const inputField = document.querySelector('#texto-tarefa');

function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

function createButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar tarefa';
  main.appendChild(button);
}

function orderTask() {
  const main = document.querySelector('main');
  const orderTask = document.createElement('ol');
  orderTask.id = 'lista-tarefas';
  main.appendChild(orderTask);
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createButton();
  orderTask();

}
