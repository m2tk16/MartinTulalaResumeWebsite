const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  const label = menuButton?.querySelector('.sr-only');
  if (label) label.textContent = 'Open navigation';
}

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  nav.classList.toggle('is-open', willOpen);
  menuButton.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${visible.target.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-28% 0px -58%', threshold: [0, .1, .3] });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

document.querySelectorAll('img[data-fallback]').forEach((image) => {
  const showFallback = () => image.classList.add('is-missing');
  image.addEventListener('error', showFallback);
  if (image.complete && image.naturalWidth === 0) showFallback();
});

document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
document.querySelector('[data-year]').textContent = new Date().getFullYear();

const today = new Date();
const amazonAnniversary = new Date(today.getFullYear(), 6, 14);
const amazonYears = today.getFullYear() - 2014 - (today < amazonAnniversary ? 1 : 0);
document.querySelectorAll('[data-amazon-years]').forEach((item) => {
  item.textContent = amazonYears;
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`);
  form.querySelector('.form-note').textContent = 'Opening your email app…';
  window.location.href = `mailto:m2tk16@gmail.com?subject=${subject}&body=${body}`;
});
