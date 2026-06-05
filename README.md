# Catchly Routencheck / Assessment Cockpit V12

Diese Version ist eine GitHub-Pages-taugliche HTML-Version für das interne Setup-Cockpit und den öffentlichen Routencheck.

## Dateien

- `index.html` = internes Setup-Cockpit
- `assessment.html` = öffentlicher Routencheck
- `assets/` = CSS, JavaScript, Logo und Icons
- `data/questions.json` = Fragenkatalog als externe Datenquelle
- `assessment-setup.sample.json` = Beispiel-Setup ohne echte Kundendaten

## Wichtige Änderungen in V12

- Routencheck wirkt ruhiger und luftiger, weniger technische Container-Optik.
- Der Weiter-Button bleibt klar sichtbar, ohne störend fixiert zu wirken.
- Navigation funktioniert mit Maus und Tastatur.
- Enter bestätigt beziehungsweise führt weiter, wenn sinnvoll.
- Bei längeren Textfeldern bleibt Enter für Zeilenumbrüche reserviert. Weiter mit Button oder Ctrl/Cmd + Enter.
- Dezente Debug-/Statusanzeige ist einklappbar und stört die Customer Journey nicht.
- Wenn `lead_id` und `assessment_id` vorhanden sind, wird intern `Assessment verbunden` angezeigt.
- Wenn keine IDs vorhanden sind, wird intern `Testmodus: Keine Lead-ID oder Assessment-ID übergeben` angezeigt.
- Button `Testkunde generieren` ist enthalten.
- Keine echte Webhook-Anbindung.
- Keine n8n-URL.
- Keine API-Keys oder Secrets im HTML.
- Antwortdaten bleiben als JSON/CSV exportierbar.

## Testkunde

Der Button `Testkunde generieren` setzt:

- Firma / Kunde: `Test 1`
- Vorname: `Vorname 1`
- Nachname: `Test 1`
- E-Mail: `test123@test.ch`
- Telefonnummer: leer
- Rolle: Projektleitung / Technik
- `lead_id`: `LEAD-TEST-001`
- `assessment_id`: `ASM-TEST-001`
- `department`: `Test-Abteilung`
- `source`: `testkunde_button`

## ID-ready Nutzung

Der Routencheck kann später mit IDs geöffnet werden:

```text
assessment.html?lead_id=LEAD-123&assessment_id=ASM-123&firma=Muster%20AG&department=Verkauf&source=email
```

Ohne IDs bleibt der Routencheck im Testmodus nutzbar.

## Deployment auf GitHub Pages

Den Inhalt dieses Ordners direkt ins Repository hochladen:

```text
index.html
assessment.html
assessment-setup.sample.json
README.md
assets/
data/
```

Nicht den gesamten Ordner als Unterordner hochladen.

## Datenschutz-Hinweis

Keine echten Kunden-JSONs, keine echten Antwortdaten und keine vertraulichen Daten ins GitHub-Repository legen.
GitHub Pages dient nur als Oberfläche. Die spätere Datenanbindung erfolgt über einen separaten sicheren Endpoint.


## V13 Hinweis: Link mit IDs

Das Setup-Cockpit erstellt den Einladungslink nun mit `lead_id` und `assessment_id`.
Beispiel:
`assessment.html?lead_id=LEAD-TEST-001&assessment_id=ASM-TEST-001`

Wichtig: Der Basislink muss zum GitHub-Repository passen. Bei Repository `assessment_cockpit` lautet der öffentliche Routencheck in der Regel:
`https://aiwieevecatchly.github.io/assessment_cockpit/assessment.html`

Der Button "Testkunde generieren" setzt Testdaten und erstellt einen prüfbaren Link.


## V15 URL-Parameter-Fix

Der Routencheck liest snake_case Parameter priorisiert: `lead_id`, `assessment_id`, `firma`. camelCase bleibt nur als Fallback erhalten. Die Exportdaten enthalten die Felder `lead_id`, `assessment_id` und `firma` ebenfalls explizit.
