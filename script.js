function adicionarTarefa () {
  let botaoAdd = document.querySelector('#criar-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');
  let textoInput = document.querySelector('#texto-tarefa');

  botaoAdd.addEventListener ('click', function () {
    let itenLista = document.createElement ('li');
    itenLista.innerText = textoInput.value;
    listaTarefas.appendChild (itenLista);
    textoInput.value = '';
  })
}

function tarefaSelecionada () {
  let listaTarefas = document.querySelector ('#lista-tarefas');
  listaTarefas.addEventListener ('click', function (event) {
      let itensLista = document.getElementsByTagName ('li');
      for (index = 0; index < itensLista.length; index += 1) {
          itensLista[index].style.backgroundColor = '';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}

function tarefaConcluida () {
    let listaTarefas = document.querySelector('#lista-tarefas');
    listaTarefas.addEventListener ('dblclick', function (event) {
        event.target.classList.toggle ('completed');
    })
}

adicionarTarefa ();
tarefaSelecionada ();
tarefaConcluida ();