// ===== Tema claro / escuro =====
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {
        // Navegador sem acesso ao armazenamento: o tema só não fica salvo
    }
});

// ===== Menu mobile =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

function setMenu(open) {
    navbar.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', window.t(open ? 'ui.menuClose' : 'ui.menuOpen'));
    menuToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

menuToggle.addEventListener('click', () => {
    setMenu(!navbar.classList.contains('open'));
});

navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbar.classList.contains('open')) {
        setMenu(false);
        menuToggle.focus();
    }
});

// ===== Borda do cabeçalho ao rolar =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// ===== Link ativo conforme a seção visível =====
const navLinks = navbar.querySelectorAll('a');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach((section) => observer.observe(section));

// ===== Ano atual no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();
