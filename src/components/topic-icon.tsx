import {
  Activity,
  Bath,
  Bed,
  Brain,
  Droplet,
  Droplets,
  HandHeart,
  Heart,
  HeartPulse,
  Microscope,
  Pill,
  Smile,
  Stethoscope,
  Syringe,
  TestTube,
  Thermometer,
  Utensils,
  Wind,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  // conditions
  "alzheimers-dementia": Brain,
  depression: Smile,
  "stroke-care": HeartPulse,
  "developmental-disabilities": HandHeart,
  "mental-health": Brain,
  diabetes: Droplet,
  "parkinsons-disease": Activity,
  // care
  "bathing-assistance": Bath,
  "catheter-care": Droplets,
  "feeding-tube": Utensils,
  "incontinence-care": Droplets,
  "medication-management": Pill,
  "oxygen-care": Wind,
  "uti-testing": TestTube,
  "wound-care": HandHeart,
  "bed-bound-care": Bed,
  "colostomy-care": HandHeart,
  "hospice-care": Heart,
  "insulin-injections": Syringe,
  "range-of-motion": Activity,
  "behavioral-support": Brain,
  dialysis: Droplets,
  "hoyer-lift": HandHeart,
  "meal-preparation": Utensils,
  "ostomy-care": HandHeart,
  "blood-draw": Microscope,
  "vital-sign-monitoring": Thermometer,
};

export function TopicIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = map[slug] ?? Stethoscope;
  return <Icon className={className} aria-hidden="true" />;
}
