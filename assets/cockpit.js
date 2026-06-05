const state = {
  setup: null,
  lead: null,
  generatedLink: '',
  assessmentId: '',
  impact: null
};

const $ = (id) => document.getElementById(id);

function init() {
  $('jsonInput').addEventListener('change', handleJsonImport);
  on('setupTestCustomerBtn', 'click', fillSetupTestCustomer);
  document.querySelectorAll('input[name="decision"]').forEach((radio) => {
    radio.addEventListener('change', handleDecisionChange);
  });

  ['monthlyRequests', 'mainChannel', 'reactionTime', 'avgOrderValue', 'notHandledRequests', 'mainBottleneck', 'success90', 'suggestedNextStep']
    .forEach((id) => $(id)?.addEventListener('input', () => { syncDecisionFromNextStep(); calculateImpact(); }));

  on('openMailBtn', 'click', openInvitationMail);
  on('openRoutecheckTopBtn', 'click', openRoutecheck);
  on('openAppointmentMailBtn', 'click', openAppointmentMail);
  on('baseUrl', 'input', () => generateAssessmentLink(false));

  if ($('baseUrl')) $('baseUrl').value = defaultBaseUrl();
  generateAssessmentLink(false);
  calculateImpact();
}

function on(id, eventName, handler) {
  const el = $(id);
  if (el) el.addEventListener(eventName, handler);
}

function defaultBaseUrl() {
  // Lokal zeigt mailto sonst einen sehr langen file:// Pfad. Für den Live-Betrieb bleibt der öffentliche Link fix.
  if (window.location.protocol === 'file:') {
    return 'https://aiwieevecatchly.github.io/assessment_cockpit/assessment.html';
  }
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  if (/index\.html$/i.test(url.pathname)) {
    url.pathname = url.pathname.replace(/index\.html$/i, 'assessment.html');
  } else if (!/assessment\.html$/i.test(url.pathname)) {
    url.pathname = url.pathname.replace(/\/[^/]*$/i, '/assessment.html');
  }
  return url.toString();
}

function normalizeRoutecheckLink(value) {
  const raw = String(value || '').trim();
  if (!raw) return defaultBaseUrl();
  try {
    const url = new URL(raw, window.location.href);
    if (!/\.html?$/i.test(url.pathname)) {
      url.pathname = url.pathname.replace(/\/?$/i, '/assessment.html');
    }
    url.hash = '';
    url.search = '';
    return url.toString();
  } catch {
    return raw;
  }
}

function handleJsonImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state.setup = JSON.parse(reader.result);
      state.lead = normalizeLead(state.setup);
      state.assessmentId = normalizeAssessmentId(state.setup, state.lead);
      renderLead();
      hydrateFromSetup(state.setup);
      $('importStatus').textContent = `Lead geladen: ${state.lead.firma || state.lead.leadId}`;
      generateAssessmentLink(false);
    } catch (error) {
      $('importStatus').textContent = 'JSON konnte nicht gelesen werden. Bitte Startpaket prüfen.';
      console.error(error);
    }
  };
  reader.readAsText(file);
}

function hydrateFromSetup(setup) {
  const e100 = setup?.erste100Meter || {};
  const indicators = e100.indicators || {};
  setIfValue('notes', e100.notes);
  setIfValue('monthlyRequests', indicators.monthlyRelevantRequests || indicators.monthlyRequests || indicators.inquiries);
  setIfValue('mainChannel', indicators.mainChannel || indicators.channel);
  setIfValue('reactionTime', indicators.reactionTime || indicators.reaction);
  setIfValue('avgOrderValue', indicators.avgOrderValueChf || indicators.avgOrderValue);
  setIfValue('notHandledRequests', indicators.notHandledRequests || indicators.notHandled);
  setIfValue('mainBottleneck', indicators.mainBottleneck || indicators.pain);
  setIfValue('success90', indicators.success90Days || indicators.success90);
  setIfValue('suggestedNextStep', indicators.suggestedNextStep || e100.outcome);

  const participants = Array.isArray(setup?.participants) ? setup.participants : [];
  if (participants.length) {
    $('participantEmails').value = participants.map((p) => p.email).filter(Boolean).join('\n');
  }

  const decision = e100.outcome || setup?.erste100Meter?.decisionValue || $('suggestedNextStep')?.value || '';
  if (decision) {
    const radio = document.querySelector(`input[name="decision"][value="${cssEscape(decision)}"]`);
    if (radio) {
      radio.checked = true;
      handleDecisionChange();
    }
  }
  calculateImpact();
}

