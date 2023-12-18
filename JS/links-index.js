const scrollToLearnMore = () => {
	const learnMoreSection = document.getElementById('learnMoreSection')

	if (learnMoreSection) {
		learnMoreSection.scrollIntoView({ behavior: 'smooth' })
	}
}

const scrollToShopNow = () => {
	const shopNowSection = document.getElementById('shopNowSection')

	if (shopNowSection) {
		shopNowSection.scrollIntoView({ behavior: 'smooth' })
	}
}

const scrollToHeader = () => {
	const headerSection = document.getElementById('headerSection')

	if (headerSection) {
		headerSection.scrollIntoView({ behavior: 'smooth' })
	}
}
