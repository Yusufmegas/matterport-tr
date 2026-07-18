/** HTML-escapes user input before it is placed into the e-mail template. */
export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/* Control characters except \n (U+000A); \r is normalised away first. */
const CONTROL_CHARS = /[\u0000-\u0009\u000B-\u001F\u007F]/g;

/** Trims, collapses line endings to \n and strips control characters. */
export function normalizeText(value: string): string {
  return value.replace(/\r\n?/g, "\n").replace(CONTROL_CHARS, "").trim();
}

/** Single-line variant: also removes newlines (header-injection safety). */
export function normalizeSingleLine(value: string): string {
  return normalizeText(value).replace(/\n+/g, " ").trim();
}

/** Escapes HTML and converts preserved newlines to <br> (projectNote). */
export function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replaceAll("\n", "<br>");
}
