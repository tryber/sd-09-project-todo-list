function addNewTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const inputButton = document.querySelector('#criar-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  inputButton.addEventListener('click', function (){
    if (inputField.value.length > 0) {
      const listItem = document.createElement('li');
      listItem.innerText = inputField.value;

      taskList.appendChild(listItem);
      inputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
}
addNewTask();
