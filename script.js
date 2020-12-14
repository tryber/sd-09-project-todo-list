let taskList = [];
let listTask = document.querySelector('#lista-tarefas')

function addItemButton(){
  let clickButton = document.querySelector('#criar-tarefa')
  clickButton.addEventListener('click', function(event){
    let textInBox = document.querySelector('#texto-tarefa').value
    taskList.push(textInBox) 
    listTask.innerHTML = ''
    taskListItem();
    textInBox = document.querySelector('#texto-tarefa').value = '';  
})
}

function taskListItem(){
   for (let listItem = 0; listItem < taskList.length; listItem += 1){
    let taskItem = taskList[listItem]
    let item = document.createElement('li');   
    item.innerText = taskItem;
    listTask.appendChild(item)
   }
}


window.onload = function(){
    addItemButton();
    taskListItem()
    
};