import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Displays a real photo of the home. If no `src` is given, falls back to a
 * tasteful placeholder block. Per the content brief, real photos are the
 * single biggest credibility factor.
 */
export function Photo({
  src,
  alt,
  caption,
  className,
  tint = "blue",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  tint?: "blue" | "warm";
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative flex items-end overflow-hidden rounded-2xl border border-border",
        !src &&
          (tint === "blue"
            ? "bg-gradient-to-br from-primary-soft via-white to-blue-100"
            : "bg-gradient-to-br from-surface-warm via-white to-amber-50"),
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? caption ?? "Tree Lane Adult Family Home"}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-primary/25">
          <ImageIcon className="size-10" aria-hidden="true" />
        </span>
      )}
      {caption && (
        <figcaption className="relative z-10 w-full bg-gradient-to-t from-foreground/75 to-transparent px-4 py-3 text-sm font-medium text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
