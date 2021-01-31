function adicionarItem () {
  let botaoAdd = document.querySelector('#criar-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');
  let textoInput = document.querySelector('#texto-tarefa');

  botaoAdd.addEventListener ('click', function () {
    let itenLista = document.createElement ('li');
    itenLista.innerText = textoInput.value;
    listaTarefas.appendChild (itenLista);
  })
}

adicionarItem ();