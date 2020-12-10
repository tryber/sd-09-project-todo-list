function addTask(){
    let btn = document.getElementById('criar-tarefa');
    btn.addEventListener('click', function(){
        let task = document.getElementById('texto-tarefa').value;
        let list = document.getElementById('lista-tarefas');
        let listItem = document.createElement('li');
        listItem.innerText = task;
        list.appendChild(listItem);
        document.getElementById('texto-tarefa').value = '';
    });
}

addTask();

function selectTask() {
    let list = document.getElementById('lista-tarefas');
    list.addEventListener('click', function(event){
        let paintWhite = document.getElementsByTagName('li');
        
        for (let index = 0; index < paintWhite.length; index += 1) {
            paintWhite[index].style.backgroundColor = 'white';
        }

        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })
}

selectTask();