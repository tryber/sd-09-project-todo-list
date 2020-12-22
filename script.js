// Adicionando itens na lista
function addTask() {
  const createTask = document.querySelector('#criar-tarefa');

  createTask.addEventListener('click', function () {
    let task = document.querySelector("#texto-tarefa");

    let insertTask = document.createElement('li');
    let fatherList = document.querySelector('#lista-tarefas');

    insertTask.className = ('item-list');
    insertTask.innerText = task.value;

    fatherList.appendChild(insertTask);

    task.value = "";
  })
}
addTask()

// Removendo todos os itens da lista
function removeAll() {
  let removeAllItens = document.querySelector("#apaga-tudo");

  removeAllItens.addEventListener('click', function () {
    let itemList = document.querySelectorAll(".item-list");
    let fatherList = document.querySelector("#lista-tarefas");

    for (let index = 0; index < itemList.length; index += 1) {
      fatherList.removeChild(itemList[index])
    }
  });
}
removeAll()

function SelectItem() {
  let task = document.querySelector('#lista-tarefas')

  task.addEventListener('click', function(event) {
    let identifySelectedItem = document.querySelector(".selected")

    if( identifySelectedItem !== null) {
      identifySelectedItem.classList.remove("selected")
    }

    let clickedItem = event.target
    clickedItem.classList.add("selected")
  })
}

SelectItem ()


function finishTask() {
  const task = document.querySelector('#lista-tarefas');

  task.addEventListener('dblclick', function (event) {
    let finishedTask = event.target

    if (finishedTask.className === 'item-list completed' || finishedTask.className === 'item-list selected completed' || finishedTask.className === 'item-list completed selected') {
      finishedTask.classList.remove('selected')
      finishedTask.classList.remove('completed')
    } else {
      finishedTask.classList.add('completed')
  };

    console.log(event.target)
  });
}
finishTask()
