const btn_Add = document.querySelector('#criar-tarefa');
const olList = document.getElementById('lista-tarefas');


function create_li() {

  const liList = document.createElement('li');
  const input_Add = document.querySelector('#texto-tarefa');
  liList.innerText = input_Add.value;
  olList.appendChild(liList);
  input_Add.value = '';

}

function itemChangeBgColor(event) {

  let item = event.target;
  item.style.backgroundColor = 'rgb(128, 128, 128)';

}

window.onload = function() {

  btn_Add.addEventListener('click', create_li);
  olList.addEventListener('dblclick', itemChangeBgColor);

}
