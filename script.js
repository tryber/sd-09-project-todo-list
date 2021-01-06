function selected(textoTarefa) {
  if (document.querySelectorAll('.selected').length > 0) {
    document.querySelector('.selected').classList.remove('selected');
    textoTarefa.classList.add('selected');
  } else {
    textoTarefa.classList.add('selected');
  }
}
function completed(textoTarefa) {
  if (textoTarefa.classList.contains('completed')) {
    textoTarefa.classList.remove('completed');
  } else {
    textoTarefa.classList.add('completed');
  }
}
function criarTarefa() {
  if (document.querySelector('#texto-tarefa').value === '') {
    alert('Input Vazio');
  } else {
    const textoTarefa = document.createElement('li');
    textoTarefa.innerText = document.querySelector('#texto-tarefa').value;
    document.querySelector('#lista-tarefas').appendChild(textoTarefa);
    textoTarefa.addEventListener('click', function () {
      selected(textoTarefa);
    });
    textoTarefa.addEventListener('dblclick', function () {
      completed(textoTarefa);
    });
  }
}

const buttonCriarTarefa = document.querySelector('#criar-tarefa');

buttonCriarTarefa.addEventListener('click', function () {
  criarTarefa();
  document.querySelector('#texto-tarefa').value = '';
});

const buttonApagarTudo = document.querySelector('#apaga-tudo');
buttonApagarTudo.addEventListener('click', function () {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    document.querySelector('#lista-tarefas').removeChild(li[index]);
  }
});

const buttonApagarFinalizados = document.querySelector('#remover-finalizados');
buttonApagarFinalizados.addEventListener('click', function () {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(li[index]);
    }
  }
});

const buttonApagarSelecionado = document.querySelector('#remover-selecionado');
buttonApagarSelecionado.addEventListener('click', function () {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      document.querySelector('#lista-tarefas').removeChild(li[index]);
    }
  }
});

const buttonMoverBaixo = document.querySelector('#mover-baixo');
buttonMoverBaixo.addEventListener('click', function () {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      if (index === li.length - 1) {
        alert('O elemento já é o último da lista!');
      } else {
        const valor = li[index].innerText;
        li[index].innerText = li[index + 1].innerText;
        li[index + 1].innerText = valor;
        li[index].classList.remove('selected');
        li[index + 1].classList.add('selected');
        break;
      }
    }
  }
});

const buttonMoverCima = document.querySelector('#mover-cima');
buttonMoverCima.addEventListener('click', function () {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      if (index === 0) {
        alert('O elemento já é o primeiro da lista!');
      } else {
        const valor = li[index].innerText;
        li[index].innerText = li[index - 1].innerText;
        li[index - 1].innerText = valor;
        li[index].classList.remove('selected');
        li[index - 1].classList.add('selected');
        break;
      }
    }
  }
});
