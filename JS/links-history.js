const scrollToHeader = () => {
	const headerSection = document.getElementById('headerSection')

	if (headerSection) {
		headerSection.scrollIntoView({ behavior: 'smooth' })
	}
}
