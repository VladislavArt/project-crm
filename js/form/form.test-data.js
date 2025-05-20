class RandomExample {
	constructor (name, phone, email, product) {
		this.name = name
		this.phone = phone
		this.email = email
		this.product = product
	}
}

const testData = [
	new RandomExample ('Владимир Панфилов', parseInt('+79875673486'),'vladimir@mail.ru', 'course-js'),
	new RandomExample ('Александр Кузьмин', parseInt('+79875688888'), 'alexander@mail.ru', 'course-vue'),
	new RandomExample ('Владислав Листьев', parseInt('+79875677777'), 'vladislav@mail.ru', 'course-html'),
	new RandomExample ('Иван Бугорков', parseInt('+79875666666'), 'ivan@mail.ru', 'course-php'),
	new RandomExample ('Антон Кузьмин', parseInt('+79875655555'), 'anton@mail.ru', 'course-wordpress'),
	new RandomExample ('Олег Панфилов', parseInt('+79875444444'), 'oleg@mail.ru', 'course-js'),
	new RandomExample ('Николай Чистяков', parseInt('+79875999999'), 'nikolay@mail.ru', 'course-html')
]

function getRandomIndex(max) {
	return Math.floor(Math.random() * max)
}

export default function getRandomData () {
	const index = getRandomIndex(testData.length)
	return testData[index]
}
