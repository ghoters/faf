# Przebudowa boksów podglądu w konfiguratorze (/oferta)

## Cel
Usunąć dodane opakowanie wokół podglądu i układ wyrównać do stanu sprzed zmian: grafika duża i na górze boksua podglądu, nagłówek i plakietka na grafice, notka informacyjna większa, w tle kolor poprzedniego opakowania.

## Zakres zmian (tylko panel podglądu w `src/routes/oferta.tsx`)

1. **Usunięcie tła/opakowania**
   - Zniknie zewnętrzny kontener `rounded-xl border border-border bg-muted/50 p-4` oraz wiersz nagłówka nad grafiką.

2. **Duży boks z grafiką (placeholder)**
   - Grafika wraca na samą górę panelu — jej górna krawędź zaczyna się dokładnie tak jak przed zmianami (pierwszy element w panelu, bez dodatkowego nagłówka nad nią).
   - Boks jest powiększony: pełna szerokość panelu, wyższe proporcje jak w pierwotnym układzie (aspect 1.12 zamiast 1.3).

3. **Nagłówek i plakietka NA grafice**
   - „Podgląd figurki” oraz „Poglądowy” nakładane są na zdjęcie (position absolute wewnątrz boksua z grafiką):
     - nagłówek w lewym górnym rogu, plakietka w prawym górnym rogu,
     - biały tekst z subtelnym cieniem, plakietka jako półprzezroczysta jasna pigułka, żeby były czytelne na zdjęciu.

4. **Boks „To wizualizacja przykładowa…”**
   - Większy: większy padding i czytelniejszy tekst (tak jak boks w wersji ciemnej).
   - Tło zmienione na kolor, który ma obecnie usuwane opakowanie podglądu (`bg-muted/50` z jasnym obramowaniem) — tekst ciemny, ikona fioletowa.

## Bez zmian
- Podsumowanie konfiguracji, cena, przycisk „Przejdź dalej” — bez zmian.
- Pozostałe strony i sekcje — bez zmian.

## Weryfikacja
- Build + zrzut ekranu panelu w przeglądarce: grafika na samej górze, napisy na zdjęciu, powiększona notka w tle `bg-muted/50`.
