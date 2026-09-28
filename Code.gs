/**
 * Wedding RSVP backend — Google Apps Script
 * Bound to a Google Sheet: Extensions > Apps Script > paste this file.
 * Sheet tab name must be "RSVP" (created automatically by setup()).
 */
const SHEET = 'RSVP';
const HEADERS = ['Timestamp', 'Name', 'Attendance', 'Guests', 'Message'];

function setup() {                       // run once from the editor
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);
    const name = String(d.name || '').trim().slice(0, 100);
    if (!name) return json({ ok: false, error: 'name required' });
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET);
    sh.appendRow([
      new Date(),
      name,
      d.attendance === 'Attending' ? 'Attending' : 'Not Attending',
      Math.max(0, Math.min(10, parseInt(d.guests, 10) || 0)),
      String(d.message || '').trim().slice(0, 500)
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {                      // returns latest 100 wishes, newest first
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET);
  const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 5).getValues() : [];
  const wishes = rows
    .filter(r => String(r[4]).trim() !== '')
    .map(r => ({ name: r[1], message: r[4], ts: r[0] }))
    .reverse()
    .slice(0, 100);
  return json({ ok: true, wishes: wishes });
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
