import type { Metadata } from "next";

import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Tree Lane Adult Family Home is committed to making our website accessible to everyone, including older adults and people with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="We are committed to making our website usable for everyone, including older adults and people with disabilities."
    >
      <h2>Our commitment</h2>
      <p>
        We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1
        Level AA. That means readable text, strong color contrast, keyboard
        navigation, descriptive alt text on images, and a layout that scales for
        easier reading.
      </p>
      <h2>Ongoing effort</h2>
      <p>
        Accessibility is an ongoing process. We review and improve our site
        regularly, and we welcome feedback that helps us do better.
      </p>
      <h2>Need help?</h2>
      <p>
        If you have trouble using any part of this website, please call us at{" "}
        <a href={site.phoneHref}>{site.phone}</a> or email{" "}
        <a href={site.emailHref}>{site.email}</a>. We&apos;re happy to help and
        to provide information in another format.
      </p>
    </LegalPage>
  );
}
