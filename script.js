const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);
function addTask () {
    const taskList = document.querySelector('#lista-tarefas');
    const taskItem = document.createElement('li');
    taskItem.innerText = inputText.value;
    taskList.appendChild(taskItem);
    taskItem.addEventListener('click', selectItem);
}

function selectItem(chosenItem) {
    const itemSelected = chosenItem.target;
    if (document.querySelector('.selected')){
        const previousSelected = document.querySelector('.selected');
        previousSelected.classList.remove('selected');
        previousSelected.style.backgroundColor = null;
        itemSelected.style.backgroundColor = 'rgb(128,128,128)';
        itemSelected.className += 'selected'
    }
    else{
        itemSelected.style.backgroundColor = 'rgb(128,128,128)';
        itemSelected.className +='selected'
    }
}