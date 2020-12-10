let taskTxt = document.getElementById('texto-tarefa');
let btnTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let items = document.getElementsByTagName('li');
let btnErase = document.getElementById('apaga-tudo');

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
  for (let i=0; i<items.length; i+= 1) {
    items[i].classList.remove('selected');
  }
  sltdLi.classList.add('selected');
}
btnTask.addEventListener('click', addList);
list.addEventListener('click',graySize);

//  codigo para apagar todos os itens da lista
function eraseAll() {
  for (let i=items.length-1; i>=0; i -=1){
    list.removeChild(items[i]);
  }
}
btnErase.addEventListener('click',eraseAll);

// codigo a seguir confere linha riscada em cada tarefa
function lineT() {
  let doneTask = event.target;
  doneTask.classList = 'completed';
}
list.addEventListener('dblclick',lineT);
