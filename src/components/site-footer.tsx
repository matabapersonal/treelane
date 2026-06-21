import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { site } from "@/lib/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-warm">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Compassionate, professional senior care in a real home in Federal
              Way&apos;s {site.address.neighborhood}.
            </p>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="size-4" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-foreground hover:text-primary"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>{site.address.full}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary">
                  Our Home &amp; Gallery
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary">
                  Admissions &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Schedule a Tour
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-primary/15 bg-primary-soft px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <ShieldCheck className="size-5" />
            Washington State Licensed Adult Family Home
          </p>
          <a
            href={site.licenseLookupHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary underline underline-offset-4"
          >
            Verify our license
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {2026} {site.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
            <Link href="/nondiscrimination" className="hover:text-primary">
              Notice of Nondiscrimination
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
