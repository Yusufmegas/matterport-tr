/**
 * SERVER-ONLY module: imported exclusively from the /api/quote Route
 * Handler (Node.js runtime). Never import this from a client component —
 * nodemailer and the SMTP secrets must stay out of the client bundle.
 * All configuration comes from process.env; nothing lives in siteConfig.
 */
import nodemailer from "nodemailer";
import type { QuoteEmailContent } from "@/lib/quote/email-template";

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromName: string;
  fromEmail: string;
  recipient: string;
}

/**
 * Reads and validates SMTP settings. Returns null when any required
 * value is missing — the API then answers 503 instead of attempting
 * (and failing) a send.
 */
export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const portRaw = process.env.SMTP_PORT?.trim() ?? "";
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS ?? "";
  const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() ?? "";
  const recipient = process.env.QUOTE_RECIPIENT_EMAIL?.trim() ?? "";
  const fromName = process.env.SMTP_FROM_NAME?.trim() || "Matterport TR";

  if (!host || !portRaw || !user || !pass || !fromEmail || !recipient) {
    return null;
  }

  const port = Number(portRaw);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    return null;
  }

  const secure = (process.env.SMTP_SECURE ?? "").trim().toLowerCase() === "true";

  return { host, port, secure, user, pass, fromName, fromEmail, recipient };
}

/**
 * Sends the quote notification. Recipient, sender and subject are fully
 * server-controlled; the visitor's (validated) address is used only as
 * replyTo so the team can answer directly.
 */
export async function sendQuoteEmail(
  config: SmtpConfig,
  content: QuoteEmailContent,
  replyTo: string,
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: `"${config.fromName.replaceAll('"', "")}" <${config.fromEmail}>`,
    to: config.recipient,
    replyTo,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });
}
