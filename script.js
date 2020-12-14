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
  const taskCompleted = document.querySelectorAll('.completed');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < taskCompleted.length; index += 1) {
    taskList.removeChild(taskCompleted[index]);
  }
}

function salveList() {

}

window.onload = function () {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', taskAdd);
  const btnRemoveSelected = document.querySelector('#remover-selecionado');
  btnRemoveSelected.addEventListener('click', removeElementSelected);
  const btnClearCompleted = document.querySelector('#remover-finalizados');
  btnClearCompleted.addEventListener('click', removeElementsCompleted);
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearList);
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', salveList);
};
