/**
 * Gedeelde submit-logica voor alle .offerte-form formulieren.
 * data-endpoint leeg → mailto-fallback; gevuld → POST als JSON
 * (bijv. naar een n8n-webhook of Formspree).
 */
export function initForms() {
  for (const form of document.querySelectorAll<HTMLFormElement>('.offerte-form')) {
    if (form.dataset.bound) continue;
    form.dataset.bound = '1';
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector<HTMLElement>('.form-status');
      const show = (msg: string, ok: boolean) => {
        if (!status) return;
        status.textContent = msg;
        status.classList.remove('hidden');
        status.classList.toggle('bg-pine-100', ok);
        status.classList.toggle('text-pine-900', ok);
        status.classList.toggle('bg-red-50', !ok);
        status.classList.toggle('text-red-800', !ok);
      };
      if (!form.reportValidity()) return;
      const fd = new FormData(form);
      const data: Record<string, string> = {};
      for (const [k, v] of fd.entries()) data[k] = String(v);
      const hulp = fd.getAll('hulp');
      if (hulp.length) data.hulp = hulp.join(', ');
      data.pagina = location.pathname;

      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        const body = Object.entries(data)
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n');
        location.href = `mailto:info@ddenergie.nl?subject=${encodeURIComponent(
          'Aanvraag via ddenergie.nl'
        )}&body=${encodeURIComponent(body)}`;
        show('Je e-mailprogramma opent met de aanvraag. Versturen = klaar!', true);
        return;
      }
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        show('Bedankt! We nemen binnen 1 werkdag contact met je op.', true);
      } catch {
        show('Versturen lukte niet. Bel ons op 085 060 8951 of mail info@ddenergie.nl.', false);
      }
    });
  }
}

initForms();
