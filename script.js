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
  clearBtn.addEventListener('click', function () {
    const taskList = document.getElementById('lista-tarefas');
    const listItems = document.querySelectorAll('.task');
    for (let index = 0; index < listItems.length; index += 1) {
      taskList.removeChild(taskList.lastChild);
    }
  });
}

function clearCompleted() {
  const clearComp = document.getElementById('remover-finalizados');
  const tasklist = document.getElementById('lista-tarefas');

  clearComp.addEventListener('click', function () {
    const completed = document.querySelectorAll('.completed');
    for (let index = 0; index < completed.length; index += 1) {
      tasklist.removeChild(completed[index]);
    }
  });
}

function saveList() {
  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.addEventListener('click', function () {
    const tasks = document.getElementsByClassName('task');
    for (let index = 0; index < tasks.length; index += 1) {
      const obj = {
        text: tasks[index].innerText,
        class: tasks[index].className,
      };
      localStorage.setItem(index, JSON.stringify(obj));
    }
  });
}

function getList() {
  const tasks = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const recListItem = document.createElement('li');
    const recoveredObj = JSON.parse(localStorage.getItem(index));
    recListItem.innerText = recoveredObj.text;
    recListItem.className = recoveredObj.class;
    recListItem.classList.remove('selected');
    tasks.appendChild(recListItem);
  }
}

function removeSelected() {
  const tList = document.getElementById('lista-tarefas');
  const remSelBtn = document.getElementById('remover-selecionado');

  remSelBtn.addEventListener('click', function () {
    const selectedTasks = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedTasks.length; index += 1) {
      tList.removeChild(selectedTasks[index]);
    }
  });
}

function moveUp() {
  const upBtn = document.getElementById('mover-cima');
  upBtn.addEventListener('click', function () {
    const selectedTask = document.querySelector('.selected');
    let previousSib;
    if (selectedTask) {
      previousSib = selectedTask.previousElementSibling;
    }
    if (previousSib) {
      const sib = {
        text: previousSib.innerText,
        class: previousSib.className,
      };
      previousSib.innerText = selectedTask.innerText;
      previousSib.className = selectedTask.className;
      selectedTask.innerText = sib.text;
      selectedTask.className = sib.class;
    }
  });
}

function moveDown() {
  const downBtn = document.getElementById('mover-baixo');
  downBtn.addEventListener('click', function () {
    const selectedTask = document.querySelector('.selected');
    let nextSib;
    if (selectedTask) {
      nextSib = selectedTask.nextElementSibling;
    }
    if (nextSib) {
      const nsib = {
        text: nextSib.innerText,
        class: nextSib.className,
      };
      nextSib.innerText = selectedTask.innerText;
      nextSib.className = selectedTask.className;
      selectedTask.innerText = nsib.text;
      selectedTask.className = nsib.class;
    }
  });
}


window.onload = function () {
  addTask();
  selectTask();
  dbClicktem();
  clearAll();
  clearCompleted();
  saveList();
  getList();
  removeSelected();
  moveDown();
  moveUp();
};
