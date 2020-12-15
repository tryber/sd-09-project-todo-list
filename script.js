window.onload = function () {
  createOrganizedList();
}

function createOrganizedList() {
  const organizedList = document.getElementById('lista-tarefas');
  const createTaskButton = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  createTaskButton.addEventListener('click', function (event) {
    let newTask = input.value;
    const newList = document.createElement('li');
    newList.classList.add('tarefa');
    newList.innerText = newTask;
    organizedList.appendChild(newList);
    input.value = '';
  });
}
