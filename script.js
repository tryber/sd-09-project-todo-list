// Adicionando itens na lista
function addTask() {
  let createTask = document.querySelector("#criar-tarefa")

  createTask.addEventListener('click', function () {
    let task = document.querySelector("#texto-tarefa")
    
    let insertTask = document.createElement("li")
    let fatherList = document.querySelector("#lista-tarefas")

    insertTask.className = 'item-list'
    insertTask.innerText = task.value

    fatherList.appendChild(insertTask)

    task.value = ""
  })
}
addTask()

// Removendo todos os itens da lista
function removeAll() {
  let removeAllItens = document.querySelector("#apaga-tudo")

  removeAllItens.addEventListener('click', function () {
    let itemList = document.querySelectorAll(".item-list")
    let fatherList = document.querySelector("#lista-tarefas")

    for (let index = 0; index < itemList.length; index += 1) {
      fatherList.removeChild(itemList[index])
    }
  })
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
    console.log(event.target)
  })
}

SelectItem ()