function clickButton () {
    const taskList = document.querySelector('#lista-tarefas')
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
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
    let listTasks = document.querySelector('#lista-tarefas')
    let taskSelected = listTasks[0];
    for (let index = 0; index < listTasks.length; index += 1) {
        listTasks[index].addEventListener('click', function (event) {
            taskSelected.className = 'task';
            event.target.className = 'task selected';
            return taskSelected = event.target;
        })
    }
}

function dblClick() {
    let taskList = document.querySelector('#lista-tarefas')
    taskList.addEventListener('dblclick', function (event) {
        event.target.classList.toggle('completed')
    });
}

window.onload = function() {
    clickButton();
    dblClick();
    taskSelected();

}