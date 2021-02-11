//  Marcar como feito

function lineMark(markTask) {
  const taskselected = markTask.target;
  taskselected.classList.toggle('completed');
}

function line() {
  const scheduleList = document.querySelectorAll('li');
  scheduleList.forEach((element) => {
    element.addEventListener('dblclick', lineMark);
  });
}

//  Seleção de tarefa

function deselect() {
  document.querySelectorAll('.gray').forEach((element) => {
    element.classList.remove('gray');
  });
}

function greyMark(focusTask) {
  deselect();
  const taskselected = focusTask.target;
  taskselected.classList.add('gray');
}

function select() {
  const scheduleList = document.querySelectorAll('li');
  scheduleList.forEach((element) => {
    element.addEventListener('click', greyMark);
  });
}

// Criar a lista de tarefas

function creatSchedule() {
  if (document.getElementById('texto-tarefa').value === '' || document.getElementById('texto-tarefa').value === null) {
    alert('Ai não dá, filhão!');
  } else {
    const write = document.getElementById('texto-tarefa').value;
    const orderedList = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = write;
    orderedList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  }
  select();
  line();
}

const btnTask = document.getElementById('criar-tarefa');
btnTask.addEventListener('click', creatSchedule);


//  Limpar lista

function clear() {
  const btnClear = document.getElementById('apaga-tudo');
  btnClear.addEventListener('click', () => {
    document.querySelectorAll('li').forEach((element) => {
      element.remove();
    });
  });
  localStorage.clear();
}

clear();

//  Remover finalizados

function removeFinished() {
  document.querySelector('#remover-finalizados').addEventListener('click', () => {
    document.querySelectorAll('.completed').forEach((element) => {
      element.remove();
    });
  });
}

removeFinished();

//  Remover marcados

function removeSelected() {
  document.querySelector('#remover-selecionado').addEventListener('click', () => {
    document.querySelectorAll('.gray').forEach((element) => {
      element.remove();
    });
  });
}

removeSelected();

//  Salvalista no LocalStorage

function saveList() {
  document.querySelector('#salvar-tarefas').addEventListener('click', () => {
   localStorage.setItem('savedList', document.getElementById('lista-tarefas').innerHTML);
  });
}

saveList();

window.onload = () => {
  if (localStorage.length > 0) {
    document.getElementById('lista-tarefas').appendChild(localStorage.getItem('savedList'));
  }
}
