function addText () {
  const text = document.getElementById('texto-tarefa');
  const add = document.getElementById('lista-tarefas');
  
   let criarElemento = document.createElement('li');
    criarElemento.innerText = text.value;
    add.appendChild(criarElemento);
    text.value = '';
}
   

/*let colorBackground = document.querySelector('.bgColor');

function collor (event) {
    let adc = document.querySelector('#lista-tarefas');
}
    adc.addEventListener('click', collor);*/