function handleSelectTaskItem(event) {
  if (event.target.localName !== 'li') return;

  const listItemSelected = event.target
  const listItems = event.target.parentElement.children;
  for(const item of listItems) {
    item.classList.remove('selected');
  }
  listItemSelected.classList.add('selected');
}

/**
 * @param {HTMLInputElement} inputElement
 * @param {HTMLOListElement} taskListElement
 */
function handleAddTask(inputElement, taskListElement) {
  return function () {
    const inputText = inputElement.value.trim();
    const listItem = document.createElement('li');
    listItem.innerText = inputText;

    if (!inputText) return;

    taskListElement.appendChild(listItem);
    inputElement.value = '';
    inputElement.focus();
  }
}

window.onload = () => {
  const buttonAddTask = document.getElementById('criar-tarefa');
  const inputTask = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  inputTask.focus();

  buttonAddTask.addEventListener('click', handleAddTask(inputTask, taskList));
  inputTask.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
      handleAddTask(inputTask, taskList)();
    }
  });
  taskList.addEventListener('click', handleSelectTaskItem);
};
