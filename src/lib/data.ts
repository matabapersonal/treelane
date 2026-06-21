export type Topic = {
  slug: string;
  title: string;
  /** Short one-line summary for cards. */
  summary: string;
  /** Meta description (~150 chars) for SEO. */
  meta: string;
  /** 3–5 sentences of real content. */
  body: string;
};

export const conditions: Topic[] = [
  {
    slug: "alzheimers-dementia",
    title: "Alzheimer's & Dementia Care",
    summary: "Calm routines and gentle memory support in a familiar home.",
    meta: "Compassionate Alzheimer's and dementia care in Federal Way, WA. Safe routines, trained caregivers, and a calm home. Call Tree Lane to schedule a tour.",
    body: "Memory loss can feel overwhelming for families, and our goal is to make daily life calmer and safer for your loved one. At Tree Lane we keep predictable routines, clear surroundings, and a quiet home that reduces confusion and anxiety. Our caregivers are trained to redirect gently, support orientation, and watch closely for changes. Because we care for up to six residents, your parent is known as a person, not a room number.",
  },
  {
    slug: "developmental-disabilities",
    title: "Developmental Disabilities",
    summary: "Individualized, respectful care that supports independence.",
    meta: "Supportive home care for adults with developmental disabilities in Federal Way, WA. Individualized plans and respect at Tree Lane. Call to tour.",
    body: "Every person deserves a home that honors their abilities and supports their goals. We create individualized care plans for adults with developmental disabilities, balancing safety with independence and choice. Our caregivers build trusting relationships and adapt daily support to each resident's strengths and preferences. Families are partners in shaping a life that feels meaningful and dignified.",
  },
  {
    slug: "mental-health",
    title: "Mental Health Support",
    summary: "Stable, understanding care for residents managing mental health needs.",
    meta: "Understanding mental health support for seniors in Federal Way, WA. Stable routines and trained caregivers at Tree Lane Adult Family Home. Call to tour.",
    body: "A stable, predictable environment supports mental wellness, and that is what our home is built around. We provide structure, medication management, and caregivers who respond with patience rather than judgment. We coordinate with mental health providers and watch closely for early signs of change. Our small home allows the consistency and one-on-one attention that many residents need to feel secure.",
  },
  {
    slug: "diabetes",
    title: "Diabetes Care",
    summary: "Careful monitoring, meals, and medication for diabetic residents.",
    meta: "Diabetes care for seniors in Federal Way, WA. Blood sugar monitoring, balanced meals, and insulin support at Tree Lane. Call to schedule a tour.",
    body: "Managing diabetes well means attention to the small daily details, and we handle them with care. Our caregivers support blood sugar monitoring, balanced meal preparation, foot and skin checks, and medication or insulin schedules. We watch for signs of high or low blood sugar and respond promptly. Working with each resident's physician, we keep diabetes management consistent and safe.",
  },
];

