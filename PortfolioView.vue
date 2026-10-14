<template>
  <div class="portfolio-view">
    <header class="header">
      <nav class="nav container">
        <div class="nav__logo">
          <span class="nav__logo-text">Rasool Fredericks</span>
          <span class="nav__status">
            <span class="nav__status-dot"></span>
            <span class="nav__status-text">Available for Hire</span>
          </span>
        </div>
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
              <a :href="link.href" class="nav__link" @click="closeNav">{{ link.label }}</a>
            </li>
          </ul>
          <a href="assets/Rasool_Fredericks_Resume.pdf" target="_blank" rel="noopener" class="nav__cta">Resume / CV</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <h1 class="hero__headline">Senior Full-Stack Engineer crafting scalable web applications.</h1>
            <p class="hero__subheadline">Specializing in cloud-native architecture, high-performance web systems, and modern full-stack developer experience.</p>
            <div class="hero__actions">
              <a href="#projects" class="btn btn--primary">View Work</a>
              <a href="#contact" class="btn btn--outline">Contact Me</a>
            </div>
          </div>
          <div class="hero__visual" aria-hidden="true">
            <div class="hero__scene">
              <div class="glass-card gc1">
                <div class="gc__code">
                  <span class="gc__line">const api = new Gateway()</span>
                  <span class="gc__line">await api.auth()</span>
                  <span class="gc__line gc__line--accent">{ data: results }</span>
                </div>
              </div>
              <div class="glass-card gc2">
                <div class="gc__dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="gc__label">Microservices</span>
              </div>
              <div class="glass-card gc3">
                <div class="gc__bars">
                  <span></span><span></span><span></span><span></span>
                </div>
                <span class="gc__label">Edge Cache</span>
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
            <div class="avatar">
              <div class="avatar__border"></div>
              <div class="avatar__inner">
                <img class="avatar__img" src="assets/img/profile.png" alt="Rasool Fredericks portrait" loading="lazy">
              </div>
            </div>
          </div>
          <div class="about__right">
            <h2 class="section__title">About Me</h2>
            <p class="section__lead">With over 8 years of engineering experience, I architect resilient full-stack systems and intuitive front-end interfaces. I focus on clean code, performant database design, and end-to-end cloud infrastructure.</p>
            <p class="section__lead">I do not focus on forex trading alone &mdash; I also teach trading, helping others build solid technical and risk management skills to trade with confidence.</p>
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
                  <a href="#" class="proj-link" :aria-label="`${project.title} live site`"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>
                  <a href="#" class="proj-link" :aria-label="`${project.title} GitHub repo`"><i class="fab fa-github"></i> GitHub Repo</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section certs" id="certifications">
        <div class="container">
          <h2 class="section__title">Certifications</h2>
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
              <li><i class="fa-solid fa-phone"></i> 0678020783</li>
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
              <button type="submit" class="btn btn--primary btn--full">Send Message</button>
              <p class="form-status" aria-live="polite" :style="{ color: formStatusIsError ? '#f87171' : '#22d3b5' }">{{ formStatus }}</p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__copy">&copy; 2026 Rasool Fredericks. All rights reserved.</p>
        <p class="footer__copy" style="opacity:0.7">Last updated: Oct 12, 2026</p>
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

const form = reactive({ name: '', email: '', subject: '', message: '' });
const formStatus = ref('');
const formStatusIsError = ref(false);
let statusTimer = null;

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const infoCards = [
  { icon: 'fa-solid fa-bolt', title: '8+ Years Experience', text: 'Building scalable enterprise SaaS applications.' },
  { icon: 'fa-solid fa-layer-group', title: 'Full-Stack Mastery', text: 'React, Next.js, Node.js, TypeScript & PostgreSQL.' },
  { icon: 'fa-solid fa-cloud', title: 'Cloud Architecture', text: 'AWS, Docker, CI/CD pipelines, and microservices.' },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { icon: 'fab fa-react', label: 'React' },
      { icon: 'fab fa-js-square', label: 'Next.js' },
      { icon: 'fa-solid fa-code', label: 'TypeScript' },
      { icon: 'fab fa-css3-alt', label: 'Tailwind CSS' },
      { icon: 'fa-solid fa-diagram-project', label: 'Redux' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: 'fab fa-node-js', label: 'Node.js' },
      { icon: 'fa-solid fa-server', label: 'Express' },
      { icon: 'fab fa-python', label: 'Python' },
      { icon: 'fa-solid fa-project-diagram', label: 'GraphQL' },
      { icon: 'fa-solid fa-plug', label: 'REST APIs' },
    ],
  },
  {
    title: 'Database & Cloud',
    items: [
      { icon: 'fa-solid fa-database', label: 'PostgreSQL' },
      { icon: 'fa-solid fa-leaf', label: 'MongoDB' },
      { icon: 'fab fa-aws', label: 'AWS' },
      { icon: 'fab fa-docker', label: 'Docker' },
      { icon: 'fa-solid fa-layer-group', label: 'Redis' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { icon: 'fab fa-git-alt', label: 'Git' },
      { icon: 'fa-solid fa-rocket', label: 'CI/CD' },
      { icon: 'fa-solid fa-vial', label: 'Jest' },
      { icon: 'fa-solid fa-cubes', label: 'Kubernetes' },
      { icon: 'fa-solid fa-code-branch', label: 'Terraform' },
    ],
  },
];

