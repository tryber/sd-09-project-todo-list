let lista = document.getElementById("lista-tarefas");

function addItem (){
    let botao = document.getElementById('criar-tarefa');
    let lista2 = document.querySelector('#lista-tarefas');
    function recebeItem(){
        let item = document.querySelector('#texto-tarefa').value;
        let li = document.createElement('li');
        li.innerHTML = item;
        li.className= 'tarefa';
        lista2.appendChild(li);
        clearInputValue();
    }
    botao.addEventListener('click', recebeItem);
    function limparTexto(){
        document.querySelector("#texto-tarefa").value = '';
    }
}
addItem();
