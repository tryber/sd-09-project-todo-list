//Adiciona tarefa 

function criarTarefa() {

  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  let task = input.value;

  function addTaskToList(event) {

    const newTask = document.createElement('li');
    newTask.className('task');
  }

  localStorage.setItem('input', JSON.stringify(task))

 
}


