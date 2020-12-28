function clickButton () {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let taskList = document.querySelector('#lista-tarefas')
    button.addEventListener('click', function (event) {
        let inputText = input.value;
        if (inputText === '') {
            alert ('Favor inserir uma nova tarefa!')
            return;
        }
        let newTask = document.createElement('li');
        taskList.appendChild(newTask);
        newTask.className = 'task';
        newTask.innerText = inputText;
        input.value = '';
    })
}

function taskSelected() {
    let divTasks = document.querySelectorAll('#lista-tarefas')
    let taskSelected = divTasks[0];
    for (let index = 0; index < divTasks.length; index += 1) {
        divTasks[index].addEventListener('click', function (event) {
            taskSelected.className = 'task';
            event.target.className = 'task selected';
            return taskSelected = event.target;
        })
    }
}

window.onload = function() {
    clickButton();
    taskSelected()
}