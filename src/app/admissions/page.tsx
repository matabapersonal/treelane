import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardList,
  Home,
  Phone,
  Stethoscope,
} from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Admissions & Pricing",
  description:
    "How to get started at Tree Lane Adult Family Home in Federal Way, WA. Our simple admissions process, what's included, and payment options. Call to learn more.",
};

const steps = [
  {
    icon: Phone,
    title: "1. Reach out",
    body: "Call us or send a tour request. We'll answer your questions and learn a little about your loved one's needs.",
  },
  {
    icon: Home,
    title: "2. Tour the home",
    body: "Visit in person to see the home, meet our caregivers, and get a real feel for daily life at Tree Lane.",
  },
  {
    icon: Stethoscope,
    title: "3. Care assessment",
    body: "We complete a simple assessment to confirm we're the right fit and to build an individualized care plan.",
  },
  {
    icon: ClipboardList,
    title: "4. Move in",
    body: "Once everything's in place, we welcome your loved one home and stay in close touch with your family.",
  },
];

const included = [
  "A private or shared room in a real home",
  "Three home-cooked meals daily, plus snacks",
  "24-hour caregiving and supervision",
  "Help with bathing, dressing, grooming & mobility",
  "Medication management",
  "Housekeeping and laundry",
  "Coordination with doctors, nurses & hospice",
  "Engaging daily activities and companionship",
];

const payment = [
  "Private pay",
  "Medicaid (where applicable)",
  "VA benefits",
  "Long-term care insurance",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions & Pricing"
        title="Getting started is simple"
        description="We know this is a big decision. We'll walk with you through every step, at your pace."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.title} className="h-full">
              <CardContent className="p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Included + payment */}
      <section className="bg-surface-muted">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                What&apos;s included in care
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Payment options
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every family&apos;s situation is different. We accept a range of
                payment types and are happy to talk through what works for you:
              </p>
              <ul className="mt-5 space-y-3">
                {payment.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-primary-soft p-4 text-sm text-foreground">
                Because every resident&apos;s care needs are unique, we provide
                pricing during a personal conversation. Call{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-primary underline"
                >
                  {site.phone}
                </a>{" "}
                for a friendly, no-pressure quote.
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact">Request pricing & a tour</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaBand title="Ready to take the first step?" />
    </>
  );
}
