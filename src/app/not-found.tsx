import Link from "next/link";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Page not found
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-foreground">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page may have moved. Let&apos;s get you back to finding care for your
        loved one.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={site.phoneHref}>Call {site.phone}</a>
        </Button>
      </div>
    </section>
  );
}
