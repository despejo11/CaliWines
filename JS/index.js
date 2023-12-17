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

var burgerMenu = document.querySelector('.burger-menu')
var openButton = document.querySelector('.menu-btn')
var menubox = document.querySelector('.menubox')

openButton.addEventListener('click', function () {
	disableScroll()
	menubox.style.left = '0'
})

document.addEventListener('click', function (event) {
	if (!burgerMenu.contains(event.target) && !menubox.contains(event.target)) {
		enableScroll()
		document.getElementById('menu-toggle').checked = false
		menubox.style.left = '-100%'
	}
})

document.getElementById('menu-toggle').addEventListener('change', function () {
	if (this.checked) {
		disableScroll()
	} else {
		enableScroll()
	}
})
