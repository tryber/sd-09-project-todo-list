function addNewTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  if (inputField.value.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    listItem.addEventListener('click', function () {
      addSelectedClass(listItem)
    });
    listItem.addEventListener('dblclick', function () {
      addCompletedClass(listItem)
    });
    taskList.appendChild(listItem);
    inputField.value = '';
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
}

function addSelectedClass(event) {
  removeSelectedClass()
  event.classList += ' selected';
}

function removeSelectedClass() {
  const listItemArray = document.querySelectorAll('li');
  for (let index = 0; index < listItemArray.length; index += 1) {
    listItemArray[index].classList.remove('selected');
  }
}

function addCompletedClass(event) {
  if (event.classList.contains('completed')) {
    event.classList.remove('completed');
  } else {
    event.classList += ' completed';
  }
}

window.onload = function() {
  const inputButton = document.querySelector('#criar-tarefa');
  inputButton.addEventListener('click', addNewTask);
}
