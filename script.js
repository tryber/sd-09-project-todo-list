const listaOrdenada = document.querySelector('#lista-tarefas');
const inputBox = document.querySelector('#texto-tarefa');
const addbutton = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas')
const removeButton = document.querySelector('#apaga-tudo');

function reciveInputText() {
  addbutton.addEventListener('click', function () {
    let text = inputBox.value;
    const li = document.createElement('li');
    li.className = 'itensDaLista'
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

function lineThroughList () {
  listaOrdenada.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}
lineThroughList ();

function removeAllListItens () {
  removeButton.addEventListener('click', function() {
    const listItens = document.querySelectorAll('.itensDaLista');
    for (let index = 0; index < listItens.length; index += 1) {
      olList.removeChild(listItens[index]);
    };
  });
}
removeAllListItens();
