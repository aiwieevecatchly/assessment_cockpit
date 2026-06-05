// Platzhalter für späteren Endpoint. Nicht hardcoden, keine Secrets im Frontend.
const SUBMIT_ENDPOINT = '';

const DEFAULT_QUESTIONS = [
  {
    "id": "GF01",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Geschäft & Fokus",
    "text": "Welche Leistung soll in den nächsten 12 Monaten stärker wachsen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Wachstumsrichtung statt Bauchgefühl. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "installation",
        "label": "Installation",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "service_wartung",
        "label": "Service / Wartung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "sanierung_umbau",
        "label": "Sanierung / Umbau",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "beratung_planung",
        "label": "Beratung / Planung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "komplettloesung",
        "label": "Komplettlösung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "notfall_reparatur",
        "label": "Notfall / Reparatur",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "andere",
        "label": "Andere",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF01",
      "module": "Value Proposition",
      "why": "Wachstumsrichtung statt Bauchgefühl"
    }
  },
  {
    "id": "GF02",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Geschäft & Fokus",
    "text": "Welche Kunden möchten Sie künftig häufiger gewinnen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Ideal Customer Profile. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "privatkunden",
        "label": "Privatkunden",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "gewerbekunden",
        "label": "Gewerbekunden",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "verwaltungen",
        "label": "Verwaltungen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "architekten_planer",
        "label": "Architekten / Planer",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "generalunternehmer",
        "label": "Generalunternehmer",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "stammkunden_servicekunden",
        "label": "Stammkunden / Servicekunden",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "groessere_projekte",
        "label": "grössere Projekte",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kleinere_schnelle_auftraege",
        "label": "kleinere schnelle Aufträge",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF02",
      "module": "Value Proposition",
      "why": "Ideal Customer Profile"
    }
  },
  {
    "id": "GF03",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Geschäft & Fokus",
    "text": "Welche Art von Auftrag kostet viel Zeit, bringt aber zu wenig?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht. Optional, wenn du dazu etwas sagen kannst.",
    "story": "Warum wir das fragen: schlechte Auftragsqualität erkennen. Das fliesst in das Modul «Prozess / Priorisierung» ein.",
    "inputType": "textarea",
    "required": false,
    "answers": [],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF03",
      "module": "Prozess / Priorisierung",
      "why": "schlechte Auftragsqualität erkennen"
    }
  },
  {
    "id": "GF04",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Anfrageprozess",
    "text": "Wo kommen heute die meisten Anfragen rein?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Eingangskanäle und Bruchstellen. Das fliesst in das Modul «Anfrageprozess» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "telefon",
        "label": "Telefon",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "e_mail",
        "label": "E-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "website",
        "label": "Website",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "empfehlung",
        "label": "Empfehlung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "social_media",
        "label": "Social Media",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "gemischt_mehrere_kanaele",
        "label": "Gemischt / mehrere Kanäle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF04",
      "module": "Anfrageprozess",
      "why": "Eingangskanäle und Bruchstellen"
    }
  },
  {
    "id": "GF05",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Anfrageprozess",
    "text": "Wie klar ist intern geregelt, wer eine neue Anfrage übernimmt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Zuständigkeit und Verbindlichkeit. Das fliesst in das Modul «Prozessrisiko» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF05",
      "module": "Prozessrisiko",
      "why": "Zuständigkeit und Verbindlichkeit"
    }
  },
  {
    "id": "GF06",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Anfrageprozess",
    "text": "Wo hakt es nach Ihrer Einschätzung am häufigsten?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: grösster Soforthebel. Das fliesst in das Modul «Executive Summary» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "anfrage_wird_zu_spaet_gesehen",
        "label": "Anfrage wird zu spät gesehen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zustaendigkeit_unklar",
        "label": "Zuständigkeit unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "infos_fehlen",
        "label": "Infos fehlen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nachfassen_fehlt",
        "label": "Nachfassen fehlt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zu_viele_kanaele",
        "label": "zu viele Kanäle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_nicht_qualifiziert",
        "label": "Kunde nicht qualifiziert",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kein_klares_problem",
        "label": "kein klares Problem",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF06",
      "module": "Executive Summary",
      "why": "grösster Soforthebel"
    }
  },
  {
    "id": "GF07",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Nachfassen",
    "text": "Wie wird heute nachgefasst, wenn ein Kunde nicht reagiert?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht.",
    "story": "Warum wir das fragen: Follow-up-Systematik. Das fliesst in das Modul «Nachfassen» ein.",
    "inputType": "textarea",
    "required": true,
    "answers": [],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF07",
      "module": "Nachfassen",
      "why": "Follow-up-Systematik"
    }
  },
  {
    "id": "GF08",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Warum entscheiden sich Kunden heute für Sie?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Selbstbild und Differenzierung. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "empfehlung_bekanntheit",
        "label": "Empfehlung / Bekanntheit",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "regionale_naehe",
        "label": "regionale Nähe",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "schnelle_reaktion",
        "label": "schnelle Reaktion",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "saubere_beratung",
        "label": "saubere Beratung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "qualitaet_der_arbeit",
        "label": "Qualität der Arbeit",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "preis",
        "label": "Preis",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "spezialwissen",
        "label": "Spezialwissen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht_genau",
        "label": "weiss nicht genau",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF08",
      "module": "Value Proposition",
      "why": "Selbstbild und Differenzierung"
    }
  },
  {
    "id": "GF09",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Was nervt Ihre Kunden vor dem Auftrag vermutlich am meisten?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Kundenschmerz sichtbar machen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "niemand_meldet_sich_schnell",
        "label": "niemand meldet sich schnell",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklare_preise",
        "label": "unklare Preise",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zu_wenig_beratung",
        "label": "zu wenig Beratung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zu_viele_anbieter_schwer_vergleichbar",
        "label": "zu viele Anbieter / schwer vergleichbar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "fachsprache_komplizierte_erklaerung",
        "label": "Fachsprache / komplizierte Erklärung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "lange_wartezeiten",
        "label": "lange Wartezeiten",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "schlechte_planbarkeit",
        "label": "schlechte Planbarkeit",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF09",
      "module": "Value Proposition",
      "why": "Kundenschmerz sichtbar machen"
    }
  },
  {
    "id": "GF10",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Was macht Sie aus Kundensicht wirklich anders?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Differenzierung prüfen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "erfahrung",
        "label": "Erfahrung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "verlaesslichkeit",
        "label": "Verlässlichkeit",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "tempo",
        "label": "Tempo",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "beratung",
        "label": "Beratung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "komplettloesung",
        "label": "Komplettlösung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "spezialgebiet",
        "label": "Spezialgebiet",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "regionale_verankerung",
        "label": "regionale Verankerung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "aktuell_nicht_klar_formuliert",
        "label": "aktuell nicht klar formuliert",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF10",
      "module": "Value Proposition",
      "why": "Differenzierung prüfen"
    }
  },
  {
    "id": "GF11",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Woran erkennt ein Neukunde, dass Sie gut sind?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Beweisbarkeit und Vertrauen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "google_bewertungen",
        "label": "Google-Bewertungen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "referenzen_projekte",
        "label": "Referenzen / Projekte",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zertifikate",
        "label": "Zertifikate",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "team_sichtbar",
        "label": "Team sichtbar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "empfehlungen",
        "label": "Empfehlungen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "lange_erfahrung",
        "label": "lange Erfahrung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kaum_sichtbar",
        "label": "kaum sichtbar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF11",
      "module": "Value Proposition",
      "why": "Beweisbarkeit und Vertrauen"
    }
  },
  {
    "id": "GF12",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wettbewerb",
    "text": "Warum verlieren Sie manchmal gegen andere Anbieter?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Wettbewerbsdruck verstehen. Das fliesst in das Modul «Konkurrenzanalyse» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "preis",
        "label": "Preis",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zu_langsame_rueckmeldung",
        "label": "zu langsame Rückmeldung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "angebot_unklar",
        "label": "Angebot unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "konkurrenz_wirkt_professioneller",
        "label": "Konkurrenz wirkt professioneller",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "fehlende_kapazitaet",
        "label": "fehlende Kapazität",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_war_nicht_passend",
        "label": "Kunde war nicht passend",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF12",
      "module": "Konkurrenzanalyse",
      "why": "Wettbewerbsdruck verstehen"
    }
  },
  {
    "id": "GF13",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wettbewerb",
    "text": "Welche lokalen Konkurrenten nerven Sie am meisten?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht. Optional, wenn du dazu etwas sagen kannst.",
    "story": "Warum wir das fragen: Input für A-Konkurrenz. Das fliesst in das Modul «ABC-Konkurrenz» ein.",
    "inputType": "textarea",
    "required": false,
    "answers": [],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF13",
      "module": "ABC-Konkurrenz",
      "why": "Input für A-Konkurrenz"
    }
  },
  {
    "id": "GF14",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wettbewerb",
    "text": "Gibt es Anbieter in der Schweiz, die Sie digital stark finden?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht. Optional, wenn du dazu etwas sagen kannst.",
    "story": "Warum wir das fragen: Input für Best-in-Class. Das fliesst in das Modul «Benchmark Schweiz» ein.",
    "inputType": "textarea",
    "required": false,
    "answers": [],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF14",
      "module": "Benchmark Schweiz",
      "why": "Input für Best-in-Class"
    }
  },
  {
    "id": "GF15",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Tools & Daten",
    "text": "Wo liegt heute das wichtigste Kunden- und Anfragewissen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Datenrisiko und Suchzeit. Das fliesst in das Modul «Suchzeit / Wissen» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "crm_branchensoftware",
        "label": "CRM / Branchensoftware",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "excel_liste",
        "label": "Excel-Liste",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "outlook_e_mail",
        "label": "Outlook / E-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "papier_notizen",
        "label": "Papier / Notizen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kopf_wissen_einzelner_personen",
        "label": "Kopf-Wissen einzelner Personen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "mehrere_orte",
        "label": "mehrere Orte",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF15",
      "module": "Suchzeit / Wissen",
      "why": "Datenrisiko und Suchzeit"
    }
  },
  {
    "id": "GF16",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Tools & Daten",
    "text": "Gibt es eine zentrale Wahrheit für offene Anfragen und Kundenstatus?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: CRM-/Prozessreife. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja_eine_zentrale_quelle",
        "label": "ja, eine zentrale Quelle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "teilweise_zentral",
        "label": "teilweise zentral",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "mehrere_listen_tools",
        "label": "mehrere Listen / Tools",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "viel_in_e_mail_kopf_papier",
        "label": "viel in E-Mail / Kopf / Papier",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF16",
      "module": "Tools & Daten",
      "why": "CRM-/Prozessreife"
    }
  },
  {
    "id": "GF17",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Tools & Daten",
    "text": "Welche Tools werden im Alltag wirklich genutzt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Integrations- und Automationsbasis. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "outlook",
        "label": "Outlook",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "excel",
        "label": "Excel",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "ms_365_sharepoint_onedrive",
        "label": "MS 365 / SharePoint / OneDrive",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "crm",
        "label": "CRM",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "branchensoftware",
        "label": "Branchensoftware",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "papier_notizbuch",
        "label": "Papier / Notizbuch",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kopf_wissen",
        "label": "Kopf-Wissen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "gemischt",
        "label": "Gemischt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF17",
      "module": "Tools & Daten",
      "why": "Integrations- und Automationsbasis"
    }
  },
  {
    "id": "GF18",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wissen & Übergabe",
    "text": "Wie stark hängt der Ablauf an einzelnen Personen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Key-Person-Risk. Das fliesst in das Modul «EBIT / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja",
        "label": "Ja",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nein",
        "label": "Nein",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "teilweise",
        "label": "Teilweise",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nicht_sichtbar",
        "label": "Nicht sichtbar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF18",
      "module": "EBIT / Übergabe",
      "why": "Key-Person-Risk"
    }
  },
  {
    "id": "GF19",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wissen & Übergabe",
    "text": "Ist Verkauf, Nachfolge oder Übergabe der Firma in den nächsten Jahren ein Thema?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt. Optional, wenn du dazu etwas sagen kannst.",
    "story": "Warum wir das fragen: Unternehmenswert-Risiko. Das fliesst in das Modul «EBIT / Übergabe» ein.",
    "inputType": "choice",
    "required": false,
    "answers": [
      {
        "value": "ja_in_0_2_jahren_relevant",
        "label": "ja, in 0–2 Jahren relevant",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "ja_in_3_5_jahren_relevant",
        "label": "ja, in 3–5 Jahren relevant",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "vielleicht_spaeter",
        "label": "vielleicht später",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "aktuell_nicht_relevant",
        "label": "aktuell nicht relevant",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF19",
      "module": "EBIT / Übergabe",
      "why": "Unternehmenswert-Risiko"
    }
  },
  {
    "id": "GF20",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Umsetzung",
    "text": "Was wäre für Sie der wichtigste Quick Win?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Umsetzungsfokus. Das fliesst in das Modul «30-60-90 Plan» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "zentraler_anfrageeingang",
        "label": "zentraler Anfrageeingang",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "besseres_anfrageformular",
        "label": "besseres Anfrageformular",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "automatische_rueckfrage_mail",
        "label": "automatische Rückfrage-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "klare_wiedervorlage",
        "label": "klare Wiedervorlage",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "telefonleitfaden_qualifizierungsfragen",
        "label": "Telefonleitfaden / Qualifizierungsfragen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "crm_lead_liste",
        "label": "CRM-/Lead-Liste",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "erst_prozess_klaeren",
        "label": "erst Prozess klären",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF20",
      "module": "30-60-90 Plan",
      "why": "Umsetzungsfokus"
    }
  },
  {
    "id": "MA01",
    "roles": [
      "team"
    ],
    "area": "Anfrageeingang",
    "text": "Wie kommen Anfragen bei dir meistens an?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Kanäle verstehen. Das fliesst in das Modul «Anfrageprozess» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "telefon",
        "label": "Telefon",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "e_mail",
        "label": "E-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "website",
        "label": "Website",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "empfehlung",
        "label": "Empfehlung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "social_media",
        "label": "Social Media",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "gemischt_mehrere_kanaele",
        "label": "Gemischt / mehrere Kanäle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA01",
      "module": "Anfrageprozess",
      "why": "Kanäle verstehen"
    }
  },
  {
    "id": "MA02",
    "roles": [
      "team"
    ],
    "area": "Zuständigkeit",
    "text": "Wie klar ist, wer als Nächstes etwas tun muss?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Verantwortung. Das fliesst in das Modul «Prozessrisiko» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA02",
      "module": "Prozessrisiko",
      "why": "Verantwortung"
    }
  },
  {
    "id": "MA03",
    "roles": [
      "team"
    ],
    "area": "Suchen",
    "text": "Wie oft suchst du Kunden-, Anfrage- oder Offerteninfos?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Suchzeit. Das fliesst in das Modul «Suchzeit / Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "selten",
        "label": "selten",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "manchmal",
        "label": "manchmal",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "haeufig",
        "label": "häufig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "taeglich",
        "label": "täglich",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA03",
      "module": "Suchzeit / Daten",
      "why": "Suchzeit"
    }
  },
  {
    "id": "MA04",
    "roles": [
      "team"
    ],
    "area": "Suchen",
    "text": "Wo suchst du am häufigsten?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Tool-Brüche. Das fliesst in das Modul «Suchzeit / Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "crm_branchensoftware",
        "label": "CRM / Branchensoftware",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "excel_liste",
        "label": "Excel-Liste",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "outlook_e_mail",
        "label": "Outlook / E-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "papier_notizen",
        "label": "Papier / Notizen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kopf_wissen_einzelner_personen",
        "label": "Kopf-Wissen einzelner Personen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "mehrere_orte",
        "label": "mehrere Orte",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA04",
      "module": "Suchzeit / Daten",
      "why": "Tool-Brüche"
    }
  },
  {
    "id": "MA05",
    "roles": [
      "team"
    ],
    "area": "Daten",
    "text": "Gibt es eine zentrale Stelle, wo der aktuelle Stand einer Anfrage sichtbar ist?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Single Source of Truth. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja_eine_zentrale_quelle",
        "label": "ja, eine zentrale Quelle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "teilweise_zentral",
        "label": "teilweise zentral",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "mehrere_listen_tools",
        "label": "mehrere Listen / Tools",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "viel_in_e_mail_kopf_papier",
        "label": "viel in E-Mail / Kopf / Papier",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA05",
      "module": "Tools & Daten",
      "why": "Single Source of Truth"
    }
  },
  {
    "id": "MA06",
    "roles": [
      "team"
    ],
    "area": "Daten",
    "text": "Wie oft müssen Informationen doppelt eingetragen oder weiterkopiert werden?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Doppelarbeit. Das fliesst in das Modul «Automation» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "selten",
        "label": "selten",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "manchmal",
        "label": "manchmal",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "haeufig",
        "label": "häufig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "taeglich",
        "label": "täglich",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA06",
      "module": "Automation",
      "why": "Doppelarbeit"
    }
  },
  {
    "id": "MA07",
    "roles": [
      "team"
    ],
    "area": "Qualifizierung",
    "text": "Wie oft fehlen bei neuen Anfragen wichtige Informationen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Rückfragen und Verzögerung. Das fliesst in das Modul «Qualifizierung» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "selten",
        "label": "selten",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "manchmal",
        "label": "manchmal",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "haeufig",
        "label": "häufig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "taeglich",
        "label": "täglich",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA07",
      "module": "Qualifizierung",
      "why": "Rückfragen und Verzögerung"
    }
  },
  {
    "id": "MA08",
    "roles": [
      "team"
    ],
    "area": "Nachfassen",
    "text": "Wie klar ist geregelt, wann und wie nachgefasst wird?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Folgechance sichern. Das fliesst in das Modul «Nachfassen» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA08",
      "module": "Nachfassen",
      "why": "Folgechance sichern"
    }
  },
  {
    "id": "MA09",
    "roles": [
      "team"
    ],
    "area": "Kundenerlebnis",
    "text": "Was hörst du von Kunden am häufigsten?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Kundenperspektive. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "schnelle_rueckmeldung_wird_gelobt",
        "label": "schnelle Rückmeldung wird gelobt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_wartet_auf_antwort",
        "label": "Kunde wartet auf Antwort",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_ist_unsicher_ob_anfrage_angekommen",
        "label": "Kunde ist unsicher, ob Anfrage angekommen ist",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_braucht_mehr_erklaerung",
        "label": "Kunde braucht mehr Erklärung",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_hat_mehrere_anbieter_angefragt",
        "label": "Kunde hat mehrere Anbieter angefragt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "bekomme_ich_selten_mit",
        "label": "bekomme ich selten mit",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA09",
      "module": "Value Proposition",
      "why": "Kundenperspektive"
    }
  },
  {
    "id": "MA10",
    "roles": [
      "team"
    ],
    "area": "Zeitfresser",
    "text": "Was kostet im Alltag am meisten Zeit?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Quick Win identifizieren. Das fliesst in das Modul «30-60-90 Plan» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "anfrage_wird_zu_spaet_gesehen",
        "label": "Anfrage wird zu spät gesehen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zustaendigkeit_unklar",
        "label": "Zuständigkeit unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "infos_fehlen",
        "label": "Infos fehlen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nachfassen_fehlt",
        "label": "Nachfassen fehlt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "zu_viele_kanaele",
        "label": "zu viele Kanäle",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kunde_nicht_qualifiziert",
        "label": "Kunde nicht qualifiziert",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kein_klares_problem",
        "label": "kein klares Problem",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA10",
      "module": "30-60-90 Plan",
      "why": "Quick Win identifizieren"
    }
  },
  {
    "id": "MA11",
    "roles": [
      "team"
    ],
    "area": "Tools",
    "text": "Welche Tools nutzt du wirklich täglich?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Umsetzbarkeit. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "outlook",
        "label": "Outlook",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "excel",
        "label": "Excel",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "ms_365_sharepoint_onedrive",
        "label": "MS 365 / SharePoint / OneDrive",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "crm",
        "label": "CRM",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "branchensoftware",
        "label": "Branchensoftware",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "papier_notizbuch",
        "label": "Papier / Notizbuch",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "kopf_wissen",
        "label": "Kopf-Wissen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "gemischt",
        "label": "Gemischt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA11",
      "module": "Tools & Daten",
      "why": "Umsetzbarkeit"
    }
  },
  {
    "id": "MA12",
    "roles": [
      "team"
    ],
    "area": "Wissen",
    "text": "Wie gut ist die Kundenhistorie nachvollziehbar, wenn jemand anders übernimmt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Key-Person-Risk. Das fliesst in das Modul «Wissen / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "unklar",
        "label": "unklar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA12",
      "module": "Wissen / Übergabe",
      "why": "Key-Person-Risk"
    }
  },
  {
    "id": "MA13",
    "roles": [
      "team"
    ],
    "area": "Wissen",
    "text": "Wie oft hängt die Antwort davon ab, dass man die richtige Person fragt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Kopf-Wissen. Das fliesst in das Modul «Wissen / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "selten",
        "label": "selten",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "manchmal",
        "label": "manchmal",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "haeufig",
        "label": "häufig",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "taeglich",
        "label": "täglich",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA13",
      "module": "Wissen / Übergabe",
      "why": "Kopf-Wissen"
    }
  },
  {
    "id": "MA14",
    "roles": [
      "team"
    ],
    "area": "Umsetzung",
    "text": "Welcher Quick Win würde dir sofort helfen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Akzeptanz und Nutzen. Das fliesst in das Modul «30-60-90 Plan» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "zentraler_anfrageeingang",
        "label": "zentraler Anfrageeingang",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "besseres_anfrageformular",
        "label": "besseres Anfrageformular",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "automatische_rueckfrage_mail",
        "label": "automatische Rückfrage-Mail",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "klare_wiedervorlage",
        "label": "klare Wiedervorlage",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "telefonleitfaden_qualifizierungsfragen",
        "label": "Telefonleitfaden / Qualifizierungsfragen",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "crm_lead_liste",
        "label": "CRM-/Lead-Liste",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "erst_prozess_klaeren",
        "label": "erst Prozess klären",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA14",
      "module": "30-60-90 Plan",
      "why": "Akzeptanz und Nutzen"
    }
  },
  {
    "id": "MA15",
    "roles": [
      "team"
    ],
    "area": "Offenheit",
    "text": "Wie offen wärst du für einen klareren digitalen Ablauf?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Warum wir das fragen: Change Readiness. Das fliesst in das Modul «Umsetzung» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja",
        "label": "Ja",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nein",
        "label": "Nein",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "teilweise",
        "label": "Teilweise",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "nicht_sichtbar",
        "label": "Nicht sichtbar",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht",
        "insight": "Danke. Diese Antwort hilft, den späteren Fahrplan sauber zu priorisieren."
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA15",
      "module": "Umsetzung",
      "why": "Change Readiness"
    }
  }
];

