

function createHtmlElements() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerText = 'Minha Lista de Tarefas';
    let paragraph = document.createElement('p');
    paragraph.id = 'funcionamento'
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    let container = document.createElement('main');
    let body = document.body;
    let sectionOne = document.createElement('section');
    let taskInput = document.createElement('input');
    taskInput.id = 'texto-tarefa';
    let taskList = document.createElement('ol');
    taskList.id = 'lista-tarefas';
    let taskMaker = document.createElement('button');
    taskMaker.innerText = 'Criar';
    taskMaker.id = 'criar-tarefa';
    let userTaskContainer = document.createElement('div');
    userTaskContainer.id = 'userTask';
    let taskKiller = document.createElement('button');
    taskKiller.id = 'apaga-tudo';
    taskKiller.innerText = 'Apaga'
    


    body.appendChild(container);
    container.appendChild(header);
    header.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(sectionOne);
    sectionOne.appendChild(taskInput);
    sectionOne.appendChild(taskMaker);
    sectionOne.appendChild(taskKiller)
    container.appendChild(userTaskContainer)
    userTaskContainer.appendChild(taskList);

}


function addTask() {
    document.addEventListener('DOMContentLoaded', () => {
        let userTask = document.querySelector('#texto-tarefa');
        let getTask = document.querySelector('#criar-tarefa');
        let taskList = document.querySelector('#lista-tarefas')
        

        getTask.addEventListener('click', () => {
            let taskListItems = document.createElement('li');
            let taskContainer = userTask.value;
                taskListItems.className = 'task';
                taskListItems.innerText = taskContainer;
                taskList.appendChild(taskListItems);
                userTask.value = '';

        })

      
    })

}

function resetClass() {
    let taskOList = document.querySelector('ol');

    taskOList.addEventListener('click', () => {
        let taskList = document.querySelectorAll('li');
        for(let i = 0; i < taskList.length; i++) {
            taskList[i].classList.remove('selected')
        }

    })

}

function changeTaskBackground() {
    let body = document.body;

        body.addEventListener('click', (event) => {
            let taskList = document.querySelectorAll('li');
            let target = event.target;
            
            if(event.target.className === 'task') {
                target.className='task selected'
            }
        })

}

function lineThroughItem() {
    let body = document.body;

    body.addEventListener('dblclick', (event) => {
        let taskList = document.querySelectorAll('li');
        let target = event.target;
        console.log(target)

        if (event.target.className == 'task selected') {
            target.className = 'task selected completed'
        }
    })
}


function shutdownTask() {
    let taskKillerBtn = document.querySelector('#apaga-tudo');

    taskKillerBtn.addEventListener('click', () => {
        let taskList = document.querySelectorAll('li');
        let taskContainer = document.querySelector('ol');
        for(let i = 0; i < taskList.length; i++) {
            taskContainer.removeChild(taskList[i])
        }
    })
}

createHtmlElements();
addTask();
changeTaskBackground();
resetClass();
lineThroughItem();
shutdownTask();