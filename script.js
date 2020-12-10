window.addEventListener("load", main)

function main () {
  const tasks = Tasks()
  tasks.createTask()
  loadMsg()
}



function Factory(){
  const TagButtonAddTask = document.getElementById("criar-tarefa")
  const TagOlListTasks = document.getElementById("lista-tarefas")
  const TagInputerTask = document.getElementById("texto-tarefa")
  return {
    MyTagButtonAddTask: TagButtonAddTask,
    MyTagOlListTasks: TagOlListTasks,
    MyTagInputerTask: TagInputerTask
  }
}

const nodeListTask = null

function Tasks() {
  const factory = Factory()

  function createTask () {
    const myTagButtonAddTask = factory.MyTagButtonAddTask
    myTagButtonAddTask.addEventListener("click", function (e) {
      e.preventDefault()

      const myTagInputerTask = factory.MyTagInputerTask
      const valueTask = myTagInputerTask.value
      const myTagOlListTasks = factory.MyTagOlListTasks

      myTagOlListTasks.innerHTML += `<li>${valueTask}</li>`

    // clean the input after click
    myTagInputerTask.value = null
    })

    console.log("createTask working")
  }
  return {
    createTask: createTask
  }

}


function loadMsg () {
  console.log("scripts working 🚀 ")
}