function setIfValue(id, value) {
  if (value === undefined || value === null || value === '') return;
  const el = $(id);
  if (el) el.value = value;
}

function normalizeLead(setup) {
  const required = setup?.lead?.required || setup?.required || {};
  const optional = setup?.lead?.optional || setup?.optional || {};
  const raw = setup?.lead?.raw || setup?.raw || {};
  const all = [required, raw, optional, setup?.lead || {}, setup || {}];
  const get = (keys) => firstValue(all.map((source) => pick(source, keys)).concat([findFirst(setup, keys)]));

  const leadId = firstValue([
    required.leadId, required.lead_id, raw.leadId, raw.id, setup?.leadId, setup?.id,
    findFirst(setup, ['leadId', 'lead_id', 'leadID', 'Lead-ID'])
  ]);

  return {
    leadId: String(leadId || '').trim(),
    firma: String(get(['firma', 'company', 'unternehmen', 'nameFirma']) || '').trim(),
    kontaktperson: String(get(['kontaktperson', 'kontakt', 'contactPerson', 'ansprechperson', 'name']) || '').trim(),
    funktionKontaktperson: String(get(['funktionKontaktperson', 'funktion', 'position', 'rolleKontaktperson']) || '').trim(),
    telefon: String(get(['telefon', 'tel', 'phone', 'telefonnummer', 'mobile', 'handy']) || '').trim(),
    emailKontaktperson: String(get(['emailKontaktperson', 'email', 'eMail', 'mail', 'kontaktEmail']) || '').trim(),
    adresse: String(get(['adresse', 'address', 'strasse', 'straße', 'street']) || '').trim(),
    plz: String(get(['plz', 'zip', 'postalCode', 'postleitzahl']) || '').trim(),
    ort: String(get(['ort', 'city', 'stadt']) || '').trim(),
    branche: String(get(['branche', 'industry']) || '').trim(),
    region: String(get(['region', 'gebiet']) || '').trim(),
    website: String(get(['website', 'web', 'url', 'homepage']) || '').trim(),
    notizenAusColdCall: String(get(['notizenAusColdCall', 'notes', 'notizen']) || '').trim(),
    painAusErstkontakt: String(get(['painAusErstkontakt', 'pain']) || '').trim(),
    interesseBedarf: String(get(['interesseBedarf', 'bedarf', 'interesse']) || '').trim()
  };
}


function normalizeAssessmentId(setup, lead) {
  const existing = firstValue([
    setup?.assessment_id,
    setup?.assessmentId,
    setup?.assessmentID,
    setup?.assessment?.id,
    setup?.assessment?.assessment_id,
    setup?.assessment?.assessmentId,
    setup?.erste100Meter?.assessment_id,
    setup?.erste100Meter?.assessmentId,
    setup?.lead?.assessment_id,
    setup?.lead?.assessmentId,
    findFirst(setup, ['assessment_id', 'assessmentId', 'assessmentID', 'Assessment-ID'])
  ]);
  const cleanExisting = String(existing || '').trim();
  if (/^ASM-[A-Za-z0-9_-]+-\d{3}$/.test(cleanExisting)) return cleanExisting;
  return generateAssessmentId(lead?.leadId);
}

