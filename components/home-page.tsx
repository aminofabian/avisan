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

/** Shared label style for card section titles */
const sectionEyebrow =
  "text-[10px] font-bold uppercase tracking-[0.22em] text-[#5a6b78] sm:text-[11px] sm:tracking-[0.24em]"

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
          className="absolute inset-0 bg-gradient-to-b from-white/35 via-sky-50/30 to-[#d8e8f5]/65"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.5)_0%,transparent_50%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(20,119,179,0.06)_0%,transparent_45%)]"
          aria-hidden
        />
      </div>

      {/* md+: first screen fills viewport; mobile: natural document height */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-6 pt-[max(1.25rem,env(safe-area-inset-top,0px))] max-[380px]:px-3 sm:px-6 sm:pb-7 sm:pt-9 md:min-h-dvh md:px-10 md:pb-6 md:pt-10">
        <header className="cs-fade-in flex shrink-0 flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left md:gap-10">
          <div className="shrink-0 w-[min(100%,8.5rem)] sm:w-[min(100%,180px)] md:w-[200px]">
            <Image
              src={siteConfig.logoPath}
              alt={`${siteConfig.name} — UPVC profiles, fabrication materials & window hardware`}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              quality={100}
              priority
              className="mx-auto h-auto w-[min(100%,7.25rem)] object-contain drop-shadow-[0_2px_16px_rgba(10,60,100,0.1)] sm:mx-0 sm:w-full max-[380px]:w-[6.5rem]"
              sizes="(max-width: 380px) 104px, (max-width: 639px) 116px, 200px"
            />
          </div>

          <div className="flex min-w-0 w-full flex-1 flex-col items-center sm:items-start">
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
                className="cs-shop-button inline-flex w-full min-h-11 shrink-0 touch-manipulation items-center justify-center gap-2 rounded-xl border-2 border-[#0a5aa8]/28 bg-white/80 px-5 py-3 text-sm font-semibold text-[#084a8f] shadow-[0_6px_22px_-6px_rgba(10,90,168,0.18)] backdrop-blur-md transition-[border-color,background-color,transform,box-shadow] active:scale-[0.99] hover:border-[#0a5aa8]/45 hover:bg-white hover:shadow-[0_10px_28px_-8px_rgba(10,90,168,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1477b3]/50 sm:min-h-10 sm:w-auto sm:py-2.5"
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

        <article className="relative mx-auto mt-4 flex w-full max-w-[980px] flex-col overflow-hidden rounded-[20px] border border-white/80 bg-white/20 shadow-[0_20px_56px_-22px_rgba(8,45,85,0.38),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-md ring-1 ring-white/25 max-md:flex-none sm:mt-6 sm:rounded-[24px] md:mt-5 md:flex-1 md:min-h-0 md:rounded-[28px]">
          <p className="sr-only">
            Hero: premium residence glazing with UPVC profile cross-section and sliding window. Avisan supplies German-engineered UPVC profiles plus fabrication materials and hardware for window systems.
          </p>

          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] p-1.5 sm:rounded-[22px] sm:p-2.5 max-md:flex-none md:flex-1">
            {/* Mobile: bounded height; md+: grows in flex column */}
            <div className="relative h-[min(42svh,280px)] min-h-[200px] w-full shrink-0 overflow-hidden rounded-[12px] border border-white/90 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04),0_16px_44px_-16px_rgba(0,40,80,0.26)] max-[380px]:h-[min(38svh,240px)] max-[380px]:min-h-[180px] sm:h-[min(44svh,320px)] sm:min-h-[220px] sm:rounded-[16px] md:h-auto md:min-h-[260px] md:flex-1 md:rounded-[18px]">
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
                <div className="flex max-w-full items-center gap-1.5 rounded-xl border border-emerald-800/12 bg-white/92 px-2 py-1.5 shadow-[0_6px_22px_-10px_rgba(5,80,50,0.22)] backdrop-blur-md max-[380px]:gap-1 max-[380px]:px-1.5 sm:gap-2.5 sm:rounded-3xl sm:px-3.5 sm:py-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-sm sm:h-10 sm:w-10 sm:rounded-2xl">
                    <ShieldCheck className="size-4 text-white sm:size-5" strokeWidth={2.4} aria-hidden />
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
            <div className="flex w-full max-w-4xl flex-col rounded-xl border border-white/75 bg-white/92 p-2 shadow-[0_18px_48px_-18px_rgba(15,55,95,0.3),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl max-[380px]:px-2 max-[380px]:py-1.5 sm:rounded-2xl sm:p-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-x-8 lg:p-5">
              <div>
                  <p className={`text-center max-md:tracking-[0.16em] lg:text-left ${sectionEyebrow}`}>Laminate finishes</p>
                  <div className="mt-2 flex justify-center gap-3 sm:mt-3 sm:gap-6 lg:justify-start">
                    <div className="text-center transition-transform duration-300 hover:scale-[1.02] lg:text-left">
                      <div className="relative mx-auto h-10 w-[3.35rem] overflow-hidden rounded-lg border border-black/10 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.16)] ring-1 ring-white sm:h-12 sm:w-16 sm:rounded-xl sm:ring-2 lg:mx-0">
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
                      <div className="mx-auto h-10 w-[3.35rem] rounded-lg border-2 border-[#d8e4ed] bg-gradient-to-br from-white to-[#eef5f9] shadow-[inset_0_2px_6px_rgba(255,255,255,0.9)] ring-1 ring-white sm:h-12 sm:w-16 sm:rounded-xl sm:ring-2 lg:mx-0" />
                      <span className="mt-1 block text-[10px] font-bold text-[#1a1a1a] sm:mt-2 sm:text-xs">White</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#0c1a2a]/[0.06] pt-3 sm:mt-4 sm:pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className={`mb-1.5 text-center max-md:tracking-[0.16em] lg:text-left sm:mb-2 ${sectionEyebrow}`}>Certifications</p>
                  <div className="mx-auto flex max-w-[10.25rem] flex-wrap justify-center gap-1 gap-y-1 sm:mx-0 sm:max-w-none sm:gap-1.5 lg:justify-start">
                    {certDiscs.map((c) => (
                      <div
                        key={c.label ?? c.icon}
                        title={"title" in c ? c.title : undefined}
                        className="flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-gradient-to-br from-[#0a5aa8] to-[#073d73] text-[7px] font-bold uppercase leading-none text-white shadow-[0_2px_6px_rgba(10,90,168,0.22)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 sm:h-10 sm:w-10 sm:text-[9px] sm:shadow-[0_2px_8px_rgba(10,90,168,0.25)]"
                      >
                        {c.icon === "recycle" ? (
                          <Recycle className="size-3.5 text-white sm:size-4" strokeWidth={2.2} aria-hidden />
                        ) : c.icon === "leaf" ? (
                          <Leaf className="size-3.5 text-white sm:size-4" strokeWidth={2.2} aria-hidden />
                        ) : (
                          (c as { label: string }).label
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5 border-t border-[#0c1a2a]/[0.06] pt-3 sm:mt-4 sm:gap-2 sm:pt-4">
                    <div className="grid grid-cols-2 gap-1.5 max-[380px]:gap-1 sm:gap-2.5">
                      <div className="min-w-0 rounded-lg border border-[#c41e3a]/12 bg-[#fdf6f7]/90 px-1.5 py-1.5 text-center text-[9px] font-medium leading-tight tracking-tight text-[#5c2832] max-[380px]:px-1 sm:rounded-xl sm:px-2 sm:py-2.5 sm:text-xs sm:leading-snug md:text-sm">
                        Standard bar length · 5.9&nbsp;m
                      </div>
                      <div className="min-w-0 rounded-lg border border-[#0a5aa8]/12 bg-[#f3f8fc]/90 px-1.5 py-1.5 text-center text-[9px] font-medium leading-tight tracking-tight text-[#0f4a73] max-[380px]:px-1 sm:rounded-xl sm:px-2 sm:py-2.5 sm:text-xs sm:leading-snug md:text-sm">
                        Profile wall · 2.2&nbsp;mm
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
          className="mx-auto w-full max-w-[min(100%,720px)] shrink-0 pt-5 max-[380px]:pt-4 md:mt-auto sm:pt-6"
          aria-label="Contact information"
        >
          <div className="flex flex-col items-stretch gap-3 rounded-[1.25rem] border border-dashed border-black/80 bg-white/[0.18] px-5 py-4 shadow-[0_10px_32px_-14px_rgba(8,45,85,0.22)] ring-1 ring-white/35 backdrop-blur-2xl max-[380px]:px-4 max-[380px]:py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1.75rem] sm:px-6 sm:py-5">
            <div className="flex w-full shrink-0 justify-center sm:w-auto sm:justify-start">
              <Image
                src={siteConfig.logoPath}
                alt={`${siteConfig.name} — Window & Door Profiles`}
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                className="mx-auto h-auto w-[min(100%,152px)] max-w-[152px] object-contain object-center sm:mx-0 sm:w-[164px] sm:object-left sm:max-w-[164px] max-[380px]:w-[130px] max-[380px]:max-w-[130px]"
                sizes="(max-width: 380px) 130px, (max-width: 639px) 152px, 164px"
              />
            </div>

            <ul className="flex w-full min-w-0 flex-1 flex-col gap-3">
              <li className="flex items-center gap-3">
                <span
                  className="flex size-8 shrink-0 touch-manipulation items-center justify-center rounded-md bg-black sm:size-9"
                  aria-hidden
                >
                  <Phone className="size-3.5 text-white sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="flex min-w-0 flex-1 flex-row flex-wrap items-center gap-x-2 gap-y-1 text-left text-xs font-bold leading-snug text-black sm:text-[13px]">
                  {siteConfig.contactPhones.map((entry, i) => (
                    <Fragment key={entry.href}>
                      {i > 0 && (
                        <span className="shrink-0 select-none font-bold leading-none text-black" aria-hidden>
                          |
                        </span>
                      )}
                      <a
                        href={entry.href}
                        className="touch-manipulation rounded-sm py-0.5 text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        {entry.display}
                      </a>
                    </Fragment>
                  ))}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-black sm:size-9" aria-hidden>
                  <Mail className="size-3.5 text-white sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="min-w-0 flex-1 break-words text-xs font-bold leading-snug sm:text-[13px]">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="touch-manipulation break-all text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:break-normal"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-px flex size-8 shrink-0 items-center justify-center rounded-md bg-black sm:size-9" aria-hidden>
                  <MapPin className="size-3.5 text-white sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="min-w-0 flex-1 text-pretty pt-px text-xs font-bold leading-snug text-black sm:text-[13px]">{siteConfig.contactAddress}</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-black sm:size-9" aria-hidden>
                  <Globe className="size-3.5 text-white sm:size-4" strokeWidth={2.35} />
                </span>
                <p className="min-w-0 flex-1 text-xs font-bold leading-snug sm:text-[13px]">
                  <a
                    href={siteConfig.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-manipulation break-all text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:break-normal"
                  >
                    {siteConfig.websiteDisplay}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-white/45 px-[max(1rem,env(safe-area-inset-left,0px))] py-8 pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(2rem,env(safe-area-inset-bottom,0px))] text-center text-[13px] leading-relaxed text-[#1a3040] max-[380px]:text-xs sm:px-6 sm:py-12 sm:text-sm md:px-10">
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
        <MessageCircle className="relative size-6" />
      </a>
    </main>
  )
}
