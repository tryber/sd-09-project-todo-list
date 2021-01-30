const textoTarefa = document.querySelector('#texto-tarefa');
const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

const createTasks = () => {
    let inputValue = textoTarefa.value;
    const li = document.createElement('li');
    li.innerText = inputValue;
    listaTarefa.appendChild(li);
    textoTarefa.value = '';
    li.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
}

criarTarefa.addEventListener('click', createTasks);