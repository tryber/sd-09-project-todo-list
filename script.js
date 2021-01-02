function title(titlesString) {
  let body = document.querySelector('body');
  let header = document.createElement('header');
  
  header.innerHTML = titlesString;
  body.appendChild(header);
}
title('Minha Lista de Tarefas');