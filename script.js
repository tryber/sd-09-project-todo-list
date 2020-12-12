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

  function removeitemselect() {
    let item = document.querySelector('.selected')

    if (item) {
      item.remove()
    }
  }

  let buttoncima = document.querySelector('#mover-cima')

  buttoncima.addEventListener('click', moveelementup)

  function moveelementup() {
    let elemets = document.querySelectorAll('.assignment')
    let selectedelement = document.querySelector('.selected')

    for (let index = 0; index < elemets.length; index += 1) {
      let cima = index - 1
      let atual = index
      let elementCima
      let elementbaixo
      let elementCimaClass
      let elementBaixoClass


      if(cima >= 0){
        if (elemets[index] == selectedelement) {
          elementCima = elemets[cima].textContent
          elementbaixo = elemets[atual].textContent
          elementCimaClass = elemets[cima].classList.value
          elementBaixoClass = elemets[atual].classList.value

          elemets[cima].className = elementBaixoClass
          elemets[atual].className = elementCimaClass
          elemets[atual].innerText = elementCima
          elemets[cima].innerText = elementbaixo
        }
      }
    }
  }

  let buttonbaixo = document.querySelector('#mover-baixo')

  buttonbaixo.addEventListener('click', moveelementdown)

  function moveelementdown() {
    let elements = document.querySelectorAll('.assignment')
    let selectedelement = document.querySelector('.selected')

    for (let index = 0; index < elements.length; index += 1) {
      let baixo = index + 1
      let atual = index
      let elementTextAtual
      let elementTextBaixo
      let elementclassAtual
      let elementclassbaixo


      if(baixo < elements.length){
        if (elements[index] == selectedelement) {
          elementTextAtual = elements[baixo].textContent
          elementTextBaixo = elements[atual].textContent

          elements[atual].innerText = elementTextAtual
          elements[baixo].innerText = elementTextBaixo


          elementclassAtual = elements[atual].classList.value
          elementclassbaixo = elements[baixo].classList.value

          elements[atual].className = elementclassbaixo
          elements[baixo].className = elementclassAtual
        }
      }
    }
  }
}
