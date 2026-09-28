# Nakładka na podglądzie — styl „Violet accent minimal"

## Co zmieniamy

Panel podglądu figurki na `/oferta` — nakładka nad grafiką przenosi się na samą górną krawędź i wyrównuje w jednej linii:

1. **Pasek u samej góry**: wąski poziomy pasek przyklejony do górnej krawędzi obrazka (bez odstępu), półprzezroczyste jasne tło z lekkim rozmyciem, cienka dolna linia oddzielająca od grafiki.
2. **Napis „Wizualizacja przykładowa"**: po lewej, wyraźnie mniejszy niż obecnie — drobny tekst wersalikami z rozstrzelaniem, stonowany kolor tekstu, poprzedzony małą fioletową kropką jako akcentem.
3. **Znaczek „Poglądowy"**: po prawej, fioletowa pigułka w delikatnym wydaniu — jasne fioletowe tło, fioletowy tekst, cienka fioletowa obwódka, jeszcze mniejsza czcionka (wersaliki).

Całość pozostaje dyskretna: nie zasłania figurki, teksty bez zmian, bez nowych funkcji.

## Szczegóły techniczne

- Plik: `src/routes/oferta.tsx` — przebudowa warstwy nakładki nad `<img>` w panelu podglądu (absolute, `top-0 inset-x-0`).
- Kolory wyłącznie tokenami motywu: tło paska `bg-background/95` + `backdrop-blur`, linia `border-border`, napis `text-muted-foreground`, kropka i znaczek `text-primary`, `bg-primary/10`, `border-primary/20`.
- Po wdrożeniu: zrzut ekranu panelu w podglądzie, aby potwierdzić, że pasek leży równo przy górze i całość jest cicha wizualnie.
