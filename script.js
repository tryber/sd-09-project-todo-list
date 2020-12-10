const btn_Add = document.querySelector('#criar-tarefa');

function create_li() {

  const olList = document.getElementById('lista-tarefas');
  const liList = document.createElement('li');
  const input_Add = document.querySelector('#texto-tarefa');
  liList.innerText = input_Add.value;
  olList.appendChild(liList);
  input_Add.value = '';
}

window.onload = function() {

  btn_Add.addEventListener('click', create_li);

}
