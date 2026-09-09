/**
 * Kleine UI-helpers: reveal-animaties bij scrollen en de sticky CTA-balk
 * verbergen zodra het aanvraagformulier in beeld is.
 */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

const sticky = document.querySelector<HTMLElement>('[data-sticky-cta]');
const form = document.getElementById('aanvraag');
if (sticky && form && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    (entries) => {
      for (const e of entries) sticky.classList.toggle('is-hidden', e.isIntersecting);
    },
    { threshold: 0.15 }
  ).observe(form);
}
