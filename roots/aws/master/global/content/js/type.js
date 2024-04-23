
const typedSpan = document.getElementById("typed")

var url = 'https://raw.githubusercontent.com/vchokshi/vchokshi/main/.bashrc';
var storedText;
var newline = 0;
fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  open = document.createElement("p");
  open.setAttribute('id', 'white');
  typedSpan.appendChild(white);
  setTimeout(typeText, delayTyping_char);
}

const delayTyping_char = 100;
const delayErasing_text = 150;
const delayTyping_text = 3000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	setTimeout(typeText, delayTyping_char);
}

function eraseText() {
	if (charIndex > 0) {
		head.textContent = storedText.substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
}

window.onload = function() {
	if (storedText) setTimeout(typeText, delayTyping_text);
}
