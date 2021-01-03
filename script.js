let clickButton = document.getElementById('criar-tarefa')
clickButton.addEventListener('click', addItem)

function addItem() {
    let taskList = document.querySelector('#lista-tarefas');    
    let task = document.createElement('li');
    let textBox = document.getElementById('texto-tarefa').value
    taskList.appendChild(task).innerText = textBox;
    document.getElementById('texto-tarefa').value = ''
}

let clickTask = document.getElementById('lista-tarefas')
clickTask.addEventListener('click', changeGray)

function changeGray(taskGray) {
    let allList = document.querySelectorAll('li')
    for (let index = 0; index < allList.length; index += 1) {
        allList[index].style.backgroundColor = '';
    }

    let choices = taskGray.target
    choices.style.backgroundColor = 'rgb(128, 128, 128)';
}

let dbclickTask = document.getElementById('lista-tarefas')
dbclickTask.addEventListener('dblclick', midLine)

function midLine(line) {
    let finalchoices = line.target
    if ( finalchoices.className === 'completed' ){
        finalchoices.className = ''
    } else {
        finalchoices.className = 'completed'       
    }
}

let clickApagar = document.getElementById('apaga-tudo')
clickApagar.addEventListener('click', apagador)

function apagador() {
    let taskList = document.querySelectorAll('li')
    for (let index = 0; index < taskList.length; index += 1) {
        let criança = document.querySelector('.lista-tarefas').lastChild
        document.querySelector('.lista-tarefas').removeChild(criança)
    }    
}

let clickRemovFinalizados = document.getElementById('remover-finalizados')
clickRemovFinalizados.addEventListener('click', rmFinalizados)

function rmFinalizados() {
    let riscasos = document.querySelectorAll('.completed')
    for (let index = 0; index < riscasos.length; index += 1) {
        let criança = riscasos[index]
        document.querySelector('.lista-tarefas').removeChild(criança)
    }   
}
