window.onload = function () {
  let olParent = document.getElementById("lista-tarefas");
  let btnCreaTask = document.getElementById("criar-tarefa");

  function createTasks() {
    let task = document.createElement("li");
    let inputBtn = document.getElementById("texto-tarefa").value;
    task.textContent = inputBtn;
    olParent.appendChild(task);
    document.getElementById('texto-tarefa').value = '';
  }
  btnCreaTask.addEventListener("click", createTasks);

  let listItem = document.querySelector('li'); 
  
  function grayColor () {
      for (let i = 0; i <= listItem.length; i += 1) {
        
      }
  }
}