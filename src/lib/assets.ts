import fs from "node:fs";
import path from "node:path";

/**
 * Server-only helper: returns the public URL of the first existing file
 * under public/, or null when none of the candidates exist yet. Lets
 * components fall back to themed placeholders until real assets land.
 */
export function resolvePublicImage(
  ...relativePaths: string[]
): string | null {
  for (const relativePath of relativePaths) {
    const filePath = path.join(process.cwd(), "public", relativePath);
    if (fs.existsSync(filePath)) {
      return `/${relativePath.split(path.sep).join("/")}`;
    }
  }
  return null;
}

/**
 * Server-only helper: returns the public URLs of ALL existing candidates
 * (used by galleries where every found image should render).
 */
export function resolveExistingImages(relativePaths: string[]): string[] {
  return relativePaths
    .filter((relativePath) =>
      fs.existsSync(path.join(process.cwd(), "public", relativePath)),
    )
    .map((relativePath) => `/${relativePath.split(path.sep).join("/")}`);
}
