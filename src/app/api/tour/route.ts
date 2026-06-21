import { NextResponse } from "next/server";

import { site } from "@/lib/site";

export type TourRequest = {
  name?: string;
  relationship?: string;
  phone?: string;
  email?: string;
  condition?: string;
  preferredDate?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: TourRequest;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Phone is the only required field per the content brief.
  if (!data.phone || data.phone.trim().length < 7) {
    return NextResponse.json(
      { error: "A valid phone number is required." },
      { status: 422 }
    );
  }

  // TODO: wire up real delivery before launch. Recommended: an email provider
  // such as Resend (https://resend.com) or Nodemailer with SMTP, sending the
  // inquiry to site.email (and an optional backup). Keep the health/condition
  // field optional and handle submissions responsibly (see brief §13).
  console.info(`[tour-request] new inquiry to ${site.email}`, {
    ...data,
    // Avoid logging the optional health detail in plaintext.
    condition: data.condition ? "[provided]" : "[none]",
  });

  return NextResponse.json({ ok: true });
}
