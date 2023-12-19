document.addEventListener('DOMContentLoaded', function () {
	const awardItems = document.querySelectorAll('.award-item-historybrand')

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
	awardItems.forEach(item => observer.observe(item))
})

document.addEventListener('DOMContentLoaded', function () {
	const historyItems = document.querySelectorAll('.winery-history-content')

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
	historyItems.forEach(item => observer.observe(item))
})