export const care: Topic[] = [
  {
    slug: "bathing-assistance",
    title: "Bathing Assistance",
    summary: "Gentle, dignified help with bathing and personal hygiene.",
    meta: "Dignified bathing assistance for seniors in Federal Way, WA at Tree Lane Adult Family Home. Safe, respectful personal care. Call to schedule a tour.",
    body: "Staying clean and comfortable is important for health and dignity, and we provide respectful help with bathing and personal hygiene. Our caregivers assist at whatever level is needed, always protecting privacy and comfort. We use safe techniques and equipment to prevent slips and falls. Every resident is treated with the gentleness we would want for our own family.",
  },
  {
    slug: "catheter-care",
    title: "Catheter Care",
    summary: "Clean, careful catheter management to prevent infection.",
    meta: "Professional catheter care in Federal Way, WA at Tree Lane Adult Family Home. Clean technique and infection prevention. Call to schedule a tour.",
    body: "Catheter care requires clean technique and close attention, and our trained caregivers provide it reliably. We monitor for signs of infection, maintain hygiene, and keep residents comfortable. We coordinate with physicians and home-health nurses as needed. Careful, consistent management helps prevent complications.",
  },
  {
    slug: "feeding-tube",
    title: "Feeding Tube Care",
    summary: "Safe, attentive support for residents with feeding tubes.",
    meta: "Feeding tube (G-tube) support for seniors in Federal Way, WA at Tree Lane. Safe, attentive daily care. Call to schedule a tour.",
    body: "Residents who rely on a feeding tube need careful, attentive support, and we provide it with safety in mind. We follow prescribed feeding schedules, keep the site clean, and watch for any signs of trouble. Our caregivers work closely with providers to keep nutrition on track. Comfort and proper technique guide everything we do.",
  },
  {
    slug: "incontinence-care",
    title: "Incontinence Care",
    summary: "Discreet, respectful incontinence support that protects skin and dignity.",
    meta: "Discreet incontinence care for seniors in Federal Way, WA at Tree Lane Adult Family Home. Respectful, skin-protective support. Call to tour.",
    body: "Incontinence is common and nothing to be embarrassed about, and we handle it with discretion and respect. Our caregivers provide timely, gentle help and protect skin health to prevent irritation and breakdown. We maintain dignity at every step. Families can be confident their loved one stays clean, comfortable, and cared for.",
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    summary: "Accurate, on-time medication administration and tracking.",
    meta: "Reliable medication management for seniors in Federal Way, WA at Tree Lane. Accurate, on-time administration and tracking. Call to schedule a tour.",
    body: "Getting medications right and on time is essential to health, and we make it a priority. Our caregivers administer and track medications carefully, following each physician's orders. We watch for side effects, coordinate refills, and keep clear records. Accurate medication management gives families one less thing to worry about.",
  },
  {
    slug: "oxygen-care",
    title: "Oxygen Care",
    summary: "Support for residents using supplemental oxygen, safely managed.",
    meta: "Oxygen therapy support for seniors in Federal Way, WA at Tree Lane Adult Family Home. Safe equipment handling and monitoring. Call to tour.",
    body: "Residents who need supplemental oxygen require safe equipment handling and watchful care. We help manage oxygen delivery, keep equipment clean and working, and monitor breathing and comfort. Our caregivers follow safety practices around oxygen use. We coordinate with providers to keep therapy on track.",
  },
  {
    slug: "uti-testing",
    title: "UTI Testing",
    summary: "Early detection and prompt response to urinary tract infections.",
    meta: "On-site UTI testing and monitoring for seniors in Federal Way, WA at Tree Lane. Early detection and prompt care. Call to schedule a tour.",
    body: "Urinary tract infections can cause sudden confusion and decline in seniors, so early detection matters. We watch for symptoms, perform on-site testing when appropriate, and respond quickly with the resident's provider. Prompt treatment helps prevent serious complications. Close observation is part of our daily care.",
  },
  {
    slug: "wound-care",
    title: "Wound Care",
    summary: "Careful wound monitoring and dressing to support healing.",
    meta: "Attentive wound care for seniors in Federal Way, WA at Tree Lane Adult Family Home. Clean dressing changes and healing support. Call to tour.",
    body: "Wounds need consistent, clean care to heal well, and our caregivers provide it. We monitor wounds, change dressings as directed, and watch closely for signs of infection. We coordinate with nurses and physicians on treatment plans. Careful attention supports faster, safer healing.",
  },
  {
    slug: "bed-bound-care",
    title: "Bed-bound Care",
    summary: "Comfort, repositioning, and skin protection for bed-bound residents.",
    meta: "Compassionate bed-bound care in Federal Way, WA at Tree Lane Adult Family Home. Repositioning, hygiene, and comfort. Call to schedule a tour.",
    body: "Residents who are bed-bound need attentive, around-the-clock comfort care, and we provide it with compassion. We reposition regularly to prevent pressure sores, keep skin clean and healthy, and assist with all personal needs. We make sure residents stay comfortable and connected, never isolated. Dignity guides every interaction.",
  },
  {
    slug: "colostomy-care",
    title: "Colostomy Care",
    summary: "Clean, respectful colostomy management and skin care.",
    meta: "Professional colostomy care in Federal Way, WA at Tree Lane Adult Family Home. Clean technique and skin protection. Call to schedule a tour.",
    body: "Colostomy care calls for clean technique and sensitivity, and our caregivers deliver both. We manage appliance changes, protect surrounding skin, and watch for any problems. We keep residents comfortable and maintain their privacy. Reliable routines help prevent complications.",
  },
  {
    slug: "hospice-care",
    title: "Hospice Care Support",
    summary: "Gentle comfort and dignity for end-of-life care, with families close.",
    meta: "Compassionate hospice support in Federal Way, WA at Tree Lane Adult Family Home. Comfort, dignity, and family presence. Call to learn more.",
    body: "When the focus turns to comfort, we partner with hospice teams to provide gentle, dignified end-of-life care in a familiar home. We tend to comfort, hygiene, and emotional needs while keeping families close. Our caregivers offer a calm, loving presence during a tender time. No one walks this road alone at Tree Lane.",
  },
  {
    slug: "insulin-injections",
    title: "Insulin Injections",
    summary: "Safe, on-schedule insulin administration for diabetic residents.",
    meta: "Insulin injection support for seniors in Federal Way, WA at Tree Lane Adult Family Home. Safe, on-schedule administration. Call to tour.",
    body: "Diabetic residents who need insulin require precise, on-schedule care, and we provide it safely. Our caregivers administer insulin as ordered, monitor blood sugar, and watch for highs and lows. We coordinate dosing with each resident's physician. Consistent management keeps diabetes under control.",
  },
  {
    slug: "range-of-motion",
    title: "Range of Motion",
    summary: "Gentle exercises to maintain mobility, comfort, and circulation.",
    meta: "Range-of-motion support for seniors in Federal Way, WA at Tree Lane Adult Family Home. Gentle exercises for mobility. Call to schedule a tour.",
    body: "Keeping joints and muscles moving supports comfort, circulation, and independence. We help residents with gentle range-of-motion exercises as recommended by their therapists. These daily movements reduce stiffness and help prevent complications from inactivity. Our caregivers make it a patient, encouraging part of the day.",
  },
  {
    slug: "behavioral-support",
    title: "Behavioral Support",
    summary: "Patient, person-centered support for challenging behaviors.",
    meta: "Specialized behavioral support in Federal Way, WA at Tree Lane Adult Family Home. Patient, person-centered care. Call to schedule a tour.",
    body: "Some residents experience behavioral challenges related to dementia, mental health, or other conditions, and we meet them with patience and skill. Our caregivers are trained to understand triggers, respond calmly, and de-escalate with dignity. We create consistent routines and a soothing environment that reduces distress. Behavioral support is a priority service and a strength of our home.",
  },
  {
    slug: "dialysis",
    title: "Dialysis Support",
    summary: "Coordinated care and comfort around a dialysis schedule.",
    meta: "Dialysis support care in Federal Way, WA at Tree Lane Adult Family Home. Coordinated schedules and comfort. Call to schedule a tour.",
    body: "Residents on dialysis need careful coordination around treatment days, and we support that rhythm. We help with transportation logistics, monitor diet and fluids, and watch for symptoms before and after treatment. Our caregivers keep residents comfortable and rested. We work closely with dialysis providers to keep care seamless.",
  },
  {
    slug: "hoyer-lift",
    title: "Hoyer Lift Transfers",
    summary: "Safe mechanical transfers for residents with limited mobility.",
    meta: "Safe Hoyer lift transfers in Federal Way, WA at Tree Lane Adult Family Home. Trained caregivers, no-strain handling. Call to schedule a tour.",
    body: "For residents who cannot transfer on their own, a Hoyer lift makes movement safe and comfortable. Our caregivers are trained to use the lift correctly, protecting residents from injury and strain. Safe transfers help with bathing, repositioning, and getting out of bed. Comfort and safety come first in every transfer.",
  },
  {
    slug: "meal-preparation",
    title: "Meal Preparation",
    summary: "Home-cooked, nutritious meals tailored to each resident's needs.",
    meta: "Home-cooked, nutritious meal preparation in Federal Way, WA at Tree Lane Adult Family Home. Diet-friendly menus. Call to schedule a tour.",
    body: "Good food is one of life's daily pleasures, and we serve home-cooked meals made with care. We tailor menus to each resident's dietary needs, preferences, and medical requirements. Shared meals are also a time for connection and warmth. Nutrition and enjoyment go hand in hand at our table.",
  },
  {
    slug: "ostomy-care",
    title: "Ostomy Care",
    summary: "Skilled, discreet ostomy management and skin protection.",
    meta: "Skilled ostomy care in Federal Way, WA at Tree Lane Adult Family Home. Discreet management and skin protection. Call to schedule a tour.",
    body: "Ostomy care requires skill and discretion, and our caregivers provide both reliably. We manage appliance changes, protect skin, and monitor for any issues. Residents are kept clean, comfortable, and confident. Consistent care helps prevent complications and supports daily life.",
  },
  {
    slug: "blood-draw",
    title: "Blood Draw Coordination",
    summary: "Coordinated lab work and blood draws without the stress of travel.",
    meta: "Blood draw and lab coordination in Federal Way, WA at Tree Lane Adult Family Home. Convenient, low-stress care. Call to schedule a tour.",
    body: "Routine lab work is part of managing many conditions, and we make it as easy as possible. We coordinate blood draws and lab services, often arranging mobile providers so residents avoid stressful travel. We keep records organized and share results with physicians. Convenient coordination keeps health on track.",
  },
  {
    slug: "vital-sign-monitoring",
    title: "Vital Sign Monitoring",
    summary: "Regular checks of blood pressure, pulse, and more to catch changes early.",
    meta: "Vital sign monitoring for seniors in Federal Way, WA at Tree Lane Adult Family Home. Early detection of changes. Call to schedule a tour.",
    body: "Regular monitoring of vital signs helps us catch health changes before they become emergencies. Our caregivers check blood pressure, pulse, temperature, and breathing as needed and keep clear records. We alert providers and families promptly when something changes. Watchful daily care is at the heart of what we do.",
  },
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}

export function getCare(slug: string) {
  return care.find((c) => c.slug === slug);
}
