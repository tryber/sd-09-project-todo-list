window.onload = function() {
    let button = document.getElementById('criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', addTaskToList)
     
    function addTaskToList() {
        let taskToAdd = document.getElementById('texto-tarefa').value;
        if(document.getElementById('texto-tarefa').value == 0) {
            return alert('Insira uma tarefa');
        }
        let taskToList = document.createElement('li');
        taskToList.addEventListener('click', highlight)
        taskToList.className = 'item-list';
        taskToList.innerText = taskToAdd;
        list.appendChild(taskToList);
        clearInput();        
    }
    
    function clearInput() {
        if(document.getElementById('texto-tarefa').value !== 0) {
            document.getElementById('texto-tarefa').value = '';
        }
    }
    function highlight(event) {
        let listItemToHighlight = event.target;
        let previousSelectedItem = document.querySelector('.selected');
        if(listItemToHighlight.classList.contains('selected') !== true) {
            listItemToHighlight.classList.add('selected');
            previousSelectedItem.classList.remove('selected');
        }

    }
}
