let orderedList = document.createElement('ol');
orderedList.id = 'lista-tarefas';
let body = document.querySelector('body');
body.appendChild(orderedList);
let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'Criar tarefa';
body.appendChild(button);
textBar = document.querySelector('input');
let elementsOfList = [];
let clearButton = document.createElement('button');
clearButton.id = 'apaga-tudo';
clearButton.innerHTML = 'Limpar lista'
body.appendChild(clearButton);
window.onload = function() {
    button.addEventListener('click', function() {
        let itens = document.createElement('li');
        itens.innerHTML = textBar.value;
        elementsOfList.push(itens);
        orderedList.appendChild(itens);
        textBar.value = '';
    });
    orderedList.addEventListener('click', function(event) {
        for (let index = 0; index < elementsOfList.length; index +=1) {
            if (elementsOfList[index].style.backgroundColor === 'rgb(128, 128, 128)') {
                elementsOfList[index].style.backgroundColor = ''
            }
        }
         event.target.style.backgroundColor = 'rgb(128,128,128)';
    });

    orderedList.addEventListener('dblclick', function(event) {
        if( event.target.className === 'completed') {
            event.target.classList.remove('completed');
        } else {
            event.target.className = 'completed';
        }
    });
clearButton.addEventListener('click', function() {
    itens = document.querySelectorAll('li');
    for (let index = 0; index < itens.length; index += 1) {
        itens[index].remove();
    }
 });
}
