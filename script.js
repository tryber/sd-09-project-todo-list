const criarTarefa = document.createElement('button');
    criarTarefa.id = 'criar-tarefa';
    criarTarefa.innerHTML = 'adicionar';
    document.body.appendChild(criarTarefa);

    function taskAdd() {
      const btnAdd = document.getElementById('criar-tarefa');
      btnAdd.addEventListener('click', function () {
      const newTask = document.querySelector('#texto-tarefa').value;
      const taskLine = document.querySelector('#lista-tarefas');
      const newLine = document.createElement('li');
      newLine.innerHTML = newTask;
      taskLine.appendChild(newLine);

          document.getElementById('texto-tarefa').value = null;
      });
    }

    function colorItem() {
      const list = document.querySelector('#lista-tarefas');
      list.addEventListener('click', function (event) {
        if (event.target.style.backgroundColor === '') {
          event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        } else {
          event.target.style.backgroundColor = '';
        }
      });
    }

    const deletaTarefa = document.createElement('button');
    deletaTarefa.id = 'apaga-tudo';
    deletaTarefa.innerHTML = 'Apagar tudo';
    document.body.appendChild(deletaTarefa);

    function dellTasks() {
      const btnDell = document.getElementById('apaga-tudo');
      const taskLine = document.querySelector('#lista-tarefas');
      const Line = document.getElementsByTagName('li');
      btnDell.addEventListener('click', function () {
      taskLine.innerText = ''

      });
    }

    function taskRisk() {
    const taskLine = document.querySelector('#lista-tarefas');
    taskLine.addEventListener('dblclick',function(event) {
      event.target.classList.toggle('completed')
    })
  }

    window.onload = function () {
    taskAdd();
    colorItem();
    dellTasks();
    taskRisk();
    };
