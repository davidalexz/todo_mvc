
const deleteBtn = document.querySelectorAll('i.fa-trash')
const item = document.querySelectorAll('.item span')
const itemCompleted = document.querySelectorAll('.item span.completed')

Array.from(deleteBtn).forEach((element) => {
	element.addEventListener('click', deleteItem)
})

Array.from(item).forEach((element) => {
	element.addEventListener('click', markComplete)
})

Array.from(itemCompleted).forEach((element) => {
	element.addEventListener('click', markUncomplete)
})

async function deleteItem() {
	const todoId = this.parentNode.dataset.id
	try {
		const response = await fetch('deleteItem', {
			method: 'delete',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'itemFromJS': todoId
			})
		})
		const data = await response.json()
		location.reload()
	} catch(err) {
		console.error(err)
	}
}

async function markComplete() {
	const todoId = this.parentNode.dataset.id
	try {
		const response = await fetch('markComplete', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body:  JSON.stringify({
				'itemFromJS': todoId
			})
		})
		const data = await response.json()
		location.reload()
	} catch(err) {
		console.error(err)
	}
}

async function markUncomplete() {
	const todoId = this.parentNode.dataset.id
	try {
		const response = await fetch('markUncomplete', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body:  JSON.stringify({
				'itemFromJS': todoId
			})
		})
		const data = await response.json()
		location.reload()
	} catch(err) {
		console.error(err)
	}
}

