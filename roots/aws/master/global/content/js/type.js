
const typedSpan = document.getElementById("typed")

var url = 'https://raw.githubusercontent.com/vchokshi/vchokshi/main/RESUME.md';
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
  typedSpan.appendChild(open);
  red = document.createElement("p");
  red.setAttribute('id', 'red');
  typedSpan.appendChild(red);
  blue = document.createElement("p");
  blue.setAttribute('id', 'blue');
  typedSpan.appendChild(blue);
  close = document.createElement("p");
  close.setAttribute('id', 'white');
  typedSpan.appendChild(close);
  pledge = document.createElement("p");
  pledge.setAttribute('id', 'red');
  typedSpan.appendChild(pledge);
  setTimeout(typeText, delayTyping_char);
}

const delayTyping_char = 100;
const delayErasing_text = 150;
const delayTyping_text = 3000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
    if (storedText.charAt(charIndex) == "\n") {
        newline++;
    }
    if (newline < 2) {
		open.textContent += storedText.charAt(charIndex);
		charIndex++;
	}
    else if (newline == 2) {
		red.textContent += storedText.charAt(charIndex);
		charIndex++;
    } else if (newline == 4){
		blue.textContent += storedText.charAt(charIndex);
		charIndex++;
    } else if (newline == 6){
        close.textContent += storedText.charAt(charIndex);
        charIndex++;
    } else {
        pledge.textContent += storedText.charAt(charIndex);
        charIndex++;
    }
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
