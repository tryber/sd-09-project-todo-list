
//Adiciona tarefa 

function criarTarefa() {

  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  const btn = document.querySelector('#criar-tarefa')

  btn.addEventListener('click', function() {
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
  
    
  })
} 

criarTarefa();

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


function removeSelectedTask() {

  const btn = document.querySelector('#remover-selecionado')

  btn.addEventListener('click', function() {

    const listItem = document.querySelectorAll('.bg-task')

    for (index = 0; index < listItem.length; index += 1) {
      let taskList = listItem[index];

      taskList.remove('li');
    }
  })
}

removeSelectedTask();

function removeCompleted() {

  const btn = document.querySelector('#remover-finalizados');

  btn.addEventListener('click', function() {

    const list = document.querySelectorAll('.completed');

    for(index = 0; index < list.length; index += 1) {
      let taskList = list[index];

      taskList.remove('li');
    };

  });

};

removeCompleted();

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

    localStorage.clear();

  });


};

cleanList();

function saveList() {

  let btn = document.querySelector('#salvar-tarefas');

  btn.addEventListener('click', function() {

    const list = document.querySelectorAll('.task')

    let arr = [];

    for(index = 0; index < list.length; index += 1) {

      let obj = {
        text: list[index].textContent,
        class: list[index].className
      }

      arr.push(obj) 
    }
    localStorage.setItem('List', JSON.stringify(arr))

  })
}

saveList();

function showItemListOnLoad() {

  let list = document.querySelector("#lista-tarefas")


    let item = JSON.parse(localStorage.getItem('List'))

    for(index = 0; index < item.length; index += 1) {

     let element = document.createElement('li');

     element.textContent = item[index].text
     element.className = item[index].class

     list.appendChild(element)
     element.addEventListener('click', changeBG)
  
     element.addEventListener('dblclick', taskCompleted)
    }

    

}

showItemListOnLoad()
