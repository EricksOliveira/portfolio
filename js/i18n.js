/* =========================================================
   Tradução do portfólio (PT-BR, EN, ES)

   Como funciona:
   - O português é o idioma padrão e fica escrito no próprio index.html.
     Para mudar um texto em português, edite o index.html.
   - Inglês e espanhol ficam aqui embaixo. Cada chave corresponde ao
     atributo data-i18n (texto) ou data-i18n-attr (atributos como alt
     e aria-label) de um elemento do HTML.
   - Para traduzir um texto novo: coloque data-i18n="minha.chave" no
     elemento e adicione "minha.chave" em "en" e "es".
   ========================================================= */

const DEFAULT_LANG = 'pt-BR';
const SUPPORTED_LANGS = ['pt-BR', 'en', 'es'];

// Nome do idioma que aparece no e-mail recebido pelo formulário
const LANG_NAMES_FOR_EMAIL = {
    'pt-BR': 'Português',
    en: 'Inglês',
    es: 'Espanhol',
};

const translations = {
    // Textos que só existem no JavaScript (o restante do PT vem do HTML)
    'pt-BR': {
        'ui.menuOpen': 'Abrir menu',
        'ui.menuClose': 'Fechar menu',
    },

    en: {
        'meta.title': 'Ericks Oliveira | Full Stack Developer',
        'meta.description': 'Portfolio of Ericks Oliveira, Junior Full Stack Developer. Web projects with JavaScript, React, Node.js and PHP, plus open source contributions in C++.',

        'ui.skip': 'Skip to content',
        'ui.logo': 'Ericks Oliveira, back to top',
        'ui.nav': 'Main navigation',
        'ui.language': 'Language',
        'ui.theme': 'Toggle light and dark theme',
        'ui.menuOpen': 'Open menu',
        'ui.menuClose': 'Close menu',
        'ui.social': 'Social links and contact',
        'ui.email': 'Email',
        'ui.tags': 'Technologies',
        'ui.top': 'Back to top',

        'nav.about': 'About',
        'nav.stack': 'Stack',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        'hero.hello': "Hi, I'm",
        'hero.role': 'Junior Full Stack Developer',
        'hero.pitch': 'I build web applications with JavaScript, React, Node.js and PHP. I bring 8 years of experience as an IT technician, a background in customer service, and contributions to an open source AI bot project written in C++.',
        'hero.ctaProjects': 'View projects',
        'hero.ctaCv': 'Download CV',

        'terminal.path': '~/career',
        'terminal.c1': 'feat: full stack dev (JS, React, Node, PHP)',
        'terminal.c2': 'feat: open source on mod-playerbots',
        'terminal.c3': 'feat: customer service',
        'terminal.c4': 'feat: cashier',
        'terminal.c5': 'feat: WoW modding in C++ and Lua',
        'terminal.c6': 'init: IT technician (8 years)',
        'terminal.caption': 'My career path, from the most recent role to the first.',

        'about.photoAlt': 'Photo of Ericks Oliveira',
        'about.title': 'About me',
        'about.p1': 'My relationship with technology goes way back: I spent 8 years as an IT technician, solving problems and supporting users day to day.',
        'about.p2': 'Programming became a passion when I started modding World of Warcraft servers. I wrote scripts in C++ and Lua and built account registration websites with HTML, CSS, JavaScript and PHP, connected to a MySQL database.',
        'about.p3': 'After working in retail and customer service, I decided to dedicate myself fully to development. Today I contribute to mod-playerbots, an open source module that uses AI to simulate real players, and I keep building web projects.',
        'about.s1Title': 'Technical foundation',
        'about.s1Text': 'Years of diagnosing and solving problems gave me a methodical approach to debugging code.',
        'about.s2Title': 'User focus',
        'about.s2Text': 'Customer service taught me to understand the need before writing the solution.',
        'about.s3Title': 'Community code',
        'about.s3Text': 'I contribute to a community-maintained open source project written in C++.',

        'stack.title': 'Stack',
        'stack.lead': 'Technologies I use in my projects.',
        'stack.front': 'Front-end',
        'stack.back': 'Back-end',
        'stack.data': 'Data and cloud',
        'stack.tools': 'Tools',
        'stack.ai': 'AI for game bots',

        'projects.title': 'Projects',
        'projects.lead': 'From open source C++ to web applications.',
        'projects.badge': 'Open source contribution',
        'projects.p1Alt': 'Screenshot of the mod-playerbots project',
        'projects.p1Text': 'An AzerothCore module that adds bots behaving like real players to a World of Warcraft server. It lets new players complete the game content without depending on other people being online.',
        'projects.p2Alt': 'Screenshot of an AzerothCore server',
        'projects.p2Title': 'AzerothCore Server',
        'projects.p2Text': 'C++ and Lua modifications for the open source World of Warcraft emulator, plus an account registration website in PHP connected to a MySQL database.',
        'projects.p3Alt': 'Screenshot of the weather forecast app',
        'projects.p3Title': 'Weather Forecast',
        'projects.p3Text': 'A web app that consumes a weather API and displays the forecast.',
        'projects.p4Alt': 'Screenshot of the GoSafe startup dashboard',
        'projects.p4Title': 'GoSafe Dashboard',
        'projects.p4Text': 'A dashboard built for the startup GoSafe with Bootstrap 5.',
        'projects.p5Alt': 'Screenshot of the digital clock',
        'projects.p5Title': 'Digital Clock',
        'projects.p5Text': 'A digital clock with an interface built in HTML and CSS.',
        'projects.more': 'More projects on my',

        'tag.ai': 'AI',
        'tag.api': 'REST API',

        'btn.repo': 'View repository',
        'btn.azeroth': 'Explore AzerothCore',
        'btn.code': 'View code',
        'btn.demo': 'Watch demo',

        'contact.title': "Let's talk",
        'contact.text': "I'm looking for opportunities as a developer. Send me a message through the form or reach me directly on one of these channels.",

        'form.name': 'Name',
        'form.email': 'Email',
        'form.company': 'Company',
        'form.optional': '(optional)',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.submit': 'Send message',
    },

    es: {
        'meta.title': 'Ericks Oliveira | Desarrollador Full Stack',
        'meta.description': 'Portafolio de Ericks Oliveira, desarrollador Full Stack Junior. Proyectos web con JavaScript, React, Node.js y PHP, y colaboración open source en C++.',

        'ui.skip': 'Saltar al contenido',
        'ui.logo': 'Ericks Oliveira, volver al inicio',
        'ui.nav': 'Navegación principal',
        'ui.language': 'Idioma',
        'ui.theme': 'Cambiar entre tema claro y oscuro',
        'ui.menuOpen': 'Abrir menú',
        'ui.menuClose': 'Cerrar menú',
        'ui.social': 'Redes y contacto',
        'ui.email': 'Correo electrónico',
        'ui.tags': 'Tecnologías',
        'ui.top': 'Volver arriba',

        'nav.about': 'Sobre mí',
        'nav.stack': 'Stack',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        'hero.hello': 'Hola, soy',
        'hero.role': 'Desarrollador Full Stack Junior',
        'hero.pitch': 'Desarrollo aplicaciones web con JavaScript, React, Node.js y PHP. Aporto 8 años de experiencia como técnico informático, trayectoria en atención al cliente y colaboración en un proyecto open source de bots con IA escrito en C++.',
        'hero.ctaProjects': 'Ver proyectos',
        'hero.ctaCv': 'Descargar CV',

        'terminal.path': '~/carrera',
        'terminal.c1': 'feat: dev full stack (JS, React, Node, PHP)',
        'terminal.c2': 'feat: open source en mod-playerbots',
        'terminal.c3': 'feat: atención al cliente',
        'terminal.c4': 'feat: cajero',
        'terminal.c5': 'feat: modding de WoW en C++ y Lua',
        'terminal.c6': 'init: técnico informático (8 años)',
        'terminal.caption': 'Mi trayectoria, del puesto más reciente al primero.',

        'about.photoAlt': 'Foto de Ericks Oliveira',
        'about.title': 'Sobre mí',
        'about.p1': 'Mi relación con la tecnología viene de lejos: trabajé 8 años como técnico informático, resolviendo problemas y dando soporte a usuarios en el día a día.',
        'about.p2': 'La programación se convirtió en mi pasión cuando empecé a modificar servidores de World of Warcraft. Escribí scripts en C++ y Lua y creé sitios de registro de cuentas con HTML, CSS, JavaScript y PHP, conectados a una base de datos MySQL.',
        'about.p3': 'Después de trabajar en el comercio y en la atención al cliente, decidí dedicarme por completo al desarrollo. Hoy colaboro con mod-playerbots, un módulo open source que usa IA para simular jugadores reales, y sigo construyendo proyectos web.',
        'about.s1Title': 'Base técnica',
        'about.s1Text': 'Años diagnosticando y resolviendo problemas me dieron método para depurar código.',
        'about.s2Title': 'Enfoque en el usuario',
        'about.s2Text': 'La atención al cliente me enseñó a entender la necesidad antes de escribir la solución.',
        'about.s3Title': 'Código en comunidad',
        'about.s3Text': 'Colaboro en un proyecto open source en C++ mantenido por la comunidad.',

        'stack.title': 'Stack',
        'stack.lead': 'Tecnologías que uso en mis proyectos.',
        'stack.front': 'Front-end',
        'stack.back': 'Back-end',
        'stack.data': 'Datos y nube',
        'stack.tools': 'Herramientas',
        'stack.ai': 'IA aplicada a bots',

        'projects.title': 'Proyectos',
        'projects.lead': 'Del open source en C++ a las aplicaciones web.',
        'projects.badge': 'Colaboración open source',
        'projects.p1Alt': 'Captura del proyecto mod-playerbots',
        'projects.p1Text': 'Módulo de AzerothCore que añade a un servidor de World of Warcraft bots que se comportan como jugadores reales. Con él, los nuevos jugadores pueden completar el contenido del juego sin depender de otras personas conectadas.',
        'projects.p2Alt': 'Captura de un servidor AzerothCore',
        'projects.p2Title': 'Servidor AzerothCore',
        'projects.p2Text': 'Modificaciones en C++ y Lua para el emulador open source de World of Warcraft y un sitio de registro de cuentas en PHP conectado a una base de datos MySQL.',
        'projects.p3Alt': 'Captura de la aplicación del pronóstico del tiempo',
        'projects.p3Title': 'Pronóstico del Tiempo',
        'projects.p3Text': 'Aplicación web que consume una API del clima y muestra el pronóstico.',
        'projects.p4Alt': 'Captura del dashboard de la startup GoSafe',
        'projects.p4Title': 'Dashboard GoSafe',
        'projects.p4Text': 'Dashboard creado para la startup GoSafe con Bootstrap 5.',
        'projects.p5Alt': 'Captura del reloj digital',
        'projects.p5Title': 'Reloj Digital',
        'projects.p5Text': 'Reloj digital con interfaz construida en HTML y CSS.',
        'projects.more': 'Más proyectos en mi',

        'tag.ai': 'IA',
        'tag.api': 'API REST',

        'btn.repo': 'Ver repositorio',
        'btn.azeroth': 'Conocer AzerothCore',
        'btn.code': 'Ver código',
        'btn.demo': 'Ver demostración',

        'contact.title': '¿Hablamos?',
        'contact.text': 'Estoy buscando oportunidades como desarrollador. Envíame un mensaje por el formulario o contáctame directamente por uno de estos canales.',

        'form.name': 'Nombre',
        'form.email': 'Correo electrónico',
        'form.company': 'Empresa',
        'form.optional': '(opcional)',
        'form.subject': 'Asunto',
        'form.message': 'Mensaje',
        'form.submit': 'Enviar mensaje',
    },
};

let currentLang = DEFAULT_LANG;

const clean = (text) => text.replace(/\s+/g, ' ').trim();

// Lê os textos em português direto do HTML, antes de qualquer troca
function capturePortuguese() {
    const pt = translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (!(key in pt)) pt[key] = clean(el.textContent);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        el.dataset.i18nAttr.split(';').forEach((pair) => {
            const [attr, key] = pair.split(':').map((part) => part.trim());
            if (!(key in pt)) pt[key] = el.getAttribute(attr) || '';
        });
    });
}

// Devolve o texto da chave no idioma atual (ou em português, se faltar)
function t(key) {
    const dict = translations[currentLang] || {};
    if (key in dict) return dict[key];
    if (currentLang !== DEFAULT_LANG) console.warn(`[i18n] Falta tradução "${key}" em "${currentLang}"`);
    return translations[DEFAULT_LANG][key] ?? key;
}

function applyLanguage(lang) {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        el.dataset.i18nAttr.split(';').forEach((pair) => {
            const [attr, key] = pair.split(':').map((part) => part.trim());
            el.setAttribute(attr, t(key));
        });
    });

    // Botões do seletor
    document.querySelectorAll('.lang-switch button').forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });

    // Rótulo do menu mobile acompanha o estado aberto/fechado
    const menuBtn = document.getElementById('menu-toggle');
    if (menuBtn) {
        const open = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-label', t(open ? 'ui.menuClose' : 'ui.menuOpen'));
    }

    // Informa no e-mail do formulário o idioma de quem escreveu
    const formLang = document.getElementById('form-language');
    if (formLang) formLang.value = LANG_NAMES_FOR_EMAIL[currentLang];

    try {
        localStorage.setItem('lang', currentLang);
    } catch (e) {
        // Sem acesso ao armazenamento: o idioma só não fica salvo
    }
}

// Inicialização
capturePortuguese();

let savedLang = null;
try {
    savedLang = localStorage.getItem('lang');
} catch (e) {}

if (savedLang && savedLang !== DEFAULT_LANG) applyLanguage(savedLang);

document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

window.t = t;
