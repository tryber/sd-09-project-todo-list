/* Fontes:
https://developer.mozilla.org/
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
*/
// 5 | 10 | 11 | 12 | 14- Função para criar botão
function criarBotao(descricao, identificador, pai) {
  const elementoPai = document.getElementById(pai);
  const botao = document.createElement('button');
  botao.innerText = descricao;
  botao.id = identificador;
  botao.classList.add('botao', identificador);
  elementoPai.appendChild(botao);
}

// 5 | 6- Adiciona uma li à lista ordenada com o valor digitado pelo usuário
function criarTarefa() {
  const entradaTextoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'tarefa';
  novaTarefa.innerText = entradaTextoTarefa.value;
  listaTarefas.appendChild(novaTarefa);
  entradaTextoTarefa.value = '';
}

// 5- Adiciona um evento ao botão criar tarefa que chama a função 'criarTarefa'
function funcaoAdicionar() {
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    criarTarefa();
  });
}

// Adiciona um evento 'tecla Enter' ao botão criar tarefa
function enterAdicionar() {
  const caixaInput = document.querySelector('#texto-tarefa');
  caixaInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      criarTarefa();
    }
  });
}

// 8-  Função para remover a classe selecionado
function limpaSelecao() {
  const selecao = document.querySelectorAll('li');
  for (let index = 0; index < selecao.length; index += 1) {
    selecao[index].classList.remove('selecionado');
  }
}

// 7- Função realiza a ação de adicionar e retirar a seleção com 'click'
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

// 13- Adiciona evento para subir a posição do item selecionado na lista
function botaoSobe() {
  const lista = document.querySelector('#lista-tarefas');
  const botao = document.querySelector('#mover-cima');
  botao.addEventListener('click', function () {
    const tarefa = document.querySelector('.selecionado');
    if (tarefa) {
      if (tarefa.previousElementSibling !== null) {
        lista.insertBefore(tarefa, tarefa.previousElementSibling);
      }
    }
  });
}

// 13- Adiciona evento para descer a posição do item selecionado na lista
function botaoDesce() {
  const lista = document.querySelector('#lista-tarefas');
  const botao = document.querySelector('#mover-baixo');
  botao.addEventListener('click', function () {
    const tarefa = document.querySelector('.selecionado');
    if (tarefa) {
      if (tarefa.nextElementSibling !== null) {
        lista.insertBefore(tarefa.nextElementSibling, tarefa);
      }
    }
  });
}

// 9- Adiciona evento de duplo 'click' para indicar tarefa concluída com 'tachado'
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

// 10- Adiciona evento para limpar todo conteúdo da lista
function ApagaTudo() {
  const botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', function () {
    const lista = document.getElementById('lista-tarefas');
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
  });
}

// 11- Adiciona evento para remover as tarefas concluídas da lista
function apagaConcluido() {
  const botao = document.querySelector('#remover-finalizados');
  botao.addEventListener('click', function () {
    const tarefa = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefa.length; index += 1) {
      tarefa[index].remove();
    }
  });
}

// 12- Armazena os dados da lista no 'Web Storage' do 'browser'
function webStorage() {
  const botao = document.querySelector('#salvar-tarefas');
  botao.addEventListener('click', function () {
    const lista = document.getElementsByTagName('li');
    if (typeof (Storage) !== 'undefined') {
      const tarefas = [];
      for (let index = 0; index < lista.length; index += 1) {
        tarefas.push({ value: lista[index].innerHTML, class: lista[index].className });
      }
      localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas));
    }
  });
}

// 12- Recupera os dados do 'Web Storage' ao recarregar a página
function recuperarSalvos() {
  const lista = document.getElementById('lista-tarefas');
  let salvos = {
    class: '',
    value: '',
  };
  if (localStorage.length !== 0) {
    salvos = JSON.parse(localStorage.getItem('tarefasSalvas'));
    for (let index = 0; index < salvos.length; index += 1) {
      const recupera = document.createElement('li');
      recupera.innerText = salvos[index].value;
      recupera.className = salvos[index].class;
      lista.appendChild(recupera);
    }
  }
}

// 14- Adiciona evento para remover os itens selecionados
function removerSelecionado() {
  const botao = document.querySelector('#remover-selecionado');
  botao.addEventListener('click', function () {
    const tarefa = document.querySelector('.selecionado');
    if (tarefa) {
      tarefa.remove();
    }
  });
}

// Adiciona um círculo à página
function criarCirculo() {
  const main = document.querySelector('main');
  const circulo = document.createElement('div');
  circulo.id = 'circulo';
  circulo.classList.add('circulo');
  main.appendChild(circulo);
}

// Adiciona um elemento 'footer' à página
function criarRodape() {
  const corpo = document.querySelector('#body-content');
  const rodape = document.createElement('footer');
  rodape.id = 'rodape';
  rodape.classList.add('rodape');
  rodape.innerText = 'Todo List Project - Bloco 5 - Trybe 🚀 - Criado por: Cleber Lopes Teixeira - Turma 09 - 2020 ©️';
  corpo.appendChild(rodape);
}

// Chama as funções após o carregamento HTML
window.onload = function () {
  criarBotao('Adicionar 📝', 'criar-tarefa', 'tarefas');
  criarBotao('⤴️', 'mover-cima', 'controles');
  criarBotao('⤵️', 'mover-baixo', 'controles');
  criarBotao('Salvar 💾', 'salvar-tarefas', 'controles');
  criarBotao('Selecionado ❌', 'remover-selecionado', 'controles');
  criarBotao('Concluídos ❌', 'remover-finalizados', 'controles');
  criarBotao('Limpar Lista 🗑', 'apaga-tudo', 'controles');
  criarRodape();
  criarCirculo();
  funcaoAdicionar();
  enterAdicionar();
  seleciona();
  tarefaConcluida();
  webStorage();
  recuperarSalvos();
  apagaConcluido();
  ApagaTudo();
  botaoSobe();
  botaoDesce();
  removerSelecionado();
};
