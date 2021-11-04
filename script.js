const btnPricing = document.querySelector('#pricing');
const btnContact = document.querySelector('#footer');
const btnDl = document.querySelector('#cta');

[...document.querySelectorAll('.btn--scroll-to')].forEach(function (item) {
	item.addEventListener('click', function () {
		console.log(Object(item.id));
		if (item.id == 'btnPricing') {
			btnPricing.scrollIntoView({ behavior: 'smooth' });
		} else if (item.id == 'btnContact') {
			btnContact.scrollIntoView({ behavior: 'smooth' });
		} else if (item.id == 'btnDl') {
			btnDl.scrollIntoView({ behavior: 'smooth' });
		}
	});
});
