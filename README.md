# Catchly Routencheck / Assessment Cockpit V14

Diese Version setzt die V13-Logik fort und ergänzt zwei Punkte:

1. Assessment-ID-Logik

Bei importierten Leads wird die Assessment-ID nach diesem Schema erzeugt:

```text
ASM-<Lead-ID>-001
```

Beispiel:

```text
Lead-ID: CATCHLY-2026-I4AGP
Assessment-ID: ASM-CATCHLY-2026-I4AGP-001
```

Wenn im importierten JSON bereits eine gültige Assessment-ID in diesem Format vorhanden ist, wird sie übernommen. Sonst wird sie automatisch aus der Lead-ID erzeugt.

2. Aufklappbare Setup-Kacheln

Die Kacheln nach der Routencheck-Einladung sind aufklappbar, damit das Setup-Cockpit ruhiger und übersichtlicher bleibt.

Wichtig:

- Noch kein echter Webhook
- Keine n8n-URL
- Keine API-Keys oder Secrets
- Fragenlogik bleibt erhalten
- Testmodus bleibt erhalten
- JSON/CSV-Export bleibt erhalten

## GitHub Upload

Den Inhalt dieses Ordners auf oberster Ebene des Repositorys hochladen:

```text
index.html
assessment.html
assessment-setup.sample.json
README.md
assets/
data/
```

Nicht den Ordner `catchly_assessment_v14` als Unterordner hochladen.