const state = {
  leadId: '',
  assessmentId: '',
  department: '',
  source: '',
  firmaFromUrl: '',
  participant: {},
  questions: DEFAULT_QUESTIONS,
  activeQuestions: [],
  index: 0,
  answers: {}
};

const $ = (id) => document.getElementById(id);

const roleLabels = {
  geschaeftsfuehrung: 'Geschäftsführung',
  verkauf: 'Verkauf / Beratung',
  administration: 'Administration / Admin',
  disposition: 'Disposition / Terminplanung',
  technik: 'Projektleitung / Technik',
  sonstiges: 'Sonstiges'
};

const roleAliases = {
  verkauf: ['team', 'mitarbeitende'],
  administration: ['team', 'mitarbeitende'],
  disposition: ['team', 'mitarbeitende'],
  technik: ['team', 'mitarbeitende'],
  geschaeftsfuehrung: ['geschaeftsfuehrung', 'management'],
  sonstiges: ['team', 'mitarbeitende']
};

function getUrlContext() {
  const params = new URLSearchParams(window.location.search);

  // Wichtig: Das Sales-/Setup-Cockpit erzeugt snake_case Parameter.
  // camelCase bleibt nur als Fallback für ältere Tests erhalten.
  return {
    leadId: params.get('lead_id') || params.get('leadId') || '',
    assessmentId: params.get('assessment_id') || params.get('assessmentId') || '',
    firma: params.get('firma') || params.get('company') || '',
    department: params.get('department') || params.get('departmentId') || '',
    source: params.get('source') || ''
  };
}

