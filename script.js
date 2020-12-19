var addButton = document.getElementById('criar-tarefa')
var textBox = document.getElementById('texto-tarefa')

function add() {
    let son = document.createElement('li');
    let father = document.getElementsByTagName('ol');
    son.innerHTML = textBox.value
    father[0].appendChild(son)

    textBox.value = ''
}

addButton.addEventListener('click', add)