function backgroundcolorItem(elementLi) {
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
  backgroundcolorItem(li);
  taskCompleted(li);
}

function removeElementoSelected() {
  const elementsLi = document.querySelectorAll('li');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if (elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      taskList.removeChild(elementsLi[index]);
    }
  }
}

window.onload = function () {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', taskAdd);
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearList);
  const btnRemove = document.querySelector('#remover-finalizados');
  btnRemove.addEventListener('click', removeElementoSelected);
};
