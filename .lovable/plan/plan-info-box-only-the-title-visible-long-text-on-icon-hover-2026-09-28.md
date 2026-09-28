# Plan: Info box — only the title visible, long text on icon hover

## What changes

In `src/routes/oferta.tsx` (the info box under the preview panel, ~lines 952–958):

1. **Visible by default:** only the title text — changed to `To wizualizacja poglądowa` — next to the info icon.
2. **Hover reveal:** the longer sentence ("Twoja figurka zostanie zaprojektowana na podstawie przesłanych zdjęć. Jej wygląd, szczegóły i proporcje będą indywidualne.") disappears from the box and appears when the user hovers (or taps for focus) over the info icon, shown as a small rounded bubble (tooltip) near the icon.
3. **Smaller box:** since the paragraph is hidden by default, the box collapses to a single slim row (keeping the existing 5px vertical padding style).

## How

- Reuse the existing shadcn `Tooltip` component (`src/components/ui/tooltip.tsx`, Radix-based): wrap the info icon in `TooltipProvider`/`Tooltip`/`TooltipTrigger`/`TooltipContent`; put the long text inside `TooltipContent`.
- Keep the current icon and muted styling so the box matches the rest of the page.
- The `Info` icon stays `text-primary`; the bubble uses the card background with a border, sized to a max width (~260px) so it doesn't cover the preview.

## Notes

- On touch devices (no hover), tapping the icon opens/closes the bubble — the shadcn tooltip handles focus/tap reasonably; hover is the primary trigger per the request.
- No other sections or pricing logic are touched; the preview panel and the rest of `/oferta` remain unchanged.
