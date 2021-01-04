function addText () {
  const text = document.getElementById('texto-tarefa');
  const add = document.getElementById('lista-tarefas');
  
   let criarElemento = document.createElement('li');
    criarElemento.innerText = text.value;
    add.appendChild(criarElemento);
}
