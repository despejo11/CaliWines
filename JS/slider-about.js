document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.slider-about')
	const prevBtn = document.getElementById('prevBtn')
	const nextBtn = document.getElementById('nextBtn')
	const counterCircles = document.querySelectorAll('.counter-circle-about')

	let currentIndex = 0

	const updateCounter = () => {
		counterCircles.forEach((circle, index) => {
			if (index === currentIndex) {
				circle.classList.add('active-count')
			} else {
				circle.classList.remove('active-count')
			}
		})
	}

	const updateSlider = () => {
		slider.style.transform = `translateX(${-currentIndex * 100}%)`
		updateCounter()
	}

	const prevSlide = () => {
		if (currentIndex > 0) {
			currentIndex--
			updateSlider()
		}
	}

	const nextSlide = () => {
		if (currentIndex < slider.children.length - 1) {
			currentIndex++
			updateSlider()
		}
	}

	prevBtn.addEventListener('click', prevSlide)
	nextBtn.addEventListener('click', nextSlide)

	updateCounter()
})
