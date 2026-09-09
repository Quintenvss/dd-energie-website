/**
 * Multi-step funnel: één vraag per stap, automatisch door na een keuze,
 * contactstap als laatste. Lead gaat als JSON naar data-endpoint (n8n-webhook
 * of ander endpoint). Zonder endpoint opent een voorgevulde e-mail.
 *
 * Gebeurtenissen voor GTM/GA4 via window.dataLayer:
 *   funnel_start, funnel_step (step, total), lead_submitted
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
const UTM_STORAGE = 'weheat_utm';

type Layer = Array<Record<string, unknown>>;
function track(event: string, data: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: Layer };
  (w.dataLayer ||= []).push({ event, ...data });
}

/** UTM-parameters bewaren voor de sessie, zodat ze ook na doorklikken meegaan. */
function rememberUtm() {
  try {
    const params = new URLSearchParams(location.search);
    const found: Record<string, string> = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) found[k] = v;
    }
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORAGE, JSON.stringify(found));
  } catch {
    /* sessionStorage niet beschikbaar */
  }
}
function recallUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE) ?? '{}');
  } catch {
    return {};
  }
}

function initFunnel(form: HTMLFormElement) {
  if (form.dataset.bound) return;
  form.dataset.bound = '1';

  const steps = Array.from(form.querySelectorAll<HTMLFieldSetElement>('.funnel-step'));
  const total = steps.length;
  const progress = form.querySelector<HTMLElement>('[data-progress]');
  const label = form.querySelector<HTMLElement>('[data-step-label]');
  const status = form.querySelector<HTMLElement>('.funnel-status');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');
  const siteKey = form.dataset.site ?? '';
  let current = 0;
  let started = false;

  const setStatus = (msg: string, ok: boolean) => {
    if (!status) return;
    status.textContent = msg;
    status.classList.remove('hidden');
    status.classList.toggle('bg-soft', ok);
    status.classList.toggle('text-ink', ok);
    status.classList.toggle('bg-red-50', !ok);
    status.classList.toggle('text-red-800', !ok);
  };
  const clearStatus = () => status?.classList.add('hidden');

  const show = (index: number) => {
    current = Math.max(0, Math.min(total - 1, index));
    steps.forEach((s, i) => {
      s.hidden = i !== current;
    });
    if (progress) progress.style.width = `${((current + 1) / total) * 100}%`;
    if (label) label.textContent = `Stap ${current + 1} van ${total}`;
    clearStatus();
    // Op de contactstap direct het eerste veld focussen
    const first = steps[current].querySelector<HTMLInputElement>('input:not([type="radio"])');
    if (first && current === total - 1) first.focus({ preventScroll: true });
    track('funnel_step', { site: siteKey, step: current + 1, total });
  };

  const stepValid = (index: number) => {
    const step = steps[index];
    const radios = step.querySelectorAll<HTMLInputElement>('input[type="radio"][required]');
    if (radios.length) {
      const names = new Set(Array.from(radios).map((r) => r.name));
      for (const n of names) {
        if (!step.querySelector(`input[name="${n}"]:checked`)) return false;
      }
    }
    const fields = step.querySelectorAll<HTMLInputElement>('input:not([type="radio"])');
    for (const f of fields) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!stepValid(current)) {
      setStatus('Kies een optie om verder te gaan.', false);
      return;
    }
    show(current + 1);
  };

  form.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-next]')) next();
    if (t.closest('[data-back]')) show(current - 1);
  });

  form.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement;
    if (!started) {
      started = true;
      track('funnel_start', { site: siteKey });
    }
    if (t.type === 'radio' && current < total - 1) {
      // Kort wachten zodat de gebruiker de selectie ziet
      window.setTimeout(() => {
        if (current < total - 1) next();
      }, 220);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!stepValid(current)) return;

    const fd = new FormData(form);
    const thanks = form.dataset.thanks ?? '/bedankt/';

    // Honeypot: bots vullen het verborgen veld; doe alsof het gelukt is.
    if (fd.get('website')) {
      location.href = thanks;
      return;
    }

    const data: Record<string, string> = {};
    fd.forEach((v, k) => {
      if (k !== 'website') data[k] = String(v).trim();
    });
    Object.assign(data, recallUtm());
    data.site = siteKey;
    data.domein = form.dataset.domain ?? location.hostname;
    data.pagina = location.href;
    data.verwijzer = document.referrer;
    data.verzonden_op = new Date().toISOString();

    const endpoint = form.dataset.endpoint;
    const originalLabel = submitBtn?.textContent ?? '';
    const busy = (on: boolean) => {
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.textContent = on ? 'Versturen…' : originalLabel;
    };

    if (!endpoint) {
      const body = Object.entries(data)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      const to = form.dataset.fallback ?? '';
      location.href = `mailto:${to}?subject=${encodeURIComponent(`Aanvraag via ${data.domein}`)}&body=${encodeURIComponent(body)}`;
      setStatus('Je e-mailprogramma opent met de aanvraag. Versturen = klaar!', true);
      return;
    }

    busy(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      track('lead_submitted', { site: siteKey });
      location.href = thanks;
    } catch {
      busy(false);
      setStatus(
        `Versturen lukte niet. Probeer het opnieuw of bel ${form.dataset.phone ?? 'ons'}.`,
        false
      );
    }
  });

  show(0);
}

rememberUtm();
document.querySelectorAll<HTMLFormElement>('form.funnel').forEach(initFunnel);