function init() {
  const urlContext = getUrlContext();
  state.leadId = urlContext.leadId;
  state.assessmentId = urlContext.assessmentId;
  state.department = urlContext.department;
  state.source = urlContext.source;
  state.firmaFromUrl = urlContext.firma;
  $('company').value = state.firmaFromUrl;
  if ($('department')) $('department').value = state.department;
  if ($('source')) $('source').value = state.source;
  updateDebugStatus();

  $('startIntroBtn').addEventListener('click', () => {
    $('welcomeView').classList.add('hidden');
    $('identityView').classList.remove('hidden');
  });

  $('identityForm').addEventListener('submit', handleIdentitySubmit);
  $('nextBtn').addEventListener('click', handleNext);
  $('backBtn').addEventListener('click', handleBack);
  $('downloadJsonBtn').addEventListener('click', downloadJson);
  $('downloadCsvBtn').addEventListener('click', downloadCsv);
  $('restartBtn')?.addEventListener('click', resetAssessment);
  $('testCustomerBtn')?.addEventListener('click', fillTestCustomer);
  document.addEventListener('keydown', handleKeyboardNavigation);

  loadQuestions();
}

async function loadQuestions() {
  // Wichtig für lokale Tests: Chrome blockiert fetch() bei file:// teilweise.
  // Darum sind alle Fragen bereits in DEFAULT_QUESTIONS eingebettet.
  state.questions = DEFAULT_QUESTIONS;
  try {
    const res = await fetch('data/questions.json', { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data.questions) && data.questions.length > 1) {
      state.questions = data.questions;
    }
  } catch (error) {
    console.info('Lokaler Modus: Fragen werden aus dem eingebetteten Katalog geladen.');
  }
}

