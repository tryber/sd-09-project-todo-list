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
  list.addEventListener('click', (event) => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function crossTaskCompleted() {
  const taskC = document.querySelector('ol');

  taskC.addEventListener('dblclick', (event) => {
    if (event.target === 'completed') {
      console.log(event.target.classList);
      event.target.classList.remove('completed');
    }else{
      event.target.classList.add('completed');
    }
  });
}

window.onload = function () {
  taskList();
  paintTask();
  crossTaskCompleted();
};
