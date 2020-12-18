window.onload = function () {
  const removeSelected = document.querySelector('#remover-selecionado');
  const imput = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const clear = document.querySelector('#apaga-tudo');
  const claerFinished = document.querySelector('#remover-finalizados');
  const buttonAddLesson = document.querySelector('#criar-tarefa');
  buttonAddLesson.addEventListener('click', function () {
    if (imput.value !== '' && imput.value[0] !== ' ') {
      const newLesson = document.createElement('li');
      newLesson.innerText = imput.value;
      list.appendChild(newLesson);
      imput.value = '';
    }
  });
  list.addEventListener('click', function (event) {
    const line = document.querySelectorAll('li');
    if (line[0].previousSibling !== null) {
      list.removeChild(line[0].previousSibling);
    }
    for (let x = 0; x < line.length; x += 1) {
      line[x].removeAttribute('style');
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  list.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
  clear.addEventListener('click', function () {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
  claerFinished.addEventListener('click', function () {
    line = document.querySelectorAll('li');
    for (let x = 0; x < line.length; x += 1) {
      if (line[x].className === 'completed') {
        list.removeChild(line[x]);
      }
    }
  });
  
  removeSelected.addEventListener('click', function () {
    line = document.querySelectorAll('li');
    for (let x =0; x < line.length; x += 1) {
      if(line[x].style.backgroundColor === 'rgb(128, 128, 128)') {
        list.removeChild(line[x]);
      }
    }
  });
  const up = document.querySelector('#mover-cima');
  up.addEventListener('click', function () {
    line = document.querySelectorAll('li');
    for (let x = 0; x < line.length; x += 1) {
      if(line[x].style.backgroundColor === 'rgb(128, 128, 128)' && line[x].previousSibling !== null) {
        const save = line[x -1].innerText;
        line[x - 1].innerText = line[x].innerText;
        for (let x = 0; x < line.length; x += 1) {
          line[x].removeAttribute('style');
        }
        line[x - 1].style.backgroundColor = 'rgb(128, 128, 128)';
        line[x].innerText = save;
      }
    }
  });
  const low = document.querySelector('#mover-baixo');
  low.addEventListener('click', function () {
    const line = document.querySelectorAll('li');
    for (let x = line.length-1; x >= 0; x -= 1) {
      if(line[x].style.backgroundColor === 'rgb(128, 128, 128)' && line[x].nextElementSibling !== null) {
        const save2 = line[x].nextElementSibling.innerText;
        line[x].nextElementSibling.innerText = line[x].innerText;
        for (let x = 0; x < line.length; x += 1) {
          line[x].removeAttribute('style');
        }
        line[x].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
        line[x].innerText = save2;
      }
    }
  });
};
