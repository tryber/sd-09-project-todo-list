window.onload = function(){
    createControls();
    createTaskList();
}

function createControls()
{
    const controlsContainer = document.querySelector('#controls-container');
    const controlButtonIds = [];
    const controlIputIds = ['texto-tarefa'];

    for(const element of controlIputIds){
        const input = document.createElement('input');
        input.id = element;
        controlsContainer.appendChild(input);
    }
}

function createTaskList(){
    const tasksContainer = document.querySelector('#tasks-container');
    const OrderedTaskListsIds = ['lista-tarefas'];

    for(const element of OrderedTaskListsIds){
        const Orderedlist = document.createElement('ol');
        Orderedlist.id = element;
        tasksContainer.appendChild(Orderedlist);
    }
}