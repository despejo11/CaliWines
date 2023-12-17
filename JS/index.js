function disableScroll() {
	var scrollPosition = window.scrollY || window.pageYOffset
	document.body.style.overflowY = 'hidden'
	document.body.style.position = 'fixed'
	document.body.style.top = `-${scrollPosition}px`
}

function enableScroll() {
	var scrollPosition = parseInt(document.body.style.top, 10)
	document.body.style.overflowY = ''
	document.body.style.position = ''
	document.body.style.top = ''
	window.scrollTo(0, scrollPosition)
}

let openButton = document.querySelector('.menu-btn')
let menubox = document.querySelector('.menubox')
let menuToggle = document.getElementById('menu-toggle')

openButton.addEventListener('click', function () {
	disableScroll()
	menubox.style.left = '0'
})

function closeMenu() {
	enableScroll()
	menuToggle.checked = false
	menubox.style.left = '-100%'
}

document.addEventListener('click', function (event) {
	handleMenuClick(event)
})

document.addEventListener('touchstart', function (event) {
	handleMenuClick(event)
})

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
	if (this.checked) {
		disableScroll()
	} else {
		enableScroll()
	}
})

var isMenuOpen = false

window.addEventListener('resize', function () {
	if (window.innerWidth > 1025 && isMenuOpen) {
		enableScroll()
		closeMenu()
		var currentScrollPos = window.scrollY || window.pageYOffset
		window.scrollTo(0, currentScrollPos)
	}
})

openButton.addEventListener('click', function () {
	disableScroll()
	isMenuOpen = true
	menubox.style.left = '0'
})

function closeMenu() {
	enableScroll()
	isMenuOpen = false
	menuToggle.checked = false
	menubox.style.left = '-100%'
}

menuToggle.addEventListener('change', function () {
	if (this.checked) {
		disableScroll()
	} else {
		enableScroll()
	}
})
