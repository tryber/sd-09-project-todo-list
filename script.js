function btnAdd() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', function () {
    const listTask = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerText = input.value;
    listTask.appendChild(li);
    input.value = '';
  });
}

window.onload = function () {
  btnAdd();
};
