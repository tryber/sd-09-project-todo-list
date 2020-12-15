window.onload = function () {
    let imput = document.querySelector('#texto-tarefa'); 
    let buttonAddLesson = document.querySelector('#criar-tarefa');
    buttonAddLesson.addEventListener('click', function () {
      if (imput.value !== '' && imput.value[0] !== ' ') {
          let newLesson = document.createElement('li');
          newLesson.innerText = imput.value;
          let list = document.querySelector('#lista-tarefas');
          list.appendChild(newLesson);
          imput.value = '';
      }
    });
}
