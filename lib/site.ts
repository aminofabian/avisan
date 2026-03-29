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
  /**
   * Served from `public/avisanlogo.png` (path is fixed — do not point elsewhere).
   * Intrinsic size of the current asset (used by next/image to avoid skew).
   */
  logoPath: "/avisanlogo.png",
  logoWidth: 461,
  logoHeight: 311,
  /** Bump this when you replace `public/avisanlogo.png` so caches fetch the new file. */
  logoCacheKey: "2",
  tagline: "German-engineered profiles. Full window supply.",
  titleTemplate: "%s | Avisan",
  /** Primary meta description (≈155 chars for SERP) */
  description:
    "Avisan — German-engineered UPVC profiles, fabrication materials & hardware for UPVC & aluminum windows. Dealers & builders, Pokhara & Nepal-wide.",
  /** Longer blurb for Open Graph / rich snippets */
  longDescription:
    "We lead with premium UPVC profiles and back every job with fabrication materials and hardware for UPVC and aluminum window systems. Avisan supports dealers, fabricators, and serious projects from Pokhara—with catalogs, specs, and partner resources rolling out online soon.",
  locale: "en_NP",
  country: "NP",
  region: "Gandaki Province",
  city: "Pokhara",
  /** Primary number for schema / tel: (WhatsApp uses whatsappDigits) */
  phone: "+9779857631256",
  /** Digits only for wa.me (Nepal) — floating chat button */
  whatsappDigits: "9779768383935",
  email: "avisantraders@gmail.com",
  /** Multi-line contact card (display + tel href) */
  contactPhones: [
    { display: "061-586515", href: "tel:+97761586515" },
    { display: "9857631256", href: "tel:+9779857631256" },
    { display: "9856083935", href: "tel:+9779856083935" },
  ],
  contactAddress: "BP Marga, Chauthe, Pokhara-14",
  websiteUrl: "https://avisantraders.com",
  websiteDisplay: "avisantraders.com",
  sameAs: ["https://avisantraders.com"] as string[],
  keywords: [
    "UPVC profiles Nepal",
    "UPVC windows Pokhara",
    "aluminum windows Nepal",
    "window hardware Pokhara",
    "UPVC fabrication materials",
    "window and door profiles",
    "sliding window systems",
    "Avisan UPVC",
    "German technology UPVC",
  ],
} as const

/** Logo URL with cache-bust query (Next `/public` file + browser/CDN caches). */
export function getLogoImageSrc(): string {
  return `${siteConfig.logoPath}?v=${siteConfig.logoCacheKey}`
}
