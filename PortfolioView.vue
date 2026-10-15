<template>
  <div class="portfolio-view">
    <canvas id="starfield" class="starfield" aria-hidden="true"></canvas>
    <header class="header">
      <nav class="nav container">
        <div class="nav__logo">
          <span class="nav__logo-text">Rasool Fredericks</span>
          <span class="nav__status">
            <span class="nav__status-dot"></span>
            <span class="nav__status-text">Available for Hire</span>
          </span>
        </div>
        <div class="nav__actions">
          <button
            class="theme-toggle"
            type="button"
            aria-label="Toggle light and dark mode"
            :aria-pressed="isLight ? 'true' : 'false'"
            @click="toggleTheme"
          >
            <i :class="isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
          </button>
          <button
            ref="navToggleRef"
            class="nav__toggle"
            aria-label="Open menu"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            @click="toggleNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="nav__menu" :class="{ open: menuOpen }">
            <ul class="nav__links">
              <li v-for="link in navLinks" :key="link.href">
                <a :href="link.href" class="nav__link" :class="{ 'nav__link--active': activeSection === link.href.slice(1) }" @click="closeNav">{{ link.label }}</a>
              </li>
            </ul>
            <a href="assets/Rasool_Fredericks_Resume.pdf" target="_blank" rel="noopener" class="nav__cta">Resume / CV</a>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <h1 class="hero__headline">Front-End Developer building clean, responsive web experiences.</h1>
            <p class="hero__subheadline">Currently studying Web / Front-End Development at Life-Choices Academy, with 1.5 years of hands-on, project-based experience turning designs into polished interfaces.</p>
            <div class="hero__actions">
              <a href="#projects" class="btn btn--primary">View Work</a>
              <a href="#contact" class="btn btn--outline">Contact Me</a>
            </div>
          </div>
          <div class="hero__visual" aria-hidden="true">
            <div class="hero__scene">
              <div class="glass-card gc1">
                <div class="gc__code">
                  <span class="gc__line">const app = createApp()</span>
                  <span class="gc__line">app.mount('#app')</span>
                  <span class="gc__line gc__line--accent">{ ui: 'ready' }</span>
                </div>
              </div>
              <div class="glass-card gc2">
                <div class="gc__dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="gc__label">Components</span>
              </div>
              <div class="glass-card gc3">
                <div class="gc__bars">
                  <span></span><span></span><span></span><span></span>
                </div>
                <span class="gc__label">Responsive UI</span>
              </div>
              <div class="node n1"></div>
              <div class="node n2"></div>
              <div class="node n3"></div>
              <div class="glow g1"></div>
              <div class="glow g2"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section about" id="about">
        <div class="container about__grid">
          <div class="about__left">
            <div class="avatar" :class="{ 'is-flipped': isFlipped }" role="button" tabindex="0" :aria-pressed="isFlipped ? 'true' : 'false'" aria-label="Flip between formal and casual photo" @click="toggleFlip" @keydown.enter.prevent="toggleFlip" @keydown.space.prevent="toggleFlip">
              <div class="avatar__border"></div>
              <div class="avatar__flip">
                <div class="avatar__face avatar__face--front">
                  <img class="avatar__img" :src="profileImg" alt="Rasool Fredericks portrait" loading="lazy">
                </div>
                <div class="avatar__face avatar__face--back">
                  <img class="avatar__img" :src="profileCasualImg" alt="Rasool Fredericks casual portrait" loading="lazy" @error="$event.target.onerror = null; $event.target.src = profileImg">
                </div>
              </div>
            </div>
          </div>
          <div class="about__right">
            <h2 class="section__title">About Me</h2>
            <p class="section__lead">I'm a front-end developer with 1.5 years of hands-on experience building responsive, user-focused web interfaces. I'm currently studying Web / Front-End Development at Life-Choices Academy, where I sharpen my skills through practical, project-based coursework.</p>
            <h3 class="about__subtitle">Professional Overview</h3>
            <div class="about__cards">
              <article v-for="card in infoCards" :key="card.title" class="info-card">
                <div class="info-card__icon"><i :class="card.icon"></i></div>
                <h4 class="info-card__title">{{ card.title }}</h4>
                <p class="info-card__text">{{ card.text }}</p>
              </article>
            </div>
            </div>
          </div>
        </section>

      <section class="section experience" id="experience">
        <div class="container">
          <h2 class="section__title">Experience</h2>
          <p class="section__lead">Hands-on experience building for the web, from coursework to real projects.</p>
          <ol class="timeline">
            <li v-for="exp in experiences" :key="exp.role + exp.period" class="timeline__item">
              <div class="timeline__marker" aria-hidden="true"></div>
              <div class="timeline__content">
                <div class="timeline__head">
                  <h3 class="timeline__role">{{ exp.role }}</h3>
                  <span class="timeline__period">{{ exp.period }}</span>
                </div>
                <ul class="timeline__points">
                  <li v-for="point in exp.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="section skills" id="skills">
        <div class="container">
          <h2 class="section__title">Skills</h2>
          <div class="skills__grid">
            <article v-for="group in skillGroups" :key="group.title" class="skill-card">
              <h3 class="skill-card__title">{{ group.title }}</h3>
              <div class="skill-card__items">
                <span v-for="item in group.items" :key="item.label" class="skill-pill">
                  <i :class="item.icon"></i> {{ item.label }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section projects" id="projects">
        <div class="container">
          <h2 class="section__title">Projects</h2>
          <div class="projects__grid">
            <article v-for="project in projects" :key="project.title" class="project-card">
              <div class="project-card__thumb" v-html="project.thumb"></div>
              <div class="project-card__body">
                <span class="project-card__tag">{{ project.tag }}</span>
                <h3 class="project-card__title">{{ project.title }}</h3>
                <p class="project-card__desc">{{ project.desc }}</p>
                <div class="project-card__stack">
                  <span v-for="tech in project.stack" :key="tech" class="stack-pill">{{ tech }}</span>
                </div>
                <div class="project-card__actions">
                  <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" class="proj-link" :aria-label="`${project.title} live site`"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>
                  <a :href="project.repo" target="_blank" rel="noopener" class="proj-link" :aria-label="`${project.title} GitHub repo`"><i class="fab fa-github"></i> GitHub Repo</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section certs" id="education">
        <div class="container">
          <h2 class="section__title">Education</h2>
          <div class="certs__grid">
            <article v-for="cert in certifications" :key="cert.title" class="cert-card">
              <div class="cert-card__icon"><i :class="cert.icon"></i></div>
              <div class="cert-card__body">
                <h3 class="cert-card__title">{{ cert.title }}</h3>
                <p class="cert-card__meta">{{ cert.meta }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section contact" id="contact">
        <div class="container contact__grid">
          <div class="contact__info">
            <h2 class="section__title">Contact</h2>
            <p class="section__lead">Have a project in mind? Get in touch.</p>
            <ul class="contact__list">
              <li><i class="fa-solid fa-envelope"></i> <a href="mailto:fredericksrasool11@gmail.com">fredericksrasool11@gmail.com</a></li>
              <li><i class="fa-solid fa-location-dot"></i> Remote / Worldwide</li>
              <li><i class="fa-solid fa-phone"></i> +27 67 802 0783</li>
            </ul>
            <div class="contact__socials">
              <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noopener" :aria-label="social.label"><i :class="social.icon"></i></a>
            </div>
          </div>
          <div class="contact__form-wrap">
            <form class="contact-form" novalidate @submit.prevent="submitForm">
              <div class="form-row">
                <label class="form-label" for="name">Name</label>
                <input id="name" v-model="form.name" class="form-input" type="text" name="name" autocomplete="name" required>
              </div>
              <div class="form-row">
                <label class="form-label" for="email">Email</label>
                <input id="email" v-model="form.email" class="form-input" type="email" name="email" autocomplete="email" required>
              </div>
              <div class="form-row">
                <label class="form-label" for="subject">Subject</label>
                <input id="subject" v-model="form.subject" class="form-input" type="text" name="subject" required>
              </div>
              <div class="form-row">
                <label class="form-label" for="message">Message</label>
                <textarea id="message" v-model="form.message" class="form-textarea" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--full" :disabled="isSending">{{ isSending ? 'Sending...' : 'Send Message' }}</button>
              <p class="form-status" aria-live="polite" :style="{ color: formStatusIsError ? '#f87171' : 'var(--accent)' }">{{ formStatus }}</p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__copy">&copy; 2026 Rasool Fredericks. All rights reserved.</p>
        <p class="footer__copy" style="opacity:0.7">Last updated: Oct 15, 2026</p>
        <button ref="backToTopRef" class="back-to-top" :class="{ visible: showBackToTop }" aria-label="Back to top" @click="scrollToTop"><i class="fa-solid fa-arrow-up"></i></button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const navToggleRef = ref(null);
const backToTopRef = ref(null);

const menuOpen = ref(false);
const showBackToTop = ref(false);
const activeSection = ref('');

const sectionIds = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];
const isLight = ref(false);
const isFlipped = ref(false);
const profileImg = 'assets/img/profile.png';
const profileCasualImg = 'assets/img/profile-casual.png';

const form = reactive({ name: '', email: '', subject: '', message: '' });
const formStatus = ref('');
const formStatusIsError = ref(false);
const isSending = ref(false);

const CONTACT_ENDPOINT = '';
const CONTACT_FALLBACK_EMAIL = 'fredericksrasool11@gmail.com';
let statusTimer = null;
let starfieldCleanup = null;

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const infoCards = [
  { icon: 'fa-solid fa-bolt', title: '1.5 Years Hands-On', text: 'Building responsive interfaces through project-based work.' },
  { icon: 'fa-solid fa-layer-group', title: 'Front-End Focus', text: 'HTML, CSS, JavaScript, React & Vue.js.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Web Development Student', text: 'Studying Web / Front-End Development at Life-Choices Academy.' },
];

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { icon: 'fab fa-html5', label: 'HTML5' },
      { icon: 'fab fa-css3-alt', label: 'CSS3' },
      { icon: 'fab fa-js', label: 'JavaScript' },
      { icon: 'fa-solid fa-code', label: 'TypeScript' },
      { icon: 'fa-solid fa-hashtag', label: 'Markdown' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { icon: 'fab fa-react', label: 'React' },
      { icon: 'fab fa-vuejs', label: 'Vue.js' },
      { icon: 'fab fa-bootstrap', label: 'Bootstrap' },
      { icon: 'fa-solid fa-wind', label: 'Tailwind CSS' },
      { icon: 'fab fa-sass', label: 'SASS' },
    ],
  },
  {
    title: 'Front-End Practices',
    items: [
      { icon: 'fab fa-git-alt', label: 'Git' },
      { icon: 'fab fa-github', label: 'GitHub' },
      { icon: 'fa-solid fa-code', label: 'VS Code' },
      { icon: 'fab fa-npm', label: 'npm' },
      { icon: 'fab fa-figma', label: 'Figma' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { icon: 'fa-solid fa-mobile-screen-button', label: 'Responsive Design' },
      { icon: 'fa-solid fa-universal-access', label: 'Accessibility' },
      { icon: 'fa-solid fa-plug', label: 'REST APIs' },
      { icon: 'fa-solid fa-pen-ruler', label: 'UI/UX Basics' },
      { icon: 'fa-solid fa-display', label: 'Cross-Browser Testing' },
    ],
  },
];

