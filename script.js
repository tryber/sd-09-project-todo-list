function backgroundcolorItem(elementLi) {
  elementLi.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');
    for (let item = 0; item < listItem.length; item += 1) {
      listItem[item].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    console.log(listItem.length);
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
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', function () {
    while (taskList.hasChildNodes()) {
      taskList.removeChild(taskList.lastChild);
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
    backgroundcolorItem(li);
    taskCompleted(li);
    clearList();
  });
}

window.onload = function () {
  btnAdd();
};
