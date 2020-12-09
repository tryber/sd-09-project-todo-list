const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
//inputText.addEventListener('change',updateContent);
buttonAdd.addEventListener('click', addTask);
function updateContent (inputBox) {
    const newText = inputBox.target.value;
}
function addTask () {
    const taskList = document.querySelector('#lista-tarefas');
    const taskItem = document.createElement('li');
    
    taskItem.innerText = inputText.value;
    taskList.appendChild(taskItem);
}