window.onload = function() {
    function titleOperation() {
        let operation = document.createElement('h5')
        let title = document.querySelector('.title')
        title.appendChild(operation)
        operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
    }
    titleOperation();
}