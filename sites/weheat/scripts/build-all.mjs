/**
 * Bouwt alle drie de sites achter elkaar naar dist/<domein>/.
 * Gebruik: npm run build
 */
import { spawnSync } from 'node:child_process';
import { sites } from '../sites.mjs';

for (const key of Object.keys(sites)) {
  console.log(`\n▶ Build ${key} → dist/${sites[key].domain}/\n`);
  const result = spawnSync('npx astro build', {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, SITE: key },
  });
  if (result.status !== 0) {
    console.error(`\n✖ Build van ${key} mislukt.`);
    process.exit(result.status ?? 1);
  }
}
console.log('\n✔ Alle sites gebouwd.');
