# Mechanika ceny zależna od rozmiaru

## Cel
Dopłata za każdą dodatkową osobę/zwierzę ma zależeć od wybranego rozmiaru figurki i przeliczać się dynamicznie przy zmianie rozmiaru.

## Zasady cenowe
- 1. osoba: 180 zł (bez zmian)
- Rozmiar: 15 cm +0 zł, 20 cm +40 zł, 25 cm +80 zł (bez zmian)
- Każda dodatkowa osoba LUB zwierzę:
  - rozmiar 15 cm lub rozmiar jeszcze niewybrany: +80 zł (jak dotychczas)
  - rozmiar 20 cm: +10 zł
  - rozmiar 25 cm: +20 zł
- Zmiana rozmiaru natychmiast przelicza cenę dodatkowych postaci
- Wszystko inne (wykończenie, podstawka, opakowanie, własny element) bez zmian

## Zmiany w kodzie (src/routes/oferta.tsx)
1. Wydzielić ceny do stałych na górze pliku, żeby łatwo je było zmieniać bez ruszania mechaniki:
   - `BASE_PERSON_PRICE = 180`
   - `EXTRA_SUBJECT_PRICE = { default: 80, "20": 10, "25": 20 }`
2. Wyliczać dopłatę za dodatkową postać na podstawie wybranego rozmiaru:
   - `extraPrice = EXTRA_SUBJECT_PRICE[size] ?? EXTRA_SUBJECT_PRICE.default`
3. Zastosować tę samą dopłatę dla osób i zwierząt:
   - `peoplePrice = BASE_PERSON_PRICE + extraPrice * (personCount - 1)`
   - `animalPrice = extraPrice * animalCount`
4. Zaktualizować etykiety cenowe w kafelkach „Osoba" i „Zwierzę", aby pokazywały aktualną dopłatę zgodnie z wybranym rozmiarem (np. „każda kolejna + 10 zł" przy 20 cm).
5. Reszta podsumowania (`total`) zostaje bez zmian — korzysta już z `subjectPrice`.

## Weryfikacja
- 1 osoba, 20 cm: 180 + 40 = 220 zł
- 2 osoby, 20 cm: 180 + 10 + 40 = 230 zł
- 2 osoby + 1 zwierzę, 25 cm: 180 + 20 + 20 + 80 = 300 zł
- 2 osoby, 15 cm: 180 + 80 = 260 zł (bez zmian)
- Sprawdzenie w podglądzie (Playwright), że zmiana rozmiaru przelicza cenę na żywo.
