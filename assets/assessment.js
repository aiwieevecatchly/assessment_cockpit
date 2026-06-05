// Produktiver Webhook-Endpunkt. Keine Secrets/API-Keys im Frontend.
const SUBMIT_ENDPOINT = 'https://workflow.catchly.ch/webhook/routencheck-submit';

const DEFAULT_QUESTIONS = [
  {
    "id": "GF01",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Geschäft & Fokus",
    "text": "Welche Leistung soll in den nächsten 12 Monaten stärker wachsen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Wachstumsrichtung statt Bauchgefühl. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "installation",
        "label": "Installation"
      },
      {
        "value": "service_wartung",
        "label": "Service / Wartung"
      },
      {
        "value": "sanierung_umbau",
        "label": "Sanierung / Umbau"
      },
      {
        "value": "beratung_planung",
        "label": "Beratung / Planung"
      },
      {
        "value": "komplettloesung",
        "label": "Komplettlösung"
      },
      {
        "value": "notfall_reparatur",
        "label": "Notfall / Reparatur"
      },
      {
        "value": "andere",
        "label": "Andere"
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
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Ideal Customer Profile. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "privatkunden",
        "label": "Privatkunden"
      },
      {
        "value": "gewerbekunden",
        "label": "Gewerbekunden"
      },
      {
        "value": "verwaltungen",
        "label": "Verwaltungen"
      },
      {
        "value": "architekten_planer",
        "label": "Architekten / Planer"
      },
      {
        "value": "generalunternehmer",
        "label": "Generalunternehmer"
      },
      {
        "value": "stammkunden_servicekunden",
        "label": "Stammkunden / Servicekunden"
      },
      {
        "value": "groessere_projekte",
        "label": "grössere Projekte"
      },
      {
        "value": "kleinere_schnelle_auftraege",
        "label": "kleinere schnelle Aufträge"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF02",
      "module": "Value Proposition",
      "why": "Ideal Customer Profile"
    },
    "multiSelect": true
  },
  {
    "id": "GF03",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Geschäft & Fokus",
    "text": "Welche Art von Auftrag kostet viel Zeit, bringt aber zu wenig?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht. Optional, wenn du dazu etwas sagen kannst.",
    "story": "schlechte Auftragsqualität erkennen. Das fliesst in das Modul «Prozess / Priorisierung» ein.",
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
    "text": "Über welche Wege kommen neue Anfragen bei euch meistens rein?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "So sehen wir, wo Anfragen entstehen und wo sie im Alltag leicht liegen bleiben.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "telefon",
        "label": "Telefon"
      },
      {
        "value": "e_mail",
        "label": "E-Mail"
      },
      {
        "value": "website",
        "label": "Website"
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "value": "empfehlung",
        "label": "Empfehlung"
      },
      {
        "value": "social_media",
        "label": "Social Media"
      },
      {
        "value": "gemischt_mehrere_kanaele",
        "label": "Gemischt / mehrere Kanäle"
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF04",
      "module": "Anfrageprozess",
      "why": "Eingangskanäle und Bruchstellen"
    },
    "multiSelect": true
  },
  {
    "id": "GF05",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Anfrageprozess",
    "text": "Wie klar ist intern geregelt, wer eine neue Anfrage übernimmt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Zuständigkeit und Verbindlichkeit. Das fliesst in das Modul «Prozessrisiko» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt"
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar"
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig"
      },
      {
        "value": "unklar",
        "label": "unklar"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "text": "Wo hakt es im Anfrageprozess am häufigsten?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Hier erkennen wir, welche Reibung im Alltag am schnellsten Geld, Zeit oder Nerven kostet.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "anfrage_wird_zu_spaet_gesehen",
        "label": "Anfrage wird zu spät gesehen"
      },
      {
        "value": "zustaendigkeit_unklar",
        "label": "Zuständigkeit unklar"
      },
      {
        "value": "infos_fehlen",
        "label": "Infos fehlen"
      },
      {
        "value": "nachfassen_fehlt",
        "label": "Nachfassen fehlt"
      },
      {
        "value": "zu_viele_kanaele",
        "label": "zu viele Kanäle"
      },
      {
        "value": "kunde_nicht_qualifiziert",
        "label": "Kunde nicht qualifiziert"
      },
      {
        "value": "kein_klares_problem",
        "label": "kein klares Problem"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF06",
      "module": "Executive Summary",
      "why": "grösster Soforthebel"
    },
    "multiSelect": true
  },
  {
    "id": "GF07",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Nachfassen",
    "text": "Wie wird heute nachgefasst, wenn ein Kunde nicht reagiert?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht.",
    "story": "Follow-up-Systematik. Das fliesst in das Modul «Nachfassen» ein.",
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
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Selbstbild und Differenzierung. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "empfehlung_bekanntheit",
        "label": "Empfehlung / Bekanntheit"
      },
      {
        "value": "regionale_naehe",
        "label": "regionale Nähe"
      },
      {
        "value": "schnelle_reaktion",
        "label": "schnelle Reaktion"
      },
      {
        "value": "saubere_beratung",
        "label": "saubere Beratung"
      },
      {
        "value": "qualitaet_der_arbeit",
        "label": "Qualität der Arbeit"
      },
      {
        "value": "preis",
        "label": "Preis"
      },
      {
        "value": "spezialwissen",
        "label": "Spezialwissen"
      },
      {
        "value": "weiss_nicht_genau",
        "label": "weiss nicht genau"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF08",
      "module": "Value Proposition",
      "why": "Selbstbild und Differenzierung"
    },
    "multiSelect": true
  },
  {
    "id": "GF09",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Was nervt Ihre Kunden vor dem Auftrag vermutlich am meisten?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Kundenschmerz sichtbar machen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "niemand_meldet_sich_schnell",
        "label": "niemand meldet sich schnell"
      },
      {
        "value": "unklare_preise",
        "label": "unklare Preise"
      },
      {
        "value": "zu_wenig_beratung",
        "label": "zu wenig Beratung"
      },
      {
        "value": "zu_viele_anbieter_schwer_vergleichbar",
        "label": "zu viele Anbieter / schwer vergleichbar"
      },
      {
        "value": "fachsprache_komplizierte_erklaerung",
        "label": "Fachsprache / komplizierte Erklärung"
      },
      {
        "value": "lange_wartezeiten",
        "label": "lange Wartezeiten"
      },
      {
        "value": "schlechte_planbarkeit",
        "label": "schlechte Planbarkeit"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF09",
      "module": "Value Proposition",
      "why": "Kundenschmerz sichtbar machen"
    },
    "multiSelect": true
  },
  {
    "id": "GF10",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Was macht Sie aus Kundensicht wirklich anders?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Differenzierung prüfen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "erfahrung",
        "label": "Erfahrung"
      },
      {
        "value": "verlaesslichkeit",
        "label": "Verlässlichkeit"
      },
      {
        "value": "tempo",
        "label": "Tempo"
      },
      {
        "value": "beratung",
        "label": "Beratung"
      },
      {
        "value": "komplettloesung",
        "label": "Komplettlösung"
      },
      {
        "value": "spezialgebiet",
        "label": "Spezialgebiet"
      },
      {
        "value": "regionale_verankerung",
        "label": "regionale Verankerung"
      },
      {
        "value": "aktuell_nicht_klar_formuliert",
        "label": "aktuell nicht klar formuliert"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF10",
      "module": "Value Proposition",
      "why": "Differenzierung prüfen"
    },
    "multiSelect": true
  },
  {
    "id": "GF11",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Value Proposition",
    "text": "Woran erkennt ein Neukunde, dass Sie gut sind?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Beweisbarkeit und Vertrauen. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "google_bewertungen",
        "label": "Google-Bewertungen"
      },
      {
        "value": "referenzen_projekte",
        "label": "Referenzen / Projekte"
      },
      {
        "value": "zertifikate",
        "label": "Zertifikate"
      },
      {
        "value": "team_sichtbar",
        "label": "Team sichtbar"
      },
      {
        "value": "empfehlungen",
        "label": "Empfehlungen"
      },
      {
        "value": "lange_erfahrung",
        "label": "lange Erfahrung"
      },
      {
        "value": "kaum_sichtbar",
        "label": "kaum sichtbar"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF11",
      "module": "Value Proposition",
      "why": "Beweisbarkeit und Vertrauen"
    },
    "multiSelect": true
  },
  {
    "id": "GF12",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wettbewerb",
    "text": "Warum verlieren Sie manchmal gegen andere Anbieter?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Wettbewerbsdruck verstehen. Das fliesst in das Modul «Konkurrenzanalyse» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "preis",
        "label": "Preis"
      },
      {
        "value": "zu_langsame_rueckmeldung",
        "label": "zu langsame Rückmeldung"
      },
      {
        "value": "angebot_unklar",
        "label": "Angebot unklar"
      },
      {
        "value": "konkurrenz_wirkt_professioneller",
        "label": "Konkurrenz wirkt professioneller"
      },
      {
        "value": "fehlende_kapazitaet",
        "label": "fehlende Kapazität"
      },
      {
        "value": "kunde_war_nicht_passend",
        "label": "Kunde war nicht passend"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF12",
      "module": "Konkurrenzanalyse",
      "why": "Wettbewerbsdruck verstehen"
    },
    "multiSelect": true
  },
  {
    "id": "GF13",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wettbewerb",
    "text": "Welche lokalen Konkurrenten nerven Sie am meisten?",
    "helper": "Bitte spontan beantworten. Ein kurzer Satz reicht. Optional, wenn du dazu etwas sagen kannst.",
    "story": "Input für A-Konkurrenz. Das fliesst in das Modul «ABC-Konkurrenz» ein.",
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
    "story": "Input für Best-in-Class. Das fliesst in das Modul «Benchmark Schweiz» ein.",
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
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "So wird sichtbar, ob Wissen zentral zugänglich ist oder über Mails, Listen, Papier und Köpfe verteilt bleibt.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "crm_branchensoftware",
        "label": "CRM / Branchensoftware"
      },
      {
        "value": "excel_liste",
        "label": "Excel-Liste"
      },
      {
        "value": "outlook_e_mail",
        "label": "Outlook / E-Mail"
      },
      {
        "value": "papier_notizen",
        "label": "Papier / Notizen"
      },
      {
        "value": "kopf_wissen_einzelner_personen",
        "label": "Kopf-Wissen einzelner Personen"
      },
      {
        "value": "mehrere_orte",
        "label": "mehrere Orte"
      },
      {
        "value": "unklar",
        "label": "unklar"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF15",
      "module": "Suchzeit / Wissen",
      "why": "Datenrisiko und Suchzeit"
    },
    "multiSelect": true
  },
  {
    "id": "GF16",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Tools & Daten",
    "text": "Gibt es eine zentrale Wahrheit für offene Anfragen und Kundenstatus?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "CRM-/Prozessreife. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja_eine_zentrale_quelle",
        "label": "ja, eine zentrale Quelle"
      },
      {
        "value": "teilweise_zentral",
        "label": "teilweise zentral"
      },
      {
        "value": "mehrere_listen_tools",
        "label": "mehrere Listen / Tools"
      },
      {
        "value": "viel_in_e_mail_kopf_papier",
        "label": "viel in E-Mail / Kopf / Papier"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "text": "Welche Tools nutzt ihr im Alltag wirklich?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Damit wird sichtbar, wo Informationen verteilt sind und wo ein klarerer Ablauf helfen kann.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "outlook",
        "label": "Outlook"
      },
      {
        "value": "excel",
        "label": "Excel"
      },
      {
        "value": "ms_365_sharepoint_onedrive",
        "label": "MS 365 / SharePoint / OneDrive"
      },
      {
        "value": "crm",
        "label": "CRM"
      },
      {
        "value": "branchensoftware",
        "label": "Branchensoftware"
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "value": "papier_notizbuch",
        "label": "Papier / Notizbuch"
      },
      {
        "value": "kopf_wissen",
        "label": "Kopf-Wissen"
      },
      {
        "value": "gemischt",
        "label": "Gemischt"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF17",
      "module": "Tools & Daten",
      "why": "Integrations- und Automationsbasis"
    },
    "multiSelect": true
  },
  {
    "id": "GF18",
    "roles": [
      "geschaeftsfuehrung"
    ],
    "area": "Wissen & Übergabe",
    "text": "Wie stark hängt der Ablauf an einzelnen Personen?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Key-Person-Risk. Das fliesst in das Modul «EBIT / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja",
        "label": "Ja"
      },
      {
        "value": "nein",
        "label": "Nein"
      },
      {
        "value": "teilweise",
        "label": "Teilweise"
      },
      {
        "value": "nicht_sichtbar",
        "label": "Nicht sichtbar"
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht"
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
    "story": "Unternehmenswert-Risiko. Das fliesst in das Modul «EBIT / Übergabe» ein.",
    "inputType": "choice",
    "required": false,
    "answers": [
      {
        "value": "ja_in_0_2_jahren_relevant",
        "label": "ja, in 0–2 Jahren relevant"
      },
      {
        "value": "ja_in_3_5_jahren_relevant",
        "label": "ja, in 3–5 Jahren relevant"
      },
      {
        "value": "vielleicht_spaeter",
        "label": "vielleicht später"
      },
      {
        "value": "aktuell_nicht_relevant",
        "label": "aktuell nicht relevant"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "text": "Welche schnellen Verbesserungen würden euch am meisten helfen?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Damit priorisieren wir nicht nach Theorie, sondern nach dem, was im Betrieb wirklich Wirkung hätte.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "zentraler_anfrageeingang",
        "label": "zentraler Anfrageeingang"
      },
      {
        "value": "besseres_anfrageformular",
        "label": "besseres Anfrageformular"
      },
      {
        "value": "automatische_rueckfrage_mail",
        "label": "automatische Rückfrage-Mail"
      },
      {
        "value": "klare_wiedervorlage",
        "label": "klare Wiedervorlage"
      },
      {
        "value": "telefonleitfaden_qualifizierungsfragen",
        "label": "Telefonleitfaden / Qualifizierungsfragen"
      },
      {
        "value": "crm_lead_liste",
        "label": "CRM-/Lead-Liste"
      },
      {
        "value": "erst_prozess_klaeren",
        "label": "erst Prozess klären"
      }
    ],
    "excelSource": {
      "sheet": "02_GF_Assessment",
      "id": "GF20",
      "module": "30-60-90 Plan",
      "why": "Umsetzungsfokus"
    },
    "multiSelect": true
  },
  {
    "id": "MA01",
    "roles": [
      "team"
    ],
    "area": "Anfrageeingang",
    "text": "Über welche Wege kommen Anfragen bei euch im Alltag rein?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "So erkennen wir, welche Kanäle wirklich genutzt werden und wo schnell etwas untergeht.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "telefon",
        "label": "Telefon"
      },
      {
        "value": "e_mail",
        "label": "E-Mail"
      },
      {
        "value": "website",
        "label": "Website"
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "value": "empfehlung",
        "label": "Empfehlung"
      },
      {
        "value": "social_media",
        "label": "Social Media"
      },
      {
        "value": "gemischt_mehrere_kanaele",
        "label": "Gemischt / mehrere Kanäle"
      },
      {
        "value": "weiss_nicht",
        "label": "Weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA01",
      "module": "Anfrageprozess",
      "why": "Kanäle verstehen"
    },
    "multiSelect": true
  },
  {
    "id": "MA02",
    "roles": [
      "team"
    ],
    "area": "Zuständigkeit",
    "text": "Wie klar ist, wer als Nächstes etwas tun muss?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Verantwortung. Das fliesst in das Modul «Prozessrisiko» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt"
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar"
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig"
      },
      {
        "value": "unklar",
        "label": "unklar"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "story": "Suchzeit. Das fliesst in das Modul «Suchzeit / Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie"
      },
      {
        "value": "selten",
        "label": "selten"
      },
      {
        "value": "manchmal",
        "label": "manchmal"
      },
      {
        "value": "haeufig",
        "label": "häufig"
      },
      {
        "value": "taeglich",
        "label": "täglich"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "text": "Wo suchst du im Alltag am häufigsten nach Kunden-, Anfrage- oder Offerteninfos?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Suchen kostet Zeit. Hier sehen wir, wo Informationen fehlen oder zu stark verteilt sind.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "crm_branchensoftware",
        "label": "CRM / Branchensoftware"
      },
      {
        "value": "excel_liste",
        "label": "Excel-Liste"
      },
      {
        "value": "outlook_e_mail",
        "label": "Outlook / E-Mail"
      },
      {
        "value": "papier_notizen",
        "label": "Papier / Notizen"
      },
      {
        "value": "kopf_wissen_einzelner_personen",
        "label": "Kopf-Wissen einzelner Personen"
      },
      {
        "value": "mehrere_orte",
        "label": "mehrere Orte"
      },
      {
        "value": "unklar",
        "label": "unklar"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA04",
      "module": "Suchzeit / Daten",
      "why": "Tool-Brüche"
    },
    "multiSelect": true
  },
  {
    "id": "MA05",
    "roles": [
      "team"
    ],
    "area": "Daten",
    "text": "Gibt es eine zentrale Stelle, wo der aktuelle Stand einer Anfrage sichtbar ist?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Single Source of Truth. Das fliesst in das Modul «Tools & Daten» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "ja_eine_zentrale_quelle",
        "label": "ja, eine zentrale Quelle"
      },
      {
        "value": "teilweise_zentral",
        "label": "teilweise zentral"
      },
      {
        "value": "mehrere_listen_tools",
        "label": "mehrere Listen / Tools"
      },
      {
        "value": "viel_in_e_mail_kopf_papier",
        "label": "viel in E-Mail / Kopf / Papier"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "story": "Doppelarbeit. Das fliesst in das Modul «Automation» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie"
      },
      {
        "value": "selten",
        "label": "selten"
      },
      {
        "value": "manchmal",
        "label": "manchmal"
      },
      {
        "value": "haeufig",
        "label": "häufig"
      },
      {
        "value": "taeglich",
        "label": "täglich"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "story": "Rückfragen und Verzögerung. Das fliesst in das Modul «Qualifizierung» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie"
      },
      {
        "value": "selten",
        "label": "selten"
      },
      {
        "value": "manchmal",
        "label": "manchmal"
      },
      {
        "value": "haeufig",
        "label": "häufig"
      },
      {
        "value": "taeglich",
        "label": "täglich"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "story": "Folgechance sichern. Das fliesst in das Modul «Nachfassen» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt"
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar"
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig"
      },
      {
        "value": "unklar",
        "label": "unklar"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Kundenperspektive. Das fliesst in das Modul «Value Proposition» ein.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "schnelle_rueckmeldung_wird_gelobt",
        "label": "schnelle Rückmeldung wird gelobt"
      },
      {
        "value": "kunde_wartet_auf_antwort",
        "label": "Kunde wartet auf Antwort"
      },
      {
        "value": "kunde_ist_unsicher_ob_anfrage_angekommen",
        "label": "Kunde ist unsicher, ob Anfrage angekommen ist"
      },
      {
        "value": "kunde_braucht_mehr_erklaerung",
        "label": "Kunde braucht mehr Erklärung"
      },
      {
        "value": "kunde_hat_mehrere_anbieter_angefragt",
        "label": "Kunde hat mehrere Anbieter angefragt"
      },
      {
        "value": "bekomme_ich_selten_mit",
        "label": "bekomme ich selten mit"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA09",
      "module": "Value Proposition",
      "why": "Kundenperspektive"
    },
    "multiSelect": true
  },
  {
    "id": "MA10",
    "roles": [
      "team"
    ],
    "area": "Zeitfresser",
    "text": "Was kostet dich im Alltag am meisten Zeit?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Das zeigt, wo Entlastung schnell spürbar wäre, ohne den ganzen Betrieb umzubauen.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "anfrage_wird_zu_spaet_gesehen",
        "label": "Anfrage wird zu spät gesehen"
      },
      {
        "value": "zustaendigkeit_unklar",
        "label": "Zuständigkeit unklar"
      },
      {
        "value": "infos_fehlen",
        "label": "Infos fehlen"
      },
      {
        "value": "nachfassen_fehlt",
        "label": "Nachfassen fehlt"
      },
      {
        "value": "zu_viele_kanaele",
        "label": "zu viele Kanäle"
      },
      {
        "value": "kunde_nicht_qualifiziert",
        "label": "Kunde nicht qualifiziert"
      },
      {
        "value": "kein_klares_problem",
        "label": "kein klares Problem"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA10",
      "module": "30-60-90 Plan",
      "why": "Quick Win identifizieren"
    },
    "multiSelect": true
  },
  {
    "id": "MA11",
    "roles": [
      "team"
    ],
    "area": "Tools",
    "text": "Welche Tools nutzt du im Alltag wirklich?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "So erkennen wir, wo du arbeitest und wo heute schon Daten, Mails oder Aufgaben hängen.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "outlook",
        "label": "Outlook"
      },
      {
        "value": "excel",
        "label": "Excel"
      },
      {
        "value": "ms_365_sharepoint_onedrive",
        "label": "MS 365 / SharePoint / OneDrive"
      },
      {
        "value": "crm",
        "label": "CRM"
      },
      {
        "value": "branchensoftware",
        "label": "Branchensoftware"
      },
      {
        "value": "whatsapp",
        "label": "WhatsApp"
      },
      {
        "value": "papier_notizbuch",
        "label": "Papier / Notizbuch"
      },
      {
        "value": "kopf_wissen",
        "label": "Kopf-Wissen"
      },
      {
        "value": "gemischt",
        "label": "Gemischt"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA11",
      "module": "Tools & Daten",
      "why": "Umsetzbarkeit"
    },
    "multiSelect": true
  },
  {
    "id": "MA12",
    "roles": [
      "team"
    ],
    "area": "Wissen",
    "text": "Wie gut ist die Kundenhistorie nachvollziehbar, wenn jemand anders übernimmt?",
    "helper": "Bitte die Antwort wählen, die dem Alltag am nächsten kommt.",
    "story": "Key-Person-Risk. Das fliesst in das Modul «Wissen / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "klar_geregelt",
        "label": "klar geregelt"
      },
      {
        "value": "meistens_klar",
        "label": "meistens klar"
      },
      {
        "value": "personenabhaengig",
        "label": "personenabhängig"
      },
      {
        "value": "unklar",
        "label": "unklar"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "story": "Kopf-Wissen. Das fliesst in das Modul «Wissen / Übergabe» ein.",
    "inputType": "choice",
    "required": true,
    "answers": [
      {
        "value": "nie_fast_nie",
        "label": "nie / fast nie"
      },
      {
        "value": "selten",
        "label": "selten"
      },
      {
        "value": "manchmal",
        "label": "manchmal"
      },
      {
        "value": "haeufig",
        "label": "häufig"
      },
      {
        "value": "taeglich",
        "label": "täglich"
      },
      {
        "value": "weiss_nicht",
        "label": "weiss nicht"
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
    "text": "Welche schnellen Verbesserungen würden dir sofort helfen?",
    "helper": "Mehrere Antworten möglich. Wähle alles aus, was im Alltag wirklich vorkommt.",
    "story": "Hier sammeln wir die konkreten Hebel aus dem Alltag der Personen, die den Prozess wirklich erleben.",
    "inputType": "multiChoice",
    "required": true,
    "answers": [
      {
        "value": "zentraler_anfrageeingang",
        "label": "zentraler Anfrageeingang"
      },
      {
        "value": "besseres_anfrageformular",
        "label": "besseres Anfrageformular"
      },
      {
        "value": "automatische_rueckfrage_mail",
        "label": "automatische Rückfrage-Mail"
      },
      {
        "value": "klare_wiedervorlage",
        "label": "klare Wiedervorlage"
      },
      {
        "value": "telefonleitfaden_qualifizierungsfragen",
        "label": "Telefonleitfaden / Qualifizierungsfragen"
      },
      {
        "value": "crm_lead_liste",
        "label": "CRM-/Lead-Liste"
      },
      {
        "value": "erst_prozess_klaeren",
        "label": "erst Prozess klären"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA14",
      "module": "30-60-90 Plan",
      "why": "Akzeptanz und Nutzen"
    },
    "multiSelect": true
  },
  {
    "id": "MA15",
    "roles": [
      "team"
    ],
    "area": "Umsetzung & Akzeptanz",
    "text": "Wenn Anfragen, Rückfragen und Termine klarer digital geführt würden: Würde dir das im Alltag helfen?",
    "helper": "Wähle deine Einschätzung. Je nach Antwort fragen wir kurz nach, was helfen würde oder was im Weg steht.",
    "story": "Damit erkennen wir nicht nur den Prozess, sondern auch die Bereitschaft im Team. Das ist wichtig, damit eine Lösung später wirklich genutzt wird.",
    "inputType": "choiceWithConditionalFollowUp",
    "required": true,
    "answers": [
      {
        "value": "ja",
        "label": "Ja, das würde helfen"
      },
      {
        "value": "teilweise",
        "label": "Teilweise"
      },
      {
        "value": "nein",
        "label": "Nein, eher nicht"
      },
      {
        "value": "nicht_sichtbar",
        "label": "Für mich nicht sichtbar"
      },
      {
        "value": "weiss_nicht",
        "label": "Kann ich nicht beurteilen"
      }
    ],
    "excelSource": {
      "sheet": "03_MA_Check",
      "id": "MA15",
      "module": "Umsetzung",
      "why": "Change Readiness"
    },
    "conditionalFollowUp": {
      "helpful": {
        "values": [
          "ja"
        ],
        "type": "textarea",
        "label": "Welche Prozesse oder täglichen Arbeiten würden dir konkret helfen?",
        "placeholder": "Zum Beispiel: Anfragen sortieren, Termine abstimmen, Infos suchen, Copy-Paste, Mails nachfassen, WhatsApp übertragen …",
        "required": true
      },
      "partial": {
        "values": [
          "teilweise"
        ],
        "type": "textarea",
        "label": "Wo würde es helfen und wo eher nicht?",
        "placeholder": "Kurzer Satz reicht. Zum Beispiel: Bei Terminen ja, bei technischen Abklärungen eher nicht.",
        "required": true
      },
      "barrier": {
        "values": [
          "nein",
          "nicht_sichtbar",
          "weiss_nicht"
        ],
        "type": "reasonChoice",
        "label": "Was ist der Hauptgrund für deine Einschätzung?",
        "required": true,
        "answers": [
          {
            "value": "nutzen_nicht_klar",
            "label": "Der Nutzen ist für mich nicht klar"
          },
          {
            "value": "heute_gut_genug",
            "label": "Es funktioniert heute gut genug"
          },
          {
            "value": "keine_zeit_umstellung",
            "label": "Im Alltag fehlt die Zeit für Umstellung"
          },
          {
            "value": "sorge_komplizierter",
            "label": "Ich habe Sorge, dass es komplizierter wird"
          },
          {
            "value": "unsicherheit_tools",
            "label": "Unsicherheit mit digitalen Tools"
          },
          {
            "value": "sorge_kontrolle",
            "label": "Sorge vor Kontrolle oder Überwachung"
          },
          {
            "value": "schlechte_erfahrung",
            "label": "Schlechte Erfahrungen mit früheren Tools oder Projekten"
          },
          {
            "value": "rollen_unklar",
            "label": "Rollen und Zuständigkeiten wären unklar"
          },
          {
            "value": "datenschutz_kundendaten",
            "label": "Datenschutz oder Kundendaten sind ein Thema"
          },
          {
            "value": "anderes",
            "label": "Anderer Grund"
          }
        ],
        "otherLabel": "Kurz begründen, was dahinter steckt",
        "otherPlaceholder": "Zum Beispiel: Ich sehe nicht, wo es uns konkret entlasten würde.",
        "otherRequired": true
      }
    }
  }
];

const state = {
  leadId: '',
  assessmentId: '',
  department: '',
  source: '',
  firmaFromUrl: '',
  leadCompany: '',
  participant: {},
  clientResponseId: '',
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
  state.leadCompany = urlContext.firma;
  $('company').value = state.leadCompany;
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
  $('submitWebhookBtn')?.addEventListener('click', submitToWebhook);
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
  // Testdaten für lokale und GitHub-Tests.
  // Wenn bereits eine echte Firma aus der URL vorhanden ist, bleibt sie im Payload als lead_company führend.
  if (!state.leadId) state.leadId = 'LEAD-TEST-001';
  if (!state.assessmentId) state.assessmentId = 'ASM-TEST-001';
  if (!state.leadCompany) {
    state.leadCompany = 'Test 1';
    state.firmaFromUrl = 'Test 1';
  }
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
  $('questionStory').innerHTML = `<strong>Warum wir das fragen</strong><span>${escapeHtml(cleanStoryText(question))}</span>`;

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
  const isMulti = isMultiChoice(question);
  const existing = state.answers[question.id] || null;
  const selectedValues = isMulti ? new Set(existing?.selectedValues || []) : new Set([existing?.value].filter(Boolean));

  if (isMulti) {
    const hint = document.createElement('div');
    hint.className = 'multi-hint';
    hint.textContent = 'Mehrere Antworten möglich.';
    $('answerOptions').appendChild(hint);
  }

  question.answers.forEach((answer) => {
    const selected = selectedValues.has(answer.value);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `choice-card ${selected ? 'selected' : ''} ${isMulti ? 'multi-choice' : ''}`;
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    button.innerHTML = `
      <span class="choice-main">
        <strong>${escapeHtml(answer.label)}</strong>
        <small>${escapeHtml(answer.hint || '')}</small>
      </span>
      ${isMulti ? `<span class="checkmark" aria-hidden="true">${selected ? '✓' : ''}</span>` : ''}
    `;
    button.addEventListener('click', () => {
      if (isMulti) toggleMultiAnswer(question, answer);
      else selectAnswer(question, answer);
    });
    $('answerOptions').appendChild(button);
  });

  const followUp = getActiveFollowUp(question, existing?.value);
  if (followUp) {
    renderConditionalFollowUp(question, followUp);
  }
}

function isMultiChoice(question) {
  return question.inputType === 'multiChoice' || question.multiSelect === true;
}

function isConditionalFollowUpQuestion(question) {
  return question.inputType === 'choiceWithText' || question.inputType === 'choiceWithConditionalFollowUp';
}

function getActiveFollowUp(question, value) {
  if (!value) return null;
  if (question.conditionalFollowUp) {
    const groups = Object.values(question.conditionalFollowUp);
    return groups.find((item) => (item.values || []).includes(value)) || null;
  }
  return question.followUp || null;
}

function toggleMultiAnswer(question, answer) {
  const current = state.answers[question.id] || buildAnswerRecord(question, {
    selectedValues: [],
    selectedLabels: [],
    value: '',
    label: '',
    insight: 'Diese Auswahl zeigt, wo im Alltag mehrere Wege oder Aufgaben zusammenkommen.'
  });
  const selectedValues = new Set(current.selectedValues || []);
  const selectedLabels = new Map((current.selectedValues || []).map((value, index) => [value, current.selectedLabels?.[index] || value]));

  if (selectedValues.has(answer.value)) {
    selectedValues.delete(answer.value);
    selectedLabels.delete(answer.value);
  } else {
    selectedValues.add(answer.value);
    selectedLabels.set(answer.value, answer.label || answer.value);
  }

  const values = Array.from(selectedValues);
  if (!values.length) {
    delete state.answers[question.id];
  } else {
    const labels = values.map((value) => selectedLabels.get(value) || value);
    state.answers[question.id] = buildAnswerRecord(question, {
      selectedValues: values,
      selectedLabels: labels,
      value: values.join('|'),
      label: labels.join('; '),
      insight: values.length > 1
        ? 'Gut sichtbar: Hier läuft es über mehrere Wege. Genau dort entstehen oft Übergaben, Suchaufwand oder Doppelarbeit.'
        : 'Antwort gespeichert. Diese Auswahl hilft, den Alltag genauer einzuordnen.'
    });
  }

  renderQuestion();
}

function renderConditionalFollowUp(question, followUp) {
  if (followUp.type === 'reasonChoice') {
    renderReasonFollowUp(question, followUp);
    return;
  }
  renderTextFollowUp(question, followUp);
}

function renderTextFollowUp(question, followUp) {
  const wrapper = document.createElement('div');
  wrapper.className = 'field text-answer-card follow-up-card';
  const label = document.createElement('label');
  label.textContent = followUp.label || 'Was würde dir konkret helfen?';
  const textarea = document.createElement('textarea');
  textarea.placeholder = followUp.placeholder || 'Kurzer Satz reicht.';
  textarea.value = state.answers[question.id]?.followUpText || '';
  textarea.required = followUp.required === true;
  textarea.addEventListener('input', () => {
    const existing = state.answers[question.id];
    if (!existing) return;
    existing.followUpType = followUp.type || 'textarea';
    existing.followUpText = textarea.value.trim();
    existing.followUpReasonValue = '';
    existing.followUpReasonLabel = '';
    existing.label = combineAnswerLabel(existing.baseLabel || existing.label, existing.followUpText);
    existing.insight = conditionalFollowUpInsight(question, existing);
    state.answers[question.id] = existing;
    renderInsight(question);
    updateNextButton(question);
  });
  wrapper.appendChild(label);
  wrapper.appendChild(textarea);
  $('answerOptions').appendChild(wrapper);
}

function renderReasonFollowUp(question, followUp) {
  const existing = state.answers[question.id];
  if (!existing) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'field text-answer-card follow-up-card reason-follow-up-card';
  const label = document.createElement('label');
  label.textContent = followUp.label || 'Was ist der Hauptgrund?';
  wrapper.appendChild(label);

  const grid = document.createElement('div');
  grid.className = 'choice-grid reason-choice-grid';
  (followUp.answers || []).forEach((reason) => {
    const selected = existing.followUpReasonValue === reason.value;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `choice-card reason-choice ${selected ? 'selected' : ''}`;
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    button.innerHTML = `<span class="choice-main"><strong>${escapeHtml(reason.label)}</strong></span>`;
    button.addEventListener('click', () => {
      const current = state.answers[question.id];
      if (!current) return;
      current.followUpType = 'reasonChoice';
      current.followUpReasonValue = reason.value;
      current.followUpReasonLabel = reason.label || reason.value;
      if (reason.value !== 'anderes') current.followUpText = '';
      current.label = combineAnswerLabel(current.baseLabel || current.label, current.followUpReasonLabel, current.followUpText);
      current.insight = conditionalFollowUpInsight(question, current);
      state.answers[question.id] = current;
      renderQuestion();
    });
    grid.appendChild(button);
  });
  wrapper.appendChild(grid);

  if (existing.followUpReasonValue === 'anderes') {
    const otherLabel = document.createElement('label');
    otherLabel.className = 'nested-label';
    otherLabel.textContent = followUp.otherLabel || 'Kurz begründen';
    const textarea = document.createElement('textarea');
    textarea.placeholder = followUp.otherPlaceholder || 'Kurzer Satz reicht.';
    textarea.value = existing.followUpText || '';
    textarea.required = followUp.otherRequired === true;
    textarea.addEventListener('input', () => {
      const current = state.answers[question.id];
      if (!current) return;
      current.followUpText = textarea.value.trim();
      current.label = combineAnswerLabel(current.baseLabel || current.label, current.followUpReasonLabel, current.followUpText);
      current.insight = conditionalFollowUpInsight(question, current);
      state.answers[question.id] = current;
      renderInsight(question);
      updateNextButton(question);
    });
    wrapper.appendChild(otherLabel);
    wrapper.appendChild(textarea);
    setTimeout(() => textarea.focus({ preventScroll: true }), 30);
  }

  $('answerOptions').appendChild(wrapper);
}

function combineAnswerLabel(baseLabel, followUpReasonLabel = '', followUpText = '') {
  const parts = [baseLabel || 'Einschätzung'];
  if (followUpReasonLabel) parts.push(`Grund: ${followUpReasonLabel}`);
  if (followUpText) parts.push(`Zusatz: ${followUpText}`);
  return parts.join(' | ');
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

function isQuestionComplete(question) {
  const answer = state.answers[question.id];
  if (!answer) return question.required === false;

  if (isMultiChoice(question)) {
    return Boolean(answer.selectedValues?.length) || question.required === false;
  }

  if (isConditionalFollowUpQuestion(question)) {
    const followUp = getActiveFollowUp(question, answer.value);
    if (followUp?.required) {
      if (followUp.type === 'reasonChoice') {
        if (!answer.followUpReasonValue) return false;
        if (answer.followUpReasonValue === 'anderes' && followUp.otherRequired) {
          return Boolean((answer.followUpText || '').trim());
        }
        return true;
      }
      return Boolean((answer.followUpText || '').trim());
    }
  }

  return Boolean(answer.value || answer.label || answer.selectedValues?.length) || question.required === false;
}

function updateNextButton(question) {
  const complete = isQuestionComplete(question);
  $('nextBtn').disabled = question.required !== false && !complete;
  $('nextBtn').textContent = question.required === false && !state.answers[question.id] ? 'Überspringen' : 'Weiter';
}

function selectAnswer(question, answer) {
  const existing = state.answers[question.id] || {};
  const previousFollowUp = getActiveFollowUp(question, existing.value);
  const nextFollowUp = getActiveFollowUp(question, answer.value);
  const record = buildAnswerRecord(question, answer);

  if (isConditionalFollowUpQuestion(question)) {
    record.baseLabel = record.label;
    record.followUpType = nextFollowUp?.type || '';
    if (previousFollowUp?.type === nextFollowUp?.type) {
      record.followUpText = existing.followUpText || '';
      record.followUpReasonValue = existing.followUpReasonValue || '';
      record.followUpReasonLabel = existing.followUpReasonLabel || '';
      record.label = combineAnswerLabel(record.baseLabel, record.followUpReasonLabel, record.followUpText);
    }
    record.insight = conditionalFollowUpInsight(question, record);
  }

  state.answers[question.id] = record;
  renderQuestion();
  window.setTimeout(() => {
    const followUp = $('answerOptions').querySelector('.follow-up-card textarea, .follow-up-card button');
    const next = $('nextBtn');
    if (followUp) followUp.focus({ preventScroll: true });
    else if (next && !next.disabled) next.focus({ preventScroll: true });
  }, 30);
}

function conditionalFollowUpInsight(question, answer) {
  if (question.id !== 'MA15') return contextualInsight(question, answer);
  const value = String(answer.value || '');
  if (value === 'ja') {
    if (answer.followUpText) return 'Danke. Genau solche konkreten Aufgaben zeigen, wo eine Lösung im Alltag schnell entlasten könnte.';
    return 'Danke. Wenn du gleich konkretisierst, welche Arbeiten helfen würden, wird die spätere Empfehlung deutlich präziser.';
  }
  if (value === 'teilweise') {
    if (answer.followUpText) return 'Danke. Diese Differenzierung ist wertvoll: Sie zeigt, wo Automation helfen kann und wo der persönliche Ablauf bewusst bleiben sollte.';
    return 'Danke. Teilweise ist oft die ehrlichste Antwort. Die Ergänzung hilft uns, die sinnvollen Grenzen sauber zu erkennen.';
  }
  if (['nein', 'nicht_sichtbar', 'weiss_nicht'].includes(value)) {
    if (answer.followUpReasonValue) return 'Danke. Die Begründung ist wichtig, weil sie zeigt, ob es um Nutzen, Vertrauen, Zeit, Tools oder Kultur geht.';
    return 'Danke. Bitte wähle noch den Hauptgrund. Gerade kritische Einschätzungen helfen, die Umsetzung realistisch zu planen.';
  }
  return contextualInsight(question, answer);
}

function isGenericInsight(text) {
  const value = String(text || '').trim().toLowerCase();
  return !value || value.includes('späteren fahrplan sauber zu priorisieren') || value.includes('praxisnah zu priorisieren');
}

function valueLooksChallenging(value) {
  return /unklar|personen|haeufig|häufig|taeglich|täglich|dauernd|chaos|spaet|spät|vergessen|luecken|lücken|nachtelefonieren|zu_spaet|weiss_nicht|mehrere|gemischt|kopf|papier|suchen|keine|nicht/.test(String(value || '').toLowerCase());
}

function valueLooksStrong(value) {
  return /klar|sauber|sofort|zentral|ja_eine|gut|selten|nie|geregelt|sichtbar/.test(String(value || '').toLowerCase());
}

function contextualInsight(question, answer) {
  const area = String(question.area || '').toLowerCase();
  const moduleName = question.excelSource?.module || question.area || 'Routencheck';
  const value = answer.value || (Array.isArray(answer.selectedValues) ? answer.selectedValues.join('|') : '');
  const selectedCount = Array.isArray(answer.selectedValues) ? answer.selectedValues.length : 0;

  if (question.inputType === 'text' || question.inputType === 'textarea') {
    return `Danke. Diese Antwort zeigt uns konkrete Alltagssituationen. Genau solche Beispiele machen die spätere Auswertung im Bereich «${moduleName}» deutlich greifbarer.`;
  }

  if (selectedCount > 1) {
    return `Danke. Mehrere ausgewählte Punkte zeigen, wo Übergaben, Rückfragen oder Doppelarbeit entstehen können. Das hilft, im Assessment die richtigen Abläufe zu priorisieren.`;
  }

  if (area.includes('anfrage')) {
    if (valueLooksChallenging(value)) return 'Danke. Diese Antwort zeigt, wo Anfragen im Alltag leicht liegen bleiben oder zu spät weiterlaufen. Genau dort prüfen wir den grössten Hebel im Erstkontakt.';
    return 'Danke. Damit erkennen wir, über welche Wege Anfragen zuverlässig ankommen und wo der Ablauf bereits gut funktioniert.';
  }

  if (area.includes('zuständig') || area.includes('prozess')) {
    if (valueLooksChallenging(value)) return 'Danke. Das ist ein wichtiger Hinweis darauf, wo Zuständigkeiten oder nächste Schritte nicht sauber sichtbar sind. Das ist oft der Punkt, an dem Chancen verloren gehen.';
    return 'Danke. Eine klare Zuständigkeit ist eine gute Basis. Wir prüfen danach, ob sie auch unter Druck stabil bleibt.';
  }

  if (area.includes('suchen') || area.includes('daten') || area.includes('tools')) {
    if (valueLooksChallenging(value)) return 'Danke. Das zeigt, wo Informationen verteilt sind und intern Zeit verloren geht. Daraus lassen sich oft schnelle Entlastungen ableiten.';
    return 'Danke. Das hilft uns zu erkennen, welche Datenquellen bereits gut funktionieren und wo Automation sinnvoll andocken kann.';
  }

  if (area.includes('umsetzung') || area.includes('verbesser')) {
    return 'Danke. Diese Antwort zeigt, welche Verbesserung im Alltag zuerst spürbar wäre. Das hilft, den späteren Fahrplan nicht theoretisch, sondern umsetzbar zu machen.';
  }

  if (valueLooksChallenging(value)) {
    return `Danke. Diese Antwort macht sichtbar, wo im Alltag Reibung entsteht. Das hilft uns, den Bereich «${moduleName}» gezielt zu prüfen.`;
  }

  if (valueLooksStrong(value)) {
    return `Danke. Das klingt nach einer guten Ausgangslage. Im Assessment prüfen wir, ob dieser Ablauf sauber dokumentiert und wiederholbar ist.`;
  }

  return `Danke. Diese Antwort hilft uns, den Bereich «${moduleName}» genauer und praxisnäher einzuordnen.`;
}

function insightForAnswer(question, answer) {
  if (!isGenericInsight(answer.insight)) return answer.insight;
  return contextualInsight(question, answer);
}

function buildAnswerRecord(question, answer) {
  const excel = question.excelSource || {};
  return {
    questionId: question.id,
    area: question.area || '',
    question: question.text || '',
    value: answer.value || '',
    label: answer.label || answer.value || '',
    selectedValues: answer.selectedValues || [],
    selectedLabels: answer.selectedLabels || [],
    followUpText: answer.followUpText || '',
    followUpType: answer.followUpType || '',
    followUpReasonValue: answer.followUpReasonValue || '',
    followUpReasonLabel: answer.followUpReasonLabel || '',
    baseLabel: answer.baseLabel || answer.label || answer.value || '',
    insight: insightForAnswer(question, answer),
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
  const selectionCount = answer.selectedValues?.length || 0;
  const title = selectionCount > 1 ? `${selectionCount} Punkte eingeordnet.` : insightTitle(answer.value, question);
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="mini-kicker">Einordnung</div>
    <strong>${escapeHtml(title)}</strong>
    <span>${escapeHtml(answer.insight || 'Diese Antwort hilft uns, den späteren Fahrplan praxisnah zu priorisieren.')}</span>
  `;
}

function insightTitle(value, question) {
  const area = String(question?.area || '').toLowerCase();
  if (valueLooksChallenging(value)) return area.includes('anfrage') ? 'Hier kann im Erstkontakt etwas liegen bleiben.' : 'Hier steckt wahrscheinlich ein konkreter Prüfpunkt.';
  if (valueLooksStrong(value)) return 'Gute Basis. Jetzt prüfen wir die Wiederholbarkeit.';
  return 'Antwort eingeordnet.';
}

function defaultStory(question) {
  return `Diese Antwort hilft, den Bereich „${question.area || 'Erstkontakt'}“ sauber einzuordnen.`;
}

function cleanStoryText(question) {
  const raw = question.story || defaultStory(question);
  return String(raw).replace(/^\s*Warum\s+(wir\s+das\s+fragen|diese\s+Frage)\s*:\s*/i, '');
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
  if (question.required !== false && !isQuestionComplete(question)) return;

  event.preventDefault();
  handleNext();
}

function handleNext() {
  const question = state.activeQuestions[state.index];
  if (question.required !== false && !isQuestionComplete(question)) return;
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
  const notice = $('backendNotice');
  if (notice) {
    notice.classList.add('hidden');
    notice.classList.remove('success', 'error');
    notice.textContent = '';
  }
  const submitBtn = $('submitWebhookBtn');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Routencheck abschicken';
  }
}

async function submitToWebhook() {
  const submitBtn = $('submitWebhookBtn');
  const notice = $('backendNotice');
  const payload = buildPayload();

  if (!SUBMIT_ENDPOINT) {
    showSubmitNotice('Die Übermittlung ist noch nicht verbunden. Bitte speichere die Antworten als JSON.', 'error');
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';
  }
  showSubmitNotice('Wird gesendet…', 'info');

  try {
    const response = await fetch(SUBMIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Webhook antwortete mit HTTP ${response.status}`);
    }

    showSubmitNotice('Danke, der Routencheck wurde erfolgreich übermittelt. Wir bereiten nun die Auswertung vor.', 'success');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Routencheck übermittelt';
    }
    const backup = $('backupExportDetails');
    if (backup) backup.open = false;
  } catch (error) {
    console.error('Catchly Routencheck: Webhook-Übermittlung fehlgeschlagen. Prüfe Netzwerk, CORS und Webhook-Antwort.', error);
    showSubmitNotice('Die Übermittlung hat nicht geklappt. Bitte versuche es nochmals oder speichere die Antworten als JSON.', 'error');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Routencheck abschicken';
    }
  }
}

