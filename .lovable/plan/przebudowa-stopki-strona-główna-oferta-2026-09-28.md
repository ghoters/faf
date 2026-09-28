# Przebudowa stopki (strona główna + /oferta)

Wspólny komponent `src/components/SiteFooter.tsx` jest używany na obu stronach, więc jedna zmiana obejmuje wszystkie.

## Docelowy układ (na podstawie załączonej grafiki)

```
[logo prezent3d.com]        Strona główna  Oferta  Galeria  Jak to działa?  Cennik  FAQ      [✉] prezent3d@gmail.com
[Personalizowane figurki…                                                              [◎] prezent3D.com
```

- Linki podstron przesunięte w dół tak, aby były na wysokości napisu "prezent3d.com" (wyśrodkowane w pionie względem bloku logo).
- Usunięte: pole newslettera z przyciskiem strzałki oraz ikona YouTube.
- Po prawej, w pionie:
  1. ikona koperty (Mail) + tekst `prezent3d@gmail.com`,
  2. pod nią ikona Instagrama + tekst `prezent3D.com`.
- Dolny pasek bez zmian: "© 2026 prezent3d.pl. Wszelkie prawa zastrzeżone." oraz "Polityka prywatności / Regulamin".
- Na urządzeniach mobilnych kolumny układają się jedna pod drugą (istniejące zachowanie `md:` breakpointu).

## Uwaga do adresu e-mail

W wiadomości wpisano `prezent3d@gmai.com`, ale na grafice widnieje `prezent3d@gmail.com` — przyjmuję wersję z grafiki (gmail.com).

## Pliki

- `src/components/SiteFooter.tsx` — jedyna edytowana struktura: usunięcie bloku newslettera i YouTube, nowa prawa kolumna (mail + instagram z tekstami), wyrównanie pionowe `items-center` zamiast `items-start`.

Brak zmian w logice, treściach stron czy innych komponentach.
