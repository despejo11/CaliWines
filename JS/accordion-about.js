const accordions = document.querySelectorAll('.accordion-room')

accordions.forEach(accordion => {
	accordion.addEventListener('click', () => {
		accordion.classList.toggle('active')
		const panelroom = accordion.nextElementSibling

		if (panelroom.style.maxHeight) {
			panelroom.style.maxHeight = null
		} else {
			panelroom.style.maxHeight = `${panelroom.scrollHeight}px`
		}
	})
})
