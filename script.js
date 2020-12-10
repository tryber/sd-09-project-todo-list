window.onload = function(){
    let criarTarefas = document.querySelector('#criar-tarefa');
    criarTarefas.addEventListener('click', function(){
        let textoTarefas = document.querySelector('#texto-tarefa');
        let listItem = document.createElement('li');
        let orderList = document.querySelector('#lista-tarefas');
        let valorTexto = textoTarefas.value;
        orderList.appendChild(listItem)
        listItem.className = 'listItem'
        listItem.innerText = valorTexto;
        textoTarefas.value = '';
    })
}
