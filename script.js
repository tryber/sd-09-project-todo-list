function backgroundcolorItem() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('click', function (event) {
      for (let item = 0; item < listItem.length; item += 1) {
        listItem[item].style.backgroundColor = '';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function taskCompleted() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('dblclick', function (event) {
      if (event.target.className === '') {
        event.target.className = 'completed';
      } else {
        event.target.className = '';
      }
    });
  }
}

function clearList() {
  const taskList = document.querySelector('#lista-tarefas');
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', function () {
    while (taskList.hasChildNodes) {
      taskList.removeChild(taskList.firstChild);
    }
  });
}

function btnAdd() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', function () {
    const listTask = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerText = input.value;
    listTask.appendChild(li);
    input.value = '';
    backgroundcolorItem();
    taskCompleted();
    clearList();
  });
}

window.onload = function () {
  btnAdd();
};