function generateAssessmentId(leadId) {
  const clean = String(leadId || '')
    .trim()
    .replace(/^ASM-/i, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toUpperCase();
  if (clean) return `ASM-${clean}-001`;
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth()+1).padStart(2,'0'),
    String(now.getDate()).padStart(2,'0'),
    String(now.getHours()).padStart(2,'0'),
    String(now.getMinutes()).padStart(2,'0')
  ].join('');
  return `ASM-${stamp}-001`;
}

function ensureAssessmentId() {
  if (!state.assessmentId) state.assessmentId = generateAssessmentId(state.lead?.leadId);
  return state.assessmentId;
}

function fillSetupTestCustomer() {
  state.setup = {
    type: 'catchly-assessment-setup',
    version: '14.0-test',
    source: 'testkunde_button'
  };
  state.lead = {
    leadId: 'LEAD-TEST-001',
    firma: 'Test 1',
    kontaktperson: 'Vorname 1 Test 1',
    funktionKontaktperson: 'Projektleiter',
    telefon: '',
    emailKontaktperson: 'test123@test.ch',
    adresse: '',
    plz: '',
    ort: '',
    branche: '',
    region: '',
    website: '',
    notizenAusColdCall: '',
    painAusErstkontakt: '',
    interesseBedarf: ''
  };
  state.assessmentId = 'ASM-TEST-001';
  $('participantEmails').value = 'test123@test.ch';
  setIfValue('suggestedNextStep', 'assessment');
  const radio = document.querySelector('input[name="decision"][value="assessment"]');
  if (radio) {
    radio.checked = true;
    handleDecisionChange();
  }
  renderLead();
  calculateImpact();
  generateAssessmentLink(false);
  $('importStatus').textContent = 'Testkunde generiert: Test 1 · LEAD-TEST-001 · ASM-TEST-001';
}

function pick(source, keys) {
  if (!source || typeof source !== 'object') return '';
  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null && source[key] !== '') return source[key];
  }
  return '';
}

function findFirst(obj, keys, depth = 0) {
  if (!obj || typeof obj !== 'object' || depth > 6) return '';
  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') return obj[key];
  }
  for (const value of Object.values(obj)) {
    const found = findFirst(value, keys, depth + 1);
    if (found !== '') return found;
  }
  return '';
}

function firstValue(values) {
  return values.find((value) => value !== undefined && value !== null && String(value).trim() !== '') || '';
}

function renderLead() {
  const lead = state.lead || {};
  const address = [lead.adresse, lead.plz, lead.ort].filter(Boolean).join(', ');
  $('leadMeta').innerHTML = [
    ['Lead-ID', lead.leadId || '–'],
    ['Assessment-ID', state.assessmentId || '–'],
    ['Firma', lead.firma || '–'],
    ['Kontakt', [lead.kontaktperson, lead.funktionKontaktperson].filter(Boolean).join(' · ') || '–'],
    ['Telefon', lead.telefon || '–'],
    ['E-Mail', lead.emailKontaktperson || '–'],
    ['Adresse', address || '–'],
    ['Branche', lead.branche || '–'],
    ['Region', lead.region || '–']
  ].map(([label, value]) => `<div class="meta-item"><span>${escapeHtml(label)}</span><span>${escapeHtml(value)}</span></div>`).join('\n');
}

