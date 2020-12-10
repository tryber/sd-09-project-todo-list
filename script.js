window.onload = function() {
    addToDo();
    
}

const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');

function addToDo() {
    const buttonCreateTask = document.querySelector('#criar-tarefa')
    buttonCreateTask.addEventListener('click', function() {
        const createTask = document.createElement('li');
        createTask.innerText = inputElement.value;
        listElement.appendChild(createTask);

        createTask.addEventListener('click', colorTask);

        inputElement.value = '';
    })
}

function colorTask(event) {
    const tasks = document.querySelectorAll('#lista-tarefas li')
    tasks.forEach(task => {
        task.style.backgroundColor = ''
    });
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
