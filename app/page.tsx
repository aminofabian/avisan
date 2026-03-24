"use client"

import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  CirclePlay,
  House,
  Menu,
  ShieldCheck,
  Share2,
  Sparkles,
  Star,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const navLinks = ["About", "Products", "Projects"]
const footerLinks = ["FAQ", "Privacy Policy", "Contact Us"]

const socialIcons = [
  { name: "Quality", icon: ShieldCheck },
  { name: "Innovation", icon: Sparkles },
  { name: "Instagram", icon: CirclePlay },
  { name: "Youtube", icon: CirclePlay },
]

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  useEffect(() => {
    if (!selectedImage) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selectedImage])

  const openImage = (src: string, alt: string) => setSelectedImage({ src, alt })

  return (
    <main className="min-h-svh bg-[var(--cs-outer)] p-3 text-[var(--cs-black)] sm:p-5 md:p-8">
      <section className="cs-fade-in mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-6xl flex-col rounded-[24px] bg-[linear-gradient(105deg,#ffffff_0%,#f7fbfd_42%,#c8e3f4_72%,#eef6fc_100%)] px-5 py-5 shadow-[var(--cs-shadow)] sm:min-h-[calc(100svh-2.5rem)] sm:px-7 sm:py-7 md:rounded-[28px] md:px-10 md:py-9 lg:px-12 lg:py-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => openImage("/avisanlogo.png", "Avisan")}
            className="w-full max-w-[24rem] shrink-0 cursor-zoom-in sm:max-w-[30rem] lg:max-w-[36rem]"
          >
            <Image
              src="/avisanlogo.png"
              alt="Avisan"
              width={1536}
              height={1024}
              quality={100}
              priority
              sizes="(max-width: 640px) min(384px, 100vw), (max-width: 1024px) 480px, 576px"
              className="h-auto w-full max-h-40 object-contain object-left sm:max-h-44 lg:max-h-48 [image-rendering:auto]"
            />
          </button>

          <nav className="hidden items-center gap-8 text-sm lg:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="cs-nav-link transition-opacity hover:opacity-70">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="cs-shop-button hidden h-11 items-center gap-2 rounded-full bg-[var(--cs-accent)] px-7 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:bg-[var(--cs-brand-deep)] lg:flex">
              Catalog
              <ArrowUpRight className="size-4" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cs-input-border)] text-[var(--cs-black)]">
              <Menu className="size-5" />
            </button>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1fr_1.05fr] lg:py-6">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 font-medium leading-none">
              <span className="h-px w-12 bg-[var(--cs-accent)]" />
              <span style={{ fontSize: "var(--cs-text-title)" }}>UPVC Excellence</span>
            </div>

            <div className="max-w-[460px]">
              <h1
                className="font-semibold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "var(--cs-text-display)" }}
              >
                Stronger Profiles.
                <br />
                Better Living.
              </h1>
            </div>

            <p className="max-w-[440px] text-[15px] leading-relaxed text-[#4f4f4f]">
              Premium UPVC profiles, sliding systems, and window solutions built
              for insulation, durability, and modern design. Launching soon.
            </p>

            <form className="max-w-[430px]">
              <div className="flex h-auto flex-col gap-2 rounded-[20px] border border-[var(--cs-input-border)] bg-white p-2.5 sm:h-14 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:px-2.5 sm:py-0">
                <input
                  type="email"
                  placeholder="Get dealer and launch updates"
                  className="cs-email-input h-10 flex-1 rounded-full bg-transparent px-4 text-[15px] outline-none placeholder:text-[#646464] sm:h-full"
                />
                <button
                  type="button"
                  className="cs-notify-button h-[43px] rounded-full bg-[var(--cs-accent)] px-9 text-sm font-medium text-white transition-transform hover:scale-[1.02] sm:px-8"
                >
                  Notify Me
                </button>
              </div>
            </form>

            <p className="text-[15px] text-[#555]">*No spam. Only launch and product updates.</p>
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[400px]">
            <div className="absolute right-2 top-8 h-[240px] w-[230px] rounded-[28px] bg-gradient-to-b from-[#1477b3] via-[#1269a0] to-[#144c91] sm:right-0 sm:top-4 sm:h-[300px] sm:w-[320px] sm:rounded-[32px]" />

            <article className="cs-float-card cs-float-slow absolute left-1/2 top-4 w-[250px] -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_14px_35px_rgb(0_0_0_/_0.12)] sm:left-10 sm:top-8 sm:translate-x-0">
              <div className="mb-2 flex items-center justify-between text-[10px] text-[#666]">
                <span>9:41</span>
                <span>LTE</span>
              </div>
              <p className="mb-3 text-center text-[11px] font-medium">UPVC Product</p>

              <div className="mb-3 flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#1477b3] to-[#144c91]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold">Avisan Series A</p>
                  <p className="text-[10px] text-[#8f8f8f]">Premium Profile</p>
                </div>
                <button className="rounded-full bg-[var(--cs-accent)] px-3 py-1 text-[10px] font-medium text-white">
                  View
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  openImage("/upvc-profile-500x500-removebg-preview.png", "UPVC profile")
                }
                className="mb-2 relative h-24 w-full cursor-zoom-in overflow-hidden rounded-[10px] bg-[#f2f2f2]"
              >
                <Image
                  src="/upvc-profile-500x500-removebg-preview.png"
                  alt="UPVC profile"
                  fill
                  className="object-contain p-1"
                />
              </button>
              <div className="mb-3 grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    openImage("/upvc-profile-removebg-preview%20(1).png", "UPVC profile variant")
                  }
                  className="relative h-8 cursor-zoom-in overflow-hidden rounded-md bg-[#f4f4f4]"
                >
                  <Image
                    src="/upvc-profile-removebg-preview%20(1).png"
                    alt="UPVC profile variant"
                    fill
                    className="object-contain"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => openImage("/upvc-profile-removebg-preview.png", "UPVC profile detail")}
                  className="relative h-8 cursor-zoom-in overflow-hidden rounded-md bg-[#f4f4f4]"
                >
                  <Image
                    src="/upvc-profile-removebg-preview.png"
                    alt="UPVC profile detail"
                    fill
                    className="object-contain"
                  />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openImage("/upvc-sliding-windows-03b.jpg", "UPVC sliding window installed")
                  }
                  className="relative h-8 cursor-zoom-in overflow-hidden rounded-md bg-[#f4f4f4]"
                >
                  <Image
                    src="/upvc-sliding-windows-03b.jpg"
                    alt="UPVC sliding window installed"
                    fill
                    className="object-cover"
                  />
                </button>
              </div>

              <p className="text-[18px] font-semibold leading-none">AV-Pro 70</p>
              <p className="mt-1 text-[11px] text-[#777]">Thermal Insulated Frame</p>
              <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold">
                <House className="size-3.5 text-[var(--cs-accent)]" />
                15+
                <Star className="size-3 text-[var(--cs-accent)]" />
              </div>
            </article>

            <article className="cs-float-card cs-float-fast absolute right-2 top-[98px] hidden w-[170px] rounded-[16px] bg-white p-3 shadow-[0_10px_24px_rgb(0_0_0_/_0.14)] sm:block">
              <button
                type="button"
                onClick={() =>
                  openImage("/upvc-sliding-windows-03b-removebg-preview.png", "Sliding window")
                }
                className="relative mb-3 h-14 w-full cursor-zoom-in overflow-hidden rounded-[10px] bg-gradient-to-br from-[#f1f1f1] to-[#d9d9d9]"
              >
                <Image
                  src="/upvc-sliding-windows-03b-removebg-preview.png"
                  alt="Sliding window"
                  fill
                  className="object-contain p-1"
                />
              </button>
              <button className="mb-2 flex w-full items-center justify-between rounded-full bg-[var(--cs-accent)] px-3 py-1.5 text-[10px] font-medium text-white">
                Share Catalog
                <ArrowUpRight className="size-3" />
              </button>
              <button className="w-full rounded-full bg-[#f5f5f5] py-1.5 text-[10px] font-medium text-[#666]">
                View Showroom
              </button>
            </article>

            <article className="cs-float-card cs-float-fast absolute bottom-[96px] right-[14px] hidden w-[122px] rounded-[12px] bg-white p-3 shadow-[0_8px_24px_rgb(0_0_0_/_0.12)] sm:block">
              <div className="mb-2 flex items-center justify-between">
                <Share2 className="size-3.5 text-[#4c4c4c]" />
                <ChartNoAxesColumnIncreasing className="size-3.5 text-[var(--cs-brand-deep)]" />
              </div>
              <div className="flex h-9 items-end gap-1">
                <span className="h-5 w-2 rounded-sm bg-[#144c91]" />
                <span className="h-7 w-2 rounded-sm bg-[#1477b3]" />
                <span className="h-3 w-2 rounded-sm bg-[#5ba3d4]" />
                <span className="h-8 w-2 rounded-sm bg-[#0f3d6b]" />
              </div>
            </article>

            <article className="cs-float-card cs-float-slow absolute bottom-2 left-1/2 w-[290px] -translate-x-1/2 rounded-[16px] bg-white px-3 py-2.5 shadow-[0_14px_28px_rgb(0_0_0_/_0.14)] sm:left-[34px] sm:w-[300px] sm:translate-x-0">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    openImage("/upvc-profile-removebg-preview.png", "UPVC profile thumbnail")
                  }
                  className="relative h-8 w-8 cursor-zoom-in overflow-hidden rounded-full bg-[#f4f4f4]"
                >
                  <Image
                    src="/upvc-profile-removebg-preview.png"
                    alt="UPVC profile thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-[11px] font-semibold">Architect Enquiry</p>
                    <p className="text-[10px] text-[#777]">54 min</p>
                  </div>
                  <p className="truncate text-[10px] text-[#777]">Need AV-Pro and sliding options for villa project.</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px]">
                <p className="text-[#e14a4a]">♥</p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">MOQ 25</p>
                  <button className="rounded-full bg-[var(--cs-accent)] px-3 py-1 font-medium text-white">
                    Send Quote
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>

        <footer className="flex flex-col gap-6 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {socialIcons.map(({ name, icon: Icon }) => (
              <button
                key={name}
                aria-label={name}
                className="cs-social-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cs-input-border)] text-[var(--cs-black)]"
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm md:gap-7">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={link === "Contact Us" ? "/contact" : "#"}
                className={`cs-footer-link ${link === "Privacy Policy" ? "border-b border-[var(--cs-accent)] pb-1" : ""}`}
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020913]/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative h-[80vh] w-[min(92vw,1200px)] overflow-hidden rounded-2xl border border-white/20 bg-black/15"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="92vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  )
}
