function changeBackgroundColor(event) {
  const itemsList = document.getElementsByTagName('li');
  for (let index = 0; index < itemsList.length; index += 1) {
    if (itemsList[index].style.backgroundColor !== '') {
      itemsList[index].style.backgroundColor = '';
    }
  } event.target.style.backgroundColor = 'rgb(128,128,128)';
}
function completedTask(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
}

function createLiElement() {
  const orderedList = document.getElementById('lista-tarefas');
  const textBox = document.getElementById('texto-tarefa');
  const liElement = document.createElement('li');
  liElement.innerText = textBox.value;
  liElement.addEventListener('click', changeBackgroundColor);
  liElement.addEventListener('dblclick', completedTask);
  orderedList.appendChild(liElement);
  textBox.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createLiElement);
