function criarTarefa() {
  const entradaTextoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'tarefa';
  novaTarefa.innerText = entradaTextoTarefa.value;
  listaTarefas.appendChild(novaTarefa);
  entradaTextoTarefa.value = '';
}

function funcaoAdicionar() {
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    criarTarefa();
  });
}

function limpaSelecao() {
  const selecao = document.querySelectorAll('li');
  for (let index = 0; index < selecao.length; index += 1) {
    selecao[index].classList.remove('selecionado');
  }
}

function seleciona() {
  const selecionar = document.querySelector('#lista-tarefas');
  selecionar.addEventListener('click', function (event) {
    const selecao = event.target;
    let cont = 0;
    for (let index = 0; index < selecao.classList.length; index += 1) {
      if (selecao.classList[index] === 'selecionado') {
        cont += 1;
      }
    }
    if (cont === 0) {
      limpaSelecao();
      selecao.classList.add('selecionado');
    } else {
      limpaSelecao();
    }
  });
}

function tarefaConcluida() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('dblclick', function (event) {
    const completado = event.target;
    let cont = 0;
    for (let index = 0; index < completado.classList.length; index += 1) {
      if (completado.classList[index] === 'completed') {
        cont += 1;
      }
    }
    if (cont === 0) {
      completado.classList.add('completed');
    } else {
      completado.classList.remove('completed');
    }
  });
}

function botaoApagaTudo() {
  const controles = document.querySelector('#controles');
  const botao = document.createElement('button');
  botao.innerText = 'Limpar Lista 🗑';
  botao.id = 'apaga-tudo';
  botao.className = 'apaga-tudo';
  controles.appendChild(botao);
  botao.addEventListener('click', function () {
    const lista = document.getElementById('lista-tarefas');
    // fonte: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
  });
}

function botaoApagaConcluido() {
  const controles = document.querySelector('#controles');
  const botao = document.createElement('button');
  botao.innerText = 'Limpar Concluídos ❌';
  botao.id = 'remover-finalizados';
  botao.className = 'remover-finalizados';
  controles.appendChild(botao);
  botao.addEventListener('click', function () {
    const linha = document.getElementsByTagName('li');
    for (let index = 0; index < linha.length; index += 1) {
      const lista = document.getElementById('lista-tarefas');
      // fonte: https://www.w3schools.com/jsref/prop_element_classlist.asp
      if (linha[index].classList.contains('completed')) {
        lista.removeChild(lista.childNodes[index]);
      }
    }
  });
}

window.onload = function () {
  funcaoAdicionar();
  seleciona();
  tarefaConcluida();
  botaoApagaConcluido();
  botaoApagaTudo();
};
