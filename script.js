document.addEventListener("DOMContentLoaded", () => {
    // Texto digitando animado
    const words = ["Evangelizar", "Acolher", "Mostrar o amor de Cristo" , "Sim"];
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

    // Menu oculto
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

    window.onscroll = () => {
        let scrollY = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (scrollY >= offset && scrollY < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                    if (targetLink) {
                        targetLink.classList.add('active');
                    }
                });
            }
        });

        // Fecha o menu ao rolar a página (opcional)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});