const projects = [
  {
    tag: 'Full-Stack SaaS',
    title: 'Enterprise Analytics Platform',
    desc: 'A multi-tenant analytics suite delivering real-time dashboards and role-based access. Built for scale with event-driven APIs and granular permissions.',
    stack: ['Next.js', 'Node.js', 'AWS', 'PostgreSQL'],
    thumb: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#3B82F6"/>
        </linearGradient>
      </defs>
      <rect width="600" height="340" rx="16" fill="#0F172A"/>
      <circle cx="300" cy="170" r="90" stroke="url(#p1)" stroke-width="3" fill="none" opacity="0.8"/>
      <circle cx="300" cy="170" r="40" stroke="url(#p1)" stroke-width="2" fill="none"/>
      <g opacity="0.9">
        <line x1="300" y1="80" x2="300" y2="120" stroke="#06B6D4"/>
        <line x1="300" y1="220" x2="300" y2="260" stroke="#06B6D4"/>
        <line x1="210" y1="170" x2="250" y2="170" stroke="#06B6D4"/>
        <line x1="350" y1="170" x2="390" y2="170" stroke="#06B6D4"/>
      </g>
    </svg>`,
  },
  {
    tag: 'FinTech Platform',
    title: 'Real-Time Payments Gateway',
    desc: 'Secure, high-throughput payment orchestration with idempotent processing and automated reconciliation. Designed for PCI-aware workflows and observability.',
    stack: ['TypeScript', 'Node.js', 'Redis', 'AWS'],
    thumb: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="600" height="340" rx="16" fill="#0F172A"/>
      <g stroke="#06B6D4" stroke-width="2" fill="none" opacity="0.9">
        <rect x="60" y="60" width="200" height="140" rx="12"/>
        <rect x="340" y="140" width="200" height="140" rx="12"/>
        <path d="M260 130 L340 170"/>
        <path d="M340 170 L260 210"/>
      </g>
      <circle cx="160" cy="130" r="8" fill="#3B82F6"/>
      <circle cx="440" cy="210" r="8" fill="#3B82F6"/>
    </svg>`,
  },
  {
    tag: 'Cloud Infrastructure',
    title: 'Kubernetes-Native CI/CD Platform',
    desc: 'GitOps-driven delivery pipeline with preview environments, policy checks, and automated rollbacks. Accelerates safe releases with minimal toil.',
    stack: ['Kubernetes', 'Terraform', 'Docker', 'AWS'],
    thumb: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="600" height="340" rx="16" fill="#0F172A"/>
      <g stroke="#3B82F6" stroke-width="2" fill="none" opacity="0.9">
        <rect x="70" y="70" width="460" height="40" rx="8"/>
        <rect x="70" y="130" width="320" height="140" rx="8"/>
        <rect x="410" y="130" width="120" height="60" rx="8"/>
        <rect x="410" y="210" width="120" height="60" rx="8"/>
      </g>
      <circle cx="90" cy="90" r="4" fill="#06B6D4"/>
      <circle cx="105" cy="90" r="4" fill="#3B82F6"/>
      <circle cx="120" cy="90" r="4" fill="#94A3B8"/>
    </svg>`,
  },
  {
    tag: 'Web Application',
    title: 'Developer Experience Toolkit',
    desc: 'Type-safe CLI and internal tools to standardize scaffolding, migrations, and secrets. Improves consistency and reduces onboarding friction.',
    stack: ['TypeScript', 'Node.js', 'Redis', 'Docker'],
    thumb: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="600" height="340" rx="16" fill="#0F172A"/>
      <g stroke="#06B6D4" stroke-width="2" fill="none" opacity="0.8">
        <path d="M120 90 L480 90 Q520 90 520 130 L520 210 Q520 250 480 250 L120 250 Q80 250 80 210 L80 130 Q80 90 120 90 Z"/>
        <line x1="80" y1="150" x2="520" y2="150" stroke="#06B6D4"/>
        <circle cx="480" cy="120" r="6" fill="#3B82F6"/>
        <circle cx="460" cy="120" r="6" fill="#06B6D4"/>
      </g>
    </svg>`,
  },
];

