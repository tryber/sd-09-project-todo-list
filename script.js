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

function moverCima () {
  let botaoCima = document.querySelector('#mover-cima');
  botaoCima.addEventListener ('click', function () {
    let listaTarefas = document.getElementsByTagName ('li');
    if (listaTarefas.length > 0) {
      for (index = 0; index < listaTarefas.length; index += 1) {
        if (listaTarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
          let varTroca = listaTarefas[index];
          if (varTroca.previousElementSibling !== null) {
            const varTroca2Conteudo = listaTarefas[index].previousElementSibling.innerHTML;
            const varTroca2Selected = listaTarefas[index].previousElementSibling.classList.contains('completed');

            listaTarefas[index].previousElementSibling.style.backgroundColor = varTroca.style.backgroundColor;
            listaTarefas[index].style.backgroundColor = '';
            
            listaTarefas[index].previousElementSibling.innerHTML = varTroca.innerHTML;
            listaTarefas[index].innerHTML = varTroca2Conteudo;
            
            listaTarefas[index].previousElementSibling.classList = varTroca.classList;
            if (listaTarefas[index].classList.contains('completed') === true) {
              listaTarefas[index].classList.remove('completed');
            }
            if (varTroca2Selected === true) {
              listaTarefas[index].classList.add('completed');
            }
          }
        }
      }
    }
  })
}

function moverBaixo () {
  let botaoCima = document.querySelector('#mover-baixo');
  botaoCima.addEventListener ('click', function () {
    let listaTarefas = document.getElementsByTagName ('li');
    if (listaTarefas.length > 0) {
      for (index = 0; index < listaTarefas.length; index += 1) {
        if (listaTarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
          let varTroca = listaTarefas[index];
          if (varTroca.nextElementSibling !== null) {
            const varTroca2Conteudo = listaTarefas[index].nextElementSibling.innerHTML;
            const varTroca2Selected = listaTarefas[index].nextElementSibling.classList.contains('completed');

            listaTarefas[index].nextElementSibling.style.backgroundColor = varTroca.style.backgroundColor;
            listaTarefas[index].style.backgroundColor = '';
            
            listaTarefas[index].nextElementSibling.innerHTML = varTroca.innerHTML;
            listaTarefas[index].innerHTML = varTroca2Conteudo;
            
            listaTarefas[index].nextElementSibling.classList = varTroca.classList;
            if (listaTarefas[index].classList.contains('completed') === true) {
              listaTarefas[index].classList.remove('completed');
            }
            if (varTroca2Selected === true) {
              listaTarefas[index].classList.add('completed');
            }
            index = listaTarefas.length;
          }
        }
      }
    }
  })
}

function apagaSelecionado () {
  let buttonRemoveSelected = document.querySelector('#remover-selecionado');
  buttonRemoveSelected.addEventListener ('click', function () {
    let itemSelecionado = document.getElementsByTagName('li');
    for (index = 0; index < itemSelecionado.length; index += 1) {
      if (itemSelecionado[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        itemSelecionado[index].parentNode.removeChild(itemSelecionado[index]);
      }
    }
  })
}

adicionarTarefa ();
tarefaSelecionada ();
tarefaConcluida ();
apagarTarefa ();
removeTarefaConcluida ();
salvarTarefas ();
recuperarLista ();
moverCima ();
moverBaixo ();
apagaSelecionado ();