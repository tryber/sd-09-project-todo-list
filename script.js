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
    element.classList.remove('gray', 'contrast-font');
  });
}

function greyMark(focusTask) {
  deselect();
  const taskselected = focusTask.target;
  taskselected.classList.add('gray', 'contrast-font');
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
    listItem.className = 'list-item';
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
    localStorage.clear();
  });
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
    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('savedList');
    select();
    line();
  }
};

// Mover para cima elemento de lita

function upStairs() {
  const btnUp = document.getElementById('mover-cima');
  btnUp.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className.includes('gray') && index > 0) {
        const up = list[index].innerHTML;
        const upClass = list[index].className
        const down = list[index - 1].innerHTML;
        const downClass = list[index - 1].className;
        list[index - 1].innerHTML = up;
        list[index - 1].className = upClass;
        list[index].innerHTML = down;
        list[index].className = downClass;
      }
    }
  });
}

upStairs();

//  Mover para baixo elemento de lista

function downStairs() {
  const btnDown = document.getElementById('mover-baixo');
  btnDown.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
    for (let index = (list.length - 1); index >= 0; index -= 1) {
      if (list[index].className.includes('gray') && index < (list.length - 1)) {
        const up = list[index + 1].innerHTML;
        const upClass = list[index + 1].className;
        const down = list[index].innerHTML;
        const downClass = list[index].className;
        list[index].innerHTML = up;
        list[index].className = upClass;
        list[index + 1].innerHTML = down;
        list[index + 1].className = downClass;
      }
    }
  });
}

 downStairs();