const certifications = [
  { icon: 'fab fa-aws', title: 'AWS Certified Solutions Architect - Associate', meta: 'Issued: 2024 \u2022 Amazon Web Services' },
  { icon: 'fa-solid fa-certificate', title: 'Meta Senior Full-Stack Engineer Certificate', meta: 'Issued: 2025 \u2022 Meta' },
  { icon: 'fa-solid fa-cubes', title: 'Certified Kubernetes Application Developer (CKAD)', meta: 'Issued: 2023 \u2022 CNCF/Linux Foundation' },
];

const socials = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: 'fab fa-linkedin' },
  { href: 'https://github.com/', label: 'GitHub', icon: 'fab fa-github' },
  { href: 'https://x.com/', label: 'X (Twitter)', icon: 'fab fa-x-twitter' },
];

function toggleNav() {
  menuOpen.value = !menuOpen.value;
}

function closeNav() {
  if (menuOpen.value) {
    menuOpen.value = false;
  }
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 320;
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
}

function submitForm() {
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

  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';

  setStatus('Thanks! Your message has been sent.', false);

  if (statusTimer) {
    clearTimeout(statusTimer);
  }
  statusTimer = setTimeout(() => {
    formStatus.value = '';
  }, 4000);
}

function addHeadLink(id, rel, href) {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
}

onMounted(() => {
  addHeadLink('pf-fonts-preconnect', 'preconnect', 'https://fonts.googleapis.com');
  addHeadLink('pf-fonts', 'stylesheet', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&family=Roboto:wght@500&display=swap');
  addHeadLink('pf-fontawesome', 'stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeydown);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  if (statusTimer) {
    clearTimeout(statusTimer);
  }
});
</script>

<style>
:root {
    --bg-primary: #0F172A;
    --bg-secondary: #1E293B;
    --accent: #06B6D4;
    --accent-2: #3B82F6;
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --border: #334155;
    --glass: rgba(15, 23, 42, 0.8);
    --shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
    --radius-card: 12px;
    --radius-btn: 8px;
    --radius-pill: 999px;
    --focus: 0 0 0 3px rgba(6, 182, 212, 0.45);
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
    background: radial-gradient(1200px 800px at 80% -10%, rgba(59, 130, 246, 0.12), transparent),
                radial-gradient(1000px 700px at 20% -20%, rgba(6, 182, 212, 0.12), transparent),
                var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.8));
    border-bottom: 1px solid rgba(51, 65, 85, 0.7);
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
    background: rgba(30, 41, 59, 0.6);
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.nav__status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px rgba(6, 182, 212, 0.9);
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
    text-shadow: 0 0 18px rgba(6, 182, 212, 0.25);
    outline: none;
}

.nav__link:hover::after,
.nav__link:focus-visible::after {
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
    box-shadow: 0 0 18px rgba(6, 182, 212, 0.35);
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
    color: #04121a;
    box-shadow: 0 0 22px rgba(6, 182, 212, 0.25);
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
    box-shadow: 0 0 26px rgba(6, 182, 212, 0.28);
    outline: var(--focus);
    outline-offset: 2px;
}

.btn:active {
    transform: scale(0.995);
}

/* Hero visual */
.hero__visual {
    position: relative;
    min-height: 420px;
}

.hero__scene {
    position: absolute;
    inset: 0;
}

.glass-card {
    position: absolute;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8));
    border: 1px solid rgba(148, 163, 184, 0.18);
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
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
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
    box-shadow: 0 0 18px rgba(6, 182, 212, 0.7);
}

.n1 { top: 22%; left: 38%; }
.n2 { top: 58%; right: 28%; }
.n3 { bottom: 28%; left: 58%; }

.glow {
    position: absolute;
    width: 260px; height: 260px; border-radius: 50%;
    filter: blur(60px);
    opacity: 0.28;
    pointer-events: none;
}

.g1 {
    top: -10%; right: -10%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.9), transparent 70%);
}

