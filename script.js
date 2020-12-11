window.onload = functionsLoaded();

function functionsLoaded() {
  newItemList();
}

function clearInput() {
  let inputLocal = document.querySelector("#texto-tarefa");
  inputLocal.value = "";
}

function newItemList() {
  let buttonLocal = document.querySelector("#criar-tarefa");

  buttonLocal.addEventListener("click", function () {
    let inputLocal = document.querySelector("#texto-tarefa");
    let taskName = inputLocal.value;
    let listLocal = document.querySelector("#lista-tarefas");

    let newItem = document.createElement("li");
    newItem.className = "list-item";
    newItem.innerText = taskName;
    listLocal.appendChild(newItem);

    clearInput();
    clickColor();
  });
}

function clickColor() {
  window.addEventListener("click", function (event) {
    let element = event.target;
    let listItemLocal = document.querySelectorAll('.list-item')
    for (let count = 0; count < listItemLocal.length; count += 1){
      if (listItemLocal[count].style.color === "rgb(128, 128, 128)"){
        listItemLocal[count].style.color = 'black'
      }
    }
    if (element.className === "list-item") {
      element.style.color = "rgb(128, 128, 128)";
    }
  });
}
