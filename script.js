window.onload = function () {
  let button = document.querySelector('#criar-tarefa')
  let input = document.querySelector('#texto-tarefa')

  button.addEventListener('click', addnewassignment)

  function addnewassignment() {
    let list = document.querySelector('#lista-tarefas')
    let content = input.value

    let newelement = document.createElement("li")
    newelement.innerText = content
    newelement.className = 'assignment'

    input.value = ""
    list.appendChild(newelement)
  }


  addEventListener('click', changebackgroundassignment)

  function changebackgroundassignment(event) {
    let oldSelectedElement = document.querySelector('.selected')
    let selectedElement = event.target

    if (selectedElement.classList.contains('assignment')) {
      if (oldSelectedElement) {
        oldSelectedElement.classList.remove('selected')
        selectedElement.classList.add('selected')
      }
      else {
        selectedElement.classList.add('selected')
      }
    }
  }

  addEventListener('dblclick', completedassignment)


  function completedassignment(event) {
    let selectedElement = event.target

    if (selectedElement.classList.contains('assignment')) {
      if (selectedElement.classList.contains('completed')) {
        selectedElement.classList.remove('completed')
      }
      else {
        selectedElement.classList.add('completed')
      }
    }
  }

  let buttonremoveallitems = document.querySelector('#apaga-tudo')

  buttonremoveallitems.addEventListener('click', removeallassignments)

  function removeallassignments() {
    let list = document.querySelector('#lista-tarefas')

    while (list.lastElementChild) {
      list.removeChild(list.lastElementChild)
    }
  }


  let buttonremoveallitemscompleted = document.querySelector('#remover-finalizados')

  buttonremoveallitemscompleted.addEventListener('click', removeallassignmentscompleteds)

  function removeallassignmentscompleteds() {
    let completedItems = document.querySelectorAll('.completed')
    for (var element of completedItems) {
      element.remove();
    }
  }

  let buttonremoveselection = document.querySelector('#remover-selecionado')

  buttonremoveselection.addEventListener('click', removeitemselect)

  function removeitemselect(){
    let item = document.querySelector('.selected')

    if(item){
      item.remove()
    }
  }
}
