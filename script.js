const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';
const buttonsSection = document.querySelector('#buttons');
const removeTasks = document.createElement('button');
removeTasks.id = 'apaga-tudo';
removeTasks.className = 'button remove';
removeTasks.innerHTML = 'Remove All';
buttonsSection.appendChild(removeTasks);
const removeChecked = document.createElement('button');
removeChecked.id = 'remover-finalizados';
removeChecked.className = 'button remove';
removeChecked.innerHTML = 'Remove Completed';
buttonsSection.appendChild(removeChecked);
const removeSelected = document.createElement('button');
removeSelected.id = 'remover-selecionado';
removeSelected.className = 'button remove';
removeSelected.innerHTML = 'Remove Selected';
buttonsSection.appendChild(removeSelected);
const saveTasks = document.createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.className = 'button save';
saveTasks.innerHTML = 'Save Selected';
buttonsSection.appendChild(saveTasks);

// Adiciona as tarefas
function addTask() {
  button.addEventListener('click', function () {
    if (text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const lists = document.createElement('li');
      lists.className = 'todo-list';
      orderedList.appendChild(lists);
      lists.innerText = text.value;
      text.value = '';
    }
  });
}
