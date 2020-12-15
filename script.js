// Variables
const buttonTask = document.querySelector('.criar-tarefa');
buttonTask.textContent = 'Salvar Tarefa';
buttonTask.style.height = '20px';
const ul = document.querySelector('ul');
const list = document.querySelector('ol');
ul.appendChild(list);

// Create a list via the button
function taskList() {
  buttonTask.addEventListener('click', () => {
    const inputText = document.querySelector('.texto-tarefa');
    if (!inputText.value) {
      alert('Lista vazia, digite sua tarefa!');
    } else {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = inputText.value;
      li.className = 'lista-tarefas';
      inputText.value = '';
    }
  });
}

function paintTask() {
  list.addEventListener('click', (event) => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function crossTaskCompleted() {
  const taskC = document.querySelector('#lista-tarefas');

  taskC.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function deleteCompleted() {
  const buttonClearList = document.querySelector('.limpar-lista');
  buttonClearList.addEventListener('click', () => {
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  });
}

function deleteFinaleTask() {
  const buttonClearFinale = document.querySelector('#remover-finalizados');
  const listTask = document.querySelector('#lista-tarefas');

  buttonClearFinale.addEventListener('click', () => {
    const deleteTask = document.querySelector('.completed');
    deleteTask.remove();
  });
}

window.onload = function () {
  taskList();
  paintTask();
  crossTaskCompleted();
  deleteCompleted();
  deleteFinaleTask()
}
