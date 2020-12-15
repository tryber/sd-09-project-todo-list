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

function createOrderedList() {
	const main = document.querySelector('main');
	const orderedList = document.createElement('ol');
	orderedList.id = 'lista-tarefas';
	main.appendChild(orderedList);
}

window.onload = function () {
  createTitle();
  createParagraph();
	createInput();
	createOrderedList()
};
