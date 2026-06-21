import type { Metadata } from "next";

import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Notice of Nondiscrimination",
  description:
    "Tree Lane Adult Family Home welcomes residents without regard to race, color, national origin, religion, sex, disability, age, or other protected status.",
};

export default function NondiscriminationPage() {
  return (
    <LegalPage
      title="Notice of Nondiscrimination"
      intro="Tree Lane Adult Family Home welcomes all who need our care."
    >
      <p>
        Tree Lane Adult Family Home does not discriminate on the basis of race,
        color, national origin, ancestry, religion, sex, gender identity or
        expression, sexual orientation, marital status, age, disability, veteran
        status, or any other characteristic protected by applicable federal,
        Washington State, or local law.
      </p>
      <p>
        We are committed to providing dignified, respectful care and equal access
        to our services and admissions process for every individual and family.
      </p>
      <h2>Questions or concerns</h2>
      <p>
        If you have questions about this notice, please contact us at{" "}
        <a href={site.phoneHref}>{site.phone}</a> or{" "}
        <a href={site.emailHref}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
