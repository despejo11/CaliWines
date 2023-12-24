const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/checkout', (req, res) => {
	try {
		const order = req.body

		order.timestamp = new Date().toLocaleString('uk-UA', {
			timeZone: 'Europe/Kiev',
		})

		let orders = []

		if (fs.existsSync('orders.json')) {
			const ordersData = fs.readFileSync('orders.json', 'utf8')

			if (ordersData.trim() !== '') {
				orders = JSON.parse(ordersData)
			}
		}

		orders.push(order)

		fs.writeFileSync('orders.json', JSON.stringify(orders, null, 2))

		res.status(200).json({
			message: 'Order successfully saved.',
		})
	} catch (error) {
		console.error('Error saving order:', error)

		res.status(500).json({
			message: 'Error saving order. Please try again later.',
		})
	}
})

const server = app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})

process.on('SIGINT', () => {
	console.log('To close the server, type "close the server"')
	process.stdin.resume()
	process.stdin.setEncoding('utf8')
	process.stdin.once('data', data => {
		const input = data.trim().toLowerCase()
		if (input === 'close the server') {
			console.log('Server closure...')
			server.close(() => {
				console.log("The server's stopped.")
				process.exit(0)
			})
		} else {
			console.log('Invalid command. The server will not be closed.')
			process.exit(1)
		}
	})
})
