const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const line = document.getElementsByClassName('line');

function addItemInList() {
  while (contentInput.value !== '') {
    const line = document.createElement('li');
    line.className = 'line';
    line.innerText = contentInput.value;
    orderList.appendChild(line);
    contentInput.value = '';
  };
}

function selectText(event) {
  for (let index = 0; index < line.length; index += 1) {
    line[index].removeAttribute('style');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

window.onload = function init() {
  button.addEventListener('click', addItemInList);
  orderList.addEventListener('dblclick', selectText);
};
