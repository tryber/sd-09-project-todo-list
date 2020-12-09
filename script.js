let getButton = document.querySelector('#criar-tarefa');

function addElement() {
    let acessList = document.querySelector('#texto-tarefa');
    let elementCreate = document.createElement('li');
    let acessOl = document.querySelector('#lista-tarefas');
    elementCreate.innerText = acessList.value
    acessOl.appendChild(elementCreate);
    acessList.value = '';
}

    getButton.addEventListener('click', addElement)

    //exerc

    let getListIten = document.querySelector('#lista-tarefas');

    function changeBackGroundColor(event) {
        event.target.style.backgroundColor = "rgb(128, 128, 128)"
    }

    getListIten.addEventListener('click', changeBackGroundColor)