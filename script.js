 window.onload = function () {

  const criarTarefa = document.createElement('button');
 criarTarefa.id = 'criar-tarefa';
 criarTarefa.innerHTML = 'adicionar';
 document.body.appendChild(criarTarefa);
  function AddTask () {
  btnAdd = document.getElementById('criar-tarefa');

  btnAdd.addEventListener('click', function (){
    newTask = document.querySelector('#texto-tarefa').value;
    taskLine = document.querySelector('#lista-tarefas');
    newLine = document.createElement('li');
    newLine.innerText = newTask;
    taskLine.appendChild(newLine);

    document.querySelector('#texto-tarefa').value = ' ';
  });
}
  AddTask ();

}



