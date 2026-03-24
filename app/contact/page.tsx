import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-[var(--cs-outer)] p-3 text-[var(--cs-black)] sm:p-5 md:p-8">
      <section className="cs-fade-in mx-auto w-full max-w-6xl overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#ffffff_0%,#f8fcff_45%,#dcedf9_100%)] p-6 shadow-[var(--cs-shadow)] sm:p-8 md:rounded-[30px] md:p-10">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
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
            className="inline-flex items-center gap-2 rounded-full border border-[var(--cs-input-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--cs-brand-deep)]"
          >
            Back Home
            <ArrowUpRight className="size-4" />
          </Link>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-[0_14px_40px_-10px_rgba(20,76,145,0.15)] backdrop-blur-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cs-accent)]">
              Contact Avisan
            </p>
            <h1 className="mb-3 text-4xl font-extrabold tracking-[-0.02em] text-[var(--cs-black)] sm:text-5xl">
              Let&apos;s Build Better Spaces.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--cs-muted)] sm:text-base">
              For dealer enquiries, project consultation, and product catalog
              support, send us your details and our team will get back within 1
              business day.
            </p>

            <form className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[var(--cs-input-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:ring-2 focus:ring-[var(--cs-accent)]/20"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium">Phone Number</span>
                <input
                  type="tel"
                  placeholder="+91 ..."
                  className="w-full rounded-xl border border-[var(--cs-input-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:ring-2 focus:ring-[var(--cs-accent)]/20"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-[var(--cs-input-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:ring-2 focus:ring-[var(--cs-accent)]/20"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="w-full resize-none rounded-xl border border-[var(--cs-input-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--cs-accent)] focus:ring-2 focus:ring-[var(--cs-accent)]/20"
                />
              </label>

              <button
                type="button"
                className="cs-notify-button sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-brand-deep)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(20,76,145,0.28)]"
              >
                Submit Enquiry
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_-10px_rgba(20,76,145,0.15)] backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-bold text-[var(--cs-black)]">
                Contact Details
              </h2>
              <ul className="space-y-3 text-sm text-[var(--cs-muted)]">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-[var(--cs-accent)]" />
                  <span>sales@avisan.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-[var(--cs-accent)]" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-[var(--cs-accent)]" />
                  <span>Surat, Gujarat, India</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_-10px_rgba(20,76,145,0.15)] backdrop-blur-sm">
              <h2 className="mb-3 text-lg font-bold text-[var(--cs-black)]">
                Business Hours
              </h2>
              <p className="text-sm text-[var(--cs-muted)]">
                Monday - Saturday
                <br />
                9:30 AM - 7:00 PM
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-[var(--cs-accent)] to-[var(--cs-brand-deep)] p-5 text-white shadow-[0_14px_40px_-10px_rgba(20,76,145,0.35)]">
              <p className="text-xs uppercase tracking-[0.12em] text-white/80">
                Quick Support
              </p>
              <p className="mt-2 text-lg font-bold">Need a quick callback?</p>
              <p className="mt-1 text-sm text-white/85">
                Share your number and our product specialist will call you
                shortly.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