function fillTestCustomer() {
  state.leadId = 'LEAD-TEST-001';
  state.assessmentId = 'ASM-TEST-001';
  state.department = 'Test-Abteilung';
  state.source = 'testkunde_button';

  $('firstName').value = 'Vorname 1';
  $('lastName').value = 'Test 1';
  $('email').value = 'test123@test.ch';
  $('mobile').value = '';
  $('company').value = 'Test 1';
  $('role').value = 'technik';
  if ($('department')) $('department').value = state.department;
  if ($('source')) $('source').value = state.source;
  updateDebugStatus();
}

function updateDebugStatus() {
  let text = 'Testmodus: Keine Lead-ID oder Assessment-ID übergeben';
  if (state.leadId && state.assessmentId) {
    text = 'Assessment verbunden';
  } else if (state.assessmentId && !state.leadId) {
    text = 'Assessment-ID vorhanden, Lead-ID fehlt';
  } else if (state.leadId && !state.assessmentId) {
    text = 'Lead-ID vorhanden, Assessment-ID fehlt';
  }

  if ($('debugStatusText')) $('debugStatusText').textContent = text;
}

function connectionMode() {
  if (state.leadId && state.assessmentId) return 'connected';
  if (state.assessmentId && !state.leadId) return 'assessment_id_only';
  if (state.leadId && !state.assessmentId) return 'lead_id_only';
  return 'testmode';
}

function handleIdentitySubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  state.participant = {
    firstName: String(form.get('firstName') || '').trim(),
    lastName: String(form.get('lastName') || '').trim(),
    email: String(form.get('email') || '').trim(),
    mobile: String(form.get('mobile') || '').trim(),
    company: String(form.get('company') || '').trim(),
    department: String(form.get('department') || state.department || '').trim(),
    source: String(form.get('source') || state.source || '').trim(),
    role: form.get('role'),
    roleLabel: roleLabels[form.get('role')] || form.get('role'),
    startedAt: new Date().toISOString()
  };

  state.activeQuestions = selectQuestionsForRole(state.participant.role);

  // Fallback-Schutz: Wenn ein externer Fragenkatalog andere Rollenlabels liefert,
  // startet der Routencheck trotzdem mit der passenden Excel-Gruppe.
  if (!state.activeQuestions.length) {
    const prefix = state.participant.role === 'geschaeftsfuehrung' ? 'GF' : 'MA';
    state.activeQuestions = state.questions.filter((question) => String(question.id || '').startsWith(prefix));
  }

  if (!state.activeQuestions.length) {
    showIdentityError('Der Fragenkatalog konnte nicht geladen werden. Bitte Seite neu laden oder die Datei prüfen.');
    return;
  }

  state.index = 0;
  state.answers = {};

  $('identityView').classList.add('hidden');
  $('questionView').classList.remove('hidden');
  renderQuestion();
}

