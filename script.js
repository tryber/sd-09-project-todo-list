const listaOrdenada = document.querySelector('#lista-tarefas');
const inputBox = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas')

function reciveInputText() {
  button.addEventListener('click', function () {
    let text = inputBox.value;
    const li = document.createElement('li');
    listaOrdenada.appendChild(li);
    li.innerText = text;
    inputBox.value = '';
  });
}
reciveInputText();

function changeLiBackgroundColor() {
olList.addEventListener('click', function (event) {
  const list = document.querySelectorAll('li')
  for(const item of list) {
    item.style.background = 'white';
  }
event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})
}
changeLiBackgroundColor();
