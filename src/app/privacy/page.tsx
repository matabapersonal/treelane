import type { Metadata } from "next";

import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tree Lane Adult Family Home collects, uses, and protects information submitted through our website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains how we handle information you share through this website."
    >
      <h2>Information we collect</h2>
      <p>
        When you submit our tour request form, we collect the information you
        provide, such as your name, phone number, email, and any details you
        choose to share about a prospective resident. Health-related details are
        always optional.
      </p>
      <h2>How we use it</h2>
      <p>
        We use the information only to respond to your inquiry, schedule a tour,
        and discuss care for your loved one. We do not sell your information.
      </p>
      <h2>How we protect it</h2>
      <p>
        This website is served over a secure (HTTPS) connection. We handle form
        submissions responsibly and limit access to inquiry information to those
        who need it to respond. Please do not include sensitive medical details
        you would not want shared by email or phone.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Contact us at{" "}
        <a href={site.emailHref}>{site.email}</a> or{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
