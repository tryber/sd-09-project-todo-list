var addButton = document.getElementById('criar-tarefa');
var textBox = document.getElementById('texto-tarefa');
var father = document.getElementsByTagName('ol')[0];

function add() {
    let son = document.createElement('li');
    
    son.innerHTML = textBox.value
    father.appendChild(son)

    textBox.value = ''
}

addButton.addEventListener('click', add)

var list = father.getElementsByTagName('li')

function changeBackground(originaryEvent) {
    for(i = 0; i < list.length; i += 1) {
        if (originaryEvent.target === list[i]) {
            list[i].style.backgroundColor  = 'rgb(128, 128, 128)'
        } else {
            list[i].style.backgroundColor = ''                                                   
        }
    }
}

father.addEventListener('click', changeBackground)

