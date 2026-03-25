"use client"

import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  CirclePlay,
  Droplets,
  House,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Share2,
  Sparkles,
  Star,
  ThermometerSun,
  X,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"

const navLinks = ["About", "Products", "Projects"]
const footerLinks = ["FAQ", "Privacy Policy", "Contact Us"]

const LAUNCH_DATE = new Date("2026-05-01T00:00:00")

function useCountdown(target: Date) {
  const calcRemaining = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff / 3_600_000) % 24),
      minutes: Math.floor((diff / 60_000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }, [target])

  const [remaining, setRemaining] = useState(calcRemaining)

  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining()), 1000)
    return () => clearInterval(id)
  }, [calcRemaining])

  return remaining
}

const features = [
  {
    icon: ThermometerSun,
    title: "Thermal Insulation",
    desc: "Multi-chambered profiles that cut energy costs by up to 30%.",
    color: "from-sky-400/20 to-blue-500/10",
  },
  {
    icon: Droplets,
    title: "Weather Proof",
    desc: "Sealed systems that withstand monsoon, UV, and coastal air.",
    color: "from-cyan-400/20 to-teal-500/10",
  },
  {
    icon: Shield,
    title: "25-Year Durability",
    desc: "Lead-free, eco-friendly compound with zero-maintenance finish.",
    color: "from-indigo-400/20 to-blue-600/10",
  },
]

export function HomePage() {
  const countdown = useCountdown(LAUNCH_DATE)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedImage(null)
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selectedImage])

  const openImage = (src: string, alt: string) => setSelectedImage({ src, alt })

  const countdownBlocks = useMemo(
    () => [
      { label: "Days", value: countdown.days },
      { label: "Hours", value: countdown.hours },
      { label: "Min", value: countdown.minutes },
      { label: "Sec", value: countdown.seconds },
    ],
    [countdown],
  )

  return (
    <main className="cs-mesh-bg relative min-h-svh p-3 text-[var(--cs-black)] sm:p-5 md:p-8 lg:p-0">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(20,119,179,0.15)_0%,transparent_70%)]" />
        <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,76,145,0.12)_0%,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/3 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,119,179,0.08)_0%,transparent_70%)]" />
      </div>

      <section className="cs-fade-in relative mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-[linear-gradient(135deg,#ffffff_0%,#f8fcff_35%,#e8f2fa_60%,#dbeaf7_100%)] px-5 py-5 shadow-[0_24px_80px_-12px_rgba(20,76,145,0.18),0_0_0_1px_rgba(255,255,255,0.7)_inset] backdrop-blur-sm sm:min-h-[calc(100svh-2.5rem)] sm:px-7 sm:py-7 md:rounded-[32px] md:px-10 md:py-9 lg:min-h-svh lg:max-w-none lg:rounded-none lg:border-0 lg:px-0 lg:py-10 lg:shadow-none">
        {/* Background decorative blurs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[var(--cs-accent)]/[0.04] blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[var(--cs-brand-deep)]/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-0 lg:px-8">
          {/* ─── HEADER ─── */}
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="w-full max-w-[22rem] shrink-0 sm:max-w-[28rem] lg:max-w-[32rem]">
              <Image
                src="/avisanlogo.png"
                alt="Avisan"
                width={1536}
                height={1024}
                quality={100}
                priority
                sizes="(max-width: 640px) min(352px, 100vw), (max-width: 1024px) 448px, 512px"
                className="h-auto max-h-36 w-full object-contain object-left sm:max-h-40 lg:max-h-44"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link} href="#" className="cs-nav-link text-[var(--cs-black)]/70 hover:text-[var(--cs-accent)]">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="cs-shop-button hidden h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-7 text-sm font-semibold text-white lg:inline-flex"
              >
                Get in Touch
                <ArrowUpRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cs-input-border)] bg-white/60 text-[var(--cs-black)] backdrop-blur-sm transition-colors hover:bg-[var(--cs-accent)] hover:text-white lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div id="mobile-nav" className="w-full animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden">
                <nav className="cs-glass mt-2 flex flex-col gap-1 rounded-2xl p-3" aria-label="Mobile primary">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--cs-accent)]/10 hover:text-[var(--cs-accent)]"
                    >
                      {link}
                    </a>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-1 rounded-xl bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Get in Touch
                  </Link>
                </nav>
              </div>
            )}
          </header>

          {/* ─── HERO GRID ─── */}
          <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-6">
            {/* Left column */}
            <div className="cs-stagger space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--cs-accent)]/20 bg-[var(--cs-accent)]/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--cs-accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cs-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cs-accent)]" />
                </span>
                Launching Soon
              </div>

              <div className="max-w-[480px]">
                <h1 className="text-[length:var(--cs-text-display)] font-extrabold leading-[1.06] tracking-[-0.03em]">
                  <span className="cs-gradient-text">Stronger Profiles.</span>
                  <br />
                  Better Living.
                </h1>
              </div>

              <p className="max-w-[440px] text-[15px] leading-[1.7] text-[var(--cs-muted)]">
                Premium UPVC profiles, sliding systems, and window solutions
                built for insulation, durability, and modern design.
              </p>

              {/* Countdown */}
              <div className="flex items-center gap-3 sm:gap-4">
                {countdownBlocks.map((block) => (
                  <div key={block.label} className="text-center">
                    <div className="cs-glass flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold tabular-nums text-[var(--cs-black)] sm:h-16 sm:w-16 sm:text-2xl">
                      {String(block.value).padStart(2, "0")}
                    </div>
                    <span className="mt-1.5 block text-[10px] font-medium uppercase tracking-wider text-[var(--cs-muted)]">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Email form */}
              <form className="max-w-[440px]" noValidate aria-label="Email updates signup">
                <div className="cs-glass flex h-auto flex-col gap-2 rounded-2xl p-2 sm:h-[58px] sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email for launch updates"
                    className="cs-email-input h-11 flex-1 rounded-full bg-transparent px-4 text-[14px] outline-none placeholder:text-[var(--cs-muted)]"
                  />
                  <button
                    type="button"
                    className="cs-notify-button h-[42px] rounded-full bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-8 text-sm font-semibold text-white"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="mt-3 text-xs text-[var(--cs-muted)]">
                  No spam. Only launch and product updates.
                </p>
              </form>
            </div>

            {/* Right column — floating cards */}
            <div className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[520px]">
              {/* Accent backdrop shape */}
              <div className="absolute right-2 top-8 h-[280px] w-[230px] rounded-[28px] bg-gradient-to-br from-[#1477b3] via-[#1269a0] to-[#0f3d6b] opacity-90 sm:right-0 sm:top-4 sm:h-[360px] sm:w-[330px] sm:rounded-[32px]">
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
              </div>

              {/* Main product card */}
              <article className="cs-float-card cs-float-slow cs-glass absolute left-1/2 top-4 w-[255px] -translate-x-1/2 rounded-[18px] p-3.5 sm:left-10 sm:top-8 sm:translate-x-0">
                <div className="mb-2 flex items-center justify-between text-[10px] text-[var(--cs-muted)]">
                  <span className="font-medium">Avisan</span>
                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[9px] font-semibold text-green-600">
                    In Stock
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1477b3] to-[#144c91]">
                    <Zap className="size-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-bold">Avisan Series A</p>
                    <p className="text-[10px] text-[var(--cs-muted)]">Premium Profile</p>
                  </div>
                  <button className="rounded-full bg-[var(--cs-accent)] px-3 py-1 text-[10px] font-semibold text-white transition hover:bg-[var(--cs-brand-deep)]">
                    View
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => openImage("/upvc-profile-500x500-removebg-preview.png", "UPVC profile")}
                  className="relative mb-2.5 h-28 w-full cursor-zoom-in overflow-hidden rounded-xl bg-gradient-to-br from-[#f0f7fc] to-[#e3eff8] transition-transform hover:scale-[1.02]"
                >
                  <Image src="/upvc-profile-500x500-removebg-preview.png" alt="UPVC profile" fill className="object-contain p-1.5" />
                </button>

                <div className="mb-3 grid grid-cols-3 gap-1.5">
                  {[
                    { src: "/upvc-profile-removebg-preview%20(1).png", alt: "UPVC profile variant" },
                    { src: "/upvc-profile-removebg-preview.png", alt: "UPVC profile detail" },
                    { src: "/upvc-sliding-windows-03b.jpg", alt: "UPVC sliding window installed" },
                  ].map((img) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => openImage(img.src, img.alt)}
                      className="relative h-9 cursor-zoom-in overflow-hidden rounded-lg bg-[#f0f5fa] transition-transform hover:scale-105"
                    >
                      <Image src={img.src} alt={img.alt} fill className={img.src.includes("sliding") ? "object-cover" : "object-contain"} />
                    </button>
                  ))}
                </div>

                <p className="text-lg font-bold leading-none">AV-Pro 70</p>
                <p className="mt-1 text-[11px] text-[var(--cs-muted)]">Thermal Insulated Frame</p>
                <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-[var(--cs-black)]">
                  <House className="size-3.5 text-[var(--cs-accent)]" />
                  15+ Projects
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                </div>
              </article>

              {/* Sliding window card */}
              <article className="cs-float-card cs-float-fast cs-glass absolute right-2 top-[100px] hidden w-[175px] rounded-[16px] p-3 sm:block">
                <button
                  type="button"
                  onClick={() => openImage("/upvc-sliding-windows-03b-removebg-preview.png", "Sliding window")}
                  className="relative mb-3 h-16 w-full cursor-zoom-in overflow-hidden rounded-xl bg-gradient-to-br from-[#f0f7fc] to-[#e3eff8] transition-transform hover:scale-[1.02]"
                >
                  <Image src="/upvc-sliding-windows-03b-removebg-preview.png" alt="Sliding window" fill className="object-contain p-1" />
                </button>
                <button className="mb-2 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-3 py-2 text-[10px] font-semibold text-white transition hover:shadow-lg">
                  Share Catalog
                  <ArrowUpRight className="size-3" />
                </button>
                <button className="w-full rounded-full bg-[var(--cs-black)]/5 py-2 text-[10px] font-medium text-[var(--cs-black)]/60 transition hover:bg-[var(--cs-black)]/10">
                  View Showroom
                </button>
              </article>

              {/* Stats mini card */}
              <article className="cs-float-card cs-float-fast cs-glass absolute bottom-[110px] right-[14px] hidden w-[128px] rounded-xl p-3 sm:block">
                <div className="mb-2 flex items-center justify-between">
                  <Share2 className="size-3.5 text-[var(--cs-muted)]" />
                  <ChartNoAxesColumnIncreasing className="size-3.5 text-[var(--cs-brand-deep)]" />
                </div>
                <p className="mb-1 text-[10px] font-medium text-[var(--cs-muted)]">Growth</p>
                <div className="flex h-10 items-end gap-1">
                  {[5, 7, 3, 9, 6, 8].map((h, i) => (
                    <span
                      key={i}
                      className="w-2 rounded-sm"
                      style={{
                        height: `${h * 4}px`,
                        background: `linear-gradient(180deg, #1477b3, #144c91)`,
                        opacity: 0.6 + i * 0.07,
                      }}
                    />
                  ))}
                </div>
              </article>

              {/* Enquiry card */}
              <article className="cs-float-card cs-float-slow cs-glass absolute bottom-2 left-1/2 w-[290px] -translate-x-1/2 rounded-[16px] px-3.5 py-3 sm:left-[34px] sm:w-[300px] sm:translate-x-0">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openImage("/upvc-profile-removebg-preview.png", "UPVC profile thumbnail")}
                    className="relative h-9 w-9 cursor-zoom-in overflow-hidden rounded-full bg-gradient-to-br from-[#e8f2fa] to-[#d5e8f5]"
                  >
                    <Image src="/upvc-profile-removebg-preview.png" alt="UPVC profile thumbnail" fill className="object-cover" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate text-[11px] font-bold">Architect Enquiry</p>
                      <p className="text-[10px] text-[var(--cs-muted)]">54 min</p>
                    </div>
                    <p className="truncate text-[10px] text-[var(--cs-muted)]">
                      Need AV-Pro and sliding options for villa project.
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[10px]">
                  <span className="rounded-full bg-red-50 px-2 py-0.5 text-red-500">Priority</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">MOQ 25</span>
                    <button className="rounded-full bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-3 py-1 font-semibold text-white">
                      Send Quote
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* ─── FEATURE HIGHLIGHTS ─── */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="cs-glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:shadow-[0_16px_48px_-8px_rgba(20,76,145,0.16)]"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feat.color} transition-transform group-hover:scale-110`}>
                  <feat.icon className="size-5 text-[var(--cs-accent)]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--cs-black)]">{feat.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--cs-muted)]">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── FOOTER ─── */}
          <footer className="relative flex flex-col gap-6 border-t border-[var(--cs-input-border)]/40 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              {[
                { name: "Quality", icon: Shield },
                { name: "Innovation", icon: Sparkles },
                { name: "Play", icon: CirclePlay },
                { name: "Phone", icon: Phone },
              ].map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  aria-label={name}
                  className="cs-social-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cs-input-border)] bg-white/50 text-[var(--cs-black)]/60 backdrop-blur-sm"
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm md:gap-7">
              {footerLinks.map((link) => (
                <Link
                  key={link}
                  href={link === "Contact Us" ? "/contact" : "#"}
                  className="cs-footer-link text-[var(--cs-black)]/60 transition-colors hover:text-[var(--cs-accent)]"
                >
                  {link}
                </Link>
              ))}
            </div>

            <p className="text-xs text-[var(--cs-muted)]">
              &copy; {new Date().getFullYear()} Avisan. All rights reserved.
            </p>
          </footer>
        </div>
      </section>

      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366]" style={{ animation: "cs-pulse-ring 2s ease-out infinite" }} />
        <MessageCircle className="relative size-6" />
      </a>

      {/* ─── IMAGE LIGHTBOX ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020913]/94 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative h-[85vh] w-[90vw] max-w-4xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  )
}
