# Pasek „To wizualizacja poglądowa" — wersja subtelna

## Co zmieniamy

Dolny pasek pod grafiką ma stać się bliźniakiem górnego paska na zdjęciu: ten sam spokojny, cichy styl, tak żeby nie odciągał wzroku od figurki.

1. **Tło paska** — jak u góry: `bg-muted/40` z lekkim rozmyciem (`backdrop-blur-sm`), zamiast obecnego mocniejszego wypełnienia. Obrys karty bez zmian (pasek nadal domyka boks od dołu).
2. **Tekst** — zamiast dużego, pogrubionego, ciemnego napisu: dokładnie ta sama typografia co u góry, czyli drobny wersalik z rozstrzelaniem w stonowanym kolorze (`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`).
3. **Ikona „i"** — fioletowy pierścień zamieniamy na cienką neutralną obwódkę (`border-border text-muted-foreground`), a sama ikona jest mniejsza. Fiolet pojawia się dopiero po najechaniu myszką, więc w spoczynku nic nie świeci na fioletowo.
4. **Fale przy ikonie** — zostają w obecnym tempie (6 s), ale wyraźnie cichsze: `bg-primary/40` → `bg-primary/20`, dzięki czemu nie przyciągają uwagi migającym fioletem.
5. **Bez zmian**: przyklejenie paska do grafiki, odstęp 5 px od tekstu do górnej i dolnej krawędzi, tooltip z opisem po najechaniu, treść napisów.

## Szczegóły techniczne

- Plik: `src/routes/oferta.tsx` — wiersze 952–967 (klasy paska, ikony, akapitu).
- Kolory wyłącznie tokenami motywu: `bg-muted/40`, `border-border`, `text-muted-foreground`, `text-primary`, `bg-primary/20`.
- Żeby zasada 5 px została zachowana także przy mniejszym tekście, wiersz napisu i ikona będą miały tę samą wysokość (14 px) — wtedy to one wyznaczają wysokość paska, a padding 5 px liczy się dokładnie od tekstu.
- Po edycji: pomiar w przeglądarce (odstęp od tekstu do krawędzi paska = 5 px), zrzut ekranu paska i porównanie z górnym paskiem, konsola bez błędów.
