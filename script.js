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
    console.log(completado.classList.length);
    let cont = 0;
    for (let index = 0; index < completado.classList.length; index += 1) {
      if ( completado.classList[index] === 'completed') {
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

window.onload = function () {
  funcaoAdicionar();
  seleciona();
  tarefaConcluida();
};
