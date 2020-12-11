let buttonNewTask = document.getElementById('criar-tarefa');

buttonNewTask.addEventListener('click', function(){
    let getTaskList = document.getElementById('lista-tarefas');
    let inputText = document.getElementById('texto-tarefa').value;
    let newLi = document.createElement('li');
    newLi.innerText = inputText;
    getTaskList.appendChild(newLi)
    cleartext();

    function cleartext(){
        document.getElementById('texto-tarefa').value = ''
    }

})
