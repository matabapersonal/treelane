import type { Metadata } from "next";
import { ChevronDown, ExternalLink } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Resources & FAQ",
  description:
    "Answers to common questions about adult family homes in Federal Way, WA: conditions accepted, Medicaid, staffing, visiting, and more, from Tree Lane.",
};

const faqs = [
  {
    q: "What is an adult family home?",
    a: "An adult family home is a residential home, licensed by Washington State, that provides room, board, and personal care for a small number of residents, up to six. It offers a homelike alternative to large assisted living facilities or nursing homes.",
  },
  {
    q: "How is it different from assisted living?",
    a: "Assisted living facilities are large and serve many residents. An adult family home cares for only a few residents in an actual house, which means far more personal attention, stronger relationships, and a true family atmosphere.",
  },
  {
    q: "What conditions do you accept?",
    a: "We support a wide range of needs including Alzheimer's and dementia, stroke recovery, Parkinson's, diabetes, mental health, developmental disabilities, and more. The best way to know if we're the right fit is a quick phone call.",
  },
  {
    q: "Do you accept Medicaid?",
    a: "We work with several payment options and may accept Medicaid depending on availability, alongside private pay, VA benefits, and long-term care insurance. Please call us to discuss your specific situation.",
  },
  {
    q: "How many residents do you care for?",
    a: `We care for up to ${site.maxResidents} residents at a time. Keeping our home small is intentional. It's what allows us to give each person individualized, attentive care.`,
  },
  {
    q: "What is the staff-to-resident ratio?",
    a: "Because we serve only a small number of residents, our caregiver-to-resident ratio is far higher than large facilities, with 24-hour care and supervision.",
  },
  {
    q: "Can families visit anytime?",
    a: "Yes. Family involvement is important to us, and we warmly welcome visits. We'll work with you on the best times so visits are comfortable for your loved one.",
  },
];

const links = [
  {
    label: "Washington State DSHS: Adult Family Homes",
    href: "https://www.dshs.wa.gov/altsa/residential-care-services/adult-family-homes",
  },
  {
    label: "Adult Family Home Council",
    href: "https://www.adultfamilyhomecouncil.org/",
  },
  {
    label: "Verify a WA Adult Family Home license",
    href: site.licenseLookupHref,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources & FAQ"
        title="Answers for families"
        description="Choosing care raises a lot of questions. Here are the ones we hear most, and we're always glad to answer more by phone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-foreground marker:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-semibold text-foreground sm:text-3xl">
          Helpful links
        </h2>
        <ul className="mt-6 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                <ExternalLink className="size-4" /> {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Still have questions?" />
    </>
  );
}
