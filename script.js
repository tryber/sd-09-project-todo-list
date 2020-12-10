window.onload = function () {
  const criarTarefas = document.querySelector('#criar-tarefa');
  function criouTarefa() {
    const textoTarefas = document.querySelector('#texto-tarefa');
    const listItem = document.createElement('li');
    const orderList = document.querySelector('#lista-tarefas');
    const valorTexto = textoTarefas.value;
    if (valorTexto === ''){
      alert('Nenhum texto identificado. Favor digitar novamente!')
    }else{
        orderList.appendChild(listItem);
        listItem.className = 'listItem';
        listItem.innerText = valorTexto;
        textoTarefas.value = '';
        textoTarefas.focus();
    } 
  }
  criarTarefas.addEventListener('click', criouTarefa);

  let paiDaLi = document.querySelector('#lista-tarefas')
  paiDaLi.addEventListener('click', function (event) {
      let itemLista = event.target
      if (itemLista.style.backgroundColor === ''){
        itemLista.style.backgroundColor = 'rgb(128, 128, 128)'
      }else{
        itemLista.style.backgroundColor = ''
      }
    })
}

