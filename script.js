const listaTarefasOrderedList = document.querySelector('#lista-tarefas');

window.onload = () => {
  const tasksObjectsList = JSON.parse(localStorage.getItem('taskList'));

  if (
    localStorage.getItem('taskList') &&
    localStorage.getItem('taskList').length !== 0
  ) {
    for (let i = 0; i < tasksObjectsList.length; i += 1) {
      const listItem = document.createElement('li');

      listItem.innerText = tasksObjectsList[i].taskInnerText;
      listItem.className = tasksObjectsList[i].taskClassName;

      listaTarefasOrderedList.appendChild(listItem);
    }
  }
};

function clearTextoTarefaValue() {
  const textoTarefaImput = document.querySelector('#texto-tarefa');

  textoTarefaImput.value = '';
}

function addTask() {
  const textoTarefaImput = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');

  listItem.innerText = textoTarefaImput.value;
  listaTarefasOrderedList.appendChild(listItem);

  clearTextoTarefaValue();
}

function listenToCriarTarefaButton() {
  const criarTarefaButton = document.querySelector('#criar-tarefa');

  criarTarefaButton.addEventListener('click', addTask);
}

listenToCriarTarefaButton();

function removeSelectedClass() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < listItemNodeList.length; i += 1) {
    listItemNodeList[i].classList.remove('selected');
  }
}

function addSelectedClass(event) {
  event.target.classList.add('selected');
}

function toggleCompletedClass(event) {
  event.target.classList.toggle('completed');
}

function listenToListaTarefasOrderedList() {
  listaTarefasOrderedList.addEventListener('click', removeSelectedClass);
  listaTarefasOrderedList.addEventListener('click', addSelectedClass);
  listaTarefasOrderedList.addEventListener('dblclick', toggleCompletedClass);
}

listenToListaTarefasOrderedList();

function removeSelected() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < listItemNodeList.length; i += 1) {
    if (
      listItemNodeList[i].className === 'selected' ||
      listItemNodeList[i].className === 'completed selected'
    ) {
      listaTarefasOrderedList.removeChild(listItemNodeList[i]);
    }
  }
}

function listenToRemoverSelecionadoButton() {
  const removerSelecionadoButton = document.querySelector(
    '#remover-selecionado',
  );

  removerSelecionadoButton.addEventListener('click', removeSelected);
}

listenToRemoverSelecionadoButton();

function clearOrderedList() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < listItemNodeList.length; i += 1) {
    listaTarefasOrderedList.removeChild(listItemNodeList[i]);
  }
}

function listenToApagaTudoButton() {
  const apagaTudoButton = document.querySelector('#apaga-tudo');

  apagaTudoButton.addEventListener('click', clearOrderedList);
}

listenToApagaTudoButton();

function removeCompletedTasks() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  removeSelectedClass();

  for (let i = 0; i < listItemNodeList.length; i += 1) {
    if (listItemNodeList[i].className === 'completed') {
      listaTarefasOrderedList.removeChild(listItemNodeList[i]);
    }
  }
}

function listenToRemoverFinalizadosButton() {
  const removerFinalizadoButton = document.querySelector(
    '#remover-finalizados',
  );

  removerFinalizadoButton.addEventListener('click', removeCompletedTasks);
}

listenToRemoverFinalizadosButton();

function saveTasks() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');
  const tasksObjectsList = [];

  for (let i = 0; i < listItemNodeList.length; i += 1) {
    const taskObject = {
      taskInnerText: listItemNodeList[i].innerText,
      taskClassName: listItemNodeList[i].className,
    };

    tasksObjectsList.push(taskObject);
  }

  localStorage.setItem('taskList', JSON.stringify(tasksObjectsList));
}

function listenToSalvarTarefasButton() {
  const salvarTarefasButton = document.querySelector('#salvar-tarefas');

  salvarTarefasButton.addEventListener('click', saveTasks);
}

listenToSalvarTarefasButton();

function moveTheTaskUp() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 1; i < listItemNodeList.length; i += 1) {
    if (
      listItemNodeList[i].className === 'selected' ||
      listItemNodeList[i].className === 'completed selected'
    ) {
      const tempInnerText = listItemNodeList[i].innerText;
      const tempClassName = listItemNodeList[i].className;

      listItemNodeList[i].innerText = listItemNodeList[i - 1].innerText;
      listItemNodeList[i].className = listItemNodeList[i - 1].className;
      listItemNodeList[i - 1].innerText = tempInnerText;
      listItemNodeList[i - 1].className = tempClassName;
    }
  }
}

function moveTheTaskDown() {
  const listItemNodeList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < listItemNodeList.length - 1; i += 1) {
    if (
      listItemNodeList[i].className === 'selected' ||
      listItemNodeList[i].className === 'completed selected'
    ) {
      const tempInnerText = listItemNodeList[i].innerText;
      const tempClassName = listItemNodeList[i].className;

      listItemNodeList[i].innerText = listItemNodeList[i + 1].innerText;
      listItemNodeList[i].className = listItemNodeList[i + 1].className;
      listItemNodeList[i + 1].innerText = tempInnerText;
      listItemNodeList[i + 1].className = tempClassName;

      break;
    }
  }
}

function listenToMoverButtons() {
  const moverCimaButton = document.querySelector('#mover-cima');
  const moverBaixoButton = document.querySelector('#mover-baixo');

  moverCimaButton.addEventListener('click', moveTheTaskUp);
  moverBaixoButton.addEventListener('click', moveTheTaskDown);
}

listenToMoverButtons();
