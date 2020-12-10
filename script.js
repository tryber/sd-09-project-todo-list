function addTask(){
    let btn = document.getElementById('criar-tarefa');
    btn.addEventListener('click', function(){
        let task = document.getElementById('texto-tarefa').value;
        let list = document.getElementById('lista-tarefas');
        let listItem = document.createElement('li');
        listItem.innerText = task;
        list.appendChild(listItem);
    });
}

addTask();