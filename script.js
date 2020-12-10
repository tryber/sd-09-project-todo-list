window.onload = function() {
    let button = document.getElementById('criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', addTaskToList)
     
    function addTaskToList() {
        let taskToAdd = document.getElementById('texto-tarefa').value
        let taskToList = document.createElement('li');
        taskToList.innerText = taskToAdd;
        list.appendChild(taskToList);
        clearInput();
    }
    
    function clearInput() {
        if(document.getElementById('texto-tarefa').value !== 0) {
            document.getElementById('texto-tarefa').value = '';
        }
    }
}
