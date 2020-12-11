const buttonTask = document.querySelector('.criar-tarefa');
buttonTask.textContent = 'Salvar Tarefa';
buttonTask.style.height = ('20px');

const list = document.createElement('ul');
document.body.appendChild(list);

function taskList() {
  buttonTask.addEventListener('click', () => {
    const taskText = document.querySelector('.texto-tarefa');
    const ol = document.createElement('ol');

    ol.className = 'lista-tarelas';
    ol.textContent = taskText.value;
    list.appendChild(ol);
  });
}
taskList();
