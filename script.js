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
        input.value = '';
    })
}
clickButton();

function selectedItem() {
    let itemTask = document.querySelectorAll('li');
    for (let index = 0; index < itemTask.length; index += 1) {
        itemTask[index].addEventListener('click', function (event) {
            event.target.classList.toggle('selected')
        }) 
    }
}
selectedItem();