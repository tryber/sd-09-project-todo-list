function btnAdd() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', function () {
    const listTask = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerText = input.value;
    listTask.appendChild(li);
    input.value = '';
    backgroundcolorItem();
  });
}

function backgroundcolorItem() {
  const listItem = document.querySelectorAll('li');
  console.log(listItem);
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('click', function (event) {
      for (item = 0; item < listItem.length; item += 1) {
          listItem[item].style.backgroundColor = '';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

window.onload = function () {
  btnAdd();
};
