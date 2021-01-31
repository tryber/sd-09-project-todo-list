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

function removeTarefaConcluida () {
  let listaTarefas = document.querySelector ('#lista-tarefas');
  let botaoLimpaConcluidos = document.querySelector ('#remover-finalizados');
  let itensLista = document.getElementsByTagName ('li');
  botaoLimpaConcluidos.addEventListener ('click', function () {
    for (index = 0; index < itensLista.length; index += 1) {
      if (itensLista[index].classList.contains ('completed')) {
        listaTarefas.removeChild(itensLista[index]);
        index -= 1;
      }
    }
  })
}

function salvarTarefas () {
  let botaoSalvaTarefas = document.querySelector('#salvar-tarefas');
  botaoSalvaTarefas.addEventListener ('click', function () {
    let itensLista = document.getElementsByTagName ('li');
    let listaTarefas = document.querySelector ('ol');
    let itenLista = [];
    let classes = [];
    let tarefas = {
      itenLista,
      classes,
    }

    if (itensLista !== null) {
        for (index = 0; index < itensLista.length; index += 1) {
          itenLista.push(itensLista[index].innerHTML);
          classes.push(itensLista[index].classList.contains('completed'));
        }
        localStorage.setItem('todoList', JSON.stringify(tarefas));
    }
  })
}

function recuperarLista () {
  let listaTarefas = document.querySelector('ol');
  let listaRecuperada = JSON.parse(localStorage.getItem('todoList'));
  if (listaRecuperada !== null) {
    for (index = 0; index < listaRecuperada.itenLista.length; index += 1) {
      let itenRecuperado = document.createElement ('li');
      itenRecuperado.innerHTML = listaRecuperada.itenLista[index];
      if (listaRecuperada.classes[index] === true)
      itenRecuperado.classList.add('completed');
      listaTarefas.appendChild(itenRecuperado);
    }
  }
}

adicionarTarefa ();
tarefaSelecionada ();
tarefaConcluida ();
apagarTarefa ();
removeTarefaConcluida ();
salvarTarefas ();
recuperarLista ();