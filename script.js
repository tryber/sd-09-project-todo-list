//const textInput = document.querySelector('#texto-tarefa');
//const makeTask = document.querySelector('#criar-tarefa');

  //function insereText () {
  //  textInput.innerText = textInput.value;
//}
  //function criandoTarefa () {
    //makeTask.addEventListener('click', function(event)) {
      //if (textInput.length === 0) {
        
      //}
    //}
//}

function addText () {
  const text = document.getElementById('texto-tarefa');
  const add = document.getElementById('lista-tarefas');
  
   let criarElemento = document.createElement('li');
    criarElemento.innerText = text.value;
    add.appendChild(criarElemento);
}

//add.addEventListener(click,addText);