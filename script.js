let list = document.querySelector('#lista-tarefas');
let inputBox = document.getElementById('texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let listItens = document.querySelectorAll('li');
let capturedText = '';

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
                list.appendChild(create);
                document.getElementById('texto-tarefa').value = '';
                console.log('cliquei');
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
    })
}

window.onload = function() {
    captureInputAndCreate();
    eraseInputBox();
    changeListInputColorSelectUnselect();
}