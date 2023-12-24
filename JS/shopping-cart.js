let cartCount = 0
let cartItems = []

window.onload = function () {
	const storedCart = localStorage.getItem('cart')
	if (storedCart) {
		cartItems = JSON.parse(storedCart)
		cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
	}
	document.getElementById('cart-count').innerText = cartCount
	updateCart()
}

function toggleCart() {
	const cartContainer = document.getElementById('cart-container')
	const body = document.body

	if (cartContainer.style.display === 'block') {
		cartContainer.style.display = 'none'
		body.classList.remove('cart-opened')
	} else {
		cartContainer.style.display = 'block'
		body.classList.add('cart-opened')
	}
}

function openModal(message, error) {
	const modal = document.getElementById('modal')
	const modalContent = document.getElementById('modal-content')

	modalContent.innerHTML = ''

	if (error) {
		modalContent.innerHTML = `
            <p>${message}</p>
            <p>Error: ${error}</p>
            <button id="okButton" onclick="closeModal()">OK</button>
        `
	} else {
		modalContent.innerHTML = `
            <p>${message}</p>
            <button id="okButton" onclick="closeModal()">OK</button>
        `
	}

	modal.style.display = 'block'
}

function closeModal() {
	const modal = document.getElementById('modal')
	modal.style.display = 'none'
}

function addToCart(productName, productPrice, productImage) {
	const existingItem = cartItems.find(item => item.name === productName)

	if (existingItem) {
		existingItem.quantity++
	} else {
		cartItems.push({
			name: productName,
			price: parseFloat(productPrice),
			image: productImage,
			quantity: 1,
		})
	}

	cartCount++
	document.getElementById('cart-count').innerText = cartCount

	updateCart()
	openModal('Product has been added to your cart.')
}

function updateCart() {
	const cartItemsList = document.getElementById('cart-items')
	const totalElem = document.getElementById('total-price')
	let totalPrice = 0

	cartItemsList.innerHTML = ''

	cartItems.forEach(item => {
		const listItem = document.createElement('li')
		const itemContent = document.createElement('div')

		const productImageElem = document.createElement('img')
		productImageElem.src = item.image
		productImageElem.alt = 'Product Image'

		const productNameElem = document.createElement('p')
		productNameElem.innerText = item.name

		const productPriceElem = document.createElement('p')
		productPriceElem.innerText = `${item.price.toFixed(2)}USD`

		const quantityElem = document.createElement('span')
		quantityElem.innerText = `Quantity: ${item.quantity}`

		const increaseButton = document.createElement('button')
		increaseButton.innerText = '+'
		increaseButton.addEventListener('click', () => increaseQuantity(item.name))

		const decreaseButton = document.createElement('button')
		decreaseButton.innerText = '-'
		decreaseButton.addEventListener('click', () => decreaseQuantity(item.name))

		const removeButton = document.createElement('button')
		removeButton.innerText = 'Remove'
		removeButton.addEventListener('click', () => removeItem(item.name))

		itemContent.appendChild(productImageElem)
		itemContent.appendChild(productNameElem)
		itemContent.appendChild(productPriceElem)
		itemContent.appendChild(quantityElem)
		itemContent.appendChild(increaseButton)
		itemContent.appendChild(decreaseButton)
		itemContent.appendChild(removeButton)

		listItem.appendChild(itemContent)
		cartItemsList.appendChild(listItem)

		totalPrice += item.price * item.quantity
	})

	totalElem.innerText = `Total: ${totalPrice.toFixed(2)}USD`

	localStorage.setItem('cart', JSON.stringify(cartItems))
}

function increaseQuantity(productName) {
	const item = cartItems.find(item => item.name === productName)
	if (item) {
		item.quantity++
		updateCart()
	}
}

function decreaseQuantity(productName) {
	const item = cartItems.find(item => item.name === productName)
	if (item && item.quantity > 1) {
		item.quantity--
		updateCart()
	}
}

function removeItem(productName) {
	const removedItem = cartItems.find(item => item.name === productName)

	if (removedItem) {
		cartCount -= Math.min(removedItem.quantity, cartCount)
		cartItems = cartItems.filter(item => item.name !== productName)
		document.getElementById('cart-count').innerText = cartCount
		updateCart()
		openModal('The item has been removed from the cart.')
	}
}

function validateForm() {
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const phone = document.getElementById('phone').value

	if (!name || !email || !phone) {
		openModal('Please fill in all required fields.')
		return false
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		openModal('Please enter a valid e-mail address.')
		return false
	}

	return true
}

function validateName() {
	const inputElement = document.getElementById('name')
	inputElement.value = inputElement.value.replace(/[0-9]/g, '')
}

function validatePhone() {
	const inputElement = document.getElementById('phone')
	inputElement.value = inputElement.value.replace(/\D/g, '')
}

function checkout(event) {
	event.preventDefault()

	if (cartItems.length === 0) {
		openModal(
			'Cart is empty. Please add items to your cart before placing your order.'
		)
		return
	}

	if (!validateForm()) {
		return
	}

	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const phone = document.getElementById('phone').value
	const message = document.getElementById('message').value

	const order = {
		name: name,
		email: email,
		phone: phone,
		message: message,
		items: cartItems,
	}

	order.timestamp = new Date()

	fetch('http://127.0.0.1:3000/checkout', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(order),
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then(data => {
			cartCount = 0
			document.getElementById('cart-count').innerText = cartCount
			cartItems = []
			updateCart()
			toggleCart()
			openModal(data.message)
		})
		.catch(error => {
			console.error('Error during checkout:', error)
			openModal('There was an error when saving the order.')
		})
}
