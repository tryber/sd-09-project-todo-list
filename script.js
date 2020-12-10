const taskListHeader = document.createElement('header');
taskListHeader.innerText = 'Minha Lista de Tarefas';
taskListHeader.id = 'task-header'
document.body.appendChild(taskListHeader);

const createParagraph = document.createElement('p');
createParagraph.id = 'funcionamento';
createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('task-header').appendChild(createParagraph);