const projects = [
  {
    tag: 'Full-Stack HR Platform',
    title: 'ModernTech HR Management System',
    desc: 'A full-stack HR management app for tracking employees, attendance, payroll, time off, and performance reviews. Built with role-based JWT auth and a normalised MySQL schema. I owned the payroll module.',
    stack: ['Node.js', 'Express', 'MySQL', 'JWT'],
    live: 'https://moderntech-hr-frontend.onrender.com',
    repo: 'https://github.com/nikitamullerr/Group-4_HRSystem_Project2',
    thumb: `<img src="assets/img/project-hr-system.png" alt="ModernTech HR Management System dashboard" />`,
  },
  {
    tag: 'Full-Stack Web Platform',
    title: 'ApplyDirect-SA',
    desc: 'A centralised tertiary application portal and career directory for South African students. Aggregates course details and institutional requirements with dynamic search and filtering.',
    stack: ['Vue.js', 'Bootstrap 5', 'Express', 'MySQL'],
    repo: 'https://github.com/stephanbennett42-ctrl/applydirect-sa',
    thumb: `<img src="assets/img/project-applydirect.png" alt="ApplyDirect-SA application portal homepage" />`,
  },
  {
    tag: 'Front-End / Vue.js',
    title: 'Personal Portfolio Website',
    desc: 'A responsive personal portfolio built with Vue 3 and Vite. Features a component-based architecture, dark/light theme toggle, scroll-spy navigation, an animated hero, and a working contact form. Deployed on Railway.',
    stack: ['Vue.js', 'Vite', 'JavaScript', 'CSS3'],
    live: 'https://rasool-fredericks-portfolio-production.up.railway.app',
    repo: 'https://github.com/Rasoolking14/portfolio',
    thumb: `<img src="assets/img/project-portfolio.png" alt="Rasool Fredericks portfolio website homepage" />`,
  },
];

