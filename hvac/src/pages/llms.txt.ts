import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { services } from '../content/services';
import { towns } from '../content/towns';

export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> Heating and cooling service in Sioux Falls, SD and nearby towns. Phone ${SITE.phoneDisplay}.`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${SITE.origin}/services/${s.slug}): ${s.short}`),
    '',
    '## Service area',
    `- [Sioux Falls](${SITE.origin})`,
    ...towns.map((t) => `- [${t.name}](${SITE.origin}/areas/${t.slug}): ${t.county}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
