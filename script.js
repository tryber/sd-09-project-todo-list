let buttonNewTask = document.getElementById('criar-tarefa');
let getTaskList = document.querySelector('#lista-tarefas');

buttonNewTask.addEventListener('click', function(){
    let inputText = document.getElementById('texto-tarefa').value;
    let newLi = document.createElement('li');
    newLi.innerText = inputText;
    newLi.className = 'item-list'
    newLi.style.backgroundColor = 'white'
    getTaskList.appendChild(newLi)
    cleartext();

    function cleartext(){
        document.getElementById('texto-tarefa').value = ''
    }

})

getTaskList.addEventListener('click', function(itemOrigin){
    let itemClicked = itemOrigin.target
    let newColor = 'rgb(128,128,128)'
    let itensList = document.querySelectorAll('.item-list')

    if (itemClicked.style.backgroundColor !== newColor){
        for (let index = 0; index < itensList.length; index +=1){
            itensList[index].style.backgroundColor = 'white'
        }
        itemClicked.style.backgroundColor = newColor
    } 
})

