console.log('teste')

function createLiElement() {
  const orderedList = document.getElementById('lista-tarefas')
  let textBox = document.getElementById('texto-tarefa');
  let liElement = document.createElement('li');
  liElement.innerText = textBox.value;
  orderedList.appendChild(liElement);
  textBox.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createLiElement);
