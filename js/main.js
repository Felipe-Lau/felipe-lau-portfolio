// ==========================================================================
// Felipe Lau — Portfolio
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initTypedRole();
  initScrollReveal();
  initCounters();
  initCursorGlow();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Navbar background on scroll --------------------------------------------

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile menu ---------------------------------------------------------------

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// Typed role rotator ---------------------------------------------------

function initTypedRole() {
  const el = document.getElementById('typedRole');
  const roles = [
    'QA Pleno',
    'Especialista em Cypress & Playwright',
    'Automação Web, API & Mobile',
    'BDD com Gherkin',
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1800;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        el.textContent = current;
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }

    el.textContent = current.slice(0, charIndex);
    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  setTimeout(tick, HOLD_TIME);
}

// Scroll reveal via IntersectionObserver -----------------------------------

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

// Animated stat counters ---------------------------------------------------

function initCounters() {
  const counters = document.querySelectorAll('.stat__number');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => observer.observe(el));
}

// Cursor glow (desktop only) -------------------------------------------

function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  let raf = null;

  window.addEventListener('pointermove', (e) => {
    glow.style.opacity = '1';
    if (raf) return;
    raf = requestAnimationFrame(() => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      raf = null;
    });
  });

  window.addEventListener('pointerleave', () => {
    glow.style.opacity = '0';
  });
}
