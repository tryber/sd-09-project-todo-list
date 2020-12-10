window.onload = function () {
  function clearInputButton(buttonName) {
    const botao = document.getElementById('input-box');
    const newButton = document.createElement('button');
    const newButtonID = 'criar-tarefa';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  }
  clearInputButton('Adicionar');
  const bttn = document.getElementById('criar-tarefa');
  bttn.classList.add('criar-tarefa');
  function bttnCriarTarefa() {
    const input = document.getElementById('texto-tarefa').value;
    const lista = document.getElementById('lista-tarefas');
    const addLi = document.createElement('li');
    addLi.innerText = input;
    lista.appendChild(addLi);
    document.getElementById('texto-tarefa').value = '';
  }
  bttn.addEventListener('click', bttnCriarTarefa);
  function listBgColor() {
    const list = document.getElementById('lista-tarefas');
    list.addEventListener('click', function (event) {
      const liList = document.querySelectorAll('li');
      const color1 = 'rgb(255, 255, 255)';
      const color2 = 'rgb(128, 128, 128)';
      if (list.length !== 0) {
        for (let index = 0; index < liList.length; index += 1) {
          liList[index].style.backgroundColor = color1;
        }
        event.target.style.backgroundColor = color2;
      }
    });
  }
  listBgColor();
  function lineThrough() {
    const list2 = document.getElementById('lista-tarefas');
    list2.addEventListener('dblclick', function (event) {
      const liList2 = document.querySelectorAll('li');
      if (liList2.length !== 0) {
        if (event.target.classList.contains('completed')) {
          event.target.classList.remove('completed');
        } else {
          event.target.classList.add('completed');
        }
      }
    });
  }
  lineThrough();
  function clearListButton(buttonName) {
    const botao2 = document.getElementById('input-box');
    const newButton = document.createElement('button');
    const newButtonID = 'apaga-tudo';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao2.appendChild(newButton);
  }
  clearListButton('Limpar Lista');
  const bttn2 = document.getElementById('apaga-tudo');
  bttn2.classList.add('apaga-tudo');
  function bttnClearList() {
    const lista = document.getElementById('lista-tarefas');
    const listLi = document.querySelectorAll('li');
    for (let index = 0; index < listLi.length; index += 1) {
      if (listLi.length !== 0) {
        lista.removeChild(listLi[index]);
      }
    }
  }
  bttn2.addEventListener('click', bttnClearList);
  function clearFinishedButton(buttonName) {
    const botao3 = document.getElementById('input-box');
    const newButton = document.createElement('button');
    const newButtonID = 'remover-finalizados';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao3.appendChild(newButton);
  }
  clearFinishedButton('Limpar Lista');
  const bttn3 = document.getElementById('remover-finalizados');
  bttn3.classList.add('limparLista');
  function bttnClearALLList() {
    const lista = document.getElementById('lista-tarefas');
    const listSelected = document.querySelectorAll('.completed');
    for (let index = 0; index < listSelected.length; index += 1) {
      if (listSelected.length !== 0) {
        lista.removeChild(listSelected[index]);
      }
    }
  }
  bttn3.addEventListener('click', bttnClearALLList);
};