function showIdentityError(message) {
  const existing = $('identityError');
  if (existing) {
    existing.textContent = message;
    existing.classList.remove('hidden');
  } else {
    alert(message);
  }
}

function selectQuestionsForRole(role) {
  const aliases = roleAliases[role] || ['all'];
  return state.questions.filter((question) => {
    const roles = question.roles || ['all'];
    return roles.includes('all') || roles.some((r) => aliases.includes(r));
  });
}

function renderQuestion() {
  const question = state.activeQuestions[state.index];
  if (!question) return finish();

  const progress = ((state.index + 1) / state.activeQuestions.length) * 100;
  $('progressBar').style.width = `${progress}%`;
  $('progressLabel').textContent = `Frage ${state.index + 1} von ${state.activeQuestions.length}`;
  $('areaLabel').textContent = question.area || 'Routencheck';
  $('roleChip').textContent = state.participant.roleLabel;
  $('questionText').textContent = question.text;
  $('questionHelper').textContent = question.helper || '';
  $('questionStory').innerHTML = `<strong>Warum wir das fragen</strong><span>${escapeHtml(question.story || defaultStory(question))}</span>`;

  $('answerOptions').innerHTML = '';
  if (question.inputType === 'text' || question.inputType === 'textarea') {
    renderTextAnswer(question);
  } else {
    renderChoiceAnswer(question);
  }

  renderInsight(question);
  updateNextButton(question);
  $('backBtn').disabled = state.index === 0;
  resetQuestionViewport(question);
}

function resetQuestionViewport(question) {
  const area = $('questionScrollArea');
  if (area) area.scrollTop = 0;
  window.requestAnimationFrame(() => {
    const hasAnswer = Boolean(state.answers[question.id]);
    const firstInput = $('answerOptions').querySelector('button, input, textarea');
    if (firstInput) firstInput.focus({ preventScroll: true });
  });
}

function renderChoiceAnswer(question) {
  const existing = state.answers[question.id]?.value;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `choice-card ${existing === answer.value ? 'selected' : ''}`;
    button.innerHTML = `<strong>${escapeHtml(answer.label)}</strong><small>${escapeHtml(answer.hint || '')}</small>`;
    button.addEventListener('click', () => selectAnswer(question, answer));
    $('answerOptions').appendChild(button);
  });
}

