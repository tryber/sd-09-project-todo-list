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

window.onload = function () {
  addTask();
};
