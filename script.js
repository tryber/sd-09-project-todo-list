function addText () {
  const text = document.getElementById('texto-tarefa');
  const add = document.getElementById('lista-tarefas');
  
  let criarElemento = document.createElement('li');
    criarElemento.innerText = text.value;
    add.appendChild(criarElemento);
    text.value = '';
}

function changebg(event) {
    const color = document.querySelector('.bg-color');
    if (color !== null) {
        color.classList.remove('bg-color');
    } event.target.classList.add('bg-color');
} 
    const teste = document.querySelector('#lista-tarefas');
    teste.addEventListener('click', changebg);
 
    const riscarItem = document.querySelector('#lista-tarefas');
function riscar (event) {
    riscarItem.classList.remove('completed');
    event.target.classList.add('completed');
}
const mark = document.querySelector('.completed');
riscarItem.addEventListener('dblclick', riscar);
