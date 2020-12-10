const taskTxt = document.getElementById('texto-tarefa');
const btnTask = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const items = document.getElementsByTagName('li');
const btnErase = document.getElementById('apaga-tudo');
const slcItem = document.getElementsByClassName('selected');
const btnRm = document.getElementById('remover-selecionado');
const btnFin = document.getElementById('remover-finalizados');
const finalized = document.getElementsByClassName('completed');
const btnSave = document.getElementById('salvar-tarefas');
let saved = localStorage.getItem('savedTasks');

if (saved) {
  list.innerHTML = saved;
}

//  codigo abaixo gera novo item na lista atraves de click e enter
function addList() {
  const clipboard = taskTxt.value;
  const itemList = document.createElement('li');
  itemList.innerText = clipboard; 
  list.appendChild(itemList);
  taskTxt.value = '';
}

taskTxt.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      document.getElementById("criar-tarefa").click();
  }
});

btnTask.addEventListener('click', addList);

//  codigo para tornar o item da lista cinza quando clicado
function graySize(event) {
  const sltdLi = event.target;
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
  sltdLi.classList.add('selected');
}
list.addEventListener('click', graySize);

//  codigo para remover item selecionado da lista
function remover() {
  while(slcItem.length > 0){
    slcItem[0].parentNode.removeChild(slcItem[0]);
  }
}
btnRm.addEventListener('click', remover);

//  codigo para apagar todos os itens da lista
function eraseAll() {
  for (let i = items.length - 1; i >= 0; i -= 1) {
    list.removeChild(items[i]);
  }
}
btnErase.addEventListener('click', eraseAll);

// codigo a seguir confere linha riscada em cada tarefa
function lineT(event) {
  const doneTask = event.target;
  if (doneTask.className.includes('completed')) {
    doneTask.classList.remove('completed');
  } else {
    doneTask.classList.add('completed');
  }
}
list.addEventListener('dblclick', lineT);

//  codigo remove finalizados
function remFin() {
  while (finalized.length > 0) {
    finalized[0].parentNode.removeChild(finalized[0]);
  }
}
btnFin.addEventListener('click', remFin);

//  codigo salva alteracoes
function save(event) {
  event.preventDefault();
	if (list.length < 1) return;
	localStorage.setItem('savedTasks', list.innerHTML);
}
btnSave.addEventListener('click', save);
