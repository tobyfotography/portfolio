// Variables
const sendBtn = document.getElementById('sendBtn'),
	email = document.getElementById('email'),
	user = document.getElementById('name'),
	message = document.getElementById('message'),
	sendEmailForm = document.querySelector('form');



// Event Listeners

eventListeners();

function eventListeners() {
	// App Init
	document.addEventListener('DOMContentLoaded', appInit);

	// Validate the forms
	email.addEventListener('blur', validateField);
	user.addEventListener('blur', validateField);
	message.addEventListener('blur', validateField);

}


// Functions

// App Initialization
function appInit() {
	// disable the send button on load
	sendBtn.disabled = true;
}


// Validate the fields
function validateField() {
	let errors;

	// Validate the Length of the field
	validateLength(this);

	// Validate the email
	if (this.type === 'email') {
		validateEmail(this);
	}

	// Both will return errors, then check if there're any errors
	errors = document.querySelectorAll('.error');

	// Check that the inputs are not empty
	if (email.value !== '' && user.value !== '' && message.value !== '') {
		if (errors.length === 0) {
			// the button should be enabled
			sendBtn.disabled = false;
		}
	}
}


// Validate the Length of the fields
function validateLength(field) {
	if (field.value.length > 0) {
		field.style.borderColor = 'green';
		field.classList.remove('error');
	} else {
		field.style.borderColor = 'red';
		field.classList.add('error');
	}
}


// validate email (checks for @ in the value )
function validateEmail(field) {
	let emailText = field.value;
	// check if the emailText contains the @ sign
	if (emailText.indexOf('@') !== -1) {
		field.style.borderColor = 'green';
		field.classList.remove('error');
	} else {
		field.style.borderColor = 'red';
		field.classList.add('error');
	}
}