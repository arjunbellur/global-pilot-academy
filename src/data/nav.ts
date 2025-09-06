// Navigation data structure for Global Pilot Academy
export type NavItem = { label: string; href?: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: "Programs",
    children: [
      { label: "Overview", href: "/programs" },
      { label: "Private Pilot", href: "/programs/private-pilot" },
      { label: "Instrument Rating", href: "/programs/instrument-rating" },
      { label: "Commercial Pilot", href: "/programs/commercial" },
      { label: "CFI/II/MEI", href: "/programs/instructor" },
      { label: "Airline Pathway", href: "/programs/airline-pathway" },
      { label: "Flight Review", href: "/programs/flight-review" },
      { label: "Discovery Flight", href: "/programs/discovery" }
    ]
  },
  {
    label: "Admissions",
    children: [
      { label: "Overview", href: "/admissions" },
      { label: "Requirements (US)", href: "/admissions/requirements" },
      { label: "Application", href: "/admissions/application" },
      { label: "Financing", href: "/admissions/financing" },
      { label: "Pricing", href: "/admissions/pricing" },
      { label: "International", href: "/admissions/international" },
      { label: "DGCA", href: "/admissions/dgca" },
      { label: "Process", href: "/admissions/process" },
      { label: "Accommodations", href: "/admissions/accommodations" },
      { label: "International Application", href: "/admissions/international-application" }
    ]
  },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Our Fleet", href: "/fleet" }
    ]
  },
  {
    label: "Resources",
    children: [
      { label: "FAQ", href: "/faq" },
      { label: "Pilot Tools", href: "/resources/pilot-tools" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

// Header CTAs
export const PRIMARY_CTA = { label: "Apply", href: "/apply" };
export const PHONE = { label: "(813) 600-4052", href: "tel:+18136004052" };

// Footer navigation structure
export const FOOTER_NAV = {
  programs: [
    { label: "Overview", href: "/programs" },
    { label: "Private Pilot", href: "/programs/private-pilot" },
    { label: "Instrument Rating", href: "/programs/instrument-rating" },
    { label: "Commercial Pilot", href: "/programs/commercial" },
    { label: "CFI/II/MEI", href: "/programs/instructor" },
    { label: "Airline Pathway", href: "/programs/airline-pathway" },
    { label: "Flight Review", href: "/programs/flight-review" },
    { label: "Discovery Flight", href: "/programs/discovery" }
  ],
  admissions: [
    { label: "Overview", href: "/admissions" },
    { label: "Requirements (US)", href: "/admissions/requirements" },
    { label: "Application", href: "/admissions/application" },
    { label: "Financing", href: "/admissions/financing" },
    { label: "Pricing", href: "/admissions/pricing" },
    { label: "International", href: "/admissions/international" },
    { label: "DGCA", href: "/admissions/dgca" },
    { label: "Process", href: "/admissions/process" },
    { label: "Accommodations", href: "/admissions/accommodations" },
    { label: "International Application", href: "/admissions/international-application" }
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Our Fleet", href: "/fleet" }
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Pilot Tools", href: "/resources/pilot-tools" }
  ]
};
