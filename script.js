window.onload = function (){
  let button = document.querySelector('#criar-tarefa')
  let input = document.querySelector('#texto-tarefa')



  button.addEventListener('click', addnewassignment)


  function addnewassignment(event){
    let list = document.querySelector('#lista-tarefas')
    let content = input.value

    let newelement = document.createElement("li")
    newelement.innerText = content

    input.value = ""
    list.appendChild(newelement)
  }
}
