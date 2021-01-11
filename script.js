let list = document.querySelector('#lista-tarefas');
let inputBox = document.getElementById('texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let listItens = document.querySelectorAll('li');
let capturedText = '';
let orderCount = 0;


function captureInputAndCreate() {
    button.addEventListener('click', function() {
        let captureText = document.getElementById('texto-tarefa').value;
        if (capturedText == captureText && capturedText != '') {
            alert('Você já tem esta tarefa na lista.');
        } else {
            if (captureText != '' && captureText != 'escreva uma tarefa...' && capturedText != captureText) {
                capturedText = captureText;
                let create = document.createElement('li');
                create.innerText = capturedText;
                orderCount += 1;
                create.style.order = orderCount;
                list.appendChild(create);
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
    list.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        event.target.classList.add('selected');

        return selected;
    })
}

function completedTask() {
    list.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    })
}



window.onload = function() {

    captureInputAndCreate();
    eraseInputBox();
    changeListInputColorSelectUnselect();
    completedTask()

}