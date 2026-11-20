import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { services } from '../content/services';
import { towns } from '../content/towns';

export const GET: APIRoute = () => {
  const body = `# ${SITE.name}

> Whole house water filters, water softeners, reverse osmosis and well water systems for homes in ${SITE.city}, ${SITE.region} and nearby towns. Phone: ${SITE.phoneDisplay}.

## Services
${services.map((s) => `- [${s.name}](${SITE.origin}/${s.slug}): ${s.card}`).join('\n')}

## Areas
- [Sioux Falls](${SITE.origin})
${towns.map((t) => `- [${t.name}](${SITE.origin}/areas/${t.slug})`).join('\n')}

## Tools
- [Water softener size calculator](${SITE.origin}/softener-size-calculator)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
