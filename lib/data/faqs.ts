export interface FaqItem {
  id: string;
  category: 'Tour Packages' | 'Enquiries & Quotes' | 'Payments & Booking' | 'Travel Prep & Gear' | 'Changes & Cancellations';
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // Tour Packages
  {
    id: "faq-1",
    category: "Tour Packages",
    question: "What is your typical group size on guided departures?",
    answer: "We strictly cap our small-group departures at 8 to 12 travellers depending on the terrain. Small groups allow us to access secluded mountain rifugi, stay in family gîtes, minimize environmental footprint, and ensure personal attention from certified mountain leaders.",
  },
  {
    id: "faq-2",
    category: "Tour Packages",
    question: "Can any of these itineraries be booked as a private bespoke departure?",
    answer: "Yes. Every small-group itinerary we feature can be tailored as a private departure for solo adventurers, couples, families, or groups of friends. We can adjust the pacing, accommodation tier, activity intensity, and travel dates to match your exact preferences.",
  },
  {
    id: "faq-3",
    category: "Tour Packages",
    question: "What does 'Guaranteed Departure' mean?",
    answer: "A guaranteed departure will run once the minimum threshold of travellers (typically 2 to 4 guests) is confirmed. We never cancel departures at the last minute for commercial reasons.",
  },

  // Enquiries & Quotes
  {
    id: "faq-4",
    category: "Enquiries & Quotes",
    question: "How does the enquiry and proposal process work?",
    answer: "Sending an enquiry is completely free and carries no booking obligation. When you submit an enquiry through our trip planner or tour page, one of our regional travel specialists reviews your dates, group details, and wishes. Within 24 business hours, you will receive a detailed route briefing, departure availability, and transparent quote.",
  },
  {
    id: "faq-5",
    category: "Enquiries & Quotes",
    question: "Can you arrange extra nights before or after the tour?",
    answer: "Absolutely. We routinely arrange airport transfers, boutique city hotels, regional rail passes, and pre- or post-trek rest days in gateway cities like Marrakech, Bolzano, Bergen, Puerto Natales, Kyoto, or Reykjavík.",
  },

  // Payments & Booking
  {
    id: "faq-6",
    category: "Payments & Booking",
    question: "What deposit is required to secure a place?",
    answer: "To lock in your dates and permit allocations, a 20% refundable deposit is required once you approve your final itinerary proposal. The remaining balance is due 60 days prior to departure.",
  },
  {
    id: "faq-7",
    category: "Payments & Booking",
    question: "What payment methods are supported?",
    answer: "We accept secure credit cards (Visa, MasterCard, American Express) via encrypted gateway processing, as well as direct bank wire transfers in USD, EUR, and GBP with zero processing surcharges.",
  },

  // Travel Prep & Gear
  {
    id: "faq-8",
    category: "Travel Prep & Gear",
    question: "Do I need technical mountaineering experience?",
    answer: "Most of our tours are designed for fit, active walkers and do not require technical mountaineering skills, ropes, or previous climbing experience. For glacier treks (such as Patagonia Grey Glacier), all technical crampon equipment and on-ice coaching are provided by our certified guides.",
  },
  {
    id: "faq-9",
    category: "Travel Prep & Gear",
    question: "Is comprehensive travel insurance mandatory?",
    answer: "Yes. For your safety and peace of mind, all participants must hold comprehensive travel insurance that includes emergency medical evacuation, mountain rescue up to the maximum altitude of the trip, and trip interruption coverage.",
  },

  // Changes & Cancellations
  {
    id: "faq-10",
    category: "Changes & Cancellations",
    question: "What happens if I need to change my travel dates?",
    answer: "We offer flexible date transfers. If you request a date transfer at least 60 days prior to departure, your entire deposit will be transferred to any available date within 12 months with no administrative fee.",
  },
  {
    id: "faq-11",
    category: "Changes & Cancellations",
    question: "What is your refund policy if I need to cancel?",
    answer: "Cancellations made 60+ days before departure receive a full refund minus unrecoverable park permit fees. Cancellations between 30 and 59 days receive a 50% refund or full credit toward future travel. Full terms are outlined in our Cancellation Policy.",
  },
];
