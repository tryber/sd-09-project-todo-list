let btn_Add = document.querySelector('#criar-tarefa');

function create_li() {
  let ol_list = document.getElementById('lista-tarefas');
  let li_list = document.createElement('li');
  let input_Add = document.querySelector('#texto-tarefa');
  li_list.innerText = input_Add.value;
  ol_list.appendChild(li_list);
  input_Add.value = '';
}


window.onload = function() {

  btn_Add.addEventListener('click', create_li);






}