const certifications = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Web / Front-End Development', meta: 'Life-Choices Academy \u2022 In Progress' },
  { icon: 'fa-solid fa-mobile-screen-button', title: 'Responsive Web Design', meta: 'Life-Choices Academy \u2022 Coursework' },
  { icon: 'fa-solid fa-laptop-code', title: 'Project-Based Learning', meta: 'Academy & personal projects \u2022 Ongoing' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/rasool-fredericks', label: 'LinkedIn', icon: 'fab fa-linkedin' },
  { href: 'https://github.com/Rasoolking14', label: 'GitHub', icon: 'fab fa-github' },
];

const experiences = [
  {
    role: 'Front-End Developer',
    period: '2025 \u2013 Present',
    points: [
      'Build responsive, accessible interfaces from design mockups using HTML, CSS and JavaScript.',
      'Develop reusable UI components with modern frameworks such as React and Vue.js.',
      'Collaborate in team projects using Git and GitHub, managing branches and pull requests.',
      'Write clean, maintainable code and ensure consistent, cross-browser layouts.',
    ],
  },
  {
    role: 'Web / Front-End Development Student',
    period: '2025 \u2013 Present',
    points: [
      'Studying Web / Front-End Development at Life-Choices Academy.',
      'Apply best practices in responsive design, accessibility and version control.',
      'Complete practical projects that simulate real-world development workflows.',
    ],
  },
];

function toggleNav() {
  menuOpen.value = !menuOpen.value;
}

function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}

function toggleTheme() {
  isLight.value = !isLight.value;
  if (isLight.value) {
    document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.setItem('rf-theme', 'light'); } catch (e) {}
  } else {
    document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('rf-theme', 'dark'); } catch (e) {}
  }
}

