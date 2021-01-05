/* let tarefas = [];
 let novaTarefa = 'arrumar a casa';
  function adicionaTarefa(tarefa) {
      tarefas.push(tarefa);
  }
  adicionaTarefa(novaTarefa2);
console.log(novaTarefa2); */

function saveData() {
  let listaTarefas = document.getElementById('lista-tarefas');
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let incluiTarefa = document.createElement('li');
  incluiTarefa.innerText = textoTarefa;
  listaTarefas.appendChild(incluiTarefa);
  
  // document.getElementById('texto').innerText = textoTarefa;
}

const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', saveData);


