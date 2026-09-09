/**
 * Registry van de drie conversiesites. Eén codebase, drie losse builds.
 * De SITE-omgevingsvariabele bepaalt welke site gebouwd wordt.
 *
 *   SITE=weheatofferte      → https://weheatofferte.nl      (thema "ember")
 *   SITE=weheatkopen        → https://weheatkopen.nl        (thema "tide")
 *   SITE=warmtepomp-weheat  → https://warmtepomp-weheat.nl  (thema "sky")
 */
export const sites = {
  weheatofferte: { domain: 'weheatofferte.nl', theme: 'ember', port: 4331 },
  weheatkopen: { domain: 'weheatkopen.nl', theme: 'mint', port: 4332 },
  'warmtepomp-weheat': { domain: 'warmtepomp-weheat.nl', theme: 'sky', port: 4333 },
};

export const DEFAULT_SITE = 'weheatofferte';

export function resolveSite(key = process.env.SITE) {
  const k = key && key in sites ? key : DEFAULT_SITE;
  return { key: k, ...sites[k] };
}
