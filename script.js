window.onload = function () {
    const criarTarefas = document.querySelector('#criar-tarefa');
    criarTarefas.addEventListener('click', function () {
      const textoTarefas = document.querySelector('#texto-tarefa');
      const listItem = document.createElement('li');
      let orderList = document.querySelector('#lista-tarefas');
      const valorTexto = textoTarefas.value;
      orderList.appendChild(listItem);
      listItem.className = 'listItem';
      listItem.innerText = valorTexto;
      textoTarefas.value = '';
    })
}
