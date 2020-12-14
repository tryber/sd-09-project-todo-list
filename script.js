let orderedList = document.createElement('ol');
orderedList.id = 'lista-tarefas';
let body = document.querySelector('body');
body.appendChild(orderedList);
let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'Criar tarefa';
body.appendChild(button);
textBar = document.querySelector('input');
window.onload = function() {
    button.addEventListener('click', function() {
        let itens = document.createElement('li');
        itens.innerHTML = textBar.value;
        orderedList.appendChild(itens);
        textBar.value = '';
    });
    orderedList.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'rgb(128,128,128)';

    });
}