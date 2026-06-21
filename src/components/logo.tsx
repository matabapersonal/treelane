import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Rooted-tree mark + wordmark for Tree Lane. */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        className="size-9 shrink-0 text-primary"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="24" cy="24" r="23" className="fill-primary-soft" />
        {/* canopy */}
        <path
          d="M24 9c-4.2 0-7.5 3.2-7.5 7.2 0 .8.1 1.5.4 2.2C14.5 19.4 13 21.6 13 24c0 3.4 2.9 6.2 6.6 6.2.5 0 1-.05 1.4-.15V35h6v-4.95c.5.1 1 .15 1.5.15 3.6 0 6.5-2.8 6.5-6.2 0-2.4-1.5-4.6-3.9-5.6.3-.7.4-1.4.4-2.2C31.5 12.2 28.2 9 24 9Z"
          className="fill-primary"
        />
        {/* roots / trunk */}
        <path
          d="M24 33v6m0 0c-1.5 1.8-3.5 2.6-6 2.8m6-2.8c1.5 1.8 3.5 2.6 6 2.8"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold text-foreground">
            Tree Lane
          </span>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Adult Family Home
          </span>
        </span>
      )}
    </span>
  );
}

export { site };
