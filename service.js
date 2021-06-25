// XMLHttpRequest // ДАВНО ( УСТАРЕЛО )

// $.ajax() // НЕДАВНО

// fetch() // СЕЙЧАС

// axios // БИБЛИОТЕКА  



// JQUERY ПРАКТИКА
	// GET
const getImagesOld = (pageNumber) => {
	const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1` // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
	) // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ

	return promise
} 


// AXIOS ПРАКТИКА
	// GET
const getImages = (pageNumber) => {
	const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1` // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
	) // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ

	return promise.then(data => data.data) // НАМ НУЖЕН МАССИВ , НО AXIOS РАБОТАЕТ ЧУТЬ ПОДРУГОМУ , ПОЭТОМУ МЫ ПИШЕМ ТАКУЮ ЖОПУ
}

const getTasks = () => {
	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1` // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
	) // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ

	return promise.then(data => data.data) // НАМ НУЖЕН МАССИВ , НО AXIOS РАБОТАЕТ ЧУТЬ ПОДРУГОМУ , ПОЭТОМУ МЫ ПИШЕМ ТАКУЮ ЖОПУ
}
	// POST
const createTask = (title) => {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 1,
		title: title
	} // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
	) // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ

	return promise.then(data => data.data) // НАМ НУЖЕН МАССИВ , НО AXIOS РАБОТАЕТ ЧУТЬ ПОДРУГОМУ , ПОЭТОМУ МЫ ПИШЕМ ТАКУЮ ЖОПУ
}
	// PUT
const updateTask = (updatedTitle, taskId, done) => {
	const promise = axios({
		method: 'put',
		url: `https://repetitora.net/api/JS/Tasks`, // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ
		data: { // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
			widgetId: 1,
			taskId: taskId,
			title: updatedTitle,
			done: done
		}
	})

	return promise.then(data => data.data) // НАМ НУЖЕН МАССИВ , НО AXIOS РАБОТАЕТ ЧУТЬ ПОДРУГОМУ , ПОЭТОМУ МЫ ПИШЕМ ТАКУЮ ЖОПУ
}
	// DELETE
const deleteTask = (titleId) => {
	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1&taskId=${titleId}` // ЗДЕСЬ МОЖНО ДОБАВЛЯТЬ PARAMS (?=)
	) // ЗДЕСЬ НУЖНО НАПИСАТЬ URL ( API, ENDPOINT ) И НАСТРОЙКИ ПО ЖЕЛАНИЮ

	return promise.then(data => data.data) // НАМ НУЖЕН МАССИВ , НО AXIOS РАБОТАЕТ ЧУТЬ ПОДРУГОМУ , ПОЭТОМУ МЫ ПИШЕМ ТАКУЮ ЖОПУ
}



// ПОРАЯДОК ЛОГА С АССИНХРОННЫМИ ФУНКЦИЯМИ (EVENT LOOP)
	// console.log(1) // FIRST LOG
	// setTimeout(() => console.log(2), 1000) // THIRD LOG
	// console.log(3) // SECOND LOG
