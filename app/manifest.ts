import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} · UPVC profiles & windows`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#06101e",
    theme_color: "#1477b3",
    lang: "en-IN",
    categories: ["business", "construction"],
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
    ],
  }
}
