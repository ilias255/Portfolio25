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


// Effet bienvenue + blase
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



//effet particles js
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 140, density: { enable: true, value_area: 700 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});


// Menu Burger
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Vérifie l'état du menu au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const isMenuOpen = localStorage.getItem('menuOpen') === 'true'; // Récupère l'état du menu
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden'); // Ouvre le menu
    } else {
        mobileMenu.classList.add('hidden'); // Ferme le menu
    }
});

// Lorsque l'utilisateur clique sur le burger, on affiche/masque le menu mobile
burgerMenu.addEventListener('click', () => {
    const isMenuCurrentlyOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden'); // Affiche ou cache le menu mobile

    // Enregistre l'état du menu dans le localStorage
    localStorage.setItem('menuOpen', !isMenuCurrentlyOpen);
});

// Fermer le menu burger lorsque l'utilisateur clique sur un lien
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Cache le menu
        localStorage.setItem('menuOpen', 'false'); // Mémorise que le menu est fermé
    });
});
