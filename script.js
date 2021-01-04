window.onload = function () {
  let olParent = document.getElementById("lista-tarefas");
  let btnCreaTask = document.getElementById("criar-tarefa");

  function createTasks() {
    let task = document.createElement("li");
    let inputBtn = document.getElementById("texto-tarefa").value;
    task.textContent = inputBtn;
    olParent.appendChild(task);
    document.getElementById('texto-tarefa').value = '';
    
    function grayColor (evento) {
      let selectedItem = document.querySelector('.grayClass')
      if (selectedItem !== null) {
        selectedItem.classList.remove('grayClass')
      }
      evento.target.classList.add('grayClass');
    }
    task.addEventListener('click', grayColor);
  }
  btnCreaTask.addEventListener("click", createTasks)
}