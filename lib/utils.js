export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bytebit.dev";
export const SITE_NAME = "Byte Bit";
export const SITE_TAGLINE = "Powering the Next Byte";
export const SITE_DESCRIPTION =
  "ByteBit delivers the latest tech news, AI updates, tutorials, honest reviews, programming guides, cybersecurity insights, and practical tips to keep you ahead in technology.";
// Shorter variant for <meta name="description"> (ideally under ~160 chars)
export const SITE_META_DESCRIPTION =
  "Latest Tech News, AI updates, Tutorials, Reviews, Gadgets, Cybersecurity and Programming insights — explained simply for beginners and tech enthusiasts alike.";
