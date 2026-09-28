# Wierne odtworzenie interfejsu prezent3d.com

## Zakres
- Przenieść bez zmian dwie wykryte strony: `/` oraz `/oferta`.
- Zachować pełną strukturę, polskie treści, obrazy, ikony, font Manrope, kolory, wymiary, odstępy, obramowania i cienie.
- Zachować nagłówek, sekcje strony głównej, stopkę oraz wszystkie elementy konfiguratora.
- Zachować obliczanie ceny, blokowanie kolejnych kroków, liczniki, pola tekstowe, wybory, reset, przesyłanie zdjęć i rozwijaną pomoc.

## Wykonanie
- Skopiować źródłowe strony, zasoby i warianty przycisków do obecnego projektu.
- Przenieść źródłowy system wizualny 1:1, łącznie z tokenami, breakpointami i regułami responsywnymi.
- Zachować metadane obu stron oraz polski język dokumentu.
- Nie dodawać nowych sekcji, funkcji ani zmian stylistycznych.

## Weryfikacja
- Sprawdzić stronę główną i konfigurator na desktopie, tablecie i telefonie.
- Porównać układ, widoczność elementów, obrazy, przyklejone paski oraz przejścia między krokami.
- Przetestować kluczowe interakcje konfiguratora i usunąć różnice lub błędy przed zakończeniem.

## Szczegóły techniczne
- Pozostawić docelowy stos TanStack Start, React 19 i Tailwind CSS 4, ponieważ źródło korzysta z tego samego stosu.
- Nie przenosić wygenerowanego drzewa tras ani metadanych repozytorium; zostaną odtworzone automatycznie w projekcie docelowym.
- Brak bazy danych, logowania i usług zewnętrznych wymagających migracji.
