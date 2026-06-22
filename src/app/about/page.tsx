import type { Metadata } from "next";
import { Award, Heart, Home, Sparkles, Trees, Users } from "lucide-react";

import { Photo } from "@/components/photo";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the family behind Tree Lane Adult Family Home in Federal Way, WA. Our story, our care philosophy, and the Twin Lakes neighborhood we call home.",
};

const philosophy = [
  {
    icon: Users,
    title: "Embracing individuality",
    body: "Every resident is unique. We get to know each person's history, routines, and preferences.",
  },
  {
    icon: Sparkles,
    title: "Celebrating achievements",
    body: "We notice and celebrate the small wins that make each day meaningful.",
  },
  {
    icon: Heart,
    title: "Customizing care",
    body: "Care plans are built around the person, never one-size-fits-all.",
  },
  {
    icon: Home,
    title: "Residents as family",
    body: "This is a home, not a facility. Residents are treated like our own family.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We're here for your family's health and confidence"
        description="Tree Lane was founded on a simple belief: that seniors deserve care that feels like home, delivered by people who truly know them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Our story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Tree Lane Adult Family Home grew out of a deep love for caring
                for others. After years of supporting seniors and families
                through some of life&apos;s hardest transitions, our owner opened
                a home built around the kind of care she would want for her own
                parents.
              </p>
              <p>
                Unlike large corporate facilities, Tree Lane cares for just a
                small number of residents at a time. That means more attention,
                stronger relationships, and the personal touch that makes all the
                difference. Here, your loved one is family.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo
              src="/images/foyer-living.jpg"
              alt="Welcoming entryway opening into the living room"
              caption="A welcoming home"
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="aspect-[4/5]"
            />
            <Photo
              src="/images/living-room-3.jpg"
              alt="Comfortable living room with seating"
              caption="Comfortable shared spaces"
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="mt-8 aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Our care philosophy
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Four principles guide everything we do at Tree Lane.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p) => (
              <Card key={p.title} className="h-full">
                <CardContent className="p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Trained, certified caregivers who lead with compassion.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Gladys Kariuki",
              role: "Owner & Provider",
              note: "Founder of Tree Lane with years of hands-on caregiving experience and a passion for dignified senior care.",
            },
            {
              name: "Resident Caregivers",
              role: "Certified Care Team",
              note: "Our caregivers hold current certifications (CNA / HCA) and specialty training in dementia and behavioral support.",
            },
            {
              name: "On-call Support",
              role: "Nursing & Provider Network",
              note: "We coordinate closely with nurses, physicians, hospice, and home-health partners as each resident needs.",
            },
          ].map((m) => (
            <Card key={m.name} className="h-full">
              <CardContent className="p-6">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
                  <Award className="size-7" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Neighborhood */}
      <section className="bg-surface-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2">
          <Photo
            src="/images/dining-deck.jpg"
            alt="Dining area with large windows looking out to leafy backyard trees"
            caption="Leafy views from inside our home"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[16/10]"
          />
          <div>
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Trees className="size-6" />
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              A quiet, safe neighborhood
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our home sits in Federal Way&apos;s peaceful Twin Lakes
              neighborhood, with quiet streets, fresh air, and comfortable indoor and
              outdoor spaces where residents can relax, get sunshine, and feel at
              ease.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Come see Tree Lane for yourself" />
    </>
  );
}
