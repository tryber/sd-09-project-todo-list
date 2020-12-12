

function addTask() {
  const text = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  const orderedList = document.querySelector('#lista-tarefas');
  
  button.addEventListener('click', function () {
    if(text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const list = document.createElement('li');
      orderedList.appendChild(list);
      list.innerText = text.value;
      text.value = '';
    }
  });
}
addTask();