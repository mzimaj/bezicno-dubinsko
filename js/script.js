// ===========================================================
// Godina u footeru
// ===========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ===========================================================
// Scroll-reveal animacije
// ===========================================================
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // fallback: ako IntersectionObserver nije dostupan, samo prikaži sve odmah
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===========================================================
// Hero CTA -> istakni kontakt karticu kad korisnik stigne do nje
// ===========================================================
const heroCtaBtn = document.getElementById('heroCtaBtn');
if (heroCtaBtn) {
  heroCtaBtn.addEventListener('click', () => {
    const contactCard = document.querySelector('.contact-card');
    if (!contactCard) return;
    setTimeout(() => {
      contactCard.classList.add('pulse-highlight');
      setTimeout(() => contactCard.classList.remove('pulse-highlight'), 1800);
    }, 400);
  });
}

// ===========================================================
// Header - mijenja izgled kad se skrola preko heroja
// ===========================================================
const siteHeaderEl = document.querySelector('.site-header');
function updateHeaderOnScroll() {
  if (!siteHeaderEl) return;
  if (window.scrollY > 40) {
    siteHeaderEl.classList.add('is-scrolled');
  } else {
    siteHeaderEl.classList.remove('is-scrolled');
  }
}
window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

// ===========================================================
// Mobilni izbornik
// ===========================================================
const navToggle = document.getElementById('navToggle');
const siteHeader = document.querySelector('.site-header');
const navBackdrop = document.getElementById('navBackdrop');

function closeMobileMenu() {
  siteHeader.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = siteHeader.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

if (navBackdrop) {
  navBackdrop.addEventListener('click', closeMobileMenu);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteHeader.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

// ===========================================================
// Hero — rotacija fotografija
// ===========================================================
const heroPhotos = document.querySelectorAll('#heroPhotos .hero-photo');
let heroIndex = 0;

if (heroPhotos.length > 1) {
  setInterval(() => {
    heroPhotos[heroIndex].classList.remove('is-active');
    heroIndex = (heroIndex + 1) % heroPhotos.length;
    heroPhotos[heroIndex].classList.add('is-active');
  }, 4200);
}

// ===========================================================
// Kartica "Automobili" — rotacija prije/poslije fotki
// ===========================================================
const autoPhotos = document.querySelectorAll('#autoRotator .service-photo');
let autoIndex = 0;

if (autoPhotos.length > 1) {
  setInterval(() => {
    autoPhotos[autoIndex].classList.remove('is-active');
    autoIndex = (autoIndex + 1) % autoPhotos.length;
    autoPhotos[autoIndex].classList.add('is-active');
  }, 4000);
}

// ===========================================================
// Video u kartici "Namještaj" — sporija reprodukcija
// ===========================================================
const sofaVideo = document.querySelector('.service-card video');
if (sofaVideo) {
  sofaVideo.addEventListener('loadedmetadata', () => {
    sofaVideo.playbackRate = 0.6;
  });
  sofaVideo.playbackRate = 0.6;
}

// ===========================================================
// Nazad na vrh
// ===========================================================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  function updateBackToTop() {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  updateBackToTop();
}
