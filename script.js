const listaTarefasOrderedList = document.querySelector('#lista-tarefas')
const textoTarefaImput = document.querySelector('#texto-tarefa')

function clearTextoTarefaValue () {
    textoTarefaImput.value = ''
}

function addTask () {
    const listItem = document.createElement('li')

    listItem.innerText = textoTarefaImput.value
    listaTarefasOrderedList.appendChild(listItem)

    clearTextoTarefaValue()
}

function listenToCriarTarefaButton () {
    const criarTarefaButton = document.querySelector('#criar-tarefa')

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

function toggleCompletedClass (event) {
    event.target.classList.toggle('completed')
}

function listenToListaTarefasOrderedList () {
    listaTarefasOrderedList.addEventListener('click', removeSelectedClass)
    listaTarefasOrderedList.addEventListener('click', addSelectedClass)
    listaTarefasOrderedList.addEventListener('dblclick', toggleCompletedClass)
}

listenToListaTarefasOrderedList()

function removeSelected () {
    const listItemNodeList = document.querySelectorAll('#lista-tarefas li')

    for (let i = 0; i < listItemNodeList.length; i += 1) {
        if (listItemNodeList[i].className === 'selected') {
            listaTarefasOrderedList.removeChild(listItemNodeList[i])
        }
    }
}

function listenToRemoverSelecionadoButton () {
    const removerSelecionadoButton = document.querySelector('#remover-selecionado')

    removerSelecionadoButton.addEventListener('click', removeSelected)
}

listenToRemoverSelecionadoButton()