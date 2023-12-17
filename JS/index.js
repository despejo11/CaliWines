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

var openButton = document.querySelector('.menu-btn')
var menubox = document.querySelector('.menubox')
var menuToggle = document.getElementById('menu-toggle')

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
	if (
		!(
			event.target.matches('.burger-menu') ||
			event.target.closest('.burger-menu')
		)
	) {
		if (window.innerWidth <= 1025) {
			closeMenu()
		}
	}
})

window.addEventListener('resize', function () {
	if (window.innerWidth > 1025) {
		enableScroll()
		closeMenu()
	}
})

menuToggle.addEventListener('change', function () {
	if (this.checked) {
		disableScroll()
	} else {
		enableScroll()
	}
})
