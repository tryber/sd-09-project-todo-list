let taskList = [];
const listTask = document.querySelector('#lista-tarefas');

function addItemButton() {
  const clickButton = document.querySelector('#criar-tarefa');
  clickButton.addEventListener('click', function() {
    let textInBox = document.querySelector('#texto-tarefa').value;
    taskList.push(textInBox);
    listTask.innerHTML = '';
    taskListItem();
    textInBox = document.querySelector('#texto-tarefa').value = '';  
    paintElementLi()
  });
}

function taskListItem() {
  for (let listItem = 0; listItem < taskList.length; listItem += 1){
   const taskItem = taskList[listItem];
   let item = document.createElement('li');
   item.innerText = taskItem;
   listTask.appendChild(item);
   }
}
function paintElementLi () {
    let backgroundColorTask = document.getElementsByTagName('li')
    for (let indexElement = 0; indexElement < taskList.length; indexElement +=1 ){
        backgroundColorTask[indexElement].addEventListener('click', function(event){
           backgroundColorTask[indexElement].style.background = 'rgb(128, 128, 128)'
        })
    }
    
}


  

window.onload = function() {
    addItemButton();
    taskListItem();
    
};
