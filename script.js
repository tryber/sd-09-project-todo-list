const listaTarefasOrderedList = document.querySelector('#lista-tarefas')
const textoTarefaImput = document.querySelector('#texto-tarefa')

function listenToCriarTarefaButton () {
    const criarTarefaButton = document.querySelector('#criar-tarefa')

    criarTarefaButton.addEventListener('click', addTask)
}

function clearTextoTarefaValue () {
    textoTarefaImput.value = ''
}

function addTask () {
    const listItem = document.createElement('li')

    listItem.innerText = textoTarefaImput.value
    listaTarefasOrderedList.appendChild(listItem)

    clearTextoTarefaValue()
}

listenToCriarTarefaButton()
