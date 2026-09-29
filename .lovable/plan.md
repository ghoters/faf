# Ekran „Dane i zamówienie” po konfiguratorze

## Cel
Po kliknięciu „Przejdź dalej” na `/oferta` użytkownik przejdzie na osobną podstronę zamówienia wzorowaną na załączonej grafice. Nowy ekran zachowa font Manrope, rozmiary tekstu, szerokości treści oraz istniejący nagłówek i stopkę prezent3d.com.

## Zakres
- Utworzyć podstronę zamówienia z własnymi metadanymi i podłączyć do niej przycisk „Przejdź dalej”.
- Przenieść na nią bieżącą konfigurację: osoby/zwierzęta, rozmiar, wykończenie, podstawkę, opakowanie, liczbę zdjęć, dodatkowe opisy i wyliczoną cenę.
- Zachować konfigurację również po użyciu „Edytuj konfigurację” i powrocie do `/oferta`.
- Nie pozwalać przejść dalej, dopóki wymagane kroki konfiguratora i zdjęcia nie są uzupełnione.

## Układ nowej podstrony
- Nagłówek „Skończ konfigurację. Złóż zamówienie!” i pasek etapów jak na grafice.
- Lewa kolumna:
  1. dane kontaktowe: imię i nazwisko, e-mail, telefon oraz opcjonalne „Utwórz konto”,
  2. dostawa: Paczkomat albo kurier wraz z odpowiednimi polami wyboru,
  3. dodatkowe informacje z licznikiem znaków,
  4. zgody: obowiązkowa akceptacja regulaminu i polityki prywatności oraz opcjonalna zgoda na portfolio.
- Prawa kolumna:
  - dotychczasowy obraz podglądu figurki,
  - rzeczywiste podsumowanie konfiguracji,
  - szczegóły ceny z doliczoną wybraną dostawą,
  - przewidywany czas realizacji,
  - przycisk „Przejdź do płatności”.
- Na telefonie prawa kolumna przejdzie pod formularz, bez utraty czytelności i bez zmian stylistycznych względem obecnej strony.

## Działanie formularza
- Walidować wymagane dane kontaktowe, wybór/pola dostawy i obowiązkową zgodę; błędy pokazywać przy konkretnych polach.
- Zmiana dostawy od razu zaktualizuje cenę końcową.
- „Edytuj konfigurację” wróci do konfiguratora bez kasowania wyborów.
- Przycisk płatności zakończy ten etap dopiero po poprawnej walidacji; sama płatność, zapis zamówienia i wysłanie go do obsługi nie są częścią tego zakresu.
- Opcja „Utwórz konto” zostanie przygotowana jako wybór formularza, ale na tym etapie nie utworzy konta.

## Szczegóły techniczne
- Wydzielić współdzielony nagłówek, aby `/`, `/oferta` i nowa podstrona miały identyczne ułożenie.
- Wydzielić typ danych konfiguracji i wspólny mechanizm stanu po stronie przeglądarki, używany przez konfigurator oraz zamówienie.
- Użyć istniejących tokenów kolorów, komponentów formularza i grafiki podglądu; załączony zrzut jest wyłącznie wzorem układu.
- Zweryfikować przejście oferta → zamówienie → edycja konfiguracji, walidację, przeliczanie ceny oraz widok desktopowy i mobilny.
