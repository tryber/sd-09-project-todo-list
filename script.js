const taskListHeader = document.createElement('header');
taskListHeader.innerText = 'Minha Lista de Tarefas';
taskListHeader.id = 'task-header'
document.body.appendChild(taskListHeader);

const createParagraph = document.createElement('p');
createParagraph.id = 'funcionamento';
createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('task-header').appendChild(createParagraph);

const createInput = document.createElement('input');
createInput.id = 'texto-tarefa';
createInput.placeholder = 'Tarefas';
document.querySelector('#funcionamento').after(createInput);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.querySelector('#task-header').append(taskList);

const taskButtonList = document.createElement('button');
taskButtonList.id = 'criar-tarefa';
taskButtonList.innerText = 'Adicionar tarefa'
document.getElementById('texto-tarefa').after(taskButtonList);
