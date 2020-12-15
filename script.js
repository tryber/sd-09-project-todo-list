function funcaoAdicionar() {
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    criarTarefa();
  })
}

function criarTarefa() {
  const entradaTextoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'tarefa';
  novaTarefa.innerText = entradaTextoTarefa.value;
  listaTarefas.appendChild(novaTarefa);
  entradaTextoTarefa.value = '';
}

function seleciona() {
  const selecionar = document.querySelector('#lista-tarefas');
  selecionar.addEventListener('click', function (event) {
    let selecao = event.target;
    limpaSelecao();
    selecao.className = 'selecionado';
  });
}

function limpaSelecao () {
  let selecao = document.querySelectorAll('li');
  for (let indice = 0; indice < selecao.length; indice += 1) {
    if (selecao[indice].className = 'selecionado') {
      selecao[indice].className = 'tarefa';
    }
  }
}

window.onload = function () {
  funcaoAdicionar();
  seleciona();
}
