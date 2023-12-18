document.addEventListener('DOMContentLoaded', function () {
	const wineServItems = document.querySelectorAll('.wine-serv-items')

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
	wineServItems.forEach(item => observer.observe(item))
})

document.addEventListener('DOMContentLoaded', function () {
	const wineDealsProducts = document.querySelector(
		'.wine-deals-product-products'
	)
	const wineProductItems = wineDealsProducts.querySelectorAll('.wine-product')

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
	wineProductItems.forEach(item => observer.observe(item))
})
