function addNewTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const inputButton = document.querySelector('#criar-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  inputButton.addEventListener('click', function () {
    if (inputField.value.length > 0) {
      const listItem = document.createElement('li');
      listItem.innerText = inputField.value;
      listItem.className = 'list-item';

      taskList.appendChild(listItem);
      inputField.value = '';
      setSelectedClass();
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
}
addNewTask();

function setSelectedClass() {
  const listItem = document.querySelectorAll('.list-item');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', function () {
      const selectedItem = document.querySelectorAll('.selected');
      if (selectedItem.length > 0) {
        for (let j = 0; j < selectedItem.length; j += 1) {
          listItem[i].className += ' selected';
          selectedItem[j].className = 'list-item';
        }
      }
      listItem[i].className += ' selected';
    });
  }
}
