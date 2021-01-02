//Adiciona tarefa 

function criarTarefa() {

  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  //let task = input.value;

  function addTaskToList() {

    // Criando o elemento
    const newTask = document.createElement('li');

    // Adicionando classe ao elemento
    newTask.className = 'task';

    // Adicionando o valor do input
    newTask.innerText = input.value;

    // Adicionar o elemento filho ao elemento pai
    taskList.appendChild(newTask);

    input.value = '';
  }

  addTaskToList()

  //localStorage.setItem('input', JSON.stringify(task))


}