function closeNav() {
  if (menuOpen.value) {
    menuOpen.value = false;
  }
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 320;

  const offset = 120;
  let current = '';
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top - offset <= 0) {
      current = id;
    }
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sectionIds[sectionIds.length - 1];
  }
  activeSection.value = current;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleKeydown(event) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false;
    navToggleRef.value?.focus();
  }
}

function setStatus(message, isError) {
  formStatus.value = message;
  formStatusIsError.value = isError;
  if (statusTimer) {
    clearTimeout(statusTimer);
    statusTimer = null;
  }
  if (message && !isError) {
    statusTimer = setTimeout(() => {
      formStatus.value = '';
    }, 6000);
  }
}

async function submitForm() {
  const name = form.name.trim();
  const email = form.email.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  if (!name || !email || !subject || !message) {
    setStatus('Please fill in all required fields.', true);
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setStatus('Please enter a valid email address.', true);
    return;
  }

  if (!CONTACT_ENDPOINT) {
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your email app to send the message...', false);
    return;
  }

  isSending.value = true;
  setStatus('Sending...', false);

  try {
    const payload = new FormData();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('subject', subject);
    payload.append('message', message);
    payload.append('_subject', 'New message from your portfolio');

    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    setStatus('Thanks! Your message has been sent.', false);
  } catch (err) {
    setStatus(`Sorry, something went wrong. Please email ${CONTACT_FALLBACK_EMAIL} directly.`, true);
  } finally {
    isSending.value = false;
  }
}

function addHeadLink(id, rel, href) {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
}

function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;
  let stars = [];
  let shooters = [];
  let last = 0;
  let nextShot = 1200;
  let raf = null;

  const rgb = () => (document.documentElement.getAttribute('data-theme') === 'light' ? '17,17,17' : '255,255,255');

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
        s: Math.random() * 0.0012 + 0.0004,
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
      life: 1,
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

  function onResize() { resize(); }
  function onVisibility() {
    if (document.hidden) stop();
    else start();
  }
  function onAttr() {
    if (reduce || document.hidden) draw(performance.now());
  }

  const observer = 'MutationObserver' in window ? new MutationObserver(onAttr) : null;
  if (observer) {
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVisibility);
  resize();
  if (!reduce) start();

  return function cleanup() {
    stop();
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibility);
    if (observer) observer.disconnect();
  };
}

onMounted(() => {
  addHeadLink('pf-fonts-preconnect', 'preconnect', 'https://fonts.googleapis.com');
  addHeadLink('pf-fonts', 'stylesheet', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&family=Roboto:wght@500&display=swap');
  addHeadLink('pf-fontawesome', 'stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

  try {
    if (localStorage.getItem('rf-theme') === 'light') {
      isLight.value = true;
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeydown);
  handleScroll();
  starfieldCleanup = initStarfield();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  if (statusTimer) {
    clearTimeout(statusTimer);
  }
  if (starfieldCleanup) {
    starfieldCleanup();
    starfieldCleanup = null;
  }
});
</script>

<style>
:root {
    --bg-primary: #0A0A0A;
    --bg-secondary: #171717;
    --accent: #FFFFFF;
    --accent-2: #D4D4D4;
    --text-primary: #FAFAFA;
    --text-secondary: #A3A3A3;
    --border: #262626;
    --glass: rgba(10, 10, 10, 0.8);
    --shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
    --radius-card: 12px;
    --radius-btn: 8px;
    --radius-pill: 999px;
    --focus: 0 0 0 3px rgba(255, 255, 255, 0.45);
    font-size: 16px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    background: radial-gradient(1200px 800px at 80% -10%, rgba(255, 255, 255, 0.06), transparent),
                radial-gradient(1000px 700px at 20% -20%, rgba(255, 255, 255, 0.06), transparent),
                var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip;
    -moz-osx-font-smoothing: grayscale;
    isolation: isolate;
}

/* Shooting-star background */
#starfield {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: block;
    pointer-events: none;
}

/* Floating cards */
@keyframes cardFloat {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -10px; }
}

.info-card,
.skill-card,
.project-card,
.cert-card,
.contact-form {
    animation: cardFloat 6s ease-in-out infinite;
}

.info-card:nth-child(2),
.skill-card:nth-child(2),
.project-card:nth-child(2),
.cert-card:nth-child(2) { animation-delay: 0.5s; }

.info-card:nth-child(3),
.skill-card:nth-child(3),
.project-card:nth-child(3),
.cert-card:nth-child(3) { animation-delay: 1s; }

.info-card:nth-child(4),
.skill-card:nth-child(4),
.project-card:nth-child(4),
.cert-card:nth-child(4) { animation-delay: 1.5s; }

.info-card:nth-child(5),
.skill-card:nth-child(5),
.cert-card:nth-child(5) { animation-delay: 2s; }

.info-card:nth-child(6),
.skill-card:nth-child(6),
.cert-card:nth-child(6) { animation-delay: 2.5s; }

@media (prefers-reduced-motion: reduce) {
    .info-card,
    .skill-card,
    .project-card,
    .cert-card,
    .contact-form {
        animation: none;
    }
}

img, svg {
    max-width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
}

:root[data-theme="light"] {
    --bg-primary: #F6F6F6;
    --bg-secondary: #FFFFFF;
    --accent: #111111;
    --accent-2: #555555;
    --text-primary: #121212;
    --text-secondary: #555555;
    --border: #E3E3E3;
    --glass: rgba(255, 255, 255, 0.8);
    --shadow: 0px 10px 30px rgba(17, 17, 17, 0.12);
    --focus: 0 0 0 3px rgba(17, 17, 17, 0.25);
}

[data-theme="light"] body {
    background: radial-gradient(1200px 800px at 80% -10%, rgba(17, 17, 17, 0.05), transparent),
                radial-gradient(1000px 700px at 20% -20%, rgba(17, 17, 17, 0.05), transparent),
                var(--bg-primary);
}
</style>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Header */
.header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.92), rgba(10, 10, 10, 0.8));
    border-bottom: 1px solid rgba(38, 38, 38, 0.7);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 24px;
    min-height: 72px;
}

.nav__logo {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.nav__logo-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    letter-spacing: 0.3px;
}

.nav__status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    background: rgba(23, 23, 23, 0.6);
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.nav__status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
}

.nav__menu {
    display: flex;
    align-items: center;
    gap: 18px;
}

.nav__links {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
}

.nav__link {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 160ms ease, text-shadow 160ms ease;
    position: relative;
}

.nav__link::after {
    content: "";
    position: absolute;
    left: 0; bottom: -6px;
    width: 100%; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 160ms ease;
}

.nav__link:hover,
.nav__link:focus-visible {
    color: var(--text-primary);
    text-shadow: 0 0 18px rgba(255, 255, 255, 0.25);
    outline: none;
}

.nav__link:hover::after,
.nav__link:focus-visible::after {
    transform: scaleX(1);
    transform-origin: left;
}

.nav__link--active {
    color: var(--text-primary);
}

.nav__link--active::after {
    transform: scaleX(1);
    transform-origin: left;
}

.nav__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--accent);
    color: var(--text-primary);
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    transition: box-shadow 160ms ease, transform 160ms ease, border-color 160ms ease;
}

.nav__cta:hover,
.nav__cta:focus-visible {
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.35);
    transform: translateY(-1px);
    outline: none;
}

.nav__toggle {
    display: none;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 8px 10px;
    border-radius: var(--radius-btn);
}

.nav__toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text-primary);
    margin: 4px 0;
}

/* Sections */
.section {
    padding: 96px 0;
}

.section__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    margin-bottom: 12px;
}

.section__lead {
    color: var(--text-secondary);
    max-width: 760px;
    margin-bottom: 28px;
}

/* Hero */
.hero {
    padding: 120px 0 96px;
}

.hero__grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;
}

.hero__headline {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4.5vw, 3.6rem);
    line-height: 1.15;
    margin-bottom: 16px;
}

.hero__subheadline {
    color: var(--text-secondary);
    font-size: clamp(1rem, 1.5vw, 1.08rem);
    margin-bottom: 24px;
    max-width: 620px;
}

.hero__actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: var(--radius-btn);
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border: 1px solid transparent;
    transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease, border-color 160ms ease;
    will-change: transform;
}

.btn--primary {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    color: #0A0A0A;
    box-shadow: 0 0 22px rgba(255, 255, 255, 0.25);
}

.btn--outline {
    background: transparent;
    color: var(--text-primary);
    border-color: var(--border);
}

.btn--full {
    width: 100%;
}

.btn:hover,
.btn:focus-visible {
    transform: scale(1.02);
    filter: brightness(1.05);
    box-shadow: 0 0 26px rgba(255, 255, 255, 0.28);
    outline: var(--focus);
    outline-offset: 2px;
}

.btn:active {
    transform: scale(0.995);
}

.btn:disabled,
.btn[disabled] {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    filter: none;
    box-shadow: none;
}

/* Hero visual */
.hero__visual {
    position: relative;
    min-height: 420px;
}

.hero__scene {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.glass-card {
    position: absolute;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.9), rgba(10, 10, 10, 0.8));
    border: 1px solid rgba(163, 163, 163, 0.18);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 220px;
}

.gc1 {
    top: 8%;
    left: 4%;
    animation: float 6s ease-in-out infinite;
}

.gc2 {
    top: 24%;
    right: 2%;
    animation: float 7s ease-in-out infinite 0.8s;
}

.gc3 {
    bottom: 12%;
    left: 18%;
    animation: float 7.5s ease-in-out infinite 1.2s;
}

.gc__code {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: 'Roboto', monospace;
    font-size: 0.82rem;
    color: var(--text-secondary);
}

.gc__line--accent {
    color: var(--accent);
}

.gc__dots {
    display: flex;
    gap: 6px;
}

.gc__dots span {
    width: 8px; height: 8px; border-radius: 50%;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.gc__bars {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 36px;
}

.gc__bars span {
    width: 10px;
    background: linear-gradient(180deg, var(--accent), transparent);
    border-radius: 6px;
}

.gc__bars span:nth-child(1) { height: 40%; }
.gc__bars span:nth-child(2) { height: 70%; }
.gc__bars span:nth-child(3) { height: 100%; }
.gc__bars span:nth-child(4) { height: 55%; }

.gc__label {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    color: var(--text-secondary);
}

.node {
    position: absolute;
    width: 10px; height: 10px; border-radius: 50%;
    background: radial-gradient(circle, #fff 0%, var(--accent) 60%, transparent 70%);
    filter: blur(0.2px);
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.7);
}

.n1 { top: 22%; left: 38%; }
.n2 { top: 58%; right: 28%; }
.n3 { bottom: 28%; left: 58%; }

.glow {
    position: absolute;
    width: 260px; height: 260px; border-radius: 50%;
    filter: blur(60px);
    opacity: 0.12;
    pointer-events: none;
}

.g1 {
    top: -10%; right: -10%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 70%);
}

.g2 {
    bottom: -20%; left: -10%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 70%);
}

/* About */
.about__grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
    align-items: center;
}

.avatar {
    position: relative;
    aspect-ratio: 1 / 1;
    max-width: 420px;
    margin: 0 auto;
    animation: avatarFloat 6s ease-in-out infinite;
    perspective: 1200px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

@keyframes avatarFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
}

@media (prefers-reduced-motion: reduce) {
    .avatar { animation: none; }
    .avatar__flip { transition: none; }
}

.avatar__border {
    position: absolute;
    inset: -2px;
    border-radius: 26px;
    background: linear-gradient(120deg, var(--accent), var(--accent-2));
    filter: blur(10px);
    opacity: 0.4;
}

.avatar__flip {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.avatar.is-flipped .avatar__flip {
    transform: rotateY(180deg);
}

.avatar__face {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(163, 163, 163, 0.25);
    box-shadow: var(--shadow);
    background: var(--bg-secondary);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.avatar__face--back {
    transform: rotateY(180deg);
}

.avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about__subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin: 18px 0 16px;
    font-size: 1.25rem;
}

.about__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
}

.info-card {
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.9), rgba(10, 10, 10, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.info-card:hover,
.info-card:focus-within {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(255, 255, 255, 0.18);
}

.info-card__icon {
    width: 38px; height: 38px;
    display: grid; place-items: center;
    border-radius: 10px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent);
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: var(--accent);
    margin-bottom: 10px;
}

.info-card__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 6px;
}

.info-card__text {
    color: var(--text-secondary);
    font-size: 0.92rem;
}

/* Experience timeline */
.timeline {
    position: relative;
    margin-top: 18px;
    padding-left: 28px;
    list-style: none;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(180deg, var(--accent), transparent);
    opacity: 0.5;
}

.timeline__item {
    position: relative;
    padding-bottom: 28px;
}

.timeline__item:last-child {
    padding-bottom: 0;
}

.timeline__marker {
    position: absolute;
    left: -28px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--bg-primary);
    border: 2px solid var(--accent);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

.timeline__content {
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.9), rgba(10, 10, 10, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px 18px;
    box-shadow: var(--shadow);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.timeline__content:hover,
.timeline__content:focus-within {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(255, 255, 255, 0.16);
}

.timeline__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

.timeline__role {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
}

.timeline__period {
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    color: var(--text-secondary);
    padding: 4px 10px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.7);
}

.timeline__points {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 0.92rem;
}

.timeline__points li {
    position: relative;
    padding-left: 18px;
}

.timeline__points li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
}

[data-theme="light"] .timeline__content {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(246, 246, 246, 0.95));
    box-shadow: 0 8px 24px rgba(17, 17, 17, 0.08);
}

[data-theme="light"] .timeline__content:hover,
[data-theme="light"] .timeline__content:focus-within {
    border-color: rgba(17, 17, 17, 0.5);
    box-shadow: 0 12px 30px rgba(17, 17, 17, 0.12), 0 0 18px rgba(17, 17, 17, 0.08);
}

[data-theme="light"] .timeline__period {
    background: rgba(17, 17, 17, 0.05);
}

[data-theme="light"] .timeline__marker {
    box-shadow: 0 0 12px rgba(17, 17, 17, 0.35);
}

/* Skills */
.skills__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 18px;
}

.skill-card {
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.9), rgba(10, 10, 10, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: var(--shadow);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.skill-card:hover,
.skill-card:focus-within {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(255, 255, 255, 0.16);
}

.skill-card__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 12px;
}

.skill-card__items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.7);
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: color 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.skill-pill i {
    color: var(--accent);
}

.skill-pill:hover,
.skill-pill:focus-within {
    color: var(--text-primary);
    border-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.02);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
    outline: none;
}

/* Projects */
.projects__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 18px;
}

.project-card {
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.95), rgba(10, 10, 10, 0.95));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.project-card:hover,
.project-card:focus-within {
    transform: translateY(-4px) scale(1.01);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.6), 0 0 22px rgba(255, 255, 255, 0.16);
}

.project-card__thumb {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #0A0A0A;
}

.project-card__thumb :deep(svg),
.project-card__thumb :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-card__thumb :deep(img) {
    display: block;
}

.project-card__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
}

.project-card__tag {
    align-self: flex-start;
    padding: 6px 10px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.7);
    color: var(--text-secondary);
    font-size: 0.82rem;
    font-family: 'Roboto', sans-serif;
}

.project-card__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
}

.project-card__desc {
    color: var(--text-secondary);
    font-size: 0.92rem;
}

.project-card__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.stack-pill {
    padding: 6px 10px;
    border-radius: var(--radius-pill);
    border: 1px solid rgba(163, 163, 163, 0.35);
    color: var(--text-secondary);
    font-size: 0.82rem;
}

.project-card__actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 4px;
}

.proj-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    transition: color 160ms ease, text-shadow 160ms ease;
}

.proj-link:hover,
.proj-link:focus-visible {
    color: var(--text-primary);
    text-shadow: 0 0 16px rgba(255, 255, 255, 0.25);
    outline: none;
}

/* Certifications */
.certs__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 18px;
}

.cert-card {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.9), rgba(10, 10, 10, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: var(--shadow);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.cert-card:hover,
.cert-card:focus-within {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(255, 255, 255, 0.14);
}

.cert-card__icon {
    width: 44px; height: 44px;
    display: grid; place-items: center;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
    color: var(--accent);
    font-size: 1.2rem;
    flex-shrink: 0;
}

.cert-card__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 4px;
}

.cert-card__meta {
    color: var(--text-secondary);
    font-size: 0.88rem;
}

/* Contact */
.contact__grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
}

.contact__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.contact__list li {
    display: flex;
    align-items: center;
    gap: 10px;
}

.contact__list i {
    color: var(--accent);
}

.contact__socials {
    display: flex;
    gap: 10px;
}

.contact__socials a {
    width: 38px; height: 38px;
    display: grid; place-items: center;
    border-radius: 10px;
    border: 1px solid var(--border);
    color: var(--text-secondary);
    background: rgba(10, 10, 10, 0.7);
    transition: color 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.contact__socials a:hover,
.contact__socials a:focus-visible {
    color: var(--text-primary);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
    outline: none;
}

.contact-form {
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.95), rgba(10, 10, 10, 0.95));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 18px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.form-input,
.form-textarea {
    background: rgba(10, 10, 10, 0.7);
    border: 1px solid var(--border);
    border-radius: var(--radius-btn);
    color: var(--text-primary);
    padding: 10px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    transition: border-color 160ms ease, box-shadow 160ms ease, outline 160ms ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: rgba(163, 163, 163, 0.7);
}

.form-input:focus-visible,
.form-textarea:focus-visible {
    outline: var(--focus);
    outline-offset: 2px;
    border-color: rgba(255, 255, 255, 0.7);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-status {
    color: var(--text-secondary);
    font-size: 0.9rem;
    min-height: 22px;
}

/* Footer */
.footer {
    border-top: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.9);
}

.footer__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 24px;
}

.footer__copy {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.back-to-top {
    width: 38px; height: 38px;
    display: grid; place-items: center;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.7);
    color: var(--text-secondary);
    opacity: 0;
    visibility: hidden;
    transition: opacity 160ms ease, visibility 160ms ease, transform 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover,
.back-to-top:focus-visible {
    color: var(--text-primary);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
    outline: none;
}

/* Responsive */
@media (max-width: 1100px) {
    .skills__grid { grid-template-columns: repeat(2, 1fr); }
    .about__cards { grid-template-columns: repeat(2, 1fr); }
    .certs__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 920px) {
    .hero__grid { grid-template-columns: 1fr; }
    .about__grid { grid-template-columns: 1fr; }
    .contact__grid { grid-template-columns: 1fr; }
    .projects__grid { grid-template-columns: 1fr; }
    .hero__visual { min-height: 320px; }
}

@media (max-width: 768px) {
    .nav__toggle { display: inline-flex; flex-direction: column; }
    .nav__menu {
        position: absolute;
        top: 72px; left: 0; right: 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        background: linear-gradient(180deg, rgba(10, 10, 10, 0.98), rgba(10, 10, 10, 0.95));
        border-bottom: 1px solid var(--border);
        padding: 14px 24px;
        display: none;
    }
    .nav__menu.open { display: flex; }
    .nav__links { flex-direction: column; align-items: flex-start; gap: 10px; }
    html { scroll-padding-top: 120px; }
    .hero { padding: 96px 0 64px; }
    .section { padding: 72px 0; }
}

@media (max-width: 560px) {
    .container { padding: 0 16px; }
    .nav { padding: 12px 16px; }
    .nav__logo-text { font-size: 0.95rem; }
    .section { padding: 56px 0; }
    .hero { padding: 88px 0 56px; }
    .skills__grid { grid-template-columns: 1fr; }
    .about__cards { grid-template-columns: 1fr; }
    .certs__grid { grid-template-columns: 1fr; }
    .hero__visual { min-height: 260px; }
    .footer__inner { flex-direction: column; text-align: center; gap: 8px; }
}

/* Theme toggle */
.nav__actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-btn);
    border: 1px solid var(--border);
    background: rgba(10, 10, 10, 0.7);
    color: var(--text-primary);
    font-size: 1rem;
    cursor: pointer;
    transition: color 160ms ease, border-color 160ms ease, background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
    color: var(--accent);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
    outline: none;
}

