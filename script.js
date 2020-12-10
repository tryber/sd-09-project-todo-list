function addTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.className = 'task';
    list.appendChild(newTask);
    input.value = '';
  });
}

function changeColorListItem(event) {
  const selectedItem = document.querySelector('.selected');

  if (!selectedItem) {
    event.target.classList.add('selected');
  } else {
    selectedItem.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function dbClicktem() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

// sobre toggle: https://www.w3schools.com/howto/howto_js_toggle_class.asp

function selectTask() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('click', changeColorListItem);
}

function clearAll() {
  const clearBtn = document.getElementById('apaga-tudo');
  clearBtn.addEventListener('click', function() {
    const taskList = document.getElementById('lista-tarefas')
    const listItems = document.querySelectorAll('.task')
    for (let index = 0; index < listItems.length; index += 1) {
      taskList.removeChild(taskList.lastChild);
    }
  })
}

window.onload = function () {
  addTask();
  selectTask();
  dbClicktem();
  clearAll();
};
