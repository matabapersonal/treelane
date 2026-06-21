export const site = {
  name: "Tree Lane Adult Family Home",
  shortName: "Tree Lane",
  tagline: "A place where every resident becomes family.",
  phone: "206-651-0091",
  phoneHref: "tel:+12066510091",
  email: "info@treelaneafh.com",
  emailHref: "mailto:info@treelaneafh.com",
  address: {
    street: "3801 SW 326th St",
    city: "Federal Way",
    state: "WA",
    zip: "98023",
    neighborhood: "Twin Lakes neighborhood",
    full: "3801 SW 326th St, Federal Way, WA 98023",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=3801+SW+326th+St+Federal+Way+WA+98023",
  domain: "treelaneafh.com",
  licenseLookupHref:
    "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHPubLookup.aspx",
  maxResidents: 6,
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Home", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;
