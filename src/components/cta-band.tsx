import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Ready to learn more?",
  subtitle = `Schedule a tour or call ${site.phone}. We respond within one business day.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-blue-100">{subtitle}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-blue-800 text-white hover:bg-blue-900"
          >
            <a href={site.phoneHref}>
              <Phone className="size-4" /> Call {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
