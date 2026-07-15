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
document.querySelector('[data-count="amazon"]')?.replaceChildren(String(amazonYears));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--mouse-x', `${(event.clientX / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty('--mouse-y', `${(event.clientY / window.innerHeight) * 100}%`);
  }, { passive: true });
}

const contactEndpoint = 'https://xxcq7kabwi.execute-api.us-east-1.amazonaws.com/contact';

document.querySelector('#contact-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const note = form.querySelector('.form-note');
  const data = new FormData(form);

  button.disabled = true;
  note.classList.remove('is-success', 'is-error');
  note.textContent = 'Sending your message…';

  try {
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        website: data.get('website')
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.message || 'Message delivery failed.');

    form.reset();
    note.classList.add('is-success');
    note.textContent = result.message || 'Thanks. Your message has been sent.';
  } catch (error) {
    note.classList.add('is-error');
    note.textContent = error.message || 'Message delivery is temporarily unavailable. Please try again.';
  } finally {
    button.disabled = false;
  }
});
