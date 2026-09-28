# Podgląd figurki — nowy nagłówek i subtelny znaczek

## Co zmieniamy

W bocznym panelu podglądu (prawa kolumna na `/oferta`), na grafice figurki:

1. Nad grafiką wraca tekst nagłówka, ale z nową treścią: **„Wizualizacja przykładowa"** (zamiast usuniętego „Podgląd figurki").
2. Obok nagłówka wraca znaczek **„Poglądowy"**, ale w dużo spokojniejszym stylu, spójnym ze stroną:
   - półprzezroczyste, jasne tło z lekkim rozmyciem (blur), cienka obwódka w kolorze obramowania strony,
   - ciemny, stonowany kolor tekstu zamiast białego wyróżnienia,
   - bez mocnego cienia — znaczek ma być dyskretny, nie rzucający się w oczy.

## Szczegóły techniczne

- Plik: `src/routes/oferta.tsx` — przywracamy warstwę nakładki (absolute, top) nad `<img>` w panelu podglądu.
- Nagłówek: jasny tekst z delikatnym cieniem (jak wcześniej), bo leży na zdjęciu.
- Znaczek: klasy motywu strony (`bg-background/80 backdrop-blur`, `border-border`, `text-muted-foreground`), mniejsza czcionka niż dotychczas.
- Po edycji: sprawdzenie w podglądzie zrzutem ekranu panelu, że tekst i znaczek są dyskretne i nie zasłaniają figurki.
