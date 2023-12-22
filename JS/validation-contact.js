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

const validateEmailInput = input => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailRegex.test(input.value)) {
		input.setCustomValidity('Please enter a valid email address.')
	} else {
		input.setCustomValidity('')
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

const validateForm = () => {
	const nameInput = document.querySelector(
		'.form-subscribe-contact input[name="name"]'
	)
	const emailInput = document.querySelector(
		'.form-subscribe-contact input[name="email"]'
	)
	const messageInput = document.querySelector(
		'.form-subscribe-contact textarea'
	)

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(emailInput.value)) {
		return false
	}

	showDialog('Thank you! <br> we hope for a quick response.')
	nameInput.value = ''
	emailInput.value = ''
	messageInput.value = ''

	return false
}
