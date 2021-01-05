function saveToLocalStorage() {
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      const tasks = document.querySelector('#lista-tarefas');
      const objTasks = [];
      const objClasses = [];
      for (let index = 0; index < tasks.children.length; index += 1) {
        objTasks[index] = tasks.children[index].innerText;
        objClasses[index] = tasks.children[index].classList;
      }
      localStorage.setItem('tasks', objTasks.join());
      localStorage.setItem('classes', objClasses.join());
    } else {
      document.write('Sem suporte para Web Storage.');
    }
  }