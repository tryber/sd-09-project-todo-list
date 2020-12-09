const listaOrdenada = document.querySelector('#lista-tarefas');
const inputBox = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');

function reciveInputText () {
  button.addEventListener('click', function() {
    let text = inputBox.value;
    let li = document.createElement('li');
    listaOrdenada.appendChild(li);
    li.innerText = text;
    inputBox.value = '';
  })
}
reciveInputText ();
