document.addEventListener("DOMContentLoaded", () => {
    const words = ["Evangelizar", "Acolher", "Mostrar o amor de Cristo"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let speed = 200;
    const element = document.getElementById("text");

    function type() {
        const fullText = words[currentIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        element.innerHTML = currentText;

        if (!isDeleting && currentText === fullText) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            speed = 500;
        } else {
            speed = isDeleting ? 100 : 200;
        }

        setTimeout(type, speed);
    }

    type();
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}






