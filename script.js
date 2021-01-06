const botao = document.getElementById("criar-tarefa");

function addONeListener(objeto, func){
    objeto.addEventListener('click', func);
}

function addListenerOnLabel(func) {
    const label = document.getElementsByTagName('label');

    for (let index = 0; index < label.length; index += 1) {
      label[index].addEventListener('click', func);
      //console.log(label[index]);
    }
  }

function addNew(){
    let label = document.createElement('label');
    let taskContent = document.getElementById('texto-tarefa').value;
    let taskElement = document.createElement('li');
    let lista = document.getElementById('lista-tarefas');

    label.innerText = taskContent;
    taskElement.appendChild(label);
    lista.appendChild(taskElement);

    clearInput('texto-tarefa');
    addListenerOnLabel(changeClassSelected);
}

function clearInput(classe){
    document.getElementById(classe).value = '';
}

function onClick(event) {
    console.log('entrou selected')
    event.target.classList.add('selected');
}

function changeClassSelected(event) {
    let selected = document.querySelector('.selected');
    console.log(selected);

    if(!selected){
        event.target.classList.add('selected');
    } else {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
    }

    
  }

addONeListener(botao, addNew);
