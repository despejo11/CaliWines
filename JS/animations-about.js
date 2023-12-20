document.addEventListener('DOMContentLoaded', function () {
	const wineskindsTypes = document.querySelectorAll('.wineskinds-type')

	const observerOptions = { threshold: 0.5 }

	const observerCallback = (entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add('show')
				}, index * 200)
				observer.unobserve(entry.target)
			}
		})
	}

	const observer = new IntersectionObserver(observerCallback, observerOptions)
	wineskindsTypes.forEach(type => observer.observe(type))
})

document.addEventListener('DOMContentLoaded', function () {
	const accordionRooms = document.querySelectorAll('.accordion-room')

	const observerOptions = { threshold: 0.5 }

	const observerCallback = (entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add('show')
				}, index * 200)
				observer.unobserve(entry.target)
			}
		})
	}

	const observer = new IntersectionObserver(observerCallback, observerOptions)
	accordionRooms.forEach(room => observer.observe(room))
})
