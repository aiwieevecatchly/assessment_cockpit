// ============================================================
// catchly-send.js  –  Fahrplan-Submit & Report-Trigger
// Wird nach cockpit.js geladen. Liest aus dem bestehenden DOM.
// ============================================================

(function () {
  'use strict';

  const FAHRPLAN_WEBHOOK = 'https://workflow.catchly.ch/webhook/fahrplan-submit';

  // ── Hilfsfunktionen ──────────────────────────────────────
  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }
  function num(id) {
    const v = Number(String(val(id)).replace(/'/g, '').replace(',', '.'));
    return Number.isFinite(v) ? v : 0;
  }
  function getAssessmentIdFromLink() {
    try {
      const linkText = document.getElementById('assessmentLink')?.textContent?.trim() || '';
      const url = new URL(linkText);
      return {
        leadId: url.searchParams.get('lead_id') || '',
        assessmentId: url.searchParams.get('assessment_id') || '',
        firma: url.searchParams.get('firma') || decodeURIComponent(url.searchParams.get('firma') || '')
      };
    } catch { return { leadId: '', assessmentId: '', firma: '' }; }
  }
  function getEmails() {
    return val('participantEmails')
      .split(/[\n,;]+/)
      .map(e => e.trim().toLowerCase())
      .filter(e => e.includes('@'));
  }
  function setStatus(msg, isError) {
    const el = document.getElementById('sendStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = 'notice section' + (isError ? ' error' : ' success');
    el.hidden = false;
  }

  // ── Button rendern ────────────────────────────────────────
  function injectButton() {
    const section = document.getElementById('assessmentSetup');
    if (!section) return;

    // Status-Element
    const statusEl = document.createElement('div');
    statusEl.id = 'sendStatus';
    statusEl.className = 'notice section';
    statusEl.hidden = true;

    // Button-Zeile
    const row = document.createElement('div');
    row.className = 'btn-row single-action';
    row.style.marginTop = '12px';

    const btn = document.createElement('button');
    btn.id = 'saveFahrplanBtn';
    btn.className = 'btn primary';
    btn.type = 'button';
    btn.textContent = 'Fahrplan speichern & Einladungen registrieren';

    row.appendChild(btn);
    section.appendChild(statusEl);
    section.appendChild(row);

    // Report-Button (erscheint nach erfolgreichem Save)
    const reportRow = document.createElement('div');
    reportRow.id = 'reportLinkRow';
    reportRow.className = 'btn-row single-action';
    reportRow.style.marginTop = '8px';
    reportRow.hidden = true;
    const reportBtn = document.createElement('a');
    reportBtn.id = 'reportLink';
    reportBtn.className = 'btn ghost';
    reportBtn.target = '_blank';
    reportBtn.textContent = 'Assessment-Report öffnen';
    reportRow.appendChild(reportBtn);
    section.appendChild(reportRow);

    btn.addEventListener('click', handleSave);
  }

  // ── Haupt-Handler ─────────────────────────────────────────
  async function handleSave() {
    const btn = document.getElementById('saveFahrplanBtn');
    const { leadId, assessmentId, firma } = getAssessmentIdFromLink();
    const emails = getEmails();

    if (!leadId || !assessmentId) {
      setStatus('⚠ Bitte zuerst Lead importieren und Routencheck-Link generieren (Schritt 4).', true);
      return;
    }
    if (emails.length === 0) {
      setStatus('⚠ Bitte mindestens eine E-Mail-Adresse in Schritt 4 eintragen.', true);
      return;
    }

    const monthlyReq   = num('monthlyRequests');
    const avgOrder     = num('avgOrderValue');
    const notHandled   = num('notHandledRequests');
    const chanceRisk   = notHandled * avgOrder * 12;
    const nextStep     = document.querySelector('input[name="decision"]:checked')?.value
                        || val('suggestedNextStep');

    const payload = {
      type:                    'catchly-fahrplan-submit',
      lead_id:                 leadId,
      assessment_id:           assessmentId,
      company:                 firma,
      monthly_requests:        monthlyReq,
      avg_order_value_chf:     avgOrder,
      not_handled_requests:    notHandled,
      reaction_time:           val('reactionTime'),
      main_bottleneck:         val('mainBottleneck'),
      success_90_days:         val('success90'),
      next_step:               nextStep,
      notes:                   val('notes'),
      chance_risk_year_chf:    chanceRisk,
      participants:            emails,
      assessment_link:         document.getElementById('assessmentLink')?.textContent?.trim() || '',
      submitted_at:            new Date().toISOString()
    };

    btn.disabled = true;
    btn.textContent = 'Wird gespeichert …';
    setStatus('Verbindung zu n8n …', false);

    try {
      const resp = await fetch(FAHRPLAN_WEBHOOK, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json().catch(() => ({}));
      if (data.success === false) throw new Error(data.message || 'Fehler vom Server');

      btn.textContent = '✓ Gespeichert';
      btn.classList.replace('primary', 'ghost');
      setStatus(`✓ Fahrplan gespeichert · ${emails.length} Einladung(en) registriert · Chancenrisiko CHF ${chanceRisk.toLocaleString('de-CH')} / Jahr`, false);

      // Report-Link einblenden
      const reportUrl = `assessment-report.html?assessment_id=${encodeURIComponent(assessmentId)}`;
      const reportLink = document.getElementById('reportLink');
      const reportRow  = document.getElementById('reportLinkRow');
      if (reportLink && reportRow) {
        reportLink.href = reportUrl;
        reportRow.hidden = false;
      }
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Fahrplan speichern & Einladungen registrieren';
      setStatus(`⚠ Fehler: ${err.message} – Prüfe ob der n8n-Workflow "Catchly Fahrplan Submit" aktiv ist.`, true);
    }
  }

  // ── Init ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton);
  } else {
    injectButton();
  }
})();
