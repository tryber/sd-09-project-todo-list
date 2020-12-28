function clickButton () {
    const taskList = document.querySelector('#lista-tarefas')
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', function (event) {
        let inputText = input.value;
        if (inputText === '') {
            alert ('Favor inserir uma nova tarefa!')
            return;
        }
        let newTask = document.createElement('li');
        taskList.appendChild(newTask);
        newTask.className = 'task';
        newTask.innerText = inputText;
        input.value = '';
    })
}

function taskSelected() {
    let lists = document.getElementById('lista-tarefas')
    lists.addEventListener('click', function (event) {
    let select = document.querySelectorAll('.selected');
    for (let index = 0; index < select.length; index += 1) {
      select[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function dblClick() {
    let taskList = document.querySelector('#lista-tarefas')
    taskList.addEventListener('dblclick', function (event) {
        event.target.classList.toggle('completed')
    });
}


window.onload = function() {
    taskSelected();
    clickButton();
    dblClick();

}