function calculateImpact() {
  const monthlyRelevantRequests = num('monthlyRequests');
  const mainChannel = $('mainChannel')?.value || '';
  const reactionTime = $('reactionTime')?.value || '';
  const avgOrderValueChf = num('avgOrderValue');
  const rawNotHandled = num('notHandledRequests');
  const notHandledRequests = monthlyRelevantRequests > 0
    ? Math.min(rawNotHandled, monthlyRelevantRequests)
    : rawNotHandled;
  const mainBottleneck = $('mainBottleneck')?.value || '';
  const success90Days = $('success90')?.value || '';
  const suggestedNextStep = $('suggestedNextStep')?.value || selectedDecision();

  const riskRevenueMonth = notHandledRequests * avgOrderValueChf;
  const riskRevenueYear = riskRevenueMonth * 12;

  // Bewusst konservativ: 5 Minuten Grundklärung je passende Anfrage + 20 Minuten Zusatzaufwand je Anfrage, die nicht sauber weiterläuft.
  const baseCoordinationMinutesMonth = monthlyRelevantRequests * 5;
  const extraCoordinationMinutesMonth = notHandledRequests * 20;
  const coordinationMinutesMonth = baseCoordinationMinutesMonth + extraCoordinationMinutesMonth;
  const coordinationHoursMonth = coordinationMinutesMonth / 60;
  const coordinationHoursYear = coordinationHoursMonth * 12;

  const slowReaction = ['1_2_arbeitstage', 'mehr_als_2_arbeitstage', 'sehr_unterschiedlich', 'weiss_nicht'].includes(reactionTime);
  const hasBottleneck = Boolean(mainBottleneck && !['kein_klares_problem'].includes(mainBottleneck));
  const handledRatio = monthlyRelevantRequests > 0 ? notHandledRequests / monthlyRelevantRequests : 0;

  let planningScore = 0;
  if (riskRevenueYear >= 100000) planningScore += 2;
  else if (riskRevenueYear >= 30000) planningScore += 1;
  if (coordinationHoursMonth >= 8) planningScore += 2;
  else if (coordinationHoursMonth >= 3) planningScore += 1;
  if (handledRatio >= 0.2) planningScore += 2;
  else if (handledRatio >= 0.1) planningScore += 1;
  if (slowReaction) planningScore += 1;
  if (hasBottleneck) planningScore += 1;

  let planningLever = 'Noch offen';
  let planningReason = 'Bitte Werte erfassen.';
  if (monthlyRelevantRequests > 0 || avgOrderValueChf > 0 || notHandledRequests > 0) {
    if (planningScore >= 5) {
      planningLever = 'hoch';
      planningReason = 'Viele passende Anfragen bleiben liegen oder werden spät nachgefasst. Mehr Klarheit im nächsten Schritt entlastet Büro, Baustelle und Verkauf.';
    } else if (planningScore >= 2) {
      planningLever = 'mittel';
      planningReason = 'Es gibt erkennbare Reibung im Alltag. Der Hebel liegt in schnellerer Rückmeldung, weniger Sucherei und klarerem Nachfassen.';
    } else {
      planningLever = 'niedrig';
      planningReason = 'Aktuell wirkt die Reibung überschaubar. Prüfen, ob im Alltag trotzdem einzelne Chancen liegen bleiben.';
    }
  }

  let recommendation = selectedDecisionLabelFromValue(suggestedNextStep) || 'Noch offen';
  let reason = 'Bitte Werte erfassen. Danach entsteht eine Empfehlung für den nächsten Schritt.';
  let level = 'open';

  const hasCore = monthlyRelevantRequests > 0 && avgOrderValueChf > 0;
  if (hasCore || notHandledRequests > 0) {
    if (suggestedNextStep === 'direkt_projekt' || planningLever === 'hoch' || riskRevenueYear >= 100000) {
      recommendation = 'Direkt Projekt prüfen';
      reason = 'Der kurze Check zeigt: Es geht nicht nur um Umsatz, sondern auch um Entlastung und klarere nächste Schritte.';
      level = 'high';
    } else if (suggestedNextStep === 'assessment' || planningLever === 'mittel' || riskRevenueYear >= 15000 || coordinationHoursMonth >= 3) {
      recommendation = 'Routencheck anbieten';
      reason = 'Genug Hinweise für eine strukturierte Analyse: Welche Anfragen bleiben liegen, wo entsteht Hin-und-her und wie wird der nächste Schritt klarer?';
      level = 'medium';
    } else if (suggestedNextStep === 'kein_interesse') {
      recommendation = 'Kein Fit';
      reason = 'Sauber abschliessen oder später wieder aufnehmen.';
      level = 'low';
    } else {
      recommendation = 'Später nachfassen';
      reason = 'Es gibt mögliche Ansatzpunkte, aber der konkrete Nutzen ist noch nicht stark genug belegt.';
      level = 'low';
    }
  }

  state.impact = {
    monthlyRelevantRequests,
    mainChannel,
    reactionTime,
    avgOrderValueChf,
    notHandledRequests,
    rawNotHandledRequests: rawNotHandled,
    mainBottleneck,
    success90Days,
    suggestedNextStep,
    riskRevenueMonth,
    riskRevenueYear,
    baseCoordinationMinutesMonth,
    extraCoordinationMinutesMonth,
    coordinationMinutesMonth,
    coordinationHoursMonth,
    coordinationHoursYear,
    planningScore,
    planningLever,
    planningReason,
    recommendation,
    reason,
    level,
    formula: 'min(notHandledRequests, monthlyRelevantRequests) * avgOrderValueChf * 12',
    timeFormula: 'monthlyRelevantRequests * 5min + notHandledRequests * 20min',
    source: '01_Fahrplan'
  };

  if ($('riskRevenueMonth')) $('riskRevenueMonth').textContent = `${formatChf(riskRevenueMonth)} / Monat`;
  if ($('riskRevenue')) $('riskRevenue').textContent = `${formatChf(riskRevenueYear)} / Jahr`;
  if ($('riskRevenueDetail')) $('riskRevenueDetail').textContent = notHandledRequests && avgOrderValueChf
    ? `${notHandledRequests} Anfrage(n) × ${formatChf(avgOrderValueChf)} × 12 Monate.`
    : 'Anfragen, die liegen bleiben × typischer Wert einer Anfrage × 12.';
  if ($('timeLossMonth')) $('timeLossMonth').textContent = `${formatHours(coordinationHoursMonth)} / Monat`;
  if ($('timeLossDetail')) $('timeLossDetail').textContent = `${formatHours(coordinationHoursYear)} pro Jahr als konservativer Richtwert.`;
  if ($('planningLever')) $('planningLever').textContent = planningLever;
  if ($('planningReason')) $('planningReason').textContent = planningReason;
  if ($('fitRecommendation')) $('fitRecommendation').textContent = recommendation;
  if ($('fitReason')) $('fitReason').textContent = reason;
}

function syncDecisionFromNextStep() {
  const value = $('suggestedNextStep')?.value || '';
  if (!['kein_interesse', 'assessment', 'direkt_projekt'].includes(value)) return;
  const radio = document.querySelector(`input[name="decision"][value="${cssEscape(value)}"]`);
  if (radio && !radio.checked) {
    radio.checked = true;
    handleDecisionChange();
  }
}

function selectedDecisionLabelFromValue(value) {
  const map = {
    kein_interesse: 'Kein Fit',
    assessment: 'Routencheck anbieten',
    direkt_projekt: 'Direkt Projekt prüfen',
    spaeter_nachfassen: 'Später nachfassen',
    noch_offen: 'Noch offen'
  };
  return map[value] || '';
}

function num(id) {
  const value = Number(String($(id)?.value || '').replace("'", '').replace(',', '.'));
  return Number.isFinite(value) ? value : 0;
}

function pct(id) {
  return Math.max(0, Math.min(1, num(id) / 100));
}

function percentNumber(id) {
  return Math.max(0, Math.min(100, num(id)));
}

function formatChf(value) {
  const rounded = Math.round(value || 0);
  return `CHF ${rounded.toLocaleString('de-CH')}`;
}

function formatHours(value) {
  const rounded = Math.round((value || 0) * 10) / 10;
  return `${rounded.toLocaleString('de-CH')} Std.`;
}

