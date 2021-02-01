let inputBox = document.getElementById('texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let listItens = document.querySelectorAll('li');
let capturedText = '';
let orderCount = 0;

function captureInputAndCreate() {
    button.addEventListener('click', function() {
        let captureText = document.getElementById('texto-tarefa').value;
        let ul = document.querySelector('#lista-tarefas');
        if (capturedText === captureText && capturedText != '') {
            alert('Você já tem esta tarefa na lista.');
        } else {
            if (captureText != '' && captureText != 'escreva uma tarefa...' && capturedText != captureText) {
                capturedText = captureText;
                let create = document.createElement('li');
                let createBox = document.createElement('div');
                createBox.style.width = '20px';
                createBox.style.height = '20px';
                createBox.style.display = 'inline-block';
                create.innerText = capturedText;
                orderCount += 1;
                create.style.order = orderCount;                
                create.style.alignItems = 'center';
                create.classList.add('task');
                ul.appendChild(create);
                create.appendChild(createBox);
                document.getElementById('texto-tarefa').value = '';
            } else {
                alert('Digite alguma tarfa primeiro');
            }
        }
    })
}

function eraseInputBox() {
    let erase = document.getElementById('texto-tarefa');
    erase.addEventListener('click', function() {
        erase.value = '';
    })
}

function changeListInputColorSelectUnselect() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
        if (selected && event.target.classList.contains('task')) {
            selected.classList.remove('selected');
        }
        if (event.target.classList.contains('task')) {
            event.target.classList.add('selected');
        }

    })
}

function completedTask() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('dblclick', function(event) {
        let completed = document.querySelector('.completed');
        if (completed && event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
            event.target.firstElementChild.classList.remove('checkedBox')
        } 
        else  {
            event.target.classList.add('completed');
            event.target.firstElementChild.classList.add('checkedBox')

        }
    })
}

function eraseButtom () {
    let eraseButtom = document.getElementById('apaga-tudo');    
    let list = document.querySelector('#lista-tarefas');    
    eraseButtom.addEventListener('click', function(event) {        
        list.innerHTML = '';           
    })
}

window.onload = function() {
    captureInputAndCreate();
    eraseInputBox();
    changeListInputColorSelectUnselect();
    completedTask();
    eraseButtom ();
}