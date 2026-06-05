# Catchly Assessment Cockpit V18

Änderungen gegenüber V15:

- Mehrfachauswahl für Fragen, bei denen im KMU-Alltag mehrere Antworten plausibel sind.
- «Warum wir das fragen» wird nicht mehr doppelt im Erklärungstext wiederholt.
- Frage zu digitalem Ablauf enthält ein zusätzliches Textfeld für konkrete wiederkehrende Aufgaben.
- JSON/CSV-Export enthält weiterhin lead_id, assessment_id und firma sowie neu Mehrfachauswahl- und Zusatzantwort-Felder.
- Keine echte API, keine Webhook-URL, keine Secrets.


## V18

- Payload trennt `lead_company`, `participant_company` und `company`.
- Frontend erzeugt nur `client_response_id`; finale `response_id` bleibt fürs Backend reserviert.
- Antworten enthalten `lead_id`, `assessment_id`, `lead_company`, `company` und `client_response_id`.
- Dezente bewegte Catchly-Formen im Hintergrund.
- Antwort-Einordnung nutzt kontextbezogenere Nutzenhinweise.
- Keine Webhooks, keine n8n-URL, keine Secrets.


## V18

Frage MA15 wurde mit konditionaler Pflicht-Begründung erweitert: hilfreiche Abläufe bei Ja/Teilweise, Begründung bei Nein/Nicht sichtbar/Weiss nicht. Export bleibt backend-ready.
