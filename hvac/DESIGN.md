# Sioux Falls HVAC design

Direction: warm paper and deep slate, with heat (ember) and cold (frost) as the two accents. The signature is the range bar, a frost to ember gradient taken from the real Sioux Falls record low and record high. No purple, no glass, no gradient text. Made without outside reference sites (the UXKIN library was not connected).

## Color (tokens in src/styles/global.css)
| Token | Value | Role |
| --- | --- | --- |
| ink | #13202b | Headings, dark bands |
| body | #26323d | Body text |
| muted | #5b6670 | Secondary text (5.3:1 on paper) |
| line | #e2dbd0 | Borders |
| paper | #f7f4ef | Page background |
| card | #ffffff | Raised surfaces |
| ember | #b8321f | Call buttons, links, heating (6:1 on white) |
| ember-dark | #9a2716 | Hover |
| ember-soft | #fbe9e2 | Heating tint |
| ember-glow | #f97352 | Ember on dark (6:1 on ink) |
| frost | #1f5f8b | Cooling accents, focus ring |
| frost-soft | #e3eef5 | Cooling tint |
| frost-glow | #9fc9e6 | Frost on dark |

## Type
- Display: Bricolage Grotesque, 700 to 800, tight tracking. H1 42 to 60px, H2 30 to 36px, H3 18 to 24px.
- Body: Public Sans, 17px, line height 1.65, lines held to 65ch.
- Both self hosted with Fontsource.

## Spacing and shape
- Tailwind 4px scale. Sections 64 to 80px tall padding. Content width 72rem.
- Radius: 6px buttons, 10px small cards, 18px large cards and photos. One soft card shadow.

## Components
- Buttons: call (ember fill, white text), line (ink outline), light (on dark).
- Service lists split into Heating (ember tint) and Cooling (frost tint) panels.
- FAQ uses native details and summary.
- Sticky call bar on phones, call button in the header from 640px up.

## Imagery
Real Unsplash photos only, hotlinked from the Unsplash CDN, credited on the About page. Phosphor icons (bold). Replace photos with real job photos when the renter has them.
