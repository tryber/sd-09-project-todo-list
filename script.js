function adicionarTarefa () {
  let botaoAdd = document.querySelector('#criar-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');
  let textoInput = document.querySelector('#texto-tarefa');

  botaoAdd.addEventListener ('click', function () {
    if (textoInput.value) {
      let itenLista = document.createElement ('li');
      itenLista.innerText = textoInput.value;
      listaTarefas.appendChild (itenLista);
      textoInput.value = '';
    }
    else {
        alert('Digite uma tarefa');
    }
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
    let listaTarefas = document.querySelector ('#lista-tarefas');
    listaTarefas.addEventListener ('dblclick', function (event) {
        event.target.classList.toggle ('completed');
    })
}

function apagarTarefa () {
    let listaTarefas = document.querySelector ('#lista-tarefas');
    let botaoApaga = document.querySelector ('#apaga-tudo');
    botaoApaga.addEventListener ('click', function () {
        listaTarefas.innerText = '';
    })
}

adicionarTarefa ();
tarefaSelecionada ();
tarefaConcluida ();
apagarTarefa ();