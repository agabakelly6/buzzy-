/* ═══════════════════════════════════════════
   UPGRADES.JS — shared across all pages
   Loader · Dark/Light · Scroll Reveal · Nav
═══════════════════════════════════════════ */

/* ── 1. PAGE LOADER ── */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) loader.classList.add('hide');
    }, 1000);
});

/* ── 2. DARK / LIGHT MODE ── */
(function () {
    const saved = localStorage.getItem('ka-theme') || 'dark';
    if (saved === 'light') document.body.classList.add('light');
})();

function toggleTheme() {
    document.body.classList.toggle('light');
    localStorage.setItem('ka-theme', document.body.classList.contains('light') ? 'light' : 'dark');
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

/* ── 3. SCROLL REVEAL ── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

/* ── 4. STICKY NAVBAR ── */
function initNavbar() {
    const nb = document.getElementById('navbar');
    if (!nb) return;
    window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 10));
    const ham = document.getElementById('hamburger');
    const links = document.getElementById('nav-links');
    if (ham && links) {
        ham.addEventListener('click', () => {
            links.classList.toggle('open');
            ham.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initReveal();
    // Set theme button icon
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});
