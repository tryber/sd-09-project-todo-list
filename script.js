function createTitle() {
  // armazenar o elemento pai de onde será criado o elemento novo
  const header = document.querySelector('header');
  // agora criamos o elemento que queremos
  const heading = document.createElement('h1');
  // o pai header ele ta recebendo o heading como filho
  // o nosso h1 vai entrar dentro do header
  header.appendChild(heading);
  // coloca texto no h1
  heading.innerText = 'Minha Lista de Tarefas';
  heading.style.color = 'red';
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
  input.placeholder = 'Digite o item que deseja adicionar a lista';
  main.appendChild(input);
}

function createButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
	button.id = 'criar-tarefa';
	button.innerText = 'Criar tarefa'
  main.appendChild(button);
}

function createOrderedList() {
  const main = document.querySelector('main');
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  main.appendChild(orderedList);
}

function submitButton() {
	const orderedList = document.querySelector('#lista-tarefas');
	const button = document.querySelector('#criar-tarefa');
	button.addEventListener('click', function() {
		const input = document.querySelector('#texto-tarefa');
		const inputValue = document.querySelector('#texto-tarefa').value;
		const listItem = document.createElement('li');
		listItem.innerText = inputValue;
		orderedList.appendChild(listItem);
		input.value = '';
	})
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createOrderedList();
	createButton();
	submitButton();
};
