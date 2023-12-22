document.addEventListener('DOMContentLoaded', function () {
	const contactContainerTop = document.querySelector('.contact-container-top')

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
	observer.observe(contactContainerTop)
})

document.addEventListener('DOMContentLoaded', function () {
	const contactContainerBottom = document.querySelector(
		'.contact-container-bottom'
	)

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
	observer.observe(contactContainerBottom)
})

document.addEventListener('DOMContentLoaded', function () {
	const animationTop = document.querySelector('.animation-top')
	const animationBottom = document.querySelector('.animation-bottom')

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

	const observerTop = new IntersectionObserver(
		observerCallback,
		observerOptions
	)
	observerTop.observe(animationTop)

	const observerBottom = new IntersectionObserver(
		observerCallback,
		observerOptions
	)
	observerBottom.observe(animationBottom)
})
