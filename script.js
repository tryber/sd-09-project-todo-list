//Adiciona tarefa 

function criarTarefa() {

  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

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

    // Muda a cor do background e da fonte ao receber o click
    newTask.addEventListener('click', changeBG)

    newTask.addEventListener('dblclick', taskCompleted)
  
  }


  addTaskToList()

  function changeBG(event) {

    let bgLi = document.querySelector('.bg-task');
     
    // verificar se existe a li

    if( bgLi ) {
      bgLi.classList.remove('bg-task');

    } 

    // muda o bg

    event.target.classList.add('bg-task');

  } 

  function taskCompleted(event) {

    // propriedade contains verifica se algo contêm uma classe por exemplo

    if (event.target.classList.contains('completed') ){

      event.target.classList.remove('completed');

    } else {

      event.target.classList.add('completed');

    }

  }
}



function cleanList() {

  // Meu botão
  const btn = document.querySelector('#apaga-tudo');

  // Adiciona um evento no botão 
  btn.addEventListener('click', function () {

    // Seleciona os elementos com a class task
    const list = document.querySelectorAll('.task');

    // Percorre a lista
    for (index = 0; index < list.length; index += 1) {
      let taskList = list[index];

      // Remove o elemento
      taskList.remove('li');
    };

    //list.parentNode.removeChild(list)

  });


};

cleanList();


//newTask.style.backgroundColor = 'rgb(128, 128, 128)';
      //newTask.style.color = 'rgb(255, 255, 255)';


       //let task = input.value;
//localStorage.setItem('input', JSON.stringify(task))