function handleDecisionChange() {
  const decision = selectedDecision();
  const showSetup = decision === 'assessment' || decision === 'direkt_projekt';
  $('assessmentSetup').classList.toggle('hidden', !showSetup);
  $('appointmentSetup').classList.toggle('hidden', !showSetup);
  if (showSetup) generateAssessmentLink(false);
}

function selectedDecision() {
  return document.querySelector('input[name="decision"]:checked')?.value || '';
}

function generateAssessmentLink(showStatus = true) {
  const base = normalizeRoutecheckLink($('baseUrl').value);
  ensureAssessmentId();
  let finalLink = base;
  try {
    const url = new URL(base, window.location.href);
    if (state.lead?.leadId) url.searchParams.set('lead_id', state.lead.leadId);
    if (state.assessmentId) url.searchParams.set('assessment_id', state.assessmentId);
    if (state.lead?.firma) url.searchParams.set('firma', state.lead.firma);
    finalLink = url.toString();
  } catch {
    const params = new URLSearchParams();
    if (state.lead?.leadId) params.set('lead_id', state.lead.leadId);
    if (state.assessmentId) params.set('assessment_id', state.assessmentId);
    if (state.lead?.firma) params.set('firma', state.lead.firma);
    finalLink = `${base}${base.includes('?') ? '&' : '?'}${params.toString()}`;
  }
  state.generatedLink = finalLink;
  $('baseUrl').value = base;
  $('assessmentLink').textContent = state.generatedLink;
  $('mailText').value = buildMailText();
  renderLead();
  if (showStatus) flashStatus('Routencheck-Link mit Lead-ID und Assessment-ID erstellt.');
  return state.generatedLink;
}

function openRoutecheck() {
  const link = state.generatedLink || generateAssessmentLink(false);
  window.open(link, '_blank', 'noopener,noreferrer');
}

function buildMailText() {
  const firma = state.lead?.firma || 'eure Firma';
  const link = state.generatedLink || normalizeRoutecheckLink($('baseUrl')?.value);
  return `Guten Tag miteinander

Danke nochmals für das Fahrplangespräch.

Damit wir für ${firma} ein realistisches Bild bekommen, bitte ich euch um eine kurze Einschätzung zum Erstkontakt.

Link zum Routencheck:
${link}

Es geht um Anfragen, Reaktionszeit, Nachfassen, Termine und Übergaben. Bitte kurz einchecken, Rolle wählen und die Fragen beantworten.

Anfragen, die liegen bleiben, sind verlorenes Geld.

Liebe Grüsse
Evelyn`;
}

function openInvitationMail() {
  if (!state.generatedLink) generateAssessmentLink(false);
  $('mailText').value = buildMailText();
  openMailClient(getParticipantEmails().map((p) => p.email), $('mailSubject').value.trim(), $('mailText').value);
}

function getParticipantEmails() {
  return $('participantEmails').value
    .split(/[\n,;]+/)
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email, index) => ({
      participantId: `P${String(index + 1).padStart(3, '0')}`,
      email,
      role: '',
      status: 'eingeladen'
    }));
}

function buildAppointmentText() {
  const firma = state.lead?.firma || 'eure Firma';
  const title = $('meetingTitle').value.trim() || 'Catchly Routencheck Auswertung';
  const date = $('meetingDate').value;
  const time = $('meetingTime').value;
  const duration = $('meetingDuration').value || '45';
  const meetingLink = $('meetingLink').value.trim();
  const routecheckLink = state.generatedLink || generateAssessmentLink(false);

  const when = date ? `${formatDateDe(date)}${time ? ` um ${time} Uhr` : ''}` : '[Datum/Uhrzeit ergänzen]';
  const videoLine = meetingLink ? `
Link zum Videocall:
${meetingLink}
` : '';

  const text = `Guten Tag miteinander

Gerne bestätige ich den nächsten Termin für ${firma}.

Termin: ${title}
Zeit: ${when}
Dauer: ca. ${duration} Minuten
${videoLine}
Falls noch nicht erledigt, bitte vorab den Routencheck ausfüllen:
${routecheckLink}

Liebe Grüsse
Evelyn`;

  $('appointmentText').value = text;
  return text;
}

