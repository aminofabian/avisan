import type { Metadata } from "next"

import { HomePage } from "@/components/home-page"
import { JsonLd } from "@/components/seo/json-ld"
import { buildJsonLdGraph, webPageJsonLd } from "@/lib/seo/schemas"
import { siteConfig } from "@/lib/site"

const homeTitle = `UPVC profiles & window supply — full site launching soon`
const homeDescription = siteConfig.description

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.longDescription,
    url: "/",
  },
  twitter: {
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: homeDescription,
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildJsonLdGraph([
          webPageJsonLd("/", `${siteConfig.name} — ${homeTitle}`, homeDescription),
        ])}
      />
      <HomePage />
    </>
  )
}
