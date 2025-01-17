// Effet bienvenue
const text = "Bienvenue sur mon Portfolio";
let index = 0;

function typeEffect() {
    document.getElementById("typewriter").innerText = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);


// Effet sur mon blase
const glitch = document.getElementById("glitch");

glitch.innerHTML = glitch.textContent
    .split("")
    .map((char, i) => `<span class="glitch-span" style="animation-delay:${i * 50}ms">${char}</span>`)
    .join("");

//curseur
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX - 10}px`;  
    cursor.style.top = `${e.clientY - 10}px`;
});


