window.addEventListener("load", main)

function main () {
  const tasks = Tasks()
  tasks.createTask()
  tasks.selectTask()
  loadMsg()
}



function Factory(){
  const TagButtonAddTask = document.getElementById("criar-tarefa")
  const TagOlListTasks = document.getElementById("lista-tarefas")
  const TagInputerTask = document.getElementById("texto-tarefa")
  const TagButtonRemoveTask = document.getElementById("remover-finalizados")
  const TagLiItemTasks = document.getElementsByClassName("item-list")

  return {
    MyTagButtonAddTask: TagButtonAddTask,
    MyTagOlListTasks: TagOlListTasks,
    MyTagInputerTask: TagInputerTask,
    MyTagLiItemTasks: TagLiItemTasks,
    MyTagButtonRemoveTask: TagButtonRemoveTask
  }
}

const nodeListTask = null

function Tasks() {
  const factory = Factory()

  let myTagLiItemTasks = factory.MyTagLiItemTasks

   function createTask () {
    const myTagButtonAddTask = factory.MyTagButtonAddTask
    myTagButtonAddTask.addEventListener("click", function (e) {
      e.preventDefault()
      const myTagInputerTask = factory.MyTagInputerTask
      const valueTask = myTagInputerTask.value
      const myTagOlListTasks = factory.MyTagOlListTasks
      if(!valueTask){
        return
      }
      myTagOlListTasks.innerHTML += `<li class="item-list">${valueTask}</li>`
      myTagLiItemTasks = factory.MyTagLiItemTasks
      console.log(factory.MyTagLiItemTasks)
      selectTask()
      completedTask()
      removeCompletedTask()
    // clean the input after click
    myTagInputerTask.value = null
    })
  }

 function selectTask () {

    for(let i = 0; i < myTagLiItemTasks.length; i++) {
      myTagLiItemTasks[i].addEventListener('click', function(){
        if(myTagLiItemTasks[i].classList[1]){
          myTagLiItemTasks[i].classList.remove("selectedTask")
        } else {
        for(let j = 0; j < myTagLiItemTasks.length; j++) {
          myTagLiItemTasks[j].classList.remove("selectedTask")
        }
          myTagLiItemTasks[i].classList.add("selectedTask")
        }
      })
    }
    }

  function completedTask() {
    for(let i = 0; i < myTagLiItemTasks.length; i++) {
      myTagLiItemTasks[i].addEventListener('dblclick', function(){
        console.log(myTagLiItemTasks[i].classList[1])
        if(myTagLiItemTasks[i].classList[1]){
          myTagLiItemTasks[i].classList.remove("completed")
        } else {
          myTagLiItemTasks[i].classList.add("completed")
        }
      })
    }
  }

  function removeCompletedTask () {
     const myTagButtonRemoveTask = factory.MyTagButtonRemoveTask
     const myTagOlListTasks = factory.MyTagOlListTasks
     myTagButtonRemoveTask.addEventListener("click", function() {
        for(let i = 0; i < myTagLiItemTasks.length; i++) {
          if (myTagLiItemTasks[i].classList[1]) {
           myTagOlListTasks.removeChild(myTagLiItemTasks[i]);
          }
        }
     })
  }


    console.log("createTask working")
  return {
    selectTask: selectTask,
    createTask: createTask,
    completedTask: completedTask,
    removeCompletedTask: removeCompletedTask
  }
}


function loadMsg () {
  console.log("scripts working 🚀 ")
}
