const nextButtons = document.querySelectorAll('.button');
const stepIndicators = document.querySelectorAll('.step__indicator');
const forms = document.querySelectorAll('.form-step');
const backButtons = document.querySelectorAll('.back-button');

let step = 1;

for (const button of nextButtons) {
	button.addEventListener('click', nextStep);
}

function nextStep(event) {
	event.preventDefault();

	if (!stepIndicators) return;
	if (step < 4) {
		step++;
	}
	for (const indicator of stepIndicators) {
		indicator.classList.remove('active');
	}

	let indicatorElements = [];
	for (let indicator of stepIndicators) {
		if (indicator.dataset.step == step) {
			indicatorElements.push(indicator);
		}
	}

	if (indicatorElements.length) {
		for (const element of indicatorElements) {
			element.classList.add('active');
			console.log('element: ', element);
		}
	}

	updateForm();
}

function updateForm() {
	for (const form of forms) {
		form.classList.add('u-hidden');
	}
	// for (const button of backButtons) {
	// 	if (step === 1 || step === 5) {
	// 		button.classList.add('u-hidden');
	// 	}
	// }
	switch (step) {
		case 1: {
			const f = document.querySelector('.personal-info-form');
			if (!f) return;
			f.classList.remove('u-hidden');
			document.querySelector('.title').textContent = 'Personal Info';
			document.querySelector('.sub-title').textContent = 'Please provide your name, email address, and phone number.';
			break;
		}
		case 2: {
			const f = document.querySelector('.select-plan-form');
			if (!f) return;
			f.classList.remove('u-hidden');
			document.querySelector('.title').textContent = 'Select your plan';
			document.querySelector('.sub-title').textContent = 'You have the option of monthly or yearly billing.';
			break;
		}
	}
}

updateForm();
