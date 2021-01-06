function createTask() {
  const input = document.getElementById('texto-tarefa');
  if (input.value !== '') {
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}

function changeColor() {
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index++) {
    li[index].addEventListener('click', function () {
      li[index].style.backgroundColor = 'rgb(' + 128 + ',' + 128 + ',' + 128 + ')';
    });
  }
}

window.onload = function () {
  createTask()
  changeColor()
};
