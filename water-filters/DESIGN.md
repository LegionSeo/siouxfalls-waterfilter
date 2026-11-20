# Sioux Falls Water Filters: design system

Bright, clean and trustworthy, like a well run local service company. Real photos, white space and one strong call color.
Keep it clearly different from Sioux Falls Water Filtration (dark navy, full bleed dark photo hero, mint buttons, Inter).

Direction note: UXKIN reference sites were not reachable when this was written, so this direction comes from the brief and common patterns of local home service sites, not from a set of compared examples.

## Colors

| Token | Hex | Role |
|---|---|---|
| canvas | #ffffff | Page background, cards |
| soft | #f2f6f9 | Hero and alternate section bands |
| tint | #e5effa | Icon chips, meter tracks, photo placeholders |
| line | #dce4ec | Borders and dividers |
| ink | #0f1e2e | Headings, footer background |
| text | #2b3947 | Body copy |
| muted | #566879 | Secondary copy (5.6:1 on white) |
| brand | #1558c4 | Links, icons, step numbers, secondary buttons |
| brand-deep | #0e408f | Hover for brand, closing call band, calculator result |
| accent | #c2410c | Call buttons and the "hard water" mark only (white text 5.2:1) |
| accent-deep | #9a3412 | Hover for accent, warning text |
| accent-soft | #fdede4 | Highlight row for the free water test |

Orange means "call". Never use it for decoration or large fills.

## Type

- One family: Plus Jakarta Sans Variable.
- H1 clamps 38px to 64px, weight 800, tracking -0.032em, line height 1.04. Keep the home H1 under 13ch.
- H2 clamps 30px to 44px, weight 800. H3 20px, weight 700.
- Body 17px, line height 1.65. Lede 19px in muted.
- Small labels are sentence case in brand blue. No all caps labels.

## Spacing and shape

- Content width 72rem with a 20px gutter. Sections use `band`: 72px on phones, 104px on desktop.
- Buttons: 10px radius, 52px tall minimum, bold. Call is solid orange with a soft orange shadow. Secondary is white with a 1.5px line border that turns blue on hover.
- Cards and lists: 16px radius, 1px line border, no resting shadow.
- Photos: 24px to 28px radius. Floating panels get one deep shadow: 0 30px 60px -28px ink at 55%.

## Signature pieces

- Split hero: big H1 on the left, tall kitchen tap photo on the right.
- Water card: a white panel that overlaps the hero photo with the city's hardness numbers as meter bars, an orange mark at 7 gpg where water counts as hard, and the source link. Every number needs a source.
- Trust strip of four plain facts under the hero.
- Problem list: one bordered list of rows (problem, usual fix, chevron), not a grid of cards.
- Services: one large photo card for whole house filters plus a list of the rest, with the free test row tinted orange.
- How it works: technician photo beside three numbered steps.
- Closing call band in brand-deep with a glass of water photo.

## Photos

- Real photos only, from Unsplash under the Unsplash License. Each photo page was checked. Credits live on the About page.
- Loaded from images.unsplash.com with srcset through the `Photo` component, with width and height set to avoid layout shift.
- No branded products in frame, no cartoon art.

## Call buttons

- One main action on every screen: Call, in orange.
- Header shows the full phone button on large screens and a short "Call now" button on tablets.
- Phones get a fixed bottom bar: Call now (wide, orange) plus Free test (white).

## Copy

Short sentences, common words, no dashes. Never invent reviews, licenses, years or stats.
