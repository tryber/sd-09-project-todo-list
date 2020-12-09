let getButton = document.querySelector('#criar-tarefa');

function addElement() {
    let acessList = document.querySelector('#texto-tarefa');
    let elementCreate = document.createElement('li')
    let acessOl = document.querySelector('#lista-tarefas')
    elementCreate.innerText = acessList.value
    acessOl.appendChild(elementCreate)
}

    getButton.addEventListener('click', addElement)