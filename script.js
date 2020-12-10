const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.getElementById('lista-tarefas');


function createLi() {

  const liList = document.createElement('li');
  const input_Add = document.querySelector('#texto-tarefa');
  liList.innerText = input_Add.value;
  olList.appendChild(liList);
  input_Add.value = '';

}

function itemChangeBgColor(event) {

  const item = event.target;
  item.style.backgroundColor = 'rgb(128, 128, 128)';

}

window.onload = function() {

  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('dblclick', itemChangeBgColor);

}
