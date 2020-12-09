function generateInput() {
  const container = document.getElementById('main-content');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';
  newInput.placeholder = 'Type a new task here.';

  container.appendChild(newInput);
}

window.onload = function () {
  generateInput();
};
