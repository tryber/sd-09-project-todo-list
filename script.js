const listaTarefasOrderedList = document.querySelector('#lista-tarefas')
const textoTarefaImput = document.querySelector('#texto-tarefa')
const criarTarefaButton = document.querySelector('#criar-tarefa')

function clearTextoTarefaValue () {
    textoTarefaImput.value = ''
}

function addTask () {
    const listItem = document.createElement('li')

    listItem.innerText = textoTarefaImput.value
    listItem.classList.add('pointer')
    listaTarefasOrderedList.appendChild(listItem)

    clearTextoTarefaValue()
}

function listenToCriarTarefaButton () {
    criarTarefaButton.addEventListener('click', addTask)
}

listenToCriarTarefaButton()

function removeSelectedClass () {
    const listItemNodeList = document.querySelectorAll('#lista-tarefas li')

    for (let i = 0; i < listItemNodeList.length; i += 1) {
        listItemNodeList[i].classList.remove('selected')
    }
}

function addSelectedClass (event) {
    event.target.classList.add('selected')
}

function listenTolistaTarefasOrderedList () {
    listaTarefasOrderedList.addEventListener('click', removeSelectedClass)
    listaTarefasOrderedList.addEventListener('click', addSelectedClass)
}

listenTolistaTarefasOrderedList()

