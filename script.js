function selectedItem(elementLi) {
  elementLi.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');
    for (let item = 0; item < listItem.length; item += 1) {
      listItem[item].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function taskCompleted(elementLi) {
  elementLi.addEventListener('dblclick', function () {
    if (elementLi.className === '') {
      elementLi.className = 'completed';
    } else {
      elementLi.className = '';
    }
  });
}

function clearList() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastChild);
  }
}

function taskAdd() {
  const listTask = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  listTask.appendChild(li);
  input.value = '';
  selectedItem(li);
  taskCompleted(li);
}

function removeElementSelected() {
  const elementsLi = document.querySelectorAll('li');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if (elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      taskList.removeChild(elementsLi[index]);
    }
  }
}

function removeElementsCompleted() {
  const taskListCompleted = document.querySelectorAll('.completed');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < taskListCompleted.length; index += 1) {
    taskList.removeChild(taskListCompleted[index]);
  }
}

function upTaskSelected() {
  const taskList = document.querySelector('#lista-tarefas');
  const elementsLi = document.querySelectorAll('li');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if ((elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') && (elementsLi[index] !== taskList.firstChild)) {
      const liAux = {
        text: elementsLi[index].previousElementSibling.innerText,
        class: elementsLi[index].previousElementSibling.className,
      }
      elementsLi[index].previousElementSibling.innerText = elementsLi[index].innerText;
      elementsLi[index].previousElementSibling.className = elementsLi[index].className;
      elementsLi[index].innerText = liAux.text;
      elementsLi[index].className = liAux.class;
      elementsLi[index].previousElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      elementsLi[index].style.backgroundColor = '';
      break;
    }
  }
}

function downTaskSelected() {
  const taskList = document.querySelector('#lista-tarefas');
  const elementsLi = document.querySelectorAll('li');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if ((elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') && (elementsLi[index] !== taskList.lastChild)) {
      const liAux = {
        text: elementsLi[index].nextElementSibling.innerText,
        class: elementsLi[index].nextElementSibling.className,
      }
      elementsLi[index].nextElementSibling.innerText = elementsLi[index].innerText;
      elementsLi[index].nextElementSibling.className = elementsLi[index].className;
      elementsLi[index].innerText = liAux.text;
      elementsLi[index].className = liAux.class;
      elementsLi[index].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      elementsLi[index].style.backgroundColor = '';
      break;
    }
  }
}

function salveList() {

}

window.onload = function () {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', taskAdd);
  const btnRemoveSelected = document.querySelector('#remover-selecionado');
  btnRemoveSelected.addEventListener('click', removeElementSelected);
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', upTaskSelected);
  const btnDown = document.querySelector('#mover-baixo');
  btnDown.addEventListener('click', downTaskSelected);
  const btnClearCompleted = document.querySelector('#remover-finalizados');
  btnClearCompleted.addEventListener('click', removeElementsCompleted);
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearList);
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', salveList);
};
