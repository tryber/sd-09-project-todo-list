var taskTxt = document.getElementById('texto-tarefa');
var btnTask = document.getElementById('criar-tarefa');
var list = document.getElementById('lista-tarefas');

//codigo abaixo gera novo item na lista
btnTask.addEventListener('click', addList);
function addList () {
    var clipboard = taskTxt.value;
    var itemList = document.createElement('li');
    itemList.innerText = clipboard;
    list.appendChild(itemList);
    taskTxt.value ='';
}
