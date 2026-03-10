/* ---- Navigation ---- */
const header    = document.getElementById('site-header');
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

// Sticky shadow on scroll
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu toggle
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  // Close on nav link click (mobile)
  navLinks.querySelectorAll('.nav-link, .nav-cta').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Stat counter animation ---- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.stat-number[data-target]');
if (counters.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => observer.observe(c));
}

/* ---- Scroll-in animation for cards / service items ---- */
const fadeEls = document.querySelectorAll('.card, .service-item, .value-item');
if (fadeEls.length && 'IntersectionObserver' in window) {
  const elIndex = new WeakMap();
  fadeEls.forEach((el, i) => {
    elIndex.set(el, i);
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = elIndex.get(entry.target) || 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, (idx % 4) * 80);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach((el) => fadeObserver.observe(el));
}

/* ---- Contact form ---- */
const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form && status) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const consent = form.querySelector('#consent');
    if (consent && !consent.checked) {
      status.textContent = 'Please agree to the data processing consent before sending.';
      status.className   = 'form-status error';
      return;
    }
    status.textContent = '✓ Thank you! Dr. Mary will be in touch within one business day.';
    status.className   = 'form-status success';
    form.reset();
    setTimeout(() => {
      status.textContent = '';
      status.className   = 'form-status';
    }, 7000);
  });
}

/* ---- Footer year ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