function renderTextAnswer(question) {
  const wrapper = document.createElement('div');
  wrapper.className = 'field text-answer-card';
  const label = document.createElement('label');
  label.textContent = question.required === false ? 'Deine Antwort optional' : 'Deine Antwort';
  const input = question.inputType === 'text' ? document.createElement('input') : document.createElement('textarea');
  input.placeholder = question.required === false ? 'Kannst du ausfüllen, musst du aber nicht.' : 'Kurz und klar reicht.';
  input.value = state.answers[question.id]?.label || '';
  input.addEventListener('input', () => {
    const text = input.value.trim();
    if (text) {
      state.answers[question.id] = buildAnswerRecord(question, {
        value: text,
        label: text,
        insight: 'Diese Antwort hilft, den späteren Fahrplan konkret und praxisnah zu machen.'
      });
    } else {
      delete state.answers[question.id];
    }
    renderInsight(question);
    updateNextButton(question);
  });
  wrapper.appendChild(label);
  wrapper.appendChild(input);
  $('answerOptions').appendChild(wrapper);
  setTimeout(() => input.focus(), 50);
}

function updateNextButton(question) {
  const hasAnswer = Boolean(state.answers[question.id]);
  $('nextBtn').disabled = question.required !== false && !hasAnswer;
  $('nextBtn').textContent = question.required === false && !hasAnswer ? 'Überspringen' : 'Weiter';
}

function selectAnswer(question, answer) {
  state.answers[question.id] = buildAnswerRecord(question, answer);
  renderQuestion();
  window.setTimeout(() => {
    const next = $('nextBtn');
    if (next && !next.disabled) next.focus({ preventScroll: true });
  }, 30);
}

function buildAnswerRecord(question, answer) {
  const excel = question.excelSource || {};
  return {
    questionId: question.id,
    area: question.area || '',
    question: question.text || '',
    value: answer.value || '',
    label: answer.label || answer.value || '',
    insight: answer.insight || '',
    required: question.required !== false,
    inputType: question.inputType || 'choice',
    roles: question.roles || [],
    excelSheet: excel.sheet || '',
    excelId: excel.id || question.id || '',
    htmlModule: excel.module || question.area || '',
    whyImportant: excel.why || '',
    answeredAt: new Date().toISOString()
  };
}