/* Light theme */
[data-theme="light"] .header {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.8));
    border-bottom-color: rgba(17, 17, 17, 0.1);
}

[data-theme="light"] .nav__status {
    background: rgba(17, 17, 17, 0.05);
}

[data-theme="light"] .nav__status-dot {
    box-shadow: 0 0 12px rgba(17, 17, 17, 0.5);
}

[data-theme="light"] .nav__link:hover,
[data-theme="light"] .nav__link:focus-visible {
    text-shadow: 0 0 18px rgba(17, 17, 17, 0.15);
}

[data-theme="light"] .nav__cta:hover,
[data-theme="light"] .nav__cta:focus-visible {
    box-shadow: 0 0 18px rgba(17, 17, 17, 0.25);
}

[data-theme="light"] .theme-toggle {
    background: rgba(17, 17, 17, 0.05);
}

[data-theme="light"] .theme-toggle:hover,
[data-theme="light"] .theme-toggle:focus-visible {
    border-color: rgba(17, 17, 17, 0.6);
    box-shadow: 0 0 14px rgba(17, 17, 17, 0.18);
}

[data-theme="light"] .btn--primary {
    color: #FFFFFF;
    box-shadow: 0 0 22px rgba(17, 17, 17, 0.2);
}

[data-theme="light"] .btn:hover,
[data-theme="light"] .btn:focus-visible {
    box-shadow: 0 0 26px rgba(17, 17, 17, 0.25);
}

[data-theme="light"] .glass-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(246, 246, 246, 0.9));
    border-color: rgba(17, 17, 17, 0.12);
}

[data-theme="light"] .gc__dots span {
    box-shadow: 0 0 10px rgba(17, 17, 17, 0.3);
}

[data-theme="light"] .node {
    background: radial-gradient(circle, #111 0%, var(--accent) 60%, transparent 70%);
    box-shadow: 0 0 18px rgba(17, 17, 17, 0.45);
}

[data-theme="light"] .g1,
[data-theme="light"] .g2 {
    background: radial-gradient(circle, rgba(17, 17, 17, 0.5), transparent 70%);
}

[data-theme="light"] .avatar__face {
    border-color: rgba(17, 17, 17, 0.15);
}

[data-theme="light"] .info-card,
[data-theme="light"] .skill-card,
[data-theme="light"] .cert-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(246, 246, 246, 0.95));
    box-shadow: 0 8px 24px rgba(17, 17, 17, 0.08);
}

[data-theme="light"] .project-card,
[data-theme="light"] .contact-form {
    background: linear-gradient(180deg, #FFFFFF, #F6F6F6);
    box-shadow: 0 8px 24px rgba(17, 17, 17, 0.08);
}

[data-theme="light"] .info-card:hover,
[data-theme="light"] .info-card:focus-within,
[data-theme="light"] .skill-card:hover,
[data-theme="light"] .skill-card:focus-within,
[data-theme="light"] .project-card:hover,
[data-theme="light"] .project-card:focus-within,
[data-theme="light"] .cert-card:hover,
[data-theme="light"] .cert-card:focus-within {
    border-color: rgba(17, 17, 17, 0.5);
    box-shadow: 0 12px 30px rgba(17, 17, 17, 0.12), 0 0 18px rgba(17, 17, 17, 0.08);
}

[data-theme="light"] .info-card__icon,
[data-theme="light"] .cert-card__icon {
    background: radial-gradient(circle, rgba(17, 17, 17, 0.12), transparent);
    border-color: rgba(17, 17, 17, 0.4);
}

[data-theme="light"] .skill-pill,
[data-theme="light"] .project-card__tag,
[data-theme="light"] .contact__socials a,
[data-theme="light"] .back-to-top {
    background: rgba(17, 17, 17, 0.05);
}

[data-theme="light"] .skill-pill:hover,
[data-theme="light"] .skill-pill:focus-within,
[data-theme="light"] .contact__socials a:hover,
[data-theme="light"] .contact__socials a:focus-visible,
[data-theme="light"] .back-to-top:hover,
[data-theme="light"] .back-to-top:focus-visible {
    border-color: rgba(17, 17, 17, 0.6);
    box-shadow: 0 0 14px rgba(17, 17, 17, 0.15);
}

[data-theme="light"] .proj-link:hover,
[data-theme="light"] .proj-link:focus-visible {
    text-shadow: 0 0 16px rgba(17, 17, 17, 0.2);
}

[data-theme="light"] .form-input,
[data-theme="light"] .form-textarea {
    background: #FFFFFF;
}

[data-theme="light"] .form-input:focus-visible,
[data-theme="light"] .form-textarea:focus-visible {
    border-color: rgba(17, 17, 17, 0.6);
}

[data-theme="light"] .footer {
    background: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
    [data-theme="light"] .nav__menu {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
    }
}
</style>