function openAppointmentMail() {
  const text = $('appointmentText').value || buildAppointmentText();
  const title = $('meetingTitle').value.trim() || 'Catchly Routencheck Auswertung';
  openMailClient(getParticipantEmails().map((p) => p.email), title, text);
}

function formatDateDe(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
}

function openMailClient(recipients, subject, body) {
  const to = recipients.filter(Boolean).join(',');
  if (!to) {
    flashStatus('Bitte zuerst Teilnehmer-E-Mail-Adressen erfassen.');
    return;
  }
  const mailto = `mailto:${encodeURIComponent(to).replace(/%2C/g, ',')}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
  window.location.href = mailto;
  flashStatus('E-Mail-Programm geöffnet.');
}

function exportSetup() {
  if (!state.lead) {
    flashStatus('Bitte zuerst Lead importieren.');
    return;
  }
  calculateImpact();
  if (!state.generatedLink) generateAssessmentLink(false);
  if (!$('appointmentText').value) buildAppointmentText();

  const updated = {
    type: 'catchly-assessment-setup',
    version: '14.0',
    updatedAt: new Date().toISOString(),
    lead: {
      required: {
        leadId: state.lead.leadId,
        assessmentId: state.assessmentId,
        firma: state.lead.firma,
        kontaktperson: state.lead.kontaktperson,
        funktionKontaktperson: state.lead.funktionKontaktperson,
        telefon: state.lead.telefon,
        emailKontaktperson: state.lead.emailKontaktperson,
        adresse: state.lead.adresse,
        plz: state.lead.plz,
        ort: state.lead.ort,
        branche: state.lead.branche,
        region: state.lead.region
      },
      optional: {
        website: state.lead.website,
        notizenAusColdCall: state.lead.notizenAusColdCall,
        painAusErstkontakt: state.lead.painAusErstkontakt,
        interesseBedarf: state.lead.interesseBedarf
      }
    },
    erste100Meter: {
      outcome: selectedDecision(),
      decision: selectedDecisionLabel(),
      notes: $('notes').value.trim(),
      indicators: state.impact,
      updatedAt: new Date().toISOString()
    },
    participants: getParticipantEmails(),
    assessment: {
      id: state.assessmentId,
      leadId: state.lead.leadId,
      link: state.generatedLink,
      mailSubject: $('mailSubject').value.trim(),
      mailText: $('mailText').value,
      mode: 'one-company-link',
      updatedAt: new Date().toISOString()
    },
    appointment: {
      title: $('meetingTitle').value.trim(),
      date: $('meetingDate').value,
      time: $('meetingTime').value,
      durationMinutes: Number($('meetingDuration').value || 0),
      videoLink: $('meetingLink').value.trim(),
      text: $('appointmentText').value,
      attendees: getParticipantEmails().map((p) => p.email)
    }
  };

  downloadFile(`${state.lead.leadId || 'catchly'}_assessment_setup.json`, JSON.stringify(updated, null, 2), 'application/json');
}

function selectedDecisionLabel() {
  const map = {
    kein_interesse: 'Kein Interesse',
    assessment: 'Routencheck empfohlen',
    direkt_projekt: 'Direkt Projekt prüfen'
  };
  return map[selectedDecision()] || 'Offen';
}

async function copyText(text, success) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    flashStatus(success);
  } catch {
    flashStatus('Kopieren hat nicht geklappt. Text bitte manuell kopieren.');
  }
}

function flashStatus(message) {
  $('importStatus').textContent = message;
  setTimeout(() => {
    if (state.lead) $('importStatus').textContent = `Lead geladen: ${state.lead.firma || state.lead.leadId}`;
  }, 2000);
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

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replace(/"/g, '\\"');
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
