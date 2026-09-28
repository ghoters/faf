# Fale przy strzałce „Potrzebujesz pomocy?"

Cel: pasek „Potrzebujesz pomocy?" ma wyglądać na klikalny i rozwijalny. Dodajemy przy strzałce w dół taką samą animację fal, jaką ma ikonka „i" w pasku pod grafiką konfiguratora – cienkie, fioletowe kółka rozchodzące się spokojnie na zewnątrz.

## Co się zmieni

- Przy strzałce (na końcu paska „Potrzebujesz pomocy?") pojawią się 3 delikatne kółka, które rozchodzą się jedno po drugim – dokładnie tak samo jak pod grafiką: ten sam rytm (6 sekund), te same przerwy (kolejne co 2 sekundy), ten sam cienki fioletowy obrys.
- Fale znikają, gdy pasek jest już rozwinięty – podpowiedź „kliknij mnie" jest potrzebna tylko wtedy, kiedy nic jeszcze nie jest otwarte. Po zamknięciu wracają.
- Obrót strzałki o 180 stopni przy rozwijaniu zostaje bez zmian.
- Nic nie zmienia rozmiaru ani miejsca: napis, ikonka schowka, wysokość paska i odstępy zostają dokładnie takie jak teraz. Kółka są tylko nałożone na istniejący układ.

## Rysunek

```text
[pasek]  [ikonka]  POTRZEBUJESZ POMOCY?          ( ◕ )   <- kółka fal
                                                 ^ strzałka, na niej fale
```

## Szczegóły techniczne

- Plik: `src/routes/oferta.tsx`, komponent `HelpRail`, strzałka `ChevronDown` (linia 397).
- Strzałka zostaje owinięta w `span` o dokładnie takim samym polu 16x16 px (`relative inline-flex size-4 shrink-0 items-center justify-center`), więc układ paska się nie przesuwa; klasy rotacji (`rotate-180`, `transition-transform duration-300`) przenoszą się na ten `span`.
- W środku 3 `span`y: `pointer-events-none absolute inset-0 rounded-full border border-primary/50 opacity-0 animate-[info-ping_6s_cubic-bezier(0.25,0.6,0.35,1)_infinite]` z opóźnieniami `0s` / `2s` / `4s` – identyczne jak w pasku pod grafiką.
- Renderowane warunkowo tylko gdy `open === false`, więc po rozwinięciu paska fale niepracują.
- Wykorzystujemy istniejące klatki `@keyframes info-ping` w `src/styles.css` – bez zmian w CSS.
