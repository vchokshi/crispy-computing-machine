/* contact-form.js | https://github.com/Divlo/Contact-Form | Divlo | MIT License */
function serialize(form) {
	return Array.from(
		new FormData(form),
		e => e.map(encodeURIComponent).join('=')
	).join('&');
}

function ajaxRequest(method, url, data, functionResult) {
	const xmlhttp = new XMLHttpRequest();
	xmlhttp.open(method, url, true); // set true for async, false for sync request
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(data); // or null, if no parameters are passed
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			functionResult(true, xmlhttp.responseText);
		} else {
			functionResult(false, "");
		}
	}
}

function emptyElements(classToClear) {
	for (let element of classToClear) {
		element.innerHTML = "";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const contactForm = document.getElementById('contact-form');
	const buttonSend = document.getElementById('sendemail');

	if (typeof(buttonSend) != 'undefined' && buttonSend != null) {
		buttonSend.addEventListener("click", (event) => {

			event.preventDefault();
			const postdata = serialize(document.getElementById('contact-form'));

			ajaxRequest("POST", "./sendmail.php", postdata, (success, response) => {
				if (success) {
					const result = JSON.parse(response);
					if (result.isSuccess) {
						UIkit.notification("<i class='fas fa-check-circle uk-margin-small-right'></i> Your message has been sent successfully. Thank you!", {
							timeout: 3000,
							status: 'primary',
							pos: 'bottom-right'
						});
						contactForm.reset();
					} else {
						if (result.nameError) 
						document.getElementById('name').classList.add('uk-form-danger');
						document.getElementById('name').addEventListener('click', function () {
							document.getElementById('name').classList.remove('uk-form-danger')
						});

						if (result.emailError)
						document.getElementById('email').classList.add('uk-form-danger');
						document.getElementById('email').addEventListener('click', function () {
							document.getElementById('email').classList.remove('uk-form-danger')
						});

						if (result.subjectError)
						document.getElementById('subject').classList.add('uk-form-danger');
						document.getElementById('subject').addEventListener('click', function () {
							document.getElementById('subject').classList.remove('uk-form-danger')
						});

						if (result.messageError)
						document.getElementById('message').classList.add('uk-form-danger');
						document.getElementById('message').addEventListener('click', function () {
							document.getElementById('message').classList.remove('uk-form-danger')
						});
					}
				}
			})
		})
	}
});