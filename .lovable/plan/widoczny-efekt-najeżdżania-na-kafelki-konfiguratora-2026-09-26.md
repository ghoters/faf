# Widoczny efekt najeżdżania na kafelki konfiguratora

## Problem

Na `/oferta` kafelki wyboru mają zdefiniowany efekt hover (`hover:bg-accent`), ale w prawie wszystkich kafelkach tło to zdjęcie wypełniające cały kafelek — kolor hover jest pod spodem i nic nie widać. Zaznaczony kafelek oraz kafelki w zablokowanych krokach poprawnie nie reagują.

## Cel (zgodnie z prośbą użytkownika)

- Najeżdżanie działa i jest widoczne na każdym odblokowanym kafelku **innym niż aktualnie zaznaczony** (także w krokach już wypełnionych).
- Kafelki w zablokowanych krokach pozostają niereagujące na kursor.
- Zaznaczony kafelek i kafelek „Osoba" (zablokowany domyślny wybór) pozostają bez efektu hover.

## Wybrany efekt (decyzja użytkownika: połączenie „przyciemnienie + obramowanie")

Po najechaniu na odblokowany, niezaznaczony kafelek:

1. **Przyciemnienie/rozjaśnienie tła** — półprzezroczysty nalot w kolorze `accent` nad zdjęciem (dla kafelków ze zdjęciem w tle) oraz istniejące `hover:bg-accent` dla kafelków bez zdjęcia w tle — spójny wygląd obu typów.
2. **Subtelna zmiana obramowania** — ramka przyjmuje kolor `primary` z obniżoną kryciem (lżejsze niż przy zaznaczeniu, które ma pełne obramowanie i pierścień).

Przejście animowane (transition), kursor pozostaje `pointer`.

## Zakres zmian

Plik: `src/routes/oferta.tsx` — tylko komponenty `ChoiceCard` i `CompactChoice`.

- `ChoiceCard`: gdy `hoverable`, dokleić `hover:border-primary/40` do kontenera oraz renderować warstwę nakładki `absolute inset-0` nad zdjęciem w tle (z `pointer-events-none`, `group-hover:bg-accent/55`), aby hover był widoczny mimo zdjęcia.
- `CompactChoice`: analogicznie — `hover:border-primary/40` przy `hoverable` oraz warstwa nakładki nad zdjęciem w tle.
- Nie zmieniać: logiki kroków, cen, treści, layoutu, pozostałych efektów hover (kolor graweru, przyciski itd.).
- Nie przenosić tej zmiany do pozostałych stron — dotyczy wyłącznie konfiguratora.

## Uwaga wobec zasady 1:1 ze źródłem

Repozytorium referencyjne ma identyczny kod i również niewidoczny hover. Ta zmiana to świadome odstępstwo zażądane przez użytkownika — pozostała część interfejsu pozostaje wierna źródłu.

## Weryfikacja (Playwright)

- Najechanie na „Zwierzę", „20 cm", „Figurka ręcznie malowana", „Personalizowana", „Pudełko prezentowe" → widoczna zmiana (nalot + ramka), zrzuty ekranu przed/po.
- Najechanie na zaznaczony kafelek i kafelki w zablokowanych krokach → brak zmiany wizualnej.
- Sprawdzenie na szerokościach 1280 / 834 / 390 px.
