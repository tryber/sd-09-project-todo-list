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
        event.target.className = 'selected';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })
}

selectTask();

function changeTaskStatus(){
    let list = document.getElementById('lista-tarefas');
    list.addEventListener('dblclick', function(event){
        if (event.target.className === 'selected'){
            event.target.className = 'completed';
            event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        } else {
            event.target.className = '';
            event.target.style.textDecoration = '';
        }        
    });
};

changeTaskStatus();

function clearList(){
    let clearBtn = document.getElementById('apaga-tudo');
    clearBtn.addEventListener('click', function(){
        let listToClear = document.querySelectorAll('li');
        for (let index = 0; index < listToClear.length; index += 1) {
            listToClear[index].parentNode.removeChild(listToClear[index]);
        }
    });
};

clearList();

function removeCompletedTasks(){
    let clearBtn = document.getElementById('remover-finalizados');
    clearBtn.addEventListener('click', function(){
        let listToClear = document.querySelectorAll('li');
        
        for (let index = 0; index < listToClear.length; index += 1) {
            if (listToClear[index].className === 'completed') {
                listToClear[index].parentNode.removeChild(listToClear[index]);
            }            
        }
    });
};

removeCompletedTasks();

