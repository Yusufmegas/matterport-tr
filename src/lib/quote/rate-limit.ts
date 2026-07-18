/**
 * In-memory rate limiter for the quote endpoint.
 *
 * NOT: Bu bellek tabanlı limiter tek Railway instance için temel
 * korumadır. Çoklu instance veya yoğun trafik durumunda Redis tabanlı
 * bir sisteme geçirilmelidir.
 *
 * IPs are kept ONLY as short-lived in-memory keys — never persisted,
 * never written into the e-mail.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 dakika
const MAX_ATTEMPTS = 3; // pencere başına geçerli deneme
const MAX_KEYS = 5000; // bellek üst sınırı

const attempts = new Map<string, number[]>();

function cleanup(now: number): void {
  for (const [key, timestamps] of attempts) {
    const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
    if (fresh.length === 0) {
      attempts.delete(key);
    } else {
      attempts.set(key, fresh);
    }
  }
  /* Hard cap: drop oldest keys if the map somehow keeps growing */
  if (attempts.size > MAX_KEYS) {
    const excess = attempts.size - MAX_KEYS;
    let dropped = 0;
    for (const key of attempts.keys()) {
      attempts.delete(key);
      dropped += 1;
      if (dropped >= excess) break;
    }
  }
}

/** Registers a valid attempt; returns false when the caller is over limit. */
export function allowQuoteAttempt(clientKey: string): boolean {
  const now = Date.now();
  cleanup(now);

  const timestamps = (attempts.get(clientKey) ?? []).filter(
    (t) => now - t < WINDOW_MS,
  );
  if (timestamps.length >= MAX_ATTEMPTS) {
    attempts.set(clientKey, timestamps);
    return false;
  }
  timestamps.push(now);
  attempts.set(clientKey, timestamps);
  return true;
}

/** Best-effort client IP — used only as a transient rate-limit key. */
export function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
