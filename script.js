document.getElementById('criar-tarefa').addEventListener('click', function(){
    let task1 = document.querySelector('input').value;
    let li = document.createElement('li');
    document.querySelector('input').value = '';
    li.innerText = task1;
    document.getElementById('lista-tarefas').appendChild(li)
})