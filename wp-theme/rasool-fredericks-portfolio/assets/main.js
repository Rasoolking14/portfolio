// Portfolio - Rasool Fredericks
// Interactive features: mobile nav, smooth scroll, back-to-top, contact form handling

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function toggleNav() {
    const isOpen = navMenu.classList.toggle('open');
    if (navToggle) {
        navToggle.setAttribute('aria-expanded', String(isOpen));
    }
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleNav);
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Close mobile menu on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    }
});

// Back to top
function handleScroll() {
    if (window.scrollY > 320) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Contact form
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = (formData.get('name') || '').toString().trim();
        const email = (formData.get('email') || '').toString().trim();
        const subject = (formData.get('subject') || '').toString().trim();
        const message = (formData.get('message') || '').toString().trim();

        if (!name || !email || !subject || !message) {
            formStatus.textContent = 'Please fill in all required fields.';
            formStatus.style.color = '#f87171';
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = '#f87171';
            return;
        }

        contactForm.reset();
        formStatus.textContent = 'Thanks! Your message has been sent.';
        formStatus.style.color = '#22d3b5';
        setTimeout(() => {
            formStatus.textContent = '';
        }, 4000);
    });
}

// Add visible class for back-to-top dynamically
const style = document.createElement('style');
style.textContent = '.back-to-top { opacity: 0; visibility: hidden; transition: opacity 160ms ease, visibility 160ms ease, transform 160ms ease; } .back-to-top.visible { opacity: 1; visibility: visible; }';
document.head.appendChild(style);
