const textoTarefa = document.querySelector('#texto-tarefa');
const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const apagaTudo = document.querySelector('#apaga-tudo');
const removerFinalizados = document.querySelector('#remover-finalizados');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const ilList = document.getElementsByTagName('li');

// Recupera dados salvos localmente
if (localStorage.getItem('savedClasses')) {
  const tasks = localStorage.getItem('savedItems').split(';');
  const classes = localStorage.getItem('savedClasses').split(';');
  for (let i = 0; i < tasks.length - 1; i += 1) {
    const item = document.createElement('li');
    item.className = classes[i];
    item.innerText = tasks[i];
    olList.appendChild(item);
  }
}

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

// Evento para colocar ou remover a cor da linha selecionada
olList.addEventListener('click', function (event) {
  for (let item = 0; item < ilList.length; item += 1) {
    ilList[item].classList.remove('line-color');
  }
  event.target.classList.toggle('line-color');
});

// Evento que risca a linha sobre a qual acontece o double click
olList.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
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

// Evento para apagar as tarefas finalizadas
removerFinalizados.addEventListener('click', () => {
  const completedItem = document.querySelectorAll('.completed');
  for (let item = 0; item < completedItem.length; item += 1) {
    if (completedItem[item].parentNode) {
      completedItem[item].parentNode.removeChild(completedItem[item]);
    }
  }
});

function saveLocal() {
  let savedItems = '';
  let savedClasses = '';

  for (let item = 0; item < ilList.length; item += 1) {
    savedItems += `${ilList[item].innerText};`;
    savedClasses += `${ilList[item].className};`;
  }
  localStorage.setItem('savedItems', savedItems);
  localStorage.setItem('savedClasses', savedClasses);
}
salvarTarefas.addEventListener('click', saveLocal);
