let clickButton = document.getElementById('criar-tarefa')
clickButton.addEventListener('click', addItem)

function addItem() {
    let taskList = document.querySelector('#lista-tarefas');    
    let task = document.createElement('li');
    let textBox = document.getElementById('texto-tarefa').value
    taskList.appendChild(task).innerText = textBox;
}