function createInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'digite o item';

  const inputArea = document.querySelector('#input-area');
  inputArea.appendChild(input);
}
createInput();

function createTaskList() {
  const taskList = document.querySelector('#task-list');
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  taskList.appendChild(ol);
}
createTaskList();

function addButtonItem() {
  const btn = document.createElement('button');
  btn.id = 'criar-tarefa';
  btn.innerText = 'Criar tarefa';
  const inputArea = document.querySelector('#input-area');
  inputArea.appendChild(btn);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('#texto-tarefa');
    const taskList = document.querySelector('#lista-tarefas');

    if (input.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = input.value;
      newLi.className = 'list-item';
      taskList.appendChild(newLi);

      input.value = '';
    }
  });
}
addButtonItem();

function ChangeColorElementsLi() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function (e) {
    const currentSelected = document.querySelector('.selected');
    if (currentSelected) {
      currentSelected.classList.remove('selected');
      currentSelected.style.backgroundColor = '';
    }
    e.target.className += ' selected';
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
ChangeColorElementsLi();

function scratchingItem() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('dblclick', function (e) {
    if (e.target.className !== 'completed') {
      e.target.classList.toggle('completed');
      e.target.style.backgroundColor = '';
    }
  });
}
scratchingItem();

function deleteTaskList() {
  const button = document.createElement('button');
  const divButton = document.querySelector('#buttons');
  divButton.appendChild(button);
  button.innerText = 'Remover tudo';
  button.id = 'apaga-tudo';

  button.addEventListener('click', function () {
    // https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
    document.querySelectorAll('.list-item').forEach(function (e) {
      return (e.parentNode.removeChild(e));
    });
  });
}
deleteTaskList();

function deleteSelectedList() {
  const button = document.createElement('button');
  const divButton = document.querySelector('#buttons');
  divButton.appendChild(button);
  button.innerText = 'Remover riscada';
  button.id = 'remover-finalizados';

  button.addEventListener('click', function () {
    // https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
    document.querySelectorAll('.completed').forEach(function (e) {
      return (e.parentNode.removeChild(e));
    });
  });
}
deleteSelectedList();

function setLocalStorage() {
  const btnSave = document.createElement('button');
  const divPaiBtn = document.querySelector('#save');
  btnSave.id = 'salvar-tarefas';
  btnSave.innerText = 'Salvar tarefas';
  btnSave.style.marginBottom = '10px';
  divPaiBtn.appendChild(btnSave);

  btnSave.addEventListener('click', function () {
    const taskList = document.querySelectorAll('.list-item');
    const objList = [];
    for (let item = 0; item < taskList.length; item += 1) {
      const obj = {
        key: item,
        value: taskList[item].innerText,
        class: taskList[item].className,
      };
      objList.push(obj);
    }
    localStorage.setItem('item', JSON.stringify(objList));
  });
}
setLocalStorage();

function getLocalStorage() {
  if (localStorage.getItem('item') !== null) {
    const json = localStorage.getItem('item');
    const obj = JSON.parse(json);

    for (let i = 0; i < obj.length; i += 1) {
      const li = document.createElement('li');
      const ul = document.querySelector('#lista-tarefas');

      li.innerText = obj[i].value;
      li.className = obj[i].class;

      ul.appendChild(li);
    }
  }
}
getLocalStorage();

function upListButton() {
  const button = document.createElement('button');
  button.id = 'mover-cima';
  button.className = 'btn-up';
  button.innerText = 'Subir tarefa';
  const divbutton = document.querySelector('#save');
  divbutton.appendChild(button);

  button.addEventListener('click', function () {
    const taskSelected = document.querySelector('.selected');
    const tasks = document.querySelector('#lista-tarefas');

    if (taskSelected && taskSelected.previousElementSibling) {
      tasks.insertBefore(taskSelected, taskSelected.previousElementSibling);
    }
  });
}
upListButton();

function downListButton() {
  const button = document.createElement('button');
  button.id = 'mover-baixo';
  button.className = 'btn-up';
  button.innerText = 'Descer tarefa';
  const divbutton = document.querySelector('#save');
  divbutton.appendChild(button);

  button.addEventListener('click', function () {
    const taskSelected = document.querySelector('.selected');
    const tasks = document.querySelector('#lista-tarefas');

    if (taskSelected && taskSelected.nextSibling) {
      tasks.insertBefore(taskSelected.nextSibling, taskSelected);
    }
  });
}
downListButton();

function deleteSelectedItem() {
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerText = 'Remover selecionado';
  const divPai = document.querySelector('#buttons');
  divPai.appendChild(button);

  button.addEventListener('click', function () {
    document.querySelectorAll('.selected').forEach((e) => (e.parentNode.removeChild(e)));
    // https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
  });
}
deleteSelectedItem();
