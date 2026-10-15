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

// Scroll-spy: highlight the nav link for the section in view
(function () {
    const links = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));
    if (!links.length) return;

    const targets = links
        .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
        .filter((t) => t.section);

    if (!targets.length) return;

    function update() {
        const offset = 120;
        let current = targets[0];

        targets.forEach((t) => {
            if (t.section.getBoundingClientRect().top - offset <= 0) {
                current = t;
            }
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            current = targets[targets.length - 1];
        }

        targets.forEach((t) => {
            t.link.classList.toggle('nav__link--active', t === current);
        });
    }

    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            update();
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
})();

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
const CONTACT_FALLBACK_EMAIL = 'fredericksrasool11@gmail.com';

if (contactForm && formStatus) {
    let statusTimer = null;

    function setFormStatus(message, isError) {
        formStatus.textContent = message;
        formStatus.style.color = isError ? '#f87171' : 'var(--accent)';
        if (statusTimer) {
            clearTimeout(statusTimer);
        }
        if (message) {
            statusTimer = setTimeout(() => {
                formStatus.textContent = '';
            }, 6000);
        }
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = (formData.get('name') || '').toString().trim();
        const email = (formData.get('email') || '').toString().trim();
        const subject = (formData.get('subject') || '').toString().trim();
        const message = (formData.get('message') || '').toString().trim();

        if (!name || !email || !subject || !message) {
            setFormStatus('Please fill in all required fields.', true);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setFormStatus('Please enter a valid email address.', true);
            return;
        }

        const endpoint = (contactForm.dataset.endpoint || '').trim();

        if (!endpoint) {
            const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
            const mailto = 'mailto:' + CONTACT_FALLBACK_EMAIL +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
            window.location.href = mailto;
            setFormStatus('Opening your email app to send the message...', false);
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalLabel = submitBtn ? submitBtn.textContent : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
        setFormStatus('', false);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }

            contactForm.reset();
            setFormStatus('Thanks! Your message has been sent.', false);
        } catch (err) {
            setFormStatus('Sorry, something went wrong. Please email ' + CONTACT_FALLBACK_EMAIL + ' directly.', true);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalLabel;
            }
        }
    });
}

// Add visible class for back-to-top dynamically
const style = document.createElement('style');
style.textContent = '.back-to-top { opacity: 0; visibility: hidden; transition: opacity 160ms ease, visibility 160ms ease, transform 160ms ease; } .back-to-top.visible { opacity: 1; visibility: visible; }';
document.head.appendChild(style);

// Theme toggle (light / dark)
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const icon = toggle.querySelector('i');

    function render() {
        const isLight = root.getAttribute('data-theme') === 'light';
        toggle.setAttribute('aria-pressed', String(isLight));
        if (icon) {
            icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        }
    }

    toggle.addEventListener('click', () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        if (isLight) {
            root.removeAttribute('data-theme');
            try { localStorage.setItem('rf-theme', 'dark'); } catch (e) {}
        } else {
            root.setAttribute('data-theme', 'light');
            try { localStorage.setItem('rf-theme', 'light'); } catch (e) {}
        }
        render();
    });

    render();
})();

// Profile photo flip
(function () {
    const avatar = document.getElementById('avatarFlip');
    if (!avatar) return;
    function toggleFlip() {
        const flipped = avatar.classList.toggle('is-flipped');
        avatar.setAttribute('aria-pressed', String(flipped));
    }
    avatar.addEventListener('click', toggleFlip);
    avatar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            toggleFlip();
        }
    });
})();

// Shooting-star background
(function () {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let stars = [];
    let shooters = [];
    let last = 0;
    let nextShot = 1200;
    let raf = null;

    function isLight() {
        return document.documentElement.getAttribute('data-theme') === 'light';
    }

    function rgb() {
        return isLight() ? '17,17,17' : '255,255,255';
    }

    function build() {
        const count = Math.max(36, Math.min(Math.round((w * h) / 9000), 200));
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.3 + 0.3,
                a: Math.random() * 0.4 + 0.25,
                t: Math.random() * Math.PI * 2,
                s: Math.random() * 0.0012 + 0.0004
            });
        }
    }

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        build();
        if (reduce) draw(0);
    }

    function spawn() {
        const fromLeft = Math.random() > 0.5;
        const speed = Math.random() * 5 + 6;
        const angle = (Math.random() * 18 + 24) * Math.PI / 180;
        shooters.push({
            x: fromLeft ? Math.random() * w * 0.4 : w - Math.random() * w * 0.4,
            y: Math.random() * h * 0.45,
            vx: Math.cos(angle) * speed * (fromLeft ? 1 : -1),
            vy: Math.sin(angle) * speed,
            len: Math.random() * 90 + 90,
            life: 1
        });
    }

    function draw(ts) {
        ctx.clearRect(0, 0, w, h);
        const c = rgb();
        for (let i = 0; i < stars.length; i++) {
            const st = stars[i];
            let a = st.a + Math.sin(ts * st.s + st.t) * 0.25;
            if (a < 0) a = 0;
            ctx.beginPath();
            ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + c + ',' + a.toFixed(3) + ')';
            ctx.fill();
        }
        for (let j = shooters.length - 1; j >= 0; j--) {
            const sh = shooters[j];
            sh.x += sh.vx;
            sh.y += sh.vy;
            sh.life -= 0.012;
            const tx = sh.x - sh.vx * (sh.len / 8);
            const ty = sh.y - sh.vy * (sh.len / 8);
            const grad = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
            grad.addColorStop(0, 'rgba(' + c + ',' + Math.max(sh.life, 0).toFixed(3) + ')');
            grad.addColorStop(1, 'rgba(' + c + ',0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(sh.x, sh.y);
            ctx.lineTo(tx, ty);
            ctx.stroke();
            if (sh.life <= 0 || sh.x < -160 || sh.x > w + 160 || sh.y > h + 160) {
                shooters.splice(j, 1);
            }
        }
    }

    function loop(ts) {
        if (ts - last > nextShot) {
            last = ts;
            nextShot = 2200 + Math.random() * 2600;
            spawn();
        }
        draw(ts);
        raf = requestAnimationFrame(loop);
    }

    function start() {
        if (reduce) return;
        if (raf === null) raf = requestAnimationFrame(loop);
    }

    function stop() {
        if (raf !== null) {
            cancelAnimationFrame(raf);
            raf = null;
        }
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    });

    if ('MutationObserver' in window) {
        new MutationObserver(() => {
            if (reduce || document.hidden) draw(performance.now());
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    resize();
    if (!reduce) start();
})();
