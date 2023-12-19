const validateEmail = () => {
	const emailInput = document.getElementById('email')
	const email = emailInput.value
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (emailRegex.test(email)) {
		showDialog('Thank you! <br> We will contact you shortly.')
		emailInput.value = ''
		return false
	} else {
		return true
	}
}

const showDialog = message => {
	const dialogOverlay = document.getElementById('dialogOverlay')
	const dialogBox = document.getElementById('dialogBox')
	const dialogMessage = document.getElementById('dialogMessage')

	dialogMessage.innerHTML = message
	dialogOverlay.style.display = 'block'

	setTimeout(() => {
		dialogBox.style.opacity = '1'
		dialogBox.style.transform = 'translate(-50%, -50%) scale(1)'
	}, 10)
}

const closeDialog = () => {
	const dialogOverlay = document.getElementById('dialogOverlay')
	const dialogBox = document.getElementById('dialogBox')

	dialogBox.style.opacity = '0'
	dialogBox.style.transform = 'translate(-50%, -50%) scale(0.7)'

	setTimeout(() => {
		dialogOverlay.style.display = 'none'
	}, 500)
}
