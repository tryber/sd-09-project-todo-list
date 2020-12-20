/* Fontes:
https://developer.mozilla.org/
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
*/
function criarBotao(descricao, identificador, pai) {
  const elementoPai = document.getElementById(pai);
  const botao = document.createElement('button');
  botao.innerText = descricao;
  botao.id = identificador;
  botao.classList.add('botao', identificador);
  elementoPai.appendChild(botao);
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

function moverParaCima() {
  const botao = document.querySelector('#mover-cima');
  botao.addEventListener('click', function () {
    mover('paraCima');
  });
}

function moverParaBaixo() {
  const botao = document.querySelector('#mover-baixo');
  botao.addEventListener('click', function () {
    mover('paraBaixo');
  });
}

function mover(direcao) {
  if(direcao === 'paraCima') {
    const lista = document.querySelector('#lista-tarefas');
    const tarefa = document.querySelectorAll('li');
    for (let index = 0; index < tarefa.length; index += 1) {
      if (tarefa[index].classList.contains('selecionado')) {
        if (tarefa[index].previousElementSibling !== null) {
          lista.insertBefore(tarefa[index], tarefa[index].previousElementSibling);
        }
      }
    }
  } else {
    const lista = document.querySelector('#lista-tarefas');
    const tarefa = document.querySelectorAll('li');
    for (let index = 0; index < tarefa.length; index += 1) {
      if (tarefa[index].classList.contains('selecionado')) {
        if (tarefa[index].nextElementSibling !== null) {
          lista.insertBefore(tarefa[index].nextElementSibling, tarefa[index]);
        }
      }
    }
  }
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

function ApagaTudo() {
  const botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', function () {
    const lista = document.getElementById('lista-tarefas');
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
  });
}

function apagaConcluido() {
  const botao = document.querySelector('#remover-finalizados');
  botao.addEventListener('click', function () {
    const tarefa = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefa.length; index += 1) {
      tarefa[index].remove();
    }
  });
}

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

window.onload = function () {
  criarBotao('Adicionar 📝', 'criar-tarefa', 'tarefas');
  criarBotao('⬆', 'mover-cima', 'controles');
  criarBotao('⬇', 'mover-baixo', 'controles');
  criarBotao('Salvar 💾', 'salvar-tarefas', 'controles');
  criarBotao('Limpar Concluídos ❌', 'remover-finalizados', 'controles');
  criarBotao('Limpar Lista 🗑', 'apaga-tudo', 'controles');
  funcaoAdicionar();
  seleciona();
  tarefaConcluida();
  webStorage();
  recuperarSalvos();
  apagaConcluido();
  ApagaTudo();
  moverParaCima();
  moverParaBaixo();
};
