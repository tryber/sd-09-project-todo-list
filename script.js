const textoTarefa = document.querySelector('#texto-tarefa');
const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');


const createTasks = () => {
    let inputValue = textoTarefa.value;
    const li = document.createElement('li');
    li.innerText = inputValue;
    listaTarefa.appendChild(li);
    textoTarefa.value = '';
    listaTarefa.addEventListener('click', (event) => {
        
    });
}

criarTarefa.addEventListener('click', createTasks);

