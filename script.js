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
