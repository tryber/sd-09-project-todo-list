let taskTxt = document.getElementById('texto-tarefa');
let btnTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let items = document.getElementsByTagName('li');

//  codigo abaixo gera novo item na lista
function addList() {
  let clipboard = taskTxt.value;
  let itemList = document.createElement('li');
  itemList.innerText = clipboard;
  list.appendChild(itemList);
  taskTxt.value = '';
}
//  codigo para tornar o item da lista cinza quando clicado
function graySize() {
  let sltdLi = event.target;
  for (i in items) {
    items[i].className = '';
  }
  console.log(items);
  sltdLi.classList = 'selected';
}
btnTask.addEventListener('click', addList);
list.addEventListener('click',graySize);
