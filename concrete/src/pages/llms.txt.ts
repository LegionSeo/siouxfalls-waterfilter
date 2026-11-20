import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { SERVICES } from '../content/services';
import { TOWNS } from '../content/towns';
export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> Concrete contractor in Sioux Falls, South Dakota. Phone ${SITE.phoneDisplay}.`,
    '',
    '## Services',
    ...SERVICES.map((s) => `- [${s.name}](${SITE.origin}/services/${s.slug}): ${s.summary}`),
    '',
    '## Service area',
    `- [Sioux Falls](${SITE.origin}/)`,
    ...TOWNS.map((t) => `- [${t.name}](${SITE.origin}/areas/${t.slug})`),
    '',
    '## Guides',
    `- [Sioux Falls sidewalk repair rules](${SITE.origin}/guides/sioux-falls-sidewalk-repair)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
