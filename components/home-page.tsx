import { Download, Mail, MapPin, Phone, Recycle, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { Fragment } from "react"

import { getContactLogoSrc, getLogoImageSrc, siteConfig } from "@/lib/site"

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

/** Certification marks — `public/certifications/` */
const certDiscs = [
  { key: "iso", src: "/certifications/iso.jpeg", alt: "ISO certification mark" },
  { key: "iaf", src: "/certifications/IAF.jpeg", alt: "IAF certification mark" },
  { key: "ce", src: "/certifications/ce.png", alt: "CE marking" },
  { key: "rohs", src: "/certifications/rohs.png", alt: "RoHS compliance mark" },
  { key: "pb", src: "/certifications/pb.webp", alt: "Lead-free marking", title: "Lead-free" },
  { key: "recycle", icon: "recycle" as const, title: "Recyclable" },
  { key: "eco", src: "/certifications/eco.png", alt: "Eco-friendly mark", title: "Eco-friendly" },
] as const

/** Specs card section titles — dark enough for glass / photo behind */
const sectionEyebrow =
  "text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a3040] sm:text-xs sm:tracking-[0.14em]"

export function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden overflow-y-auto bg-[#c4daf0] pb-[env(safe-area-inset-bottom,0px)] text-[#0c1a2a] selection:bg-[#1477b3]/25 selection:text-[#06101e]">
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
          className="absolute inset-0 bg-gradient-to-b from-sky-200/15 via-sky-100/20 to-[#c8dce8]/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(186,230,253,0.22)_0%,transparent_52%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(20,119,179,0.06)_0%,transparent_45%)]"
          aria-hidden
        />
      </div>

      {/* md+: first screen fills viewport; mobile: natural document height */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-6 pt-[max(1.25rem,env(safe-area-inset-top,0px))] max-[380px]:px-3 sm:px-6 sm:pb-7 sm:pt-9 md:min-h-dvh md:px-10 md:pb-6 md:pt-10">
        <header className="flex shrink-0 flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left md:gap-10">
          {/* Full intrinsic dimensions + whole-pixel layout + high-quality downscale (see globals .cs-brand-mark) */}
          <div className="cs-brand-mark-wrap shrink-0 w-[min(100%,132px)] sm:w-[min(100%,232px)] md:w-[248px]">
            {/* eslint-disable-next-line @next/next/no-img-element -- full-res PNG with alpha; next/image can flatten transparency */}
            <img
              key={`header-logo-${siteConfig.logoCacheKey}`}
              src={getLogoImageSrc()}
              alt={`${siteConfig.name} — UPVC profiles, fabrication materials & window hardware`}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              decoding="sync"
              fetchPriority="high"
              className="cs-brand-mark mx-auto block h-auto w-[min(100%,120px)] max-w-full object-contain object-center sm:mx-0 sm:w-full max-[380px]:w-[112px]"
            />
          </div>

          <div className="cs-fade-in flex min-w-0 w-full flex-1 flex-col items-center sm:items-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a5aa8]/85 max-[380px]:text-[9px] sm:text-[11px] sm:tracking-[0.24em]">
              Profiles · fabrication · hardware
            </p>
            <h1 className="cs-gradient-text mt-1 max-w-[22rem] text-balance text-[clamp(1.35rem,6.2vmin+0.4rem,2.75rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] sm:mt-1.5 sm:max-w-4xl">
              UPVC Profiles
            </h1>
            <p className="mt-2 max-w-xl text-pretty text-[13px] font-medium leading-relaxed text-[#2a3d4d] max-[380px]:text-[12px] sm:text-sm sm:leading-snug">
              Precision UPVC profile, plus{" "}
              <span className="font-semibold text-[#1a3040]">fabrication materials and hardware</span> for UPVC and aluminum windows—fewer vendors, German-spec quality.
            </p>
            <div className="mt-4 flex w-full max-w-xl flex-col items-stretch gap-2.5 sm:max-w-md sm:flex-row sm:flex-wrap sm:items-start sm:gap-3">
              <a
                href={catalogPdfHref}
                download="Avisan-UPVC-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-shop-button inline-flex w-full min-h-11 shrink-0 touch-manipulation items-center justify-center gap-2 rounded-xl border-2 border-[#0a5aa8]/32 bg-sky-100/55 px-5 py-3 text-sm font-semibold text-[#084a8f] shadow-[0_6px_22px_-6px_rgba(10,90,168,0.18)] backdrop-blur-md transition-[border-color,background-color,transform,box-shadow] active:scale-[0.99] hover:border-[#0a5aa8]/45 hover:bg-sky-50/75 hover:shadow-[0_10px_28px_-8px_rgba(10,90,168,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1477b3]/50 sm:min-h-10 sm:w-auto sm:py-2.5"
              >
                <Download className="size-4 shrink-0 opacity-90" aria-hidden />
                Profile catalog (PDF)
              </a>
              <p className="max-w-md text-center text-[11px] leading-snug text-[#5a6b78] max-[380px]:px-1 sm:text-left sm:text-xs">
                Full site, specs, and dealer tools are on the way—WhatsApp or call if you need something now.
              </p>
            </div>
          </div>
        </header>

        <article className="relative mx-auto mt-4 flex w-full max-w-[980px] flex-col overflow-hidden rounded-[20px] border border-sky-200/45 bg-sky-100/25 shadow-[0_20px_56px_-22px_rgba(8,45,85,0.38),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-md ring-1 ring-sky-200/30 max-md:flex-none sm:mt-6 sm:rounded-[24px] md:mt-5 md:flex-1 md:min-h-0 md:rounded-[28px]">
          <p className="sr-only">
            Hero: premium residence glazing with UPVC profile cross-section and sliding window. Avisan supplies German-engineered UPVC profiles plus fabrication materials and hardware for window systems.
          </p>

          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] p-1.5 sm:rounded-[22px] sm:p-2.5 max-md:flex-none md:flex-1">
            {/* Mobile: bounded height; md+: grows in flex column */}
            <div className="relative h-[min(42svh,280px)] min-h-[200px] w-full shrink-0 overflow-hidden rounded-[12px] border border-sky-300/50 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04),0_16px_44px_-16px_rgba(0,40,80,0.26)] max-[380px]:h-[min(38svh,240px)] max-[380px]:min-h-[180px] sm:h-[min(44svh,320px)] sm:min-h-[220px] sm:rounded-[16px] md:h-auto md:min-h-[260px] md:flex-1 md:rounded-[18px]">
              <Image
                src={heroVillaSrc}
                alt="Modern home with large glass facades — the kind of project built with quality profiles and window systems"
                fill
                priority
                className="object-cover object-[center_32%] contrast-[1.04] saturate-[1.06]"
                sizes="(max-width: 768px) 100vw, 980px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_38%,transparent_18%,rgba(0,25,50,0.32)_100%),linear-gradient(to_top,rgba(0,30,55,0.5)_0%,transparent_48%,rgba(0,20,45,0.18)_100%)]"
                aria-hidden
              />

              <div className="absolute right-2 top-2 z-[15] max-w-[min(100%,calc(100%-1rem))] sm:right-4 sm:top-4">
                <div className="flex max-w-full items-center gap-1.5 rounded-xl border border-emerald-800/18 bg-emerald-50/45 px-2 py-1.5 shadow-[0_6px_22px_-10px_rgba(5,80,50,0.22)] backdrop-blur-md max-[380px]:gap-1 max-[380px]:px-1.5 sm:gap-2.5 sm:rounded-3xl sm:px-3.5 sm:py-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-600/25 bg-gradient-to-br from-emerald-100/95 to-emerald-200/90 shadow-sm sm:h-10 sm:w-10 sm:rounded-2xl">
                    <ShieldCheck className="size-4 text-emerald-900 sm:size-5" strokeWidth={2.4} aria-hidden />
                  </div>
                  <p className="text-[10px] font-black uppercase leading-tight tracking-wide text-[#0c1a2a] max-[380px]:max-w-[9rem] max-[380px]:text-[9px] sm:text-xs sm:max-w-none md:text-sm">
                    20-year warranty
                  </p>
                </div>
              </div>

              <div className="cs-hero-float absolute bottom-2 left-1.5 z-10 w-[min(40%,132px)] opacity-[0.88] max-[380px]:w-[min(38%,118px)] sm:bottom-4 sm:left-3 sm:w-[min(34%,200px)]">
                <div className={`relative aspect-[500/379] w-full ${floatBlend}`}>
                  <Image
                    src={profileHeroSrc}
                    alt="UPVC profile cross-section showing wall thickness and chamber design"
                    fill
                    className="object-contain object-center brightness-[1.01] contrast-[0.97] saturate-[0.88] drop-shadow-[0_4px_18px_rgba(25,55,90,0.1)]"
                    sizes="(max-width: 640px) 160px, 220px"
                  />
                </div>
              </div>

              <div className="cs-hero-float-delay absolute bottom-2 right-1.5 z-10 w-[min(38%,128px)] opacity-[0.88] max-[380px]:w-[min(36%,112px)] sm:bottom-4 sm:right-3 sm:w-[min(32%,190px)]">
                <div className={`relative aspect-square w-full ${floatBlend}`}>
                  <Image
                    src={windowCutoutSrc}
                    alt="White UPVC sliding window panel — example finished system"
                    fill
                    className="object-contain object-center brightness-[1.01] contrast-[0.97] saturate-[0.88] drop-shadow-[0_4px_18px_rgba(25,55,90,0.1)]"
                    sizes="(max-width: 640px) 150px, 200px"
                  />
                </div>
              </div>
            </div>

          {/* Specs — compact on small screens; certifications wrap ~4+3 via max-width */}
          <div className="relative z-[3] mx-2 -mt-8 mb-2 flex shrink-0 justify-center max-[380px]:mx-1.5 max-[380px]:-mt-7 sm:mx-5 sm:-mt-12 sm:mb-3 md:-mt-14">
            <div className="flex w-full max-w-4xl flex-col rounded-xl border border-sky-300/55 bg-[#f2f7fb]/90 p-2 shadow-[0_18px_48px_-18px_rgba(15,55,95,0.22)] backdrop-blur-xl max-[380px]:px-2 max-[380px]:py-1.5 sm:rounded-2xl sm:p-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-x-8 lg:p-5">
              <div>
                  <p className={`text-center lg:text-left ${sectionEyebrow}`}>Laminate finishes</p>
                  <div className="mt-2 flex justify-center gap-3 sm:mt-3 sm:gap-6 lg:justify-start">
                    <div className="text-center transition-transform duration-300 hover:scale-[1.02] lg:text-left">
                      <div className="relative mx-auto h-10 w-[3.35rem] overflow-hidden rounded-lg border border-black/10 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.16)] ring-1 ring-sky-200/60 sm:h-12 sm:w-16 sm:rounded-xl sm:ring-2 lg:mx-0">
                        <Image
                          src="/Species-Oak_Stain-GoldenOak.jpg"
                          alt="Golden Oak wood grain laminate"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 64px, 96px"
                        />
                      </div>
                      <span className="mt-1 block text-[10px] font-bold text-[#1a1a1a] sm:mt-2 sm:text-xs">Golden Oak</span>
                    </div>
                    <div className="text-center transition-transform duration-300 hover:scale-[1.02] lg:text-left">
                      <div className="mx-auto h-10 w-[3.35rem] rounded-lg border-2 border-[#c5d8e8] bg-gradient-to-br from-[#eef6fb] to-[#dceaf5] shadow-[inset_0_2px_6px_rgba(255,255,255,0.5)] ring-1 ring-sky-200/50 sm:h-12 sm:w-16 sm:rounded-xl sm:ring-2 lg:mx-0" />
                      <span className="mt-1 block text-[10px] font-bold text-[#1a1a1a] sm:mt-2 sm:text-xs">White</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#0c1a2a]/[0.06] pt-3 sm:mt-4 sm:pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className={`mb-2 text-center lg:text-left sm:mb-2.5 ${sectionEyebrow}`}>Certifications</p>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {certDiscs.map((c) => {
                      const title = "title" in c ? c.title : undefined
                      if ("icon" in c) {
                        return (
                          <div
                            key={c.key}
                            title={title}
                            className="flex h-9 w-9 cursor-default items-center justify-center rounded-lg border border-[#0a5aa8]/22 bg-white/95 shadow-sm sm:h-10 sm:w-10"
                          >
                            <Recycle className="size-[1.125rem] text-[#0a5aa8] sm:size-5" strokeWidth={2.25} aria-hidden />
                          </div>
                        )
                      }
                      return (
                        <div
                          key={c.key}
                          title={title}
                          className="relative h-9 w-9 shrink-0 cursor-default overflow-hidden rounded-lg border border-[#0a5aa8]/22 bg-white/95 shadow-sm sm:h-10 sm:w-10"
                        >
                          <Image
                            src={c.src}
                            alt={c.alt}
                            fill
                            className="object-contain p-1 sm:p-1.5"
                            sizes="40px"
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5 border-t border-[#0c1a2a]/[0.06] pt-3 sm:mt-4 sm:gap-2 sm:pt-4">
                    <div className="grid grid-cols-2 gap-1.5 max-[380px]:gap-1 sm:gap-2.5">
                      <div className="min-w-0 rounded-lg border border-[#c41e3a]/12 bg-[#fdf6f7]/90 px-1.5 py-1.5 text-center text-[9px] font-medium leading-tight tracking-tight text-[#5c2832] max-[380px]:px-1 sm:rounded-xl sm:px-2 sm:py-2.5 sm:text-xs sm:leading-snug md:text-sm">
                        Bar length · 5.9&nbsp;m
                      </div>
                      <div className="min-w-0 rounded-lg border border-[#0a5aa8]/12 bg-[#f3f8fc]/90 px-1.5 py-1.5 text-center text-[9px] font-medium leading-tight tracking-tight text-[#0f4a73] max-[380px]:px-1 sm:rounded-xl sm:px-2 sm:py-2.5 sm:text-xs sm:leading-snug md:text-sm">
                        Wall thickness · 2.2&nbsp;mm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Contact — same sky/photo as hero (fixed bg); frosted dashed card for legibility */}
        <section
          id="contact"
          className="mx-auto w-full max-w-[min(100%,720px)] shrink-0 pt-4 max-[380px]:pt-3 md:mt-auto sm:pt-5"
          aria-label="Contact information"
        >
          <div className="flex flex-col items-stretch gap-2 rounded-[1.1rem] border border-dashed border-black/80 bg-sky-100/30 px-4 py-3 shadow-[0_10px_32px_-14px_rgba(8,45,85,0.22)] ring-1 ring-sky-200/40 backdrop-blur-2xl max-[380px]:px-3.5 max-[380px]:py-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:rounded-[1.5rem] sm:px-5 sm:py-3.5">
            <div className="flex w-full shrink-0 justify-center sm:w-auto sm:justify-start">
              <div className="cs-brand-mark-wrap shrink-0 w-[min(100%,152px)] max-[380px]:w-[128px] sm:w-[176px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={`contact-logo-${siteConfig.logoCacheKey}`}
                  src={getContactLogoSrc()}
                  alt={`${siteConfig.name} — Window & Door Profiles`}
                  width={siteConfig.contactLogoWidth}
                  height={siteConfig.contactLogoHeight}
                  loading="eager"
                  decoding="sync"
                  className="cs-brand-mark mx-auto block h-auto w-full max-w-full object-contain object-center sm:mx-0 sm:object-left"
                />
              </div>
            </div>

            <ul className="grid w-full min-w-0 flex-1 grid-cols-1 gap-y-2">
              <li className="grid grid-cols-[auto_1fr] items-center gap-x-2">
                <span
                  className="flex size-8 shrink-0 touch-manipulation items-center justify-center rounded-md border border-sky-300/70 bg-sky-50/95 sm:size-9"
                  aria-hidden
                >
                  <Phone className="size-3.5 text-[#084a8f] sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="flex min-w-0 flex-row flex-wrap items-center gap-x-1.5 gap-y-0.5 text-left text-xs font-bold leading-snug text-black sm:text-[13px] sm:leading-snug">
                  {siteConfig.contactPhones.map((entry, i) => (
                    <Fragment key={entry.href}>
                      {i > 0 && (
                        <span className="shrink-0 select-none font-bold leading-none text-black" aria-hidden>
                          |
                        </span>
                      )}
                      <a
                        href={entry.href}
                        className="touch-manipulation text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        {entry.display}
                      </a>
                    </Fragment>
                  ))}
                </p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-x-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-sky-300/70 bg-sky-50/95 sm:size-9" aria-hidden>
                  <Mail className="size-3.5 text-[#084a8f] sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="min-w-0 text-xs font-bold leading-snug sm:text-[13px] sm:leading-snug">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="touch-manipulation break-all text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:break-normal"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </li>
              <li className="grid grid-cols-[auto_1fr] items-center gap-x-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-sky-300/70 bg-sky-50/95 sm:size-9" aria-hidden>
                  <MapPin className="size-3.5 text-[#084a8f] sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="min-w-0 text-pretty text-xs font-bold leading-snug text-black sm:text-[13px] sm:leading-snug">{siteConfig.contactAddress}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-sky-200/50 px-[max(1rem,env(safe-area-inset-left,0px))] py-8 pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(2rem,env(safe-area-inset-bottom,0px))] text-center text-[13px] leading-relaxed text-[#1a3040] max-[380px]:text-xs sm:px-6 sm:py-12 sm:text-sm md:px-10">
        <p className="max-w-prose mx-auto">
          &copy; {new Date().getFullYear()} {siteConfig.name}. German-engineered UPVC profiles &amp; window supply — Pokhara, Nepal.
        </p>
        <p className="mt-1 text-[11px] text-[#2a4050] sm:text-xs">All rights reserved.</p>
      </footer>

      <a
        href={`https://wa.me/${waDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Avisan on WhatsApp"
        className="fixed z-40 flex h-14 w-14 touch-manipulation items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.42)] transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90 max-[380px]:h-12 max-[380px]:w-12"
        style={{
          bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
          right: "max(1.25rem, env(safe-area-inset-right, 0px))",
        }}
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25d366]"
          style={{ animation: "cs-pulse-ring 2s ease-out infinite" }}
        />
        <svg
          className="relative size-7 shrink-0 max-[380px]:size-6"
          viewBox="0 0 24 24"
          aria-hidden
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </main>
  )
}
