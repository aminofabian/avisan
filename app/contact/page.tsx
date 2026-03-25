import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { buildJsonLdGraph, contactPageJsonLd } from "@/lib/seo/schemas"
import { siteConfig } from "@/lib/site"

const contactDescription =
  "Contact Avisan for UPVC profile dealer enquiries, villa & commercial window projects, and catalog support. Based in Surat, Gujarat — fast replies within one business day."

export const metadata: Metadata = {
  title: "Contact — dealer & project enquiries",
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.name} · UPVC windows & profiles`,
    description: contactDescription,
    url: "/contact",
    type: "website",
    images: [{ url: "/avisanlogo.png", width: 1536, height: 1024, alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${siteConfig.name}`,
    description: contactDescription,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildJsonLdGraph([contactPageJsonLd()])} />
    <main className="cs-mesh-bg relative min-h-svh p-3 text-[var(--cs-black)] sm:p-5 md:p-8">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(20,119,179,0.12)_0%,transparent_70%)]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(20,76,145,0.1)_0%,transparent_70%)]" />
      </div>

      <section className="cs-fade-in relative mx-auto w-full max-w-6xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[linear-gradient(135deg,#ffffff_0%,#f8fcff_35%,#e8f2fa_60%,#dbeaf7_100%)] p-6 shadow-[0_24px_80px_-12px_rgba(20,76,145,0.18),0_0_0_1px_rgba(255,255,255,0.7)_inset] backdrop-blur-sm sm:p-8 md:rounded-[32px] md:p-10">
        {/* Background blurs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[var(--cs-accent)]/[0.04] blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[var(--cs-brand-deep)]/[0.05] blur-3xl" />
        </div>

        <header className="relative mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="w-full max-w-[16rem] sm:max-w-[18rem]">
            <Image
              src="/avisanlogo.png"
              alt="Avisan"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full object-contain object-left"
            />
          </Link>

          <Link
            href="/"
            className="cs-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--cs-brand-deep)] transition-all hover:shadow-lg"
          >
            <ArrowLeft className="size-4" />
            Back Home
          </Link>
        </header>

        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form card */}
          <section className="cs-glass rounded-2xl p-6">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[var(--cs-accent)]/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--cs-accent)]">
              <Send className="size-3" />
              Contact Avisan
            </p>
            <h1 className="mb-3 text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
              <span className="cs-gradient-text">Let&apos;s Build</span> Better Spaces.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--cs-muted)]">
              For dealer enquiries, project consultation, and product catalog
              support, send us your details and our team will get back within 1
              business day.
            </p>

            <form className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold">Full Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="cs-email-input w-full rounded-xl border border-[var(--cs-input-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:shadow-[0_0_0_3px_rgba(20,119,179,0.1)]"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold">Phone Number</span>
                <input
                  type="tel"
                  placeholder="+91 ..."
                  className="cs-email-input w-full rounded-xl border border-[var(--cs-input-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:shadow-[0_0_0_3px_rgba(20,119,179,0.1)]"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="cs-email-input w-full rounded-xl border border-[var(--cs-input-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:shadow-[0_0_0_3px_rgba(20,119,179,0.1)]"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="cs-email-input w-full resize-none rounded-xl border border-[var(--cs-input-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:shadow-[0_0_0_3px_rgba(20,119,179,0.1)]"
                />
              </label>

              <button
                type="button"
                className="cs-notify-button inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-6 py-3.5 text-sm font-semibold text-white sm:col-span-2"
              >
                Submit Enquiry
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="cs-glass rounded-2xl p-5">
              <h2 className="mb-4 text-lg font-bold">Contact Details</h2>
              <ul className="space-y-4 text-sm text-[var(--cs-muted)]">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--cs-accent)]/10">
                    <Mail className="size-4 text-[var(--cs-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cs-black)]/40">Email</p>
                    <span className="font-medium text-[var(--cs-black)]">sales@avisan.in</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--cs-accent)]/10">
                    <Phone className="size-4 text-[var(--cs-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cs-black)]/40">Phone</p>
                    <span className="font-medium text-[var(--cs-black)]">+91 98765 43210</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--cs-accent)]/10">
                    <MapPin className="size-4 text-[var(--cs-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cs-black)]/40">Location</p>
                    <span className="font-medium text-[var(--cs-black)]">Surat, Gujarat, India</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cs-glass rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="size-4 text-[var(--cs-accent)]" />
                <h2 className="text-lg font-bold">Business Hours</h2>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[var(--cs-muted)]">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-[var(--cs-black)]">9:30 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-[var(--cs-muted)]">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--cs-accent)] to-[var(--cs-brand-deep)] p-6 text-white">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/5 blur-xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                Quick Support
              </p>
              <p className="relative mt-2 text-xl font-bold">
                Need a quick callback?
              </p>
              <p className="relative mt-2 text-sm leading-relaxed text-white/80">
                Share your number and our product specialist will call you shortly.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30"
              >
                Chat on WhatsApp
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
    </>
  )
}
