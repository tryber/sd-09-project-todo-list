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
            paintWhite[index].style.backgroundColor = 'rgb(255, 255, 255)';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })
}

selectTask();

function changeTaskStatus(){
    let list = document.getElementById('lista-tarefas');
    list.addEventListener('dblclick', function(event){
        if (event.target.className === ''){
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

function removeSelectedTask(){
    let removeSelectedBtn = document.getElementById('remover-selecionado');
    removeSelectedBtn.addEventListener('click', function(){
        let liList = document.querySelectorAll('li');

        for (let index = 0; index < liList.length; index += 1){
            let bkColor = liList[index].style.backgroundColor;
            if ( bkColor === 'rgb(128, 128, 128)'){
                liList[index].parentNode.removeChild(liList[index]);
            }
        }
    });
};

removeSelectedTask();

function moveUp(){
    let upBtn = document.getElementById('mover-cima');
    upBtn.addEventListener('click', function(){
        let liList = document.querySelectorAll('li');

        for (let index = 0; index < liList.length; index += 1){
            if (index > 0){
                let bkColor = liList[index].style.backgroundColor;
                if ( bkColor === 'rgb(128, 128, 128)'){
                    let goUp = liList[index].innerText;
                    let goDown = liList[index - 1].innerText;

                    document.getElementsByTagName('li')[index].innerText = goDown;
                    document.getElementsByTagName('li')[index - 1].innerText = goUp;

                    document.getElementsByTagName('li')[index].style.backgroundColor = 'rgb(255, 255, 255)';
                    document.getElementsByTagName('li')[index -1].style.backgroundColor = 'rgb(128, 128, 128)';
                }
            }
        }        
    });
};

moveUp();

function moveDown(){
    let upBtn = document.getElementById('mover-baixo');
    upBtn.addEventListener('click', function(){
        let liList = document.querySelectorAll('li');

        for (let index = 0; index < liList.length; index += 1){
            if (index < liList.length){
                let bkColor = liList[index].style.backgroundColor;
                if ( bkColor === 'rgb(128, 128, 128)'){
                    let goDown = liList[index].innerText;
                    let goUp = liList[index + 1].innerText;

                    document.getElementsByTagName('li')[index].innerText = goUp;
                    document.getElementsByTagName('li')[index + 1].innerText = goDown;

                    document.getElementsByTagName('li')[index].style.backgroundColor = 'rgb(255, 255, 255)';
                    document.getElementsByTagName('li')[index + 1].style.backgroundColor = 'rgb(128, 128, 128)';
                    break;
                }
            }
        }        
    });
};

moveDown();