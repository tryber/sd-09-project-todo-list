// Variables
const buttonTask = document.querySelector('.criar-tarefa');
buttonTask.textContent = 'Salvar Tarefa';
buttonTask.style.height = '20px';

const list = document.querySelector('ul');
document.body.appendChild(list);

// Create a list via the button
function taskList() {
  buttonTask.addEventListener('click', () => {
    const inputText = document.querySelector('.texto-tarefa');
    if (!inputText.value) {
      alert('Lista vazia, digite sua tarefa!');
    } else {
      const ol = document.createElement('ol')
      list.appendChild(ol);
      ol.textContent = inputText.value;
      ol.id = 'lista-tarefa'
      ol.className = 'lista-tarefas'
      inputText.value = '';
    }
  });
}

function paintTask() {
  list.addEventListener('click', (event) => {
    if (event.target) {
      event.target.style.backgroundColor = 'gray';
    } else {
      event.target.style.backgroundColor = null;
    }
  });
}

window.onload = function () {
  taskList();
  paintTask();
};
