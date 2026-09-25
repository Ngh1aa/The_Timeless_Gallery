# FinFlow — Figma conversion pack

This folder contains **19 standalone static HTML frames** optimized for HTML → Figma conversion.

## Conversion-safe rules
- **Inter only**: 400 / 500 / 600 / 700.
- Every heading, label, metric and operational datum is real HTML text.
- No Inter Tight.
- No IBM Plex Mono.
- No SVG text inside the 19 standalone frames.
- No canvas-rendered text.
- No CSS-generated content for meaningful copy.
- No JavaScript injection is required by the 19 standalone frames.
- Each frame has its own direct GitHub Pages URL.
- The FinFlow symbol remains an image asset by design; the FinFlow wordmark beside it is HTML text.

## Entry point
Open `/figma-pack/` to see the full 19-frame hub, then convert each standalone page separately.

## Recommended conversion workflow
1. Open a standalone frame URL.
2. Confirm Inter is loaded.
3. Convert that URL with the HTML → Figma tool.
4. In Figma, verify headings, labels and operational values are text layers.
5. If any copy is rasterized, make sure the converter is not importing the SVG ad asset or a screenshot of the page.

The main FinFlow landing and ad-preview page are also normalized to Inter so typography stays consistent across handoff surfaces.
