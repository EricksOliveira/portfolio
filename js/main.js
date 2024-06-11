/* Toggle Icon Navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Scroll Section Active Link */

let sections = document.querySelectorAll('section');
let mobileNav = document.querySelector('header nav a');

    window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
        mobileNav.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        });
        const navLink = mobileNav.querySelector(`[href*='#${id}']`);
        if (navLink) {
            navLink.classList.add('active');
        }
        }
    });
 

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove Toggle Icon and Navbar */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.home-conent, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* Typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle light mode
function toggleLightMode() {
  document.body.classList.toggle("light");
}

// Load dark or light mode
function loadTheme() {
  const lightMode = localStorage.getItem("light");

  if (lightMode) {
    toggleLightMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleLightMode();

  // Save or remove light mode from localStorage
  localStorage.removeItem("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("light", 1);
  }
});