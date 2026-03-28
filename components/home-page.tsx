import { Download, Globe, Leaf, Mail, MapPin, MessageCircle, Phone, Recycle, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { Fragment } from "react"

import { siteConfig } from "@/lib/site"

const waDigits = siteConfig.whatsappDigits

const profileHeroSrc = "/upvc-profile-500x500-removebg-preview.png"
const heroVillaSrc =
  "/luxury-villa-saint-jean-cap-ferrat-architect-vielliard-francheteau-1-1536x867.avif"
const windowCutoutSrc = "/upvc-sliding-windows-03b-removebg-preview.png"
/** Product catalog — `public/UPVC.pdf` */
const catalogPdfHref = "/UPVC.pdf"

/** Stronger edge feather + lighter shadow so cutouts sit quietly on the façade */
const floatBlend =
  "[mask-image:radial-gradient(ellipse_100%_98%_at_50%_52%,#000_28%,#00000066_62%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_100%_98%_at_50%_52%,#000_28%,#00000066_62%,transparent_92%)] [mask-mode:alpha]"

/** Certification discs on the specs card */
const certDiscs = [
  { label: "ISO" },
  { label: "IAF" },
  { label: "CE" },
  { label: "RoHS" },
  { label: "Pb", title: "Lead-free" },
  { icon: "recycle" as const, title: "Recyclable" },
  { icon: "leaf" as const, title: "Eco-friendly" },
]

export function HomePage() {
  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[#c8dff2] text-[#0c1a2a]">
      {/* Full-viewport photo — public/pexels-funiki-11438880.jpg */}
      <div className="pointer-events-none fixed inset-0">
        <Image
          src="/pexels-funiki-11438880.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105 sm:scale-100"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/20 via-sky-100/25 to-[#dbeaf7]/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_110%_75%_at_50%_-5%,rgba(255,255,255,0.45)_0%,transparent_55%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 md:px-10">
        <header className="cs-fade-in flex flex-col items-center text-center">
          <div className="w-full max-w-[min(100%,440px)]">
            <Image
              src={siteConfig.logoPath}
              alt={`${siteConfig.name} — Window & Door Profiles`}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              quality={100}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_4px_24px_rgba(10,60,100,0.12)]"
              sizes="(max-width: 640px) 100vw, 440px"
            />
          </div>

          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0a5aa8]/80 sm:mt-8 sm:text-xs">
            Window &amp; door profiles
          </p>
          <h1 className="cs-gradient-text mt-3 max-w-4xl text-[clamp(2.35rem,7vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
            UPVC Profiles
          </h1>
          <div
            className="cs-accent-rule-anim mx-auto mt-5 h-1 w-44 max-w-[55%] rounded-full bg-gradient-to-r from-transparent via-[#1477b3] to-transparent opacity-90"
            aria-hidden
          />
          <p className="mt-6 max-w-lg text-[15px] font-medium leading-relaxed text-[#263545] sm:text-lg">
            Engineered with German technology — precision profiles for homes that last.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:max-w-2xl">
            <div className="cs-shop-button w-full rounded-2xl bg-gradient-to-r from-[#0a5aa8] to-[#084a8f] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_28px_rgba(10,90,168,0.38)] sm:text-base">
              Premium Window &amp; Door Profiles
            </div>
            <a
              href={catalogPdfHref}
              download="Avisan-UPVC-catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-shop-button inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#0a5aa8]/35 bg-white/75 px-6 py-3 text-sm font-semibold text-[#0a5aa8] shadow-[0_6px_24px_rgba(10,90,168,0.12)] backdrop-blur-sm transition-[border-color,background-color,transform] hover:border-[#0a5aa8]/55 hover:bg-white/95 sm:text-base"
            >
              <Download className="size-4 shrink-0 opacity-90" aria-hidden />
              Download catalog (PDF)
            </a>
          </div>
        </header>

        {/* ─── Hero: villa as focal point; products layered in front (“built from this”) ─── */}
        <article className="relative mx-auto mt-12 max-w-[980px] overflow-visible rounded-[32px] border border-white/90 bg-white/15 shadow-[0_40px_100px_-28px_rgba(8,45,85,0.48),0_0_0_1px_rgba(255,255,255,0.4)_inset] backdrop-blur-md ring-1 ring-white/30">
          <p className="sr-only">
            Showcase residence with UPVC profile and sliding window product graphics along the lower edge of the photo.
          </p>

          <div className="relative overflow-hidden rounded-[24px] p-2 sm:p-3">
            {/* Stage: large sharp villa */}
            <div className="relative aspect-[1536/867] min-h-[260px] w-full overflow-hidden rounded-[22px] border-2 border-white/95 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_24px_60px_-20px_rgba(0,40,80,0.35)] sm:min-h-[320px] md:min-h-[400px]">
              <Image
                src={heroVillaSrc}
                alt="Luxury villa with expansive glazing — the result built with Avisan profiles and systems"
                fill
                priority
                className="object-cover object-[center_32%] contrast-[1.04] saturate-[1.06]"
                sizes="(max-width: 768px) 100vw, 980px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_38%,transparent_18%,rgba(0,25,50,0.32)_100%),linear-gradient(to_top,rgba(0,30,55,0.5)_0%,transparent_48%,rgba(0,20,45,0.18)_100%)]"
                aria-hidden
              />

              <div className="absolute right-3 top-3 z-[15] max-w-[calc(100%-1.5rem)] sm:right-5 sm:top-5">
                <div className="flex items-center gap-2.5 rounded-3xl border border-emerald-700/20 bg-white/95 px-3 py-2.5 shadow-[0_12px_40px_-8px_rgba(5,80,50,0.35),0_0_0_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm sm:h-12 sm:w-12">
                    <ShieldCheck className="size-6 text-white sm:size-7" strokeWidth={2.5} aria-hidden />
                  </div>
                  <p className="text-sm font-black uppercase leading-tight tracking-wide text-[#0c1a2a] sm:text-lg">
                    20 Years Warranty
                  </p>
                </div>
              </div>

              <div className="cs-hero-float absolute bottom-20 left-2 z-10 w-[min(38%,180px)] opacity-[0.88] sm:bottom-5 sm:left-4 sm:w-[min(36%,240px)]">
                <div className={`relative aspect-[500/379] w-full ${floatBlend}`}>
                  <Image
                    src={profileHeroSrc}
                    alt="UPVC profile cross-section"
                    fill
                    className="object-contain object-center brightness-[1.01] contrast-[0.97] saturate-[0.88] drop-shadow-[0_4px_18px_rgba(25,55,90,0.1)]"
                    sizes="(max-width: 640px) 160px, 220px"
                  />
                </div>
              </div>

              <div className="cs-hero-float-delay absolute bottom-12 right-2 z-10 w-[min(36%,170px)] opacity-[0.88] sm:bottom-5 sm:right-4 sm:w-[min(34%,220px)]">
                <div className={`relative aspect-square w-full ${floatBlend}`}>
                  <Image
                    src={windowCutoutSrc}
                    alt="UPVC sliding window"
                    fill
                    className="object-contain object-center brightness-[1.01] contrast-[0.97] saturate-[0.88] drop-shadow-[0_4px_18px_rgba(25,55,90,0.1)]"
                    sizes="(max-width: 640px) 150px, 200px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Specs card — bottom-right overlap */}
          <div className="relative z-[3] mx-4 -mt-20 mb-6 flex justify-end sm:mx-7 sm:-mt-24 sm:mb-8">
            <div className="w-full max-w-[360px] rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_28px_70px_-18px_rgba(15,55,95,0.35),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl sm:p-7">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#5a6b78]">
                Available colors
              </p>
              <div className="mt-5 flex justify-center gap-10">
                <div className="text-center transition-transform duration-300 hover:scale-[1.03]">
                  <div className="relative mx-auto h-[4.5rem] w-[5.75rem] overflow-hidden rounded-xl border border-black/10 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.2)] ring-2 ring-white">
                    <Image
                      src="/Species-Oak_Stain-GoldenOak.jpg"
                      alt="Golden Oak wood grain laminate"
                      fill
                      className="object-cover object-center"
                      sizes="96px"
                    />
                  </div>
                  <span className="mt-2.5 block text-xs font-bold text-[#1a1a1a]">Golden Oak</span>
                </div>
                <div className="text-center transition-transform duration-300 hover:scale-[1.03]">
                  <div className="mx-auto h-[4.5rem] w-[5.75rem] rounded-xl border-2 border-[#d8e4ed] bg-gradient-to-br from-white to-[#eef5f9] shadow-[inset_0_2px_8px_rgba(255,255,255,0.9)] ring-2 ring-white" />
                  <span className="mt-2.5 block text-xs font-bold text-[#1a1a1a]">White</span>
                </div>
              </div>

              <p className="mb-3 mt-7 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a6b78]">
                Standards
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {certDiscs.map((c) => (
                  <div
                    key={c.label ?? c.icon}
                    title={"title" in c ? c.title : undefined}
                    className="flex h-11 w-11 cursor-default items-center justify-center rounded-full bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-[9px] font-bold uppercase leading-none text-white shadow-[0_4px_12px_rgba(10,90,168,0.35)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(10,90,168,0.45)] sm:h-12 sm:w-12 sm:text-[10px]"
                  >
                    {c.icon === "recycle" ? (
                      <Recycle className="size-5 text-white" strokeWidth={2.2} aria-hidden />
                    ) : c.icon === "leaf" ? (
                      <Leaf className="size-5 text-white" strokeWidth={2.2} aria-hidden />
                    ) : (
                      (c as { label: string }).label
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-[#c41e3a] to-[#a01830] py-3.5 text-center text-sm font-semibold text-white shadow-[0_6px_20px_-4px_rgba(196,30,58,0.45)]">
                  Standard length: 5.9 m
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-[#0a5aa8] to-[#073d73] py-3.5 text-center text-sm font-semibold text-white shadow-[0_6px_20px_-4px_rgba(10,90,168,0.4)]">
                  Wall thickness: 2.2 mm
                </div>
                <a
                  href={catalogPdfHref}
                  download="Avisan-UPVC-catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#0a5aa8]/35 bg-[#0a5aa8]/[0.06] py-3.5 text-sm font-semibold text-[#073d73] transition-colors hover:border-[#0a5aa8]/55 hover:bg-[#0a5aa8]/10"
                >
                  <Download className="size-4 shrink-0" aria-hidden />
                  Full catalog (PDF)
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="mx-auto mt-16 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0a5aa8]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a5aa8] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a5aa8] opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0a5aa8]" />
            </span>
            Launching soon
          </div>
          <p className="cs-gradient-text mt-5 text-3xl font-black uppercase tracking-[0.08em] sm:text-4xl">Coming soon</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#4a5f6e]">
            Catalog, specs, and dealer resources are almost here. Leave your email — we&apos;ll only write when it matters.
          </p>
          <a
            href={catalogPdfHref}
            download="Avisan-UPVC-catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a5aa8] underline decoration-[#0a5aa8]/35 underline-offset-4 transition-colors hover:decoration-[#0a5aa8]"
          >
            <Download className="size-4" aria-hidden />
            Download UPVC catalog (PDF)
          </a>
          <form className="mt-8" noValidate aria-label="Notify me when we launch">
            <div className="mx-auto flex max-w-md flex-col gap-2 rounded-2xl border border-[#bcd4e8] bg-white/90 p-2 shadow-[0_16px_40px_-12px_rgba(10,60,100,0.2)] backdrop-blur-md sm:h-[54px] sm:flex-row sm:items-center sm:rounded-full sm:pl-1 sm:pr-1.5">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="cs-email-input h-12 flex-1 rounded-xl border-0 bg-transparent px-5 text-sm outline-none placeholder:text-[#8a9bab] sm:h-11 sm:rounded-full"
              />
              <button type="submit" className="cs-notify-button h-12 shrink-0 rounded-xl bg-gradient-to-r from-[#0a5aa8] to-[#073d73] px-8 text-sm font-semibold text-white sm:h-10 sm:rounded-full">
                Notify me
              </button>
            </div>
          </form>
        </div>

        {/* Contact card */}
        <section
          id="contact"
          className="mx-auto mt-16 w-full max-w-3xl rounded-3xl border-2 border-dashed border-[#0c1a2a]/25 bg-[linear-gradient(165deg,#eef6fc_0%,#dceef9_45%,#e8f4fc_100%)] p-6 shadow-[0_24px_60px_-20px_rgba(10,55,95,0.2)] sm:p-9"
          aria-label="Contact information"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div
                className="mb-4 grid h-10 w-40 grid-rows-2 overflow-hidden rounded border border-black/20 shadow-sm"
                aria-hidden
              >
                <div className="relative flex items-center justify-center bg-[#003893]">
                  <span className="rounded-full border border-white/85 bg-white px-1 py-px text-[9px] leading-none text-[#003893] shadow-sm">
                    ☀<span className="text-[8px]">☽</span>
                  </span>
                </div>
                <div className="bg-[#DC143C]" />
              </div>
              <div className="w-full max-w-[280px]">
                <Image
                  src={siteConfig.logoPath}
                  alt={`${siteConfig.name} — Window & Door Profiles`}
                  width={siteConfig.logoWidth}
                  height={siteConfig.logoHeight}
                  className="h-auto w-full object-contain"
                  sizes="280px"
                />
              </div>
            </div>
            <ul className="space-y-5 text-left">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-white shadow-md">
                  <Phone className="size-[18px]" strokeWidth={2.25} aria-hidden />
                </span>
                <p className="min-w-0 pt-1.5 text-sm font-medium leading-snug text-[#1a1a1a]">
                  {siteConfig.contactPhones.map((entry, i) => (
                    <Fragment key={entry.href}>
                      {i > 0 && <span className="text-black/35"> | </span>}
                      <a href={entry.href} className="hover:text-[#0a5aa8] hover:underline">
                        {entry.display}
                      </a>
                    </Fragment>
                  ))}
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-white shadow-md">
                  <Mail className="size-[18px]" strokeWidth={2.25} aria-hidden />
                </span>
                <p className="pt-1.5 text-sm font-medium">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#0a5aa8] hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-white shadow-md">
                  <MapPin className="size-[18px]" strokeWidth={2.25} aria-hidden />
                </span>
                <p className="pt-1.5 text-sm font-medium text-[#1a1a1a]">{siteConfig.contactAddress}</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-white shadow-md">
                  <Globe className="size-[18px]" strokeWidth={2.25} aria-hidden />
                </span>
                <p className="pt-1.5 text-sm font-medium">
                  <a
                    href={siteConfig.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0a5aa8] hover:underline"
                  >
                    {siteConfig.websiteDisplay}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-14 border-t border-white/40 pt-10 text-center text-xs text-[#5a6b78]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </footer>
      </div>

      <a
        href={`https://wa.me/${waDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-[transform,box-shadow] hover:scale-110 hover:shadow-[0_12px_36px_rgba(37,211,102,0.55)]"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25d366]"
          style={{ animation: "cs-pulse-ring 2s ease-out infinite" }}
        />
        <MessageCircle className="relative size-6" />
      </a>
    </main>
  )
}
