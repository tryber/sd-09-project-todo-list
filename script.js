let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas')

function clickButton () {
    button.addEventListener('click', function (event) {
        let inputText = input.value;
        if (inputText === '') {
            alert ('Favor inserir uma nova tarefa!')
            return;
        }
        let newTask = document.createElement('li');
        taskList.appendChild(newTask);
        newTask.innerText = inputText;
        inputText = '';
    })
}
clickButton();