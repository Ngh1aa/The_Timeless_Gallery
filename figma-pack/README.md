# FinFlow Figma conversion pack

This folder is optimized for HTML → Figma conversion.

## Conversion-safe rules
- Inter only: 400 / 500 / 600 / 700.
- Every heading and label is real HTML text.
- No SVG text.
- No canvas-rendered text.
- No CSS-generated text via pseudo-elements.
- No text inside background images.
- No dynamic JavaScript injection is required.
- Each of the 19 frames is a standalone static HTML file.
- The FinFlow mark remains an image asset by design; the FinFlow wordmark beside it is HTML text.

## Entry point
Open `/figma-pack/`, then convert each standalone page.
