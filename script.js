window.onload = function (){
  let button = document.querySelector('#criar-tarefa')
  let input = document.querySelector('#texto-tarefa')

  button.addEventListener('click', addnewassignment)


  function addnewassignment(event){
    let list = document.querySelector('#lista-tarefas')
    let content = input.value

    let newelement = document.createElement("li")
    newelement.innerText = content
    newelement.className = 'assignment'

    input.value = ""
    list.appendChild(newelement)
  }
}


let itemlist = document.querySelectorAll('.assignment')

addEventListener('click', changebackgroundassignment)


function changebackgroundassignment(event){
  if(event.target.classList.contains('assignment')){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