function showSubmitNotice(message, type = 'info') {
  const notice = $('backendNotice');
  if (!notice) return;
  notice.textContent = message;
  notice.classList.remove('hidden', 'success', 'error', 'info');
  notice.classList.add(type);
}


function resetAssessment() {
  state.participant = {};
  state.activeQuestions = [];
  state.index = 0;
  state.answers = {};
  state.clientResponseId = '';
  $('finalView').classList.add('hidden');
  $('questionView').classList.add('hidden');
  $('identityView').classList.remove('hidden');
  $('progressBar').style.width = '0%';
  $('identityForm').reset();
  $('company').value = state.firmaFromUrl || '';
}

function buildPayload() {
  const clientResponseId = state.clientResponseId || (state.clientResponseId = buildClientResponseId());
  const leadCompany = state.leadCompany || state.firmaFromUrl || '';
  const participantCompany = state.participant.company || '';
  const company = leadCompany || participantCompany || '';
  const mode = connectionMode();

  const answers = Object.values(state.answers).map((answer, index) => ({
    client_response_id: clientResponseId,
    rowType: 'answer',
    answerIndex: index + 1,
    lead_id: state.leadId || '',
    assessment_id: state.assessmentId || '',
    lead_company: leadCompany,
    participant_company: participantCompany,
    company,
    firma: company,
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
    selectedValues: answer.selectedValues || [],
    selectedLabels: answer.selectedLabels || [],
    followUpText: answer.followUpText || '',
    followUpType: answer.followUpType || '',
    followUpReasonValue: answer.followUpReasonValue || '',
    followUpReasonLabel: answer.followUpReasonLabel || '',
    insight: answer.insight || '',
    required: answer.required,
    inputType: answer.inputType || '',
    answeredAt: answer.answeredAt
  }));

  return {
    type: 'catchly-assessment-response',
    version: '15.1',
    client_response_id: clientResponseId,
    lead_id: state.leadId || '',
    assessment_id: state.assessmentId || '',
    lead_company: leadCompany,
    participant_company: participantCompany,
    company,
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
      firma: leadCompany,
      lead_company: leadCompany,
      department: state.department || state.participant.department || '',
      source: state.source || state.participant.source || '',
      sourceUrl: window.location.href,
      mode
    },
    participant: {
      firstName: state.participant.firstName || '',
      lastName: state.participant.lastName || '',
      email: state.participant.email || '',
      mobile: state.participant.mobile || '',
      company: participantCompany,
      department: state.participant.department || state.department || '',
      source: state.participant.source || state.source || '',
      role: state.participant.role || '',
      roleLabel: state.participant.roleLabel || '',
      startedAt: state.participant.startedAt || '',
      completedAt: state.participant.completedAt || ''
    },
    answers,
    meta: {
      userAgent: navigator.userAgent,
      startedAt: state.participant.startedAt || '',
      completedAt: state.participant.completedAt || '',
      submittedAt: new Date().toISOString(),
      sourceUrl: window.location.href,
      mode
    }
  };
}

function buildClientResponseId() {
  const base = [state.leadId, state.assessmentId, state.participant.company, state.participant.email, state.participant.startedAt].join('|');
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
    client_response_id: answer.client_response_id,
    lead_id: answer.lead_id,
    assessment_id: answer.assessment_id,
    lead_company: answer.lead_company,
    participant_company: answer.participant_company,
    company: answer.company,
    firma: answer.firma || answer.company,
    vorname: answer.participantFirstName,
    name: answer.participantLastName,
    email: answer.participantEmail,
    handy: answer.participantMobile,
    abteilung: answer.participantDepartment,
    source: answer.participantSource,
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
    mehrfachauswahlWerte: Array.isArray(answer.selectedValues) ? answer.selectedValues.join('|') : '',
    mehrfachauswahlTexte: Array.isArray(answer.selectedLabels) ? answer.selectedLabels.join('; ') : '',
    zusatzantwort: answer.followUpText || '',
    folgefrageTyp: answer.followUpType || '',
    begruendungWert: answer.followUpReasonValue || '',
    begruendungText: answer.followUpReasonLabel || '',
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
