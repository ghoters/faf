# Dodatkowa linia po kroku „Zdjęcia i zamówienie”

## Cel
W pasku kroków konfiguratora na górze dodać linię przejścia także PO ostatnim kroku „Zdjęcia i zamówienie”, tak aby kończyła się dokładnie na wysokości (w linii) prawej krawędzi boksu wizualizacji figurki w panelu podglądu.

## Obecny stan
- Pasek kroków (`src/routes/oferta.tsx`, ok. linia 615) renderuje linie tylko MIĘDZY krokami (`index < progressSteps.length - 1`), więc po kroku 6 nic nie ma — etykieta „Zdjęcia i zamówienie” kończy się w powietrzu.
- Boks wizualizacji (grafika „Podgląd figurki” z nagłówkiem „Wizualizacja przykładowa”) jest wciśnięty o ~21 px od prawej krawędzi kontenera (padding panelu podglądu `p-5` + obramowanie), więc zwykła linia „do końca paska” wystawałaby ok. 21 px za jego krawędź.

## Zmiana (tylko pasek kroków w `src/routes/oferta.tsx`)

1. Dla ostatniego kroku (index 5) dodać za etykietą „Zdjęcia i zamówienie” linię o tych samych klasach co istniejące przejścia: `ml-px mr-px block h-px flex-1 bg-border`.
2. Za tą linią dodać wąski element wyrównujący (ok. 21 px), dzięki któremu koniec linii zatrzyma się dokładnie na prawej krawędzi boksu wizualizacji, a nie na samej krawędzi kontenera.
3. Linia widoczna tylko w układzie z 6 kolumnami (`hidden lg:block`) — przy 2/3 kolumnach na tabletach i telefonie ostatni krok i tak kończy rząd, więc linia nie jest potrzebna.

## Bez zmian
- Kolory, odległości i wygląd istniejących linii między krokami 1–6 — bez zmian.
- Panel podglądu, podsumowanie, cena, przycisk — bez zmian.
- Inne strony — bez zmian.

## Weryfikacja
- Zrzut ekranu góry strony: linia po „Zdjęcia i zamówienie” kończy się w jednej linii (pionowo wyrównana) z prawą krawędzią grafiki podglądu; build bez błędów.
