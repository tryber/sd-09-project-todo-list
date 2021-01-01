function addItemButton() {
  const clickButton = document.querySelector('#criar-tarefa');
  clickButton.addEventListener('click', function () {
  let textInBox = document.querySelector('#texto-tarefa');
  const listTask = document.querySelector('#lista-tarefas');

  if(textInBox.value.length > 0) {
    const item = document.createElement('li');
    item.innerText = textInBox.value;
    item.className = 'item';
    listTask.appendChild(item);
    textInBox.value = '';
}
});
}
addItemButton();

function paintElementLi () {
  const backgroundColorTask = document.querySelector('#lista-tarefas')
  backgroundColorTask.addEventListener('click', function (event) {
  const backgroundColorTask = document.querySelector('.selected');
  if (backgroundColorTask) {
    backgroundColorTask.classList.remove('selected');
    backgroundColorTask.style.backgroundColor = '';
  }
    event.target.className += ' selected';

  });
};
paintElementLi()

function taskCompleted () {
  const completedItem = document.querySelector('#lista-tarefas');
  completedItem.addEventListener('dblclick', function (event) {
    
    if(event.target.className !== 'completed') {
      event.target.classList.toggle('completed');
      event.target.style.backgroundColor = '';
    }
    
  })
}
taskCompleted();


