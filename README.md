markdown

# Projekt testów Cypress

Projekt zawiera testy automatyczne napisane w Cypress dla https://www.demoblaze.com/.
Projekt jest zintegrowany z Jenkins CI/CD

## 📋 Wymagania

- Node.js (wersja 18 lub wyższa)
- npm (do zarządzania pakietami)

## 🚀 Instalacja

1. Sklonuj repozytorium:

````bash
git clone https://github.com/Aleksis-test/Cypress_Demoblaze_tests

2. Zainstaluj zależności
```bash
npm install (Komenda zainstaluje Cypress i wszystkie wymagane pakiety)

3. Tryb interaktywny (z przeglądarką)
```bash
npx cypress open

## ⭐ Dodatkowo

 🔹 Uruchom pojedynczy test
 ```bash
 npx cypress run --spec "cypress/e2e/smokeTests.spec.js"

 🔹 Uruchom z określoną przeglądarką
 ```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge

## 🧪 Opis testów

✅ Cart Testy (cartTests.spec.js)

Ten zestaw testów sprawdza funkcjonalność koszyka oraz proces składania zamówienia w sklepie internetowym.

✅ Responsive Testy (responsiveTests.spec.js)

Ten zestaw testów sprawdza poprawne działanie strony na różnych urządzeniach (mobile i tablet).

✅ Smoke Testy (smokeTests.spec.js)

Ten zestaw testów sprawdza najważniejsze funkcjonalności strony, które muszą działać poprawnie:
---Podstawowe testy strony
---Testy nawigacji
---Testy formularzy
---Testy karuzeli
---Testy kategorii produktów
---Testy stopki

## 📊 Dokumentacja testów

---Test case'y dostępne w pliku Excel:
(docs/Demoblaze.Test_cases.xlsx)

---Testy Wydajnościowe:
(docs/preformance_tests)

---Plan testów pdf
(docs/Plan_testów_Demoblaze.pdf)


👤 Autor

Twoje Aleksandra Janas

    GitHub: @Test Alexisa

    Email: aleksandra.janas.31@gmail.com

📄 Licencja

Ten projekt jest na licencji MIT - możesz go swobodnie używać i modyfikować.
````
