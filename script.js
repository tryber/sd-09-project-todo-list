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

function cleanList () {

  // Meu botão
  const btn = document.querySelector('#apaga-tudo');
  
  // Adiciona um evento no botão 
  btn.addEventListener('click', function() {

    // Seleciona os elementos com a class task
    const list = document.querySelectorAll('.task');

    // Percorre a lista
    for(index = 0; index < list.length; index += 1) {
      let taskList = list[index];

      // Remove o elemento
      taskList.remove('li');
    };

    //list.parentNode.removeChild(list)

  });


};

cleanList();