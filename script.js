function selected (textoTarefa) {
    if (document.querySelectorAll('.selected').length > 0) {
        document.querySelector('.selected').classList.remove('selected');  
        textoTarefa.classList.add('selected');
      } else {        
        textoTarefa.classList.add('selected');
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
  }
}

let buttonCriarTarefa = document.querySelector('#criar-tarefa');

buttonCriarTarefa.addEventListener('click', function() {
  criarTarefa();
  document.querySelector('#texto-tarefa').value = '';
});
