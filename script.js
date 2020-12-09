window.onload = function() {
    function titleOperation() {
        let operation = document.createElement('h5')
        let title = document.querySelector('.title')
        title.appendChild(operation)
        operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
        operation.id = 'funcionamento'
    }
    titleOperation();

    function createButton() {
        let button = document.createElement('button')
        button.id = 'criar-tarefa'
        button.innerHTML = 'Adicionar Tarefa'
        document.body.appendChild(button)
    }
    createButton()

    function createContainer() {
        let container = document.createElement('div')
        let button = document.querySelector('#criar-tarefa')
        let input = document.querySelector('#texto-tarefa')
        let listOrdened = document.querySelector('#lista-tarefas')
        container.appendChild(input)
        container.appendChild(button)
        container.appendChild(listOrdened)
        document.body.appendChild(container)
    }
    createContainer()

    function addNewTodo() {
        let button = document.querySelector('#criar-tarefa')
        let input = document.querySelector('#texto-tarefa')
        let list = document.querySelector('#lista-tarefas')

        button.addEventListener('click', function() {
            if (input.value.length > 0) {
                let newList = document.createElement('li')
                newList.innerText = input.value

                list.appendChild(newList)
                input.value = ''
            }
        })

        input.addEventListener('keyup', function(event) {
            if (event.keyCode === 13 && input.value.length > 0) {
                let newList = document.createElement('li')
                newList.innerText = input.value

                list.appendChild(newList)
                input.value = ''
            }
        })
    }
    addNewTodo()
}