const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.getElementById('lista-tarefas');


function createLi() {
  const liList = document.createElement('li');
  const inputAdd = document.querySelector('#texto-tarefa');
  liList.innerText = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
}

function itemChangeBgColor(event) {
  const item = event.target;
  item.style.backgroundColor = 'rgb(128, 128, 128)';
}

window.onload = function() {
  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('dblclick', itemChangeBgColor);
}
