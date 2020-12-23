 window.onload = function () {
   const criarTarefa = document.createElement('button');
   criarTarefa.id = 'criar-tarefa';
   criarTarefa.innerHTML = 'adicionar';
   document.body.appendChild(criarTarefa);

   function taskAdd() {
    const btnAdd = document.getElementById('criar-tarefa');
    btnAdd.addEventListener('click', function () {
    const newTask = document.querySelector('#texto-tarefa').value;
    const taskLine = document.querySelector('#lista-tarefas');
    const newLine = document.createElement('li');
    newLine.innerHTML = newTask;
    taskLine.appendChild(newLine);

    document.getElementById('texto-tarefa').value = null;


  });
  }
  taskAdd();
}



