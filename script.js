// Variables
const buttonTask = document.querySelector('.criar-tarefa');
buttonTask.textContent = 'Salvar Tarefa';
buttonTask.style.height = '20px';

const list = document.createElement('ul');
document.body.appendChild(list);

// Create a list via the button
function taskList() {
  buttonTask.addEventListener('click', () => {
    const taskText = document.querySelector('.texto-tarefa');
    if (!taskText.value) {
      alert('Lista vazia, digite sua tarefa!');
    } else {
      const ol = document.createElement('ol');
      ol.id = 'lista-tarefas';

      list.appendChild(ol);
      ol.className = 'lista-tarelas';
      ol.textContent = taskText.value;
      taskText.value = '';
    }
  });
}

window.onload = function () {
  taskList();
};
