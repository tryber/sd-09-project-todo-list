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

getTaskList.addEventListener('dblclick', function(itemOrigin){
    let itemClickedClassName = itemOrigin.target.className
    let itemClickedClassNameString = String(itemClickedClassName)

    if (itemClickedClassNameString.includes('completed')){
        let newClass = itemClickedClassNameString.replace('completed', '')
        itemOrigin.target.className = newClass
    } else {
        itemOrigin.target.className += ' completed'
    }
    
})

let getRemoveAllButton = document.getElementById('apaga-tudo');
getRemoveAllButton.addEventListener('click', function(){
    getTaskList.innerHTML = '';
})

let getRemoveFinishedButton = document.getElementById('remover-finalizados');
getRemoveFinishedButton.addEventListener('click', function(){

    getTaskFinished = document.querySelectorAll('.completed')
    for (let index = 0; index < getTaskFinished.length; index += 1){
        let element = getTaskFinished[index]
        getTaskList.removeChild(element)
    }
})