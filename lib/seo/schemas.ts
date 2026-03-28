import { getLogoImageSrc, getSiteUrl, siteConfig } from "@/lib/site"

const SITE = getSiteUrl()

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: siteConfig.legalName,
    url: SITE,
    logo: `${SITE}${getLogoImageSrc()}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "BP Marga, Chauthe",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  }
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: siteConfig.locale,
    potentialAction: {
      "@type": "ReadAction",
      target: SITE,
    },
  }
}

export function webPageJsonLd(path: string, name: string, description: string) {
  const url = path === "/" ? SITE : `${SITE}${path}`
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
    inLanguage: siteConfig.locale,
  }
}

/** Single JSON-LD graph for the document */
export function buildJsonLdGraph(pages: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd(), ...pages],
  }
}
