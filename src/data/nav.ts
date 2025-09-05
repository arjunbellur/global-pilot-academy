// Navigation data structure for Global Pilot Academy
export type NavItem = { label: string; href?: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: "Programs",
    children: [
      { label: "Airline Pathway", href: "/airline-pathway" },
      { label: "Private Pilot", href: "/programs/private-pilot" },
      { label: "Instrument Rating", href: "/programs/instrument-rating" },
      { label: "Commercial Pilot", href: "/programs/commercial" },
      { label: "Instructor", href: "/programs/instructor" },
      { label: "Discovery Flight", href: "/discovery-flight" },
      { label: "Proficiency & Flight Review", href: "/proficiency-review" }
    ]
  },
  {
    label: "Admissions",
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Requirements", href: "/admissions/requirements" },
      { label: "Financing", href: "/financing" },
      { label: "Pricing", href: "/pricing" },
      { label: "Housing", href: "/admissions/housing" },
      { label: "International Students", href: "/international" }
    ]
  },
  { label: "Locations", href: "/locations" },
  { label: "Fleet", href: "/fleet" },
  {
    label: "Career Guide",
    children: [
      { label: "How Long to Become a Pilot", href: "/guide/how-long" },
      { label: "Pilot Requirements", href: "/guide/requirements" },
      { label: "Pilot Salary & Hiring", href: "/guide/salary" },
      { label: "Steps to Become a Pilot", href: "/guide/steps" }
    ]
  },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" }
];

// Header CTAs
export const PRIMARY_CTA = { label: "Request Info", href: "/request-info" };
export const PHONE = { label: "(813) 600-4052", href: "tel:+18136004052" };

// Footer navigation structure
export const FOOTER_NAV = {
  programs: [
    { label: "Airline Pathway", href: "/airline-pathway" },
    { label: "Private Pilot", href: "/programs/private-pilot" },
    { label: "Instrument Rating", href: "/programs/instrument-rating" },
    { label: "Commercial Pilot", href: "/programs/commercial" },
    { label: "Instructor", href: "/programs/instructor" },
    { label: "Discovery Flight", href: "/discovery-flight" },
    { label: "Proficiency & Flight Review", href: "/proficiency-review" }
  ],
  admissions: [
    { label: "How to Apply", href: "/admissions" },
    { label: "Requirements", href: "/admissions/requirements" },
    { label: "Financing", href: "/financing" },
    { label: "Pricing", href: "/pricing" },
    { label: "Housing", href: "/admissions/housing" },
    { label: "International Students", href: "/international" }
  ],
  resources: [
    { label: "Career Guide", href: "/guide" },
    { label: "FAQs", href: "/faq" },
    { label: "Reviews", href: "/reviews" }
  ],
  about: [
    { label: "Locations", href: "/locations" },
    { label: "Fleet", href: "/fleet" },
    { label: "Contact", href: "/contact" }
  ]
};
