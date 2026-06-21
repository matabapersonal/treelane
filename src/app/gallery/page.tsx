import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { GalleryLightbox, type GalleryPhoto } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Our Home & Gallery",
  description:
    "Take a look inside Tree Lane Adult Family Home in Federal Way, WA, with warm living spaces, private bedrooms, a home kitchen, and a peaceful yard. Schedule a tour.",
};

// Ordered per client direction: hallways, kitchen & dining, private room, and
// seating areas lead; the front and back exterior views come last.
const photos: GalleryPhoto[] = [
  {
    src: "/images/entry-hall.jpg",
    alt: "Wide tiled hallway with natural light",
  },
  {
    src: "/images/kitchen-dining.jpg",
    alt: "Open-plan kitchen flowing into the dining area",
  },
  {
    src: "/images/bedroom-2.jpg",
    alt: "Cozy bedroom with natural light and a dresser",
  },
  {
    src: "/images/living-room-2.jpg",
    alt: "Living room seating with recliners and an ottoman",
  },
  {
    src: "/images/living-room.jpg",
    alt: "Spacious living room with sofas, recliners and a fireplace",
  },
  {
    src: "/images/kitchen.jpg",
    alt: "Bright kitchen with granite island and stainless appliances",
  },
  {
    src: "/images/dining-room.jpg",
    alt: "Dining room with a large table set for residents",
  },
  {
    src: "/images/foyer-living.jpg",
    alt: "Tiled entryway opening into the living room",
  },
  {
    src: "/images/living-room-3.jpg",
    alt: "Living room with columns, sofa and ottoman",
  },
  {
    src: "/images/dining-deck.jpg",
    alt: "Dining room with sliding doors to a deck and backyard trees",
  },
  {
    src: "/images/bedroom.jpg",
    alt: "Bright private bedroom with a care bed and nightstand",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Wheelchair-accessible bathroom with grab bars and safety rails",
  },
  {
    src: "/images/deck.jpg",
    alt: "Wood deck with outdoor seating beside sliding doors",
  },
  {
    src: "/images/backyard.jpg",
    alt: "Spacious fenced backyard with large trees",
  },
  {
    src: "/images/exterior.jpg",
    alt: "Front view: single-story home with a landscaped yard and wheelchair ramp",
  },
  {
    src: "/images/exterior-rear.jpg",
    alt: "Back view: rear of the home with a long accessibility ramp and deck",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Home & Gallery"
        title="A real home, not a facility"
        description="Comfortable, clean, and warm. The kind of place where your loved one can truly settle in. Nothing beats seeing it in person, so come visit us."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Home" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <GalleryLightbox photos={photos} />
        <p className="mt-8 text-center text-sm text-muted-foreground">
          You&apos;re always welcome to tour our home in person. Pictures only
          tell part of the story.
        </p>
      </section>

      <CtaBand title="Pictures help, but a visit tells the whole story" />
    </>
  );
}
