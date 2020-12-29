function createLiElement() {
  const orderedList = document.getElementById('lista-tarefas');
  const textBox = document.getElementById('texto-tarefa');
  const liElement = document.createElement('li');
  liElement.innerText = textBox.value;
  liElement.addEventListener('click', changeBackgroundColor);
  orderedList.appendChild(liElement);
  textBox.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createLiElement);

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
