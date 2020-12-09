function createInput() {
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    input.type = 'text';
    input.placeholder = 'digite o item';
    
    let section1 = document.querySelector('#section1');
    section1.appendChild(input); 
}
createInput();

