function criaTarefa(){
    const newTexto = document.querySelector('#texto-tarefa').value;
    if (!newTexto) {
        alert('Por favor não deixar em branco')
    } else {
        const tarefa = document.createElement('li');
        tarefa.innerText = newTexto;
        document.querySelector('ol').appendChild(tarefa);
        document.querySelector('#texto-tarefa').value = '';
    }
}

document.querySelector('#criar-tarefa').addEventListener('click',criaTarefa);
