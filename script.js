// Variables
const buttonTask = document.querySelector('.criar-tarefa');
buttonTask.textContent = 'Salvar Tarefa';
buttonTask.style.height = '20px';

const list = document.querySelector('ol');
document.body.appendChild(list);

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
      li.id = 'lista-tarefa';
      li.className = 'lista-tarefas';
      inputText.value = '';
    }
  });
}

function paintTask() {
  const li = document.querySelectorAll('li');

  list.addEventListener('click', (event) => {
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

window.onload = function () {
  taskList();
  paintTask();
};
