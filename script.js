const textoTarefa = document.querySelector('#texto-tarefa');
const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const apagaTudo = document.querySelector('#apaga-tudo');
const itemsList = document.getElementsByClassName('olItem');

// Recupera o valor do input e salva em um array
const list = [];
function createList() {
  const tasks = textoTarefa.value;
  list.push(tasks);
}

// Função para adiciona um item na lista
function setTask() {
  createList();
  const item = document.createElement('li');
  item.className = 'olItem';
  item.innerText = list[list.length - 1];
  olList.appendChild(item);
}

// Evento que adiciona uma nova tarefa
btnCreateTask.addEventListener('click', () => {
  setTask();
  textoTarefa.value = '';
  textoTarefa.focus();
});

// Função que remove a classe que colori a linha selecionada
function removeClassLineColor() {
  for (let item = 0; item < itemsList.length; item += 1) {
    if (itemsList[item].classList.contains('lineColor')) {
      itemsList[item].classList.remove('lineColor');
    }
  }
}

// Evento para colocar ou remover a cor da linha selecionada
olList.addEventListener('click', function (event) {
  removeClassLineColor();
  event.target.classList.toggle('lineColor');
});

// Evento que risca a linha sobre a qual acontece o double click
olList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
});

// Adiciona tarefas utilizando a tecla enter
textoTarefa.addEventListener('keypress', function (tecla) {
  if (tecla.keyCode === 13) {
    setTask();
    textoTarefa.value = '';
    textoTarefa.focus();
  }
});

// Evento para apagar todas as tarefas
apagaTudo.addEventListener('click', () => {
  const itemsList = document.querySelectorAll('.olItem');
  for (let item = 0; item < itemsList.length; item += 1) {
    if (itemsList[item].parentNode) {
      itemsList[item].parentNode.removeChild(itemsList[item]);
    }
  }
});
