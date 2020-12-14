const textoTarefa = document.querySelector('#texto-tarefa');
const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const itemsList = document.getElementsByClassName('olItem');

// Recupera o valor do input e salva em um array
const list = [];
function createList() {
  const tasks = textoTarefa.value;
  list.push(tasks);
}

// Adiciona um item na lista
function setTask() {
  createList();
  const item = document.createElement('li');
  item.className = 'olItem';
  item.innerText = list[list.length - 1];
  olList.appendChild(item);
}

btnCreateTask.addEventListener('click', () => {
  setTask();
  textoTarefa.value = '';
  textoTarefa.focus();
});

function removeClassLineColor() {
  for (let item = 0; item < itemsList.length; item += 1) {
    if (itemsList[item].classList.contains('lineColor')) {
      itemsList[item].classList.remove('lineColor');
    }
  }
}

olList.addEventListener('click', function (event) {
  removeClassLineColor();
  event.target.classList.toggle('lineColor');
});

olList.addEventListener('dblclick', function(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
})

textoTarefa.addEventListener('keypress', function (tecla) {
  if (tecla.keyCode === 13) {
    setTask();
    textoTarefa.value = '';
    textoTarefa.focus();
  }
});
