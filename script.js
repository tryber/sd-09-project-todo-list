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

    //exerc 7

    let getListIten = document.querySelector('#lista-tarefas');

    function changeBackGroundColor(event) {
        let list = document.querySelectorAll('li')
        for(i = 0; i < list.length; i += 1) {
            list[i].style.backgroundColor = 'white'
        }
        event.target.style.backgroundColor = "rgb(128, 128, 128)"

    }

    getListIten.addEventListener('click', changeBackGroundColor)


    function riskComplete(event) {
        event.target.classList.toggle('completed');
    }

    function taskRisk() {
        getListIten.addEventListener('dblclick', riskComplete)
    }
    taskRisk()