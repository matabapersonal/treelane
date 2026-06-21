import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { TourForm } from "@/components/tour-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact & Schedule a Tour",
  description:
    "Schedule a tour of Tree Lane Adult Family Home in Federal Way, WA. Call 206-651-0091 or send a tour request. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & Schedule a Tour"
        title="Let's talk about your loved one"
        description="Call us, send a tour request, or stop by. We respond within one business day, and there's never any pressure."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details */}
          <div className="flex flex-col gap-2">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 py-2"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <Phone className="size-6" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Call us</p>
                <p className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {site.phone}
                </p>
              </div>
            </a>

            <a
              href={site.emailHref}
              className="group flex items-center gap-4 py-2"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Mail className="size-6" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email us</p>
                <p className="break-all font-semibold text-foreground group-hover:text-primary">
                  {site.email}
                </p>
              </div>
            </a>

            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-2"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <MapPin className="size-6" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Visit us</p>
                <p className="font-semibold text-foreground group-hover:text-primary">
                  {site.address.full}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 py-2">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Clock className="size-6" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">
                  Best times to reach us
                </p>
                <p className="font-semibold text-foreground">
                  Daily, 8:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            {/* Map: stretches to match the form card height */}
            <div className="mt-2 min-h-[280px] flex-1 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={`Map to ${site.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.address.full
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block size-full"
              />
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Request a tour
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and we&apos;ll be in touch within one business
                day.
              </p>
              <div className="mt-6">
                <TourForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
