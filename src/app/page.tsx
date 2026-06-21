import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Heart,
  HomeIcon,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { site } from "@/lib/site";
import { conditions, care } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Photo } from "@/components/photo";
import { TopicIcon } from "@/components/topic-icon";
import { CtaBand } from "@/components/cta-band";

const trustStrip = [
  { icon: ShieldCheck, label: "Licensed Adult Family Home" },
  { icon: MapPin, label: "Serving Federal Way" },
  { icon: Users, label: `Up to ${site.maxResidents} Residents` },
  { icon: Clock, label: "24-Hour Care" },
];

const whyPoints = [
  {
    icon: Heart,
    title: "A real family atmosphere",
    body: "A true home, not an institution. Shared meals, warmth, and genuine relationships.",
  },
  {
    icon: Sparkles,
    title: "Individualized care plans",
    body: "Care shaped around each resident's needs, history, and preferences.",
  },
  {
    icon: HomeIcon,
    title: "Safe, quiet neighborhood",
    body: "A calm Twin Lakes home with comfortable indoor and outdoor spaces.",
  },
  {
    icon: Users,
    title: "Qualified, caring caregivers",
    body: "Trained, certified caregivers who treat residents like their own family.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="size-4" /> Washington State Licensed
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
              A place where every resident becomes{" "}
              <span className="text-primary">family</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Compassionate, professional care in a licensed adult family home,
              a real house in Federal Way&apos;s {site.address.neighborhood}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Tour <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <Photo
              src="/images/living-room.jpg"
              alt="Sunlit shared living room at Tree Lane Adult Family Home"
              caption="Our living room"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[16/10]"
            />
            <Photo
              src="/images/kitchen.jpg"
              alt="Home kitchen with granite island"
              caption="Home kitchen"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4">
          {trustStrip.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-2 py-5 sm:px-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <item.icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Welcome to Tree Lane
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          Choosing care for a loved one is hard. We make it feel like home.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Tree Lane Adult Family Home is a licensed AFH where your loved one is
          truly known, not one of dozens. We blend warm, attentive daily care
          with the medical support many seniors need, all in a comfortable house
          in a quiet neighborhood.
        </p>
        <div className="mt-6">
          <Button asChild variant="ghost">
            <Link href="/about">
              Read our story <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Conditions snapshot */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              We specialize in the care of:
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Our caregivers are trained and experienced in supporting a range of
              conditions with individualized, attentive daily care, including:
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <Card key={c.slug} className="h-full">
                <CardContent className="flex h-full flex-col items-start gap-3 p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <TopicIcon slug={c.slug} className="size-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {c.title.replace(" Care", "").replace(" Support", "")}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Comprehensive daily &amp; clinical care
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {care.slice(0, 8).map((c) => (
            <div
              key={c.slug}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5"
            >
              <TopicIcon slug={c.slug} className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {c.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Home preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Take a look inside our home
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A real, comfortable house with private bedrooms, accessible
              spaces, and a peaceful backyard.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/gallery">View the full gallery</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Photo
            src="/images/exterior.jpg"
            alt="Single-story home with landscaped yard and wheelchair ramp"
            caption="Welcoming home exterior"
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="/images/bedroom.jpg"
            alt="Bright private bedroom with a care bed and nightstand"
            caption="Private resident bedroom"
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="/images/bathroom.jpg"
            alt="Wheelchair-accessible bathroom with grab bars and safety rails"
            caption="Accessible bathroom"
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="/images/backyard.jpg"
            alt="Spacious fenced backyard with large trees"
            caption="Fenced backyard & lawn"
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Why families choose Tree Lane */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Why families choose Tree Lane
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p) => (
            <div key={p.title}>
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface-warm">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <div
            className="flex justify-center gap-1 text-accent"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
            &ldquo;The caregivers treat my mother like their own family. For the
            first time since her diagnosis, I can finally rest knowing she&apos;s
            safe and truly cared for.&rdquo;
          </blockquote>
          <p className="mt-6 font-medium text-muted-foreground">
            A daughter of a Tree Lane resident
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
