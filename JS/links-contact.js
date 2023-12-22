const scrollToFooter = () => {
	const footerJoinEnd = document.querySelector('.footer-join-end')

	if (footerJoinEnd) {
		footerJoinEnd.scrollIntoView({ behavior: 'smooth' })
	}
}
