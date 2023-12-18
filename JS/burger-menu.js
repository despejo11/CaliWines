;(() => {
	function disableScroll() {
		const scrollPosition = window.scrollY || window.pageYOffset
		document.body.style.overflowY = 'hidden'
		document.body.style.position = 'fixed'
		document.body.style.top = `-${scrollPosition}px`
	}

	function enableScroll() {
		const scrollPosition = parseInt(document.body.style.top, 10)
		document.body.style.overflowY = ''
		document.body.style.position = ''
		document.body.style.top = ''
		window.scrollTo(0, scrollPosition)
	}

	const openButton = document.querySelector('.menu-btn')
	const menubox = document.querySelector('.menubox')
	const menuToggle = document.getElementById('menu-toggle')

	openButton.addEventListener('click', () => {
		disableScroll()
		menubox.style.left = '0'
	})

	function closeMenu() {
		enableScroll()
		menuToggle.checked = false
		menubox.style.left = '-100%'
	}

	document.addEventListener('click', handleMenuClick)
	document.addEventListener('touchstart', handleMenuClick)

	function handleMenuClick(event) {
		if (
			!(
				event.target.matches('.burger-menu') ||
				event.target.closest('.burger-menu') ||
				event.target.matches('.menubox') ||
				event.target.closest('.menubox')
			)
		) {
			if (window.innerWidth <= 1025 && menuToggle.checked) {
				closeMenu()
				enableScroll()
				menuToggle.checked = false
				event.preventDefault()
			}
		}
	}

	menuToggle.addEventListener('change', function () {
		this.checked ? disableScroll() : enableScroll()
	})

	let isMenuOpen = false

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1025 && isMenuOpen) {
			enableScroll()
			closeMenu()
			const currentScrollPos = window.scrollY || window.pageYOffset
			window.scrollTo(0, currentScrollPos)
		}
	})

	openButton.addEventListener('click', () => {
		disableScroll()
		isMenuOpen = true
		menubox.style.left = '0'
	})

	menuToggle.addEventListener('change', function () {
		this.checked ? disableScroll() : enableScroll()
	})
})()
