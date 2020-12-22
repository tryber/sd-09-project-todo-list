function addTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', function () {
    const inputTask = document.getElementById('texto-tarefa');
    if (inputTask.value !== '') {
      const ol = document.getElementById('lista-tarefas');
      const li = document.createElement('li');
      li.innerHTML = inputTask.value;
      ol.appendChild(li);
      inputTask.value = '';
    }
  });
}

function selectItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('click', function (event) {
    const selectedItem = document.getElementsByClassName('selected');
    if (selectedItem[0]) {
      selectedItem[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function completedItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

window.onload = function () {
  addTask();
  selectItem();
  completedItem();
};
