function selected (textoTarefa) {
  if (document.querySelectorAll('.selected').length > 0) {
      if (textoTarefa.classList.contains('selected')) {
        textoTarefa.classList.remove('selected');
      } else {        
        document.querySelector('.selected').classList.remove('selected');  
        textoTarefa.classList.add('selected');
      }
      document.querySelector('.selected').classList.remove('selected');  
      textoTarefa.classList.add('selected');
    } else {        
      textoTarefa.classList.add('selected');
    }
}
function completed (textoTarefa) {
    if (textoTarefa.classList.contains('completed')) {
      textoTarefa.classList.remove('completed');
    } else {
      textoTarefa.classList.add('completed');
    }
}
function criarTarefa () {
  if (document.querySelector('#texto-tarefa').value === ''){
      alert('Input Vazio')
  } else {
    let textoTarefa = document.createElement('li');
    textoTarefa.innerText = document.querySelector('#texto-tarefa').value;
    document.querySelector('#lista-tarefas').appendChild(textoTarefa);
    textoTarefa.addEventListener('click', function() {
      selected(textoTarefa);      
    });
    textoTarefa.addEventListener('dblclick', function() {
        completed(textoTarefa);
    });
  }
}

let buttonCriarTarefa = document.querySelector('#criar-tarefa');

buttonCriarTarefa.addEventListener('click', function() {
  criarTarefa();
  document.querySelector('#texto-tarefa').value = '';
});

let buttonApagarTudo = document.querySelector('#apaga-tudo');
buttonApagarTudo.addEventListener('click', function() {
    let li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      document.querySelector('#lista-tarefas').removeChild(li[index]);
    }
})