function renderInsight(question) {
  const answer = state.answers[question.id];
  const box = $('answerInsight');
  if (!answer) {
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="mini-kicker">Antwort eingeordnet</div>
    <strong>${escapeHtml(insightTitle(answer.value))}</strong>
    <span>${escapeHtml(answer.insight || 'Diese Antwort hilft uns, den späteren Fahrplan praxisnah zu priorisieren.')}</span>
  `;
}

function insightTitle(value) {
  if (['hoch', 'oft', 'dauernd', 'chaos', 'spaeter', 'nachtelefonieren', 'luecken'].includes(value)) return 'Hier steckt wahrscheinlich ein konkreter Hebel.';
  if (['klar', 'sichtbar', 'sauber', 'sofort'].includes(value)) return 'Gute Basis. Jetzt prüfen wir die Stabilität.';
  if (['unklar', 'unterschiedlich', 'personen', 'teilweise'].includes(value)) return 'Das ist ein relevanter Prüfpunkt.';
  return 'Antwort gespeichert.';
}

function defaultStory(question) {
  return `Diese Antwort hilft, den Bereich „${question.area || 'Erstkontakt'}“ sauber einzuordnen.`;
}

function handleKeyboardNavigation(event) {
  if (event.key !== 'Enter') return;
  if ($('questionView')?.classList.contains('hidden')) return;

  const active = document.activeElement;
  const tag = active?.tagName;

  // In längeren Textfeldern bleibt Enter für Zeilenumbrüche reserviert.
  // Ctrl/Cmd + Enter geht trotzdem weiter.
  if (tag === 'TEXTAREA' && !event.ctrlKey && !event.metaKey) return;

  const question = state.activeQuestions[state.index];
  if (!question) return;
  const hasAnswer = Boolean(state.answers[question.id]);
  if (question.required !== false && !hasAnswer) return;

  event.preventDefault();
  handleNext();
}

function handleNext() {
  const question = state.activeQuestions[state.index];
  if (question.required !== false && !state.answers[question.id]) return;
  state.index += 1;

  if (state.index >= state.activeQuestions.length) {
    finish();
  } else {
    renderQuestion();
  }
}

function handleBack() {
  if (state.index === 0) return;
  state.index -= 1;
  renderQuestion();
}

async function finish() {
  state.participant.completedAt = new Date().toISOString();
  $('progressBar').style.width = '100%';
  $('questionView').classList.add('hidden');
  $('finalView').classList.remove('hidden');

  if (SUBMIT_ENDPOINT) {
    $('backendNotice').textContent = 'Danke, deine Antworten sind angekommen. Daraus entsteht nun die Auswertung für euren Erstkontakt.';
    try {
      await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload())
      });
      $('downloadActions').classList.add('hidden');
      $('testExportNote').classList.add('hidden');
    } catch (error) {
      $('backendNotice').textContent = 'Die automatische Übertragung hat nicht geklappt. Bitte die Antwortdatei herunterladen und weiterleiten.';
      $('downloadActions').classList.remove('hidden');
      $('testExportNote').classList.remove('hidden');
    }
  } else {
    $('backendNotice').textContent = 'Danke, deine Antworten sind erfasst. Im Live-Betrieb werden sie automatisch mit der Auswertung verbunden.';
    $('downloadActions').classList.remove('hidden');
    $('testExportNote').classList.remove('hidden');
  }
}


function resetAssessment() {
  state.participant = {};
  state.activeQuestions = [];
  state.index = 0;
  state.answers = {};
  $('finalView').classList.add('hidden');
  $('questionView').classList.add('hidden');
  $('identityView').classList.remove('hidden');
  $('progressBar').style.width = '0%';
  $('identityForm').reset();
  $('company').value = state.firmaFromUrl || '';
}

function buildPayload() {
  const responseId = buildResponseId();
  const answers = Object.values(state.answers).map((answer, index) => ({
    responseId,
    rowType: 'answer',
    answerIndex: index + 1,
    lead_id: state.leadId || '',
    assessment_id: state.assessmentId || '',
    firma: state.participant.company || state.firmaFromUrl || '',
    leadId: state.leadId || '',
    assessmentId: state.assessmentId || '',
    company: state.participant.company || state.firmaFromUrl || '',
    participantFirstName: state.participant.firstName || '',
    participantLastName: state.participant.lastName || '',
    participantEmail: state.participant.email || '',
    participantMobile: state.participant.mobile || '',
    participantDepartment: state.participant.department || state.department || '',
    participantSource: state.participant.source || state.source || '',
    participantRole: state.participant.role || '',
    participantRoleLabel: state.participant.roleLabel || '',
    questionId: answer.questionId,
    excelSheet: answer.excelSheet || '',
    excelId: answer.excelId || answer.questionId,
    area: answer.area || '',
    htmlModule: answer.htmlModule || '',
    whyImportant: answer.whyImportant || '',
    question: answer.question,
    answerValue: answer.value,
    answerText: answer.label,
    insight: answer.insight || '',
    required: answer.required,
    inputType: answer.inputType || '',
    answeredAt: answer.answeredAt
  }));

  return {
    type: 'catchly-assessment-response',
    version: '15.0',
    responseId,
    lead_id: state.leadId || '',
    assessment_id: state.assessmentId || '',
    firma: state.participant.company || state.firmaFromUrl || '',
    questionnaire: {
      name: 'Catchly Routencheck',
      sourceWorkbook: 'Catchly_Assessment_Fundament_final.xlsx',
      sourceSheets: ['02_GF_Assessment', '03_MA_Check'],
      questionCountShown: state.activeQuestions.length,
      answeredCount: answers.length
    },
    lead: {
      lead_id: state.leadId || '',
      assessment_id: state.assessmentId || '',
      firma: state.participant.company || state.firmaFromUrl || '',
      leadId: state.leadId || '',
      assessmentId: state.assessmentId || '',
      department: state.department || state.participant.department || '',
      source: state.source || state.participant.source || '',
      sourceUrl: window.location.href,
      mode: connectionMode()
    },
    company: state.participant.company || state.firmaFromUrl || '',
    participant: state.participant,
    answers,
    meta: {
      userAgent: navigator.userAgent,
      startedAt: state.participant.startedAt || '',
      completedAt: state.participant.completedAt || '',
      submittedAt: new Date().toISOString(),
      sourceUrl: window.location.href,
      mode: connectionMode()
    }
  };
}

function buildResponseId() {
  const base = [state.participant.company, state.participant.email, state.participant.startedAt].join('|');
  let hash = 0;
  for (let i = 0; i < base.length; i += 1) {
    hash = ((hash << 5) - hash) + base.charCodeAt(i);
    hash |= 0;
  }
  return `CR-${Date.now()}-${Math.abs(hash).toString(36).toUpperCase()}`;
}

function downloadJson() {
  const payload = buildPayload();
  downloadFile(`${fileBaseName()}.json`, JSON.stringify(payload, null, 2), 'application/json');
}

function downloadCsv() {
  const payload = buildPayload();
  const rows = payload.answers.map((answer) => ({
    responseId: answer.responseId,
    lead_id: answer.lead_id || answer.leadId,
    assessment_id: answer.assessment_id || answer.assessmentId,
    firma: answer.firma || answer.company,
    leadId: answer.leadId,
    vorname: answer.participantFirstName,
    name: answer.participantLastName,
    email: answer.participantEmail,
    handy: answer.participantMobile,
    abteilung: answer.participantDepartment,
    source: answer.participantSource,
    assessmentId: answer.assessmentId,
    rolle: answer.participantRoleLabel,
    frageId: answer.questionId,
    excelSheet: answer.excelSheet,
    excelId: answer.excelId,
    bereich: answer.area,
    htmlModul: answer.htmlModule,
    warumWichtig: answer.whyImportant,
    frage: answer.question,
    antwortWert: answer.answerValue,
    antwortText: answer.answerText,
    insight: answer.insight,
    pflicht: answer.required ? 'Ja' : 'Nein',
    beantwortetAm: answer.answeredAt,
    abgeschlossenAm: payload.meta.completedAt
  }));
  const csv = toCsv(rows);
  downloadFile(`${fileBaseName()}.csv`, csv, 'text/csv;charset=utf-8');
}

function fileBaseName() {
  const name = `${state.assessmentId || state.leadId || 'catchly'}_${state.participant.lastName || 'antwort'}`.toLowerCase();
  return name.replace(/[^a-z0-9_-]+/gi, '-');
}

function toCsv(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const body = rows.map((row) => headers.map((header) => csvEscape(row[header])).join(';')).join('\n');
  return `${headers.join(';')}\n${body}`;
}

function csvEscape(value) {
  const text = String(value ?? '');
  if (/[;"\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', init);
