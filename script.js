const text = "Welcome to SantsCoder Labs_";
const element = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 88); //This is Speed
    }
}

typeEffect();