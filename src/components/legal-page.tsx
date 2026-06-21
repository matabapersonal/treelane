import { PageHeader } from "@/components/page-header";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        title={title}
        description={intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <div className="space-y-5 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </section>
    </>
  );
}
