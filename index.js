// BUTTONS
const buttonImages = document.querySelector('#images')
const buttonTasksGet = document.querySelector('#tasks-get')
const buttonTasksPost = document.querySelector('#tasks-post')
// INPUTS
const pageInput = document.querySelector('#page-number')
const taskInput = document.querySelector('#task-title')
// RESULTS
const imagesResult = document.querySelector('#images-result')
const tasksResult = document.querySelector('#tasks-result')

// GET IMAGES
const onImagesRecieve = (dataArray) => {
	dataArray.forEach(e => {
		const img = document.createElement('img')

		img.src = e.thumbnail // СМОТРИМ ЧТО ЭТО В CDT (CHROME DEV TOOLS)

		imagesResult.appendChild(img)
	})
} // CALLBACK В СЛУЧАЕ SUCCESS

// GET TASKS
const onTasksRecieve = (dataArray) => {
	tasksResult.innerHTML = ''

	dataArray.forEach(e => {
		// TASK LI DOM ELEMENT
		const task = document.createElement('li')
		task.dataset.id = e.id // СМОТРИМ ЧТО ЭТО В CDT (CHROME DEV TOOLS)

		// TASK H3 DOM ELEMENT
		const taskText = document.createElement('h3')
		taskText.innerHTML = e.title // СМОТРИМ ЧТО ЭТО В CDT (CHROME DEV TOOLS)

		// TASK BUTTONS DOM ELEMENTS
		const taskPutButton = document.createElement('button')
		const taskDeleteButton = document.createElement('button')
		taskPutButton.innerHTML = 'Update'
		taskDeleteButton.innerHTML = 'Delete'

		// EVENT ON PUT TASK BUTTON
		taskPutButton.addEventListener('click', () => {
			const updateText = prompt('What text update to?')

			if (updateText !== null || updateText !== "") {
				const promise = updateTask(updateText, task.getAttribute('data-id'), true)

				tasksResult.innerHTML = 'Updating...'
				buttonTasksGet.disabled = true

				promise
					.then(() => {
						tasksResult.innerHTML = 'Press "Get tasks" again'
						buttonTasksGet.disabled = false
					})
			}
		})
		// EVENT ON DELETE TASKS BUTTON
		taskDeleteButton.addEventListener('click', () => {
			const promise = deleteTask(task.getAttribute('data-id'))

			tasksResult.innerHTML = 'Deleting...'
			buttonTasksGet.disabled = true		

			promise
				.then(() => {
					tasksResult.innerHTML = 'Press "Get tasks" again'
					buttonTasksGet.disabled = false
				})
		})

		// LI > H3, BUTTON-PUT, BUTTON-DELETE
		task.appendChild(taskText)
		task.appendChild(taskPutButton)
		task.appendChild(taskDeleteButton)

		// TASKS-RESULT > LI
		tasksResult.appendChild(task) 
	})
} // CALLBACK В СЛУЧАЕ SUCCESS

// EVENT ON GET IMAGES BUTTON
buttonImages.addEventListener('click', () => {
	imagesResult.innerHTML = ''

	const promise = getImages(pageInput.value)

	promise
		.then(onImagesRecieve)
})

// EVENT ON GET TASKS BUTTON
buttonTasksGet.addEventListener('click', () => {
	const promise = getTasks()
	promise
		.then(onTasksRecieve)
})

// EVENT ON POST TASK BUTTON
buttonTasksPost.addEventListener('click', () => {
	const promise = createTask(taskInput.value)

	taskInput.value = 'Wait few seconds'
	buttonTasksGet.disabled = true

	promise
		.then(() => {
			alert('Task Added!')
			taskInput.value = ''
			buttonTasksGet.disabled = false
		})
})