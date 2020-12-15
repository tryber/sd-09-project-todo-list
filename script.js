window.onload = function () {
	function titleOperation() {
		let operation = document.createElement('h5')
		let title = document.querySelector('.title')
		title.appendChild(operation)
		operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
		operation.id = 'funcionamento'
	}
	titleOperation();

	function createButton() {
		let button = document.createElement('button')
		button.id = 'criar-tarefa'
		button.innerHTML = 'Adicionar Tarefa'
		document.body.appendChild(button)
	}
	createButton()

	function createContainer() {
		let container = document.createElement('div')
		let button = document.querySelector('#criar-tarefa')
		let input = document.querySelector('#texto-tarefa')
		let listOrdened = document.querySelector('#lista-tarefas')
		container.appendChild(input)
		container.appendChild(button)
		container.appendChild(listOrdened)
		document.body.appendChild(container)
		container.className = 'container'
	}
	createContainer()

	function addNewTodo() {
		let button = document.querySelector('#criar-tarefa')
		let input = document.querySelector('#texto-tarefa')
		let list = document.querySelector('#lista-tarefas')

		button.addEventListener('click', function () {
			if (input.value.length > 0) {
				let newList = document.createElement('li')
				newList.innerText = input.value

				newList.className = 'list-items'
				list.appendChild(newList)
				input.value = ''
			}
		})

		input.addEventListener('keyup', function (event) {
			if (event.keyCode === 13 && input.value.length > 0) {
				let newList = document.createElement('li')
				newList.innerText = input.value

				newList.className = 'list-items'
				list.appendChild(newList)
				input.value = ''
			}
		})
	}
	addNewTodo()

	function doubleClickList() {
		let taskList = document.querySelector('#lista-tarefas')
		taskList.addEventListener('dblclick', function (event) {

			event.target.classList.toggle('completed')
		})
	}
	doubleClickList()

	function clickList() {
		let task = document.querySelector('#lista-tarefas')
		task.addEventListener('click', function (event) {
			let list = document.querySelectorAll('li')
			for (let index = 0; index < list.length; index += 1) {
				list[index].classList.remove('selected')
			}
			event.target.classList.add('selected')
		})
	}
	clickList();


	function createButtonClearAllItemList() {
		let button = document.createElement('button')
		let container = document.querySelector('.container')
		button.id = 'apaga-tudo'
		button.innerText = 'Clear All List'
		container.appendChild(button)
	}
	createButtonClearAllItemList()

	function removeList() {
		let taskList = document.querySelector('#lista-tarefas')
		let buttonClearAll = document.querySelector('#apaga-tudo')

		buttonClearAll.addEventListener('click', function () {
			let itemsList = document.querySelectorAll('li')
			for (let index = 0; index < itemsList.length; index += 1) {
				taskList.removeChild(itemsList[index])
			}
		})
	}
	removeList()

	function createButtonClearItemSelected() {
		let button = document.createElement('button')
		let container = document.querySelector('.container')
		button.id = 'remover-finalizados'
		button.innerText = 'Clear Item Selected'
		container.appendChild(button)
	}
	createButtonClearItemSelected()

	function removeItemSelected() {
		let taskList = document.querySelector('#lista-tarefas')
		let buttonClearSelected = document.querySelector('#remover-finalizados')

		buttonClearSelected.addEventListener('click', function () {
			let itemsList = document.querySelector('.selected')

			taskList.removeChild(itemsList)

		})
	}
	removeItemSelected()
}
