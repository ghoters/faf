<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the imported `prezent3d.com` frontend at `/` and `/oferta` pixel-for-pixel; the GitHub source is authoritative because this project is a visual recreation.
- Ripple/"fale" rings use `border ripple-ring` (the `--ripple-ring` token), never `border-primary/50`: `--primary` is outside the sRGB gamut and Chromium paints coloured specks on scale-animated wide-gamut borders.
- Keep the shared site navigation in `SiteHeader` and pass the active section explicitly, so `/`, `/oferta`, and later checkout pages stay visually aligned.

