import type { Metadata } from "next"

import { HomePage } from "@/components/home-page"
import { JsonLd } from "@/components/seo/json-ld"
import { buildJsonLdGraph, webPageJsonLd } from "@/lib/seo/schemas"
import { siteConfig } from "@/lib/site"

const homeTitle = `The site is coming soon — ${siteConfig.name}`
const homeDescription =
  "The Avisan site is coming soon. German-engineered UPVC profiles, fabrication materials & window hardware — Pokhara & Nepal. Download the catalog or message us on WhatsApp while we finish the full site."

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} · The site is coming soon`,
    description: homeDescription,
    url: "/",
  },
  twitter: {
    title: `${siteConfig.name} · The site is coming soon`,
    description: homeDescription,
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildJsonLdGraph([
          webPageJsonLd("/", `${siteConfig.name} — the site is coming soon`, homeDescription),
        ])}
      />
      <HomePage />
    </>
  )
}
