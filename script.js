function addTasks() {
  const olTaskList = document.querySelector('#lista-tarefas');
  const buttonTasks = document.querySelector('#criar-tarefa');
  buttonTasks.addEventListener('click', function(){
    const lengthValue = document.querySelector('#texto-tarefa').value.length
      if(lengthValue > 0){
        const textTasks = document.querySelector('#texto-tarefa');
        const li = document.createElement('li');
        li.innerText = textTasks.value;
        olTaskList.appendChild(li);
        textTasks.value = '';
      }
  })
}
addTasks();

function addKeyTasks(){
  const olTaskList = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
      const lengthValue = document.querySelector('#texto-tarefa').value.length
      if(lengthValue > 0){
        const textTasks = document.querySelector('#texto-tarefa');
        const li = document.createElement('li');
        li.innerText = textTasks.value;
        olTaskList.appendChild(li);
        textTasks.value = '';
      }
    }
  })
}
addKeyTasks();

function itemSelected(){
  const olTaskList = document.querySelector('ol#lista-tarefas');
  olTaskList.addEventListener('click', function(event){    
    const li = event.target;
    const list = document.querySelector('.selectedList');
    if(list){
      list.classList.remove('selectedList');      
    }  
    li.classList.add('selectedList');
  })
}
itemSelected();


const btnClearList = document.querySelector('#apaga-tudo');
function removeList(){
btnClearList.addEventListener('click', function(){
  const clearList = document.querySelectorAll('ol li');
  const ol = document.querySelector('ol');
  for(let indexClear = 0; indexClear < clearList.length; indexClear +=1){
    ol.removeChild(clearList[indexClear]);
  }
})
}
removeList();

function DoubleClick(){
  const ol = document.querySelector('ol#lista-tarefas');
  ol.addEventListener('dblclick', function(event){
    const dlb = event.target;
    if(dlb.className.includes('completed')){
      dlb.classList.remove('completed')
    } else {
      dlb.classList.add('completed')
      }
  })
}
DoubleClick();

function removeFinished(){
  const btnRemoveFinished = document.querySelector('#remover-finalizados');
  btnRemoveFinished.addEventListener('click', function(){
    const cleanFinished = document.querySelectorAll('ol li');
    const ol = document.querySelector('ol');
    for(let index = 0; index < cleanFinished.length; index += 1){
      if(cleanFinished[index].className.includes('completed')){
        ol.removeChild(cleanFinished[index]);
      }
    }
  })
}
removeFinished();
