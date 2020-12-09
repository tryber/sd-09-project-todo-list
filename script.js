let taskTxt = document.getElementById('texto-tarefa');
let btnTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

//  codigo abaixo gera novo item na lista
function addList() {
    let clipboard= taskTxt.value;
    let itemList= document.createElement('li');
    itemList.innerText= clipboard;
    list.appendChild(itemList);
    taskTxt.value='';
}
btnTask.addEventListener('click', addList);
