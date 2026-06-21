"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function TourForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-primary-soft p-8 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
        <p className="max-w-sm text-muted-foreground">
          We&apos;ve received your request and will respond within one business
          day. If it&apos;s urgent, please call us at{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-primary underline"
          >
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="relationship" className={labelClass}>
            Relationship to resident
          </label>
          <input
            id="relationship"
            name="relationship"
            type="text"
            placeholder="e.g. Daughter, Social worker"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-primary">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="condition" className={labelClass}>
          Primary condition or care needs{" "}
          <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="condition"
          name="condition"
          type="text"
          placeholder="e.g. Dementia, post-stroke care"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="preferredDate" className={labelClass}>
          Preferred tour date / time
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="text"
          placeholder="e.g. Weekday mornings"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request a Tour"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We respond within one business day. Health details are optional and kept
        private.
      </p>
    </form>
  );
}