.g2 {
    bottom: -20%; left: -10%;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.9), transparent 70%);
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
}

.avatar__border {
    position: absolute;
    inset: -2px;
    border-radius: 26px;
    background: linear-gradient(120deg, var(--accent), var(--accent-2));
    filter: blur(10px);
    opacity: 0.4;
}

.avatar__inner {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.25);
    box-shadow: var(--shadow);
    background: var(--bg-secondary);
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
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: 0 8px 24px rgba(2, 6, 23, 0.45);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.info-card:hover,
.info-card:focus-within {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(6, 182, 212, 0.6);
    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.55), 0 0 18px rgba(6, 182, 212, 0.18);
}

.info-card__icon {
    width: 38px; height: 38px;
    display: grid; place-items: center;
    border-radius: 10px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.25), transparent);
    border: 1px solid rgba(6, 182, 212, 0.5);
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

/* Skills */
.skills__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 18px;
}

.skill-card {
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: var(--shadow);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.skill-card:hover,
.skill-card:focus-within {
    transform: translateY(-2px);
    border-color: rgba(6, 182, 212, 0.6);
    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.55), 0 0 18px rgba(6, 182, 212, 0.16);
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
    background: rgba(15, 23, 42, 0.7);
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
    border-color: rgba(6, 182, 212, 0.7);
    transform: scale(1.02);
    box-shadow: 0 0 14px rgba(6, 182, 212, 0.18);
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
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
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
    border-color: rgba(6, 182, 212, 0.6);
    box-shadow: 0 14px 36px rgba(2, 6, 23, 0.6), 0 0 22px rgba(6, 182, 212, 0.16);
}

.project-card__thumb {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #0b1220;
}

.project-card__thumb :deep(svg) {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    background: rgba(15, 23, 42, 0.7);
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
    border: 1px solid rgba(148, 163, 184, 0.35);
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
    text-shadow: 0 0 16px rgba(6, 182, 212, 0.25);
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
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px;
    box-shadow: var(--shadow);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.cert-card:hover,
.cert-card:focus-within {
    transform: translateY(-2px);
    border-color: rgba(6, 182, 212, 0.6);
    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.55), 0 0 18px rgba(6, 182, 212, 0.14);
}

.cert-card__icon {
    width: 44px; height: 44px;
    display: grid; place-items: center;
    border-radius: 10px;
    border: 1px solid rgba(6, 182, 212, 0.5);
    background: radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent);
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
    background: rgba(15, 23, 42, 0.7);
    transition: color 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.contact__socials a:hover,
.contact__socials a:focus-visible {
    color: var(--text-primary);
    border-color: rgba(6, 182, 212, 0.7);
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(6, 182, 212, 0.18);
    outline: none;
}

.contact-form {
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
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
    background: rgba(15, 23, 42, 0.7);
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
    color: rgba(148, 163, 184, 0.7);
}

.form-input:focus-visible,
.form-textarea:focus-visible {
    outline: var(--focus);
    outline-offset: 2px;
    border-color: rgba(6, 182, 212, 0.7);
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
    background: rgba(15, 23, 42, 0.9);
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
    background: rgba(15, 23, 42, 0.7);
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
    border-color: rgba(6, 182, 212, 0.7);
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(6, 182, 212, 0.18);
    outline: none;
}

/* Responsive */
@media (max-width: 1100px) {
    .skills__grid { grid-template-columns: repeat(2, 1fr); }
    .about__cards { grid-template-columns: 1fr; }
    .certs__grid { grid-template-columns: 1fr; }
}

@media (max-width: 920px) {
    .hero__grid { grid-template-columns: 1fr; }
    .about__grid { grid-template-columns: 1fr; }
    .contact__grid { grid-template-columns: 1fr; }
    .projects__grid { grid-template-columns: 1fr; }
    .hero__visual { min-height: 340px; }
}

@media (max-width: 768px) {
    .nav__toggle { display: inline-flex; flex-direction: column; }
    .nav__menu {
        position: absolute;
        top: 72px; left: 0; right: 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.95));
        border-bottom: 1px solid var(--border);
        padding: 14px 24px;
        display: none;
    }
    .nav__menu.open { display: flex; }
    .nav__links { flex-direction: column; align-items: flex-start; gap: 10px; }
    html { scroll-padding-top: 120px; }
}

@media (max-width: 520px) {
    .container { padding: 0 16px; }
    .nav { padding: 12px 16px; }
    .section { padding: 72px 0; }
    .hero { padding: 100px 0 72px; }
}
</style>
