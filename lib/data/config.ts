export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappPrefillText: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  businessHours: {
    days: string;
    hours: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  isDemoNotice: string;
}

export const businessConfig: BusinessConfig = {
  name: "Wayfarer Tours & Travels",
  shortName: "Wayfarer",
  tagline: "Small-Group Expeditions & Bespoke Journeys",
  description: "Independent travel specialists curating small-group adventures and tailor-made private expeditions led by verified local mountain leaders.",
  phone: "+1 (555) 389-2041",
  phoneRaw: "+15553892041",
  email: "adventures@wayfarertravels.example",
  whatsapp: "+1 (555) 389-2041",
  whatsappRaw: "15553892041",
  whatsappPrefillText: "Hello Wayfarer team, I would like to enquire about planning a journey.",
  address: {
    street: "42 Compass Way, Suite 300",
    city: "Boulder",
    state: "CO",
    postalCode: "80302",
    country: "United States",
    fullFormatted: "42 Compass Way, Suite 300, Boulder, CO 80302, USA",
  },
  // Automatically generated verified search query URL for Google Maps external link
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=42+Compass+Way+Suite+300+Boulder+CO+80302",
  businessHours: [
    { days: "Monday – Friday", hours: "08:30 – 18:00 MT" },
    { days: "Saturday", hours: "09:00 – 14:00 MT" },
    { days: "Sunday", hours: "Closed (Emergency on-trip line active)" },
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
  ],
  isDemoNotice: "Demonstration agency configuration. Company details, pricing, and contact channels can be updated in lib/data/config.ts.",
};
