/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://avisan.in).
 */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (env) return env.replace(/\/$/, "")

  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`

  return "http://localhost:3000"
}

export const siteConfig = {
  name: "Avisan",
  legalName: "Avisan",
  tagline: "Stronger Profiles. Better Living.",
  titleTemplate: "%s | Avisan",
  /** Primary meta description (≈155 chars for SERP) */
  description:
    "Avisan crafts premium UPVC profiles, sliding systems, and energy-efficient windows for architects, dealers, and builders in India. Launching soon — join the waitlist.",
  /** Longer blurb for Open Graph / rich snippets */
  longDescription:
    "Discover Avisan: multi-chamber UPVC profiles, thermal-break sliding windows, and durable façade solutions engineered for Indian climates. Dealer programs, project support, and catalog access coming online.",
  locale: "en_IN",
  country: "IN",
  region: "Gujarat",
  city: "Surat",
  email: "sales@avisan.in",
  phone: "+919876543210",
  sameAs: [] as string[],
  keywords: [
    "UPVC profiles India",
    "UPVC windows Gujarat",
    "sliding window systems",
    "thermal insulation windows",
    "UPVC dealer program",
    "architectural fenestration",
    "energy efficient windows",
    "Avisan UPVC",
  ],
} as const
