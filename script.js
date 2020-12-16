window.onload = function () {
  createOrganizedList();
  addSelectedClassToOneItem();
  completedTasks();
  cleanAllTasks();
  cleanCompletedItens();
}

function createOrganizedList() {
  const organizedList = document.getElementById('lista-tarefas');
  const createTaskButton = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  createTaskButton.addEventListener('click', function (event) {
    let newTask = input.value;
    const newList = document.createElement('li');
    newList.classList.add('tarefa');
    newList.innerText = newTask;
    organizedList.appendChild(newList);
    input.value = '';
  });
}

function addSelectedClassToOneItem() {
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('click', function (event) {
    const selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected')
    }
    event.target.classList.add('selected');
  });
}

function completedTasks() {
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }
  });
}

function cleanAllTasks() {
  const deleteButton = document.getElementById('apaga-tudo');
  deleteButton.addEventListener('click', function () {
    const tasks = document.querySelectorAll('li');
    for (index = 0; index < tasks.length; index += 1) {
      tasks[index].remove();
    }
  });
}

function cleanCompletedItens() {
  const deleteCompletedButton = document.getElementById('remover-finalizados');
  deleteCompletedButton.addEventListener('click', function () {
    const completedItens = document.querySelectorAll('.completed');
    for (index = 0; index < completedItens.length; index += 1) {
      completedItens[index].remove();
    }
  });
}

/*
function completedTasks() {
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      const completed = document.querySelectorAll('.completed');
      for (let index = 0; index < completed.length; index += 1) {
      completed[index].classList.remove('completed')
      }
    } else {
    event.target.classList.add('completed');
    }
  });
}

/*
function deleteSelectedClass() {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected')
  }
}

function updateBackgroundColor() {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains('selected')) {
      tasks[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      tasks[index].style.backgroundColor = null;
    }
  }
}

function updateTaskColor(event) {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('tarefa')) {
    removeClassSelected();
    selectedItem.className += ' selected';
  }
  updateBackgroundColor();
}


/*
function changeItemBackgroundColor() {
  const itens = document.getElementsByClassName('tarefa');
  for (let index = 0; index < itens.lenght; index += 1) {
    itens[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < itens.lenght; index2 += 1) {
        itens[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
*/

/*
function changeItemBackgroundColor() {
  const itens = document.querySelectorAll('li');
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('click', function (event) {
    for (let index = 0; index < itens.lenght; index += 1) {
      organizedList[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
*/

/*
function changeItemBackgroundColor() {
  const itens = document.querySelectorAll('li');
  const organizedList = document.getElementById('lista-tarefas');
  organizedList.addEventListener('click', function (event) {
    for (let index = 0; index < organizedList.length; index += 1) { 
      if (organizedList[index].className === 'selected') {
        organizedList[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
*/