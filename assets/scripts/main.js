const shufflePeople = () => {
	const people = document.getElementById('people')

	for (index = 0; index < people.children.length; index++) {
		people.appendChild(people.children[Math.random() * index | 0])
	}
}

document.addEventListener('DOMContentLoaded', () => {
	shufflePeople()

	const shuffle = document.querySelector('button')

	shuffle.onclick = () => shufflePeople()
})
