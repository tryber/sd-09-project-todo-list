let lista_ordenada = document.querySelector('#lista-tarefas');
let inputText = document.querySelector('#texto-tarefa').value;
let buttonClick = document.querySelector('#criar-tarefa');

function cLickBtn () {
    buttonClick.addEventListener('click', function () {
        if (inputText === '') {
            alert ('A tarefa não pode ser vazia!');
            return;
        }
        let newTask = document.createElement ('li');
        lista_ordenada.appendChild(newTask);
        newRow.innerText = inputText;
        inputText = '';
    })
    
}