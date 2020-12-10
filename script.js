function addTask() {
  const button = document.getElementById('criar-tarefa');
  let input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', function() {
    let newTask = document.createElement('li');
    newTask.innerText = input.value;
    list.appendChild(newTask);
    input.value = '';
  })
}

addTask();