function newTask() {
  const list = document.querySelector('#lista-tarefas');
  const mt = document.querySelector('#texto-tarefa');
  const newli = document.createElement('li');
  newli.className = "item-list"
  newli.innerText = mt.value;
  list.appendChild(newli);
  mt.value = '';
}

function makeTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', newTask);
}
makeTask();

function backgroundItemlist() {
  let fullList = document.querySelector('#lista-tarefas');
  fullList.addEventListener('click', function(event) {
    let listOfItem = document.querySelectorAll('.item-list');
    if (event.target === fullList){
        return
    }
    
    for (let index = 0; index < listOfItem.length; index += 1) {
        listOfItem[index].className = 'item-list';
        listOfItem[index].style.background = 'none'
    }
    event.target.style.background = "rgb(128,128,128)";
    event.target.className += " selected";
  })
}
backgroundItemlist()
