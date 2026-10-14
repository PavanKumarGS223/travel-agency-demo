export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  accommodation: string;
}

export interface DepartureDate {
  id: string;
  startDate: string;
  endDate: string;
  status: 'Guaranteed' | 'Limited Spots' | 'Almost Full';
  price: number;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  region: string;
  durationDays: number;
  durationLabel: string;
  groupSizeLabel: string;
  maxGroupSize: number;
  category: 'Alpine Trekking' | 'Coastal & Fjord' | 'Cultural Discovery' | 'Wilderness Expedition';
  travelType: 'International' | 'Domestic' | 'Cross-Border';
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  priceFrom: number;
  priceNote: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  travelInfo: {
    fitnessLevel: string;
    weather: string;
    packingEssentials: string[];
    entryAndVisas: string;
  };
  departures: DepartureDate[];
  faqs: {
    question: string;
    answer: string;
  }[];
  isFeatured?: boolean;
}

export const toursData: Tour[] = [
  {
    id: "tour-morocco-atlas",
    slug: "morocco-high-atlas-berber-traverse",
    title: "High Atlas Berber Traverse & Mount Toubkal",
    destination: "High Atlas Mountains & Marrakech",
    country: "Morocco",
    region: "North Africa",
    durationDays: 8,
    durationLabel: "8 Days / 7 Nights",
    groupSizeLabel: "Small Group (Max 12)",
    maxGroupSize: 12,
    category: "Alpine Trekking",
    travelType: "International",
    difficulty: "Moderate",
    priceFrom: 1890,
    priceNote: "Demonstration pricing per traveller based on twin share",
    heroImage: "/images/morocco.jpg",
    overview: "Traverse terraced walnut valleys, sleep in family-run stone gîtes in remote Berber villages, and stand on the 4,167m summit of Mount Toubkal as the morning sun casts long shadows across the Sahara fringe.",
    highlights: [
      "Ascend to the summit of Mount Toubkal (4,167m) — North Africa's highest peak",
      "Traditional homestay dinners with local Berber mountain families",
      "Hike through the remote Azzaden and Imlil valleys far from tourist corridors",
      "Private mule support and certified Moroccan mountain guides with wilderness first responder training",
      "Concluding rest night in an authentic riad within the Medina of Marrakech",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Marrakech & Scenic Transfer to Imlil",
        description: "Meet your lead expedition guide at Marrakech Menara Airport or central riad. Journey south across the Haouz plain into the foothills of the Atlas range to the village of Imlil (1,740m) for expedition briefing and welcome mint tea.",
        meals: "Dinner included",
        accommodation: "Traditional mountain lodge, Imlil",
      },
      {
        day: 2,
        title: "Tizi n'Mzik Pass to the Red Valley of Azzaden",
        description: "Begin trekking through fragrant juniper groves and steep zigzag trails up to Tizi n'Mzik (2,489m). Soak in panoramic vistas of the Azzaden Valley before descending into the vibrant red earth village of Tizi Oussem.",
        meals: "Breakfast, Trail Lunch, Village Dinner",
        accommodation: "Berber village gîte, Tizi Oussem",
      },
      {
        day: 3,
        title: "D'knt Cascade & Remote Sheepfolds of Tamsoult",
        description: "Follow mountain streams past the cascading waters of Ighouliden. Cross high shepherd trails where pastoral nomads graze sheep in summer alpine pastures.",
        meals: "Breakfast, Trail Lunch, Traditional Tagine Dinner",
        accommodation: "Refuge de Tamsoult (2,250m)",
      },
      {
        day: 4,
        title: "The Aguelzim Zigzags to Toubkal Basecamp",
        description: "An invigorating climb up the winding mule path of Tizi Aguelzim (3,560m). Catch your first dramatic view of the jagged western flank of Mount Toubkal before arriving at the stone refuge.",
        meals: "Breakfast, Trail Lunch, Mountain Refuge Dinner",
        accommodation: "Toubkal Basecamp Stone Refuge (3,207m)",
      },
      {
        day: 5,
        title: "Toubkal Summit Day (4,167m) & Descent to Aroumd",
        description: "Pre-dawn alpine start by headlamp. Ascend the southern cirque to the ridge crest where the summit pyramid reveals sweeping views stretching across the Anti-Atlas to the Sahara desert. Descend to the picturesque village of Aroumd.",
        meals: "Breakfast, Summit Energy Packs, Celebration Dinner",
        accommodation: "Terraced gîte with valley views, Aroumd",
      },
      {
        day: 6,
        title: "Return to Marrakech via Asni & Afternoon Spice Walk",
        description: "Gentle morning walk to roadhead, followed by private transfer back to Marrakech. Check in to our peaceful riad and enjoy a guided evening walk through the vibrant souks of the Medina.",
        meals: "Breakfast, Local Lunch",
        accommodation: "Historic Medina Riad, Marrakech",
      },
      {
        day: 7,
        title: "Free Exploration & Farewell Moroccan Feast",
        description: "A leisure day to explore the Majorelle Garden, Bahia Palace, or enjoy a traditional hammam bath. Gather in the evening for our farewell dinner showcasing slow-cooked Atlas specialties.",
        meals: "Breakfast, Farewell Dinner",
        accommodation: "Historic Medina Riad, Marrakech",
      },
      {
        day: 8,
        title: "Homeward Departures",
        description: "Enjoy breakfast on the riad rooftop before private transfers to Marrakech Airport for homeward flights, or continue onward journey.",
        meals: "Breakfast included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "All transfers in private air-conditioned 4x4 or Mercedes Sprinter vehicles",
      "7 nights accommodation (4 nights village gîtes/refuge, 3 nights boutique riad)",
      "All meals as specified in itinerary with freshly prepared hot lunches on trail",
      "Certified English-speaking Moroccan mountain guide (UIAGM certified)",
      "Local cook, muleteers, and pack mules to carry expedition duffels (max 15kg)",
      "National Park permits and summit conservation fees",
    ],
    exclusions: [
      "International flights to and from Marrakech",
      "Travel insurance with high-altitude trekking coverage up to 4,500m",
      "Alcoholic beverages and personal discretionary tips",
      "Personal trekking gear (boots, sleeping bag, trekking poles)",
    ],
    travelInfo: {
      fitnessLevel: "Good aerobic stamina required. Expect 5–7 hours of hiking daily over rocky, uneven mountain terrain with elevation gains up to 1,000m.",
      weather: "Warm sunny days (18°C–24°C in valleys) with chilly night temperatures at basecamp (down to 2°C–6°C). Layers are essential.",
      packingEssentials: [
        "Sturdy broken-in trekking boots with ankle support",
        "4-season sleeping bag (comfort rated to 0°C)",
        "Waterproof breathable shell jacket and rain trousers",
        "Trekking poles with rubber tips",
        "UV category 3 or 4 sunglasses and broad-spectrum sunscreen",
      ],
      entryAndVisas: "Citizens of the US, UK, EU, Canada, and Australia do not require a tourist visa for stays up to 90 days. Passport must have 6 months validity.",
    },
    departures: [
      { id: "dep-ma-1", startDate: "Oct 24, 2026", endDate: "Oct 31, 2026", status: "Guaranteed", price: 1890 },
      { id: "dep-ma-2", startDate: "Nov 14, 2026", endDate: "Nov 21, 2026", status: "Limited Spots", price: 1890 },
      { id: "dep-ma-3", startDate: "Apr 10, 2027", endDate: "Apr 17, 2027", status: "Guaranteed", price: 1950 },
      { id: "dep-ma-4", startDate: "May 08, 2027", endDate: "May 15, 2027", status: "Almost Full", price: 1950 },
    ],
    faqs: [
      {
        question: "How technical is the Mount Toubkal summit climb?",
        answer: "During non-winter months, the ascent is a steep walk-up trek on scree and rocky pathways without ropes or technical climbing. Altitude awareness and proper pacing are key.",
      },
      {
        question: "What is the luggage weight limit on the mountain?",
        answer: "Your main duffel bag (carried by pack mules) must not exceed 15kg. You only carry a 25–30L daypack containing water, snacks, warm layers, and personal camera equipment.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "tour-italy-dolomites",
    slug: "italian-dolomites-alta-via-traverse",
    title: "Italian Dolomites Alta Via High Alpine Traverse",
    destination: "Dolomites UNESCO World Heritage",
    country: "Italy",
    region: "Southern Alps",
    durationDays: 7,
    durationLabel: "7 Days / 6 Nights",
    groupSizeLabel: "Small Group (Max 10)",
    maxGroupSize: 10,
    category: "Alpine Trekking",
    travelType: "International",
    difficulty: "Moderate",
    priceFrom: 2450,
    priceNote: "Demonstration pricing per person based on rifugio hut accommodations",
    heroImage: "/images/dolomites.jpg",
    overview: "Trek through the soaring pale limestone cathedrals of northern Italy along the Alta Via route, waking up above the clouds in storied alpine rifugi serving handcrafted South Tyrolean cuisine.",
    highlights: [
      "Traverse iconic mountain groups: Odle-Geisler, Sella Massif, and Tre Cime di Lavaredo",
      "Overnight stays in mountain rifugi with home-cooked hearty alpine dinners and local wine",
      "Spectacular enrosadira alpenglow illuminating vertical limestone walls at dusk",
      "Small intimate group capped at just 10 travellers for agile mountain movement",
      "Private luggage transfers between trailhead checkpoints where road access exists",
    ],
    itinerary: [
      {
        day: 1,
        title: "Rendezvous in Bolzano & Val Gardena Ascent",
        description: "Gather in the historic alpine city of Bolzano. Scenic transfer up the Val Gardena into the heart of the Ladin-speaking mountain valley. First evening aperitivo and route orientation.",
        meals: "Dinner with local wine",
        accommodation: "Alpine Hotel, Ortisei",
      },
      {
        day: 2,
        title: "Alpe di Siusi Rolling Meadows to Rifugio Sasso Piatto",
        description: "Ascend to Europe's largest high-altitude plateau. Hike across lush flower-strewn pastures beneath the vertical towers of the Sassolungo group.",
        meals: "Breakfast, Mountain Hut Lunch, 3-Course Dinner",
        accommodation: "Rifugio Sasso Piatto (2,300m)",
      },
      {
        day: 3,
        title: "High Cirque Paths of the Sella Plateau",
        description: "Traverse high scree terraces and limestone ledges with sweeping views into Val di Fassa and the glacier-capped Marmolada massif.",
        meals: "Breakfast, Trail Lunch, Rifugio Dinner",
        accommodation: "Rifugio Boè (2,871m)",
      },
      {
        day: 4,
        title: "Lagazuoi Tunnels & World War I Mountain History",
        description: "Hike through high mountain passes into the dramatic amphitheater of Mount Lagazuoi. Explore restored historic gallery tunnels and enjoy a sunset view from 2,752m.",
        meals: "Breakfast, Hearty Alpine Dinner",
        accommodation: "Rifugio Lagazuoi (2,752m)",
      },
      {
        day: 5,
        title: "Cinque Torri & the Giau Pass Panorama",
        description: "Descend past the freestanding stone needles of the Cinque Torri. Continue along high crests to Passo Giau, offering one of the most celebrated panoramas in all of Europe.",
        meals: "Breakfast, Trail Lunch, Evening Feast",
        accommodation: "Historic Rifugio Fedare",
      },
      {
        day: 6,
        title: "Tre Cime di Lavaredo High Circuit & Cortina Return",
        description: "Complete the pilgrimage around the vertical sheer northern walls of the Tre Cime. Transfer down to Cortina d'Ampezzo for a celebration dinner.",
        meals: "Breakfast, Celebration Dinner",
        accommodation: "Boutique Hotel, Cortina d'Ampezzo",
      },
      {
        day: 7,
        title: "Venice Transfer & Homeward Journey",
        description: "Morning private transfer to Venice Marco Polo Airport or Venice Santa Lucia central railway station for homeward connections.",
        meals: "Breakfast included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "All transfers starting Bolzano and ending Venice Airport",
      "6 nights accommodation (4 nights high rifugi, 2 nights boutique alpine hotels)",
      "All breakfasts and multi-course hearty dinners in mountain refuges",
      "UIAGM/IFMGA certified alpine mountain leader",
      "Luggage transfer where vehicle access permits",
    ],
    exclusions: [
      "Airfare to Italy",
      "Personal alcoholic drinks and extra midday café stops",
      "Personal travel and mountain rescue insurance",
    ],
    travelInfo: {
      fitnessLevel: "Moderate to high. Expect 5–6 hours of hiking per day with sustained ascents of 700m–1,100m over rocky paths.",
      weather: "Late spring and summer bring pleasant daytime temps (16°C–22°C), but afternoon thunderstorms can drop temperatures quickly.",
      packingEssentials: [
        "Lightweight daypack (30–35L)",
        "Sturdy Vibram-soled hiking boots",
        "Breathable waterproof shell jacket",
        "Sheet sleeping bag liner for rifugi",
      ],
      entryAndVisas: "Schengen area rules apply. US, UK, and Australian visitors require no visa for stays under 90 days.",
    },
    departures: [
      { id: "dep-it-1", startDate: "Jul 05, 2027", endDate: "Jul 11, 2027", status: "Guaranteed", price: 2450 },
      { id: "dep-it-2", startDate: "Jul 26, 2027", endDate: "Aug 01, 2027", status: "Limited Spots", price: 2450 },
      { id: "dep-it-3", startDate: "Aug 23, 2027", endDate: "Aug 29, 2027", status: "Guaranteed", price: 2450 },
      { id: "dep-it-4", startDate: "Sep 06, 2027", endDate: "Sep 12, 2027", status: "Almost Full", price: 2390 },
    ],
    faqs: [
      {
        question: "What are mountain rifugi like?",
        answer: "Italian rifugi are comfortable, family-run mountain lodges with cozy dorms or twin rooms, shared hot showers, and famous dining halls serving polenta, handmade pasta, and strudel.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "tour-norway-fjords",
    slug: "norway-fjords-kayak-wilderness-hike",
    title: "Norwegian Fjords Sea Kayak & Cliff-Edge Traverse",
    destination: "Nærøyfjord & Aurlandsfjord UNESCO Reserves",
    country: "Norway",
    region: "Western Fjords",
    durationDays: 6,
    durationLabel: "6 Days / 5 Nights",
    groupSizeLabel: "Small Group (Max 10)",
    maxGroupSize: 10,
    category: "Coastal & Fjord",
    travelType: "International",
    difficulty: "Moderate",
    priceFrom: 2280,
    priceNote: "Demonstration pricing per guest including sea kayak expedition gear",
    heroImage: "/images/norway.jpg",
    overview: "Paddle through mirror-like glacial waters beneath 1,000-metre sheer granite walls in UNESCO-listed Nærøyfjord, wild-camp on secluded rocky shorelines, and hike to untouched cliff-top farms.",
    highlights: [
      "Paddle sea kayaks through the narrowest and most dramatic fjord branches in Scandinavia",
      "Wild-camp under the Nordic summer twilight next to cascading glacial waterfalls",
      "Ascend historic postman pathways to deserted 17th-century clifftop mountain farmsteads",
      "Traditional wood-fired floating sauna session right on the fjord waters",
      "Led by certified Norwegian sea kayaking instructors and coastal naturalists",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bergen to Flåm Scenic Rail & Kayak Launch",
        description: "Board the world-famous Flåm railway down to the water's edge. Equipment fitting, safety paddle instruction, and launch onto the peaceful waters of Aurlandsfjord.",
        meals: "Campfire Dinner",
        accommodation: "Wilderness campsite along fjord shore",
      },
      {
        day: 2,
        title: "Paddling the Nærøyfjord UNESCO Gateway",
        description: "Paddle deep into the steep canyon of Nærøyfjord where harbor seals often surface alongside our kayaks. Pitch camp near a roaring freshwater waterfall.",
        meals: "Breakfast, Shore Lunch, Fresh Fish Campfire Dinner",
        accommodation: "Fjord shore wilderness camp",
      },
      {
        day: 3,
        title: "Hike to the Clifftop Farmstead of Stigen",
        description: "Hike up an ancient hand-carved stone path using wooden ladders to reach Stigen farm, perched 300 metres vertically above the water with surreal views.",
        meals: "Breakfast, Farmhouse Lunch, Camp Dinner",
        accommodation: "Restored historic farmhouse lodge",
      },
      {
        day: 4,
        title: "Cross-Fjord Paddle to Gudvangen & Floating Sauna",
        description: "Final paddle leg into the Viking settlement of Gudvangen. Relax weary muscles in an authentic wood-fired floating sauna with icy fjord plunges.",
        meals: "Breakfast, Lunch, Nordic Feast",
        accommodation: "Boutique Fjord Lodge, Flåm",
      },
      {
        day: 5,
        title: "Prest Ridge Hike with Aerial Fjord Panorama",
        description: "A panoramic ridge hike up Mount Prest (1,363m) delivering sweeping aerial perspectives of the fjord network stretching toward the sea.",
        meals: "Breakfast, Trail Lunch, Celebration Dinner",
        accommodation: "Boutique Fjord Lodge, Flåm",
      },
      {
        day: 6,
        title: "Return to Bergen",
        description: "Scenic electric catamaran ferry through the outer fjords back to Bergen harbour for homeward departures.",
        meals: "Breakfast included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "High-end sea kayaks, spray skirts, paddles, dry suits, and waterproof drybags",
      "5 nights accommodation (2 nights luxury fjord lodge, 1 night historic farm, 2 nights quality wild-camp)",
      "High-spec expedition tents, sleeping pads, and camp cooking equipment",
      "All meals on tour including fresh local seafood and reindeer stew",
      "Certified Norwegian sea kayak guide and wilderness first responder",
      "Wood-fired floating sauna session in Gudvangen",
    ],
    exclusions: [
      "International flights to Bergen",
      "Personal synthetic sleeping bag (rentals available)",
      "Alcoholic drinks",
    ],
    travelInfo: {
      fitnessLevel: "Moderate. Paddling 4–5 hours daily at a steady, unhurried pace. Prior kayaking experience is helpful but not strictly mandatory.",
      weather: "Summer fjord weather fluctuates from warm sunny 20°C days to refreshing misty rain. High quality waterproofs provided.",
      packingEssentials: [
        "Thermal merino wool base layers (top and bottom)",
        "Quick-dry hiking trousers",
        "Neoprene water booties or old trainers that can get wet",
        "Camp footwear and fleece jacket",
      ],
      entryAndVisas: "Norway is part of Schengen. No visa needed for US, UK, EU citizens up to 90 days.",
    },
    departures: [
      { id: "dep-no-1", startDate: "Jun 14, 2027", endDate: "Jun 19, 2027", status: "Guaranteed", price: 2280 },
      { id: "dep-no-2", startDate: "Jul 12, 2027", endDate: "Jul 17, 2027", status: "Limited Spots", price: 2280 },
      { id: "dep-no-3", startDate: "Aug 09, 2027", endDate: "Aug 14, 2027", status: "Guaranteed", price: 2280 },
    ],
    faqs: [
      {
        question: "Do I need to be an expert kayaker?",
        answer: "No. Our sea kayaks are stable touring double kayaks (and singles for experienced paddlers). We conduct a thorough on-water safety briefing before departing.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "tour-chile-patagonia",
    slug: "patagonia-w-trek-granite-spires",
    title: "Patagonia W-Trek & Grey Glacier Ice Hike",
    destination: "Torres del Paine National Park",
    country: "Chile",
    region: "Patagonia",
    durationDays: 9,
    durationLabel: "9 Days / 8 Nights",
    groupSizeLabel: "Small Group (Max 12)",
    maxGroupSize: 12,
    category: "Wilderness Expedition",
    travelType: "International",
    difficulty: "Challenging",
    priceFrom: 3290,
    priceNote: "Demonstration expedition pricing with crampon glacier trekking",
    heroImage: "/images/patagonia.jpg",
    overview: "Trek the legendary W-circuit through the untamed heart of Torres del Paine, witnessing the vertical granite horns of Los Cuernos, the Francés Valley hanging glaciers, and the immense blue crevasses of Glacier Grey.",
    highlights: [
      "Sunrise trek to the Base of the Towers (Mirador Las Torres) reflecting in turquoise water",
      "Guided ice hike wearing crampons across the deep blue crevasses of Glacier Grey",
      "Trek into the amphitheater of the French Valley with live thunderous calving avalanches",
      "Stay in comfortable mountain refugios with hot meals and warm beds inside the park",
      "Catamaran crossings across turquoise Lake Pehoé against the backdrop of Los Cuernos",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Puerto Natales & Expedition Briefing",
        description: "Welcome to Chilean Patagonia. Meet the team in the colourful port town of Puerto Natales for gear inspection and welcome dinner.",
        meals: "Welcome Dinner",
        accommodation: "Boutique Hotel, Puerto Natales",
      },
      {
        day: 2,
        title: "Transfer to Torres del Paine & Mirador Las Torres",
        description: "Scenic transfer through pampa into the national park. Ascend the Ascencio Valley through beech forests to the majestic base of the three granite towers.",
        meals: "Breakfast, Trail Lunch, Refugio Dinner",
        accommodation: "Refugio Central (Torres sector)",
      },
      {
        day: 3,
        title: "Nordenskjöld Lake Shoreline Trail to Los Cuernos",
        description: "Hike along the turquoise shore of Lake Nordenskjöld with the colossal hanging glaciers of Mount Almirante Nieto looming above.",
        meals: "Breakfast, Trail Lunch, Hot Dinner",
        accommodation: "Refugio Los Cuernos / Domos Francés",
      },
      {
        day: 4,
        title: "Deep into the Francés Valley Amphitheater",
        description: "Venture into the heart of the W-Trek. Watch and listen as hanging glaciers calve across the valley face before continuing to Paine Grande.",
        meals: "Breakfast, Trail Lunch, Refugio Dinner",
        accommodation: "Refugio Paine Grande",
      },
      {
        day: 5,
        title: "Trek along Lake Grey & Ice Hike on Glacier Grey",
        description: "Follow the trail along the ice-choked waters of Lake Grey. Don crampons for a thrilling 3-hour guided hike on the ancient blue ice sheet.",
        meals: "Breakfast, Glacier Lunch, Refugio Dinner",
        accommodation: "Refugio Grey",
      },
      {
        day: 6,
        title: "Suspension Bridges & Pehoé Catamaran Crossing",
        description: "Cross dramatic suspension bridges overlooking the Southern Patagonian Ice Field. Hike back to Paine Grande and board the catamaran across Lake Pehoé.",
        meals: "Breakfast, Trail Lunch, Evening Feast",
        accommodation: "Eco-Lodge, Torres del Paine Sector",
      },
      {
        day: 7,
        title: "Laguna Azul & Wild Guanaco Safari",
        description: "Explore the wild eastern sector of the park where herds of guanacos graze and Andean condors soar above cascading waterfalls.",
        meals: "Breakfast, Picnic Lunch, Traditional Asado Dinner",
        accommodation: "Eco-Lodge, Torres del Paine Sector",
      },
      {
        day: 8,
        title: "Return to Puerto Natales & Farewell Celebration",
        description: "Return to Puerto Natales along scenic fjords. Relax in town and celebrate with an authentic Patagonian lamb asado and Carménère wine.",
        meals: "Breakfast, Farewell Celebration Dinner",
        accommodation: "Boutique Hotel, Puerto Natales",
      },
      {
        day: 9,
        title: "Departure from Puerto Natales or Punta Arenas",
        description: "Private transfer to Puerto Natales or Punta Arenas Airport for homeward flights.",
        meals: "Breakfast included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "All ground and catamaran transfers within Patagonia",
      "8 nights accommodation (4 nights comfortable park refugios, 4 nights boutique hotels/lodges)",
      "All meals throughout the trekking itinerary",
      "Torres del Paine National Park entry permits and CONAF fees",
      "Certified wilderness mountain guide and specialist glacier ice guides",
      "Glacier Grey ice hike with all technical crampon equipment and harnesses",
    ],
    exclusions: [
      "International flights to Chile and domestic flights to Punta Arenas / Puerto Natales",
      "Personal mountain clothing and trekking poles",
      "Mandatory medical and evacuation travel insurance",
    ],
    travelInfo: {
      fitnessLevel: "Challenging. Hikers should be prepared for 6–8 hours on trail daily, carrying a 35L pack with wind gusts characteristic of southern Patagonia.",
      weather: "Infamous 'four seasons in one day' climate. Windproof and waterproof layers are mandatory even in mid-summer.",
      packingEssentials: [
        "Rigid hiking boots with Gore-Tex or equivalent membrane",
        "Windproof stormproof hooded hardshell jacket",
        "Thermal base layers and fleece mid-layers",
        "Sturdy collapsible trekking poles",
      ],
      entryAndVisas: "Chile requires a valid passport with at least 6 months validity. No tourist visa for US/EU/UK up to 90 days.",
    },
    departures: [
      { id: "dep-cl-1", startDate: "Nov 07, 2026", endDate: "Nov 15, 2026", status: "Guaranteed", price: 3290 },
      { id: "dep-cl-2", startDate: "Dec 05, 2026", endDate: "Dec 13, 2026", status: "Limited Spots", price: 3350 },
      { id: "dep-cl-3", startDate: "Jan 16, 2027", endDate: "Jan 24, 2027", status: "Almost Full", price: 3450 },
      { id: "dep-cl-4", startDate: "Feb 13, 2027", endDate: "Feb 21, 2027", status: "Guaranteed", price: 3450 },
    ],
    faqs: [
      {
        question: "Do I need to carry my own camping gear?",
        answer: "No. On this itinerary, we utilize pre-reserved mountain refugios with warm made-up beds and indoor dining facilities. You only carry your personal daypack.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "tour-japan-kumano",
    slug: "japan-kumano-kodo-sacred-pilgrimage",
    title: "Kumano Kodo Sacred Forest Trails & Ancient Ryokan",
    destination: "Kii Peninsula UNESCO Sacred Sites",
    country: "Japan",
    region: "Kansai",
    durationDays: 7,
    durationLabel: "7 Days / 6 Nights",
    groupSizeLabel: "Small Group (Max 8)",
    maxGroupSize: 8,
    category: "Cultural Discovery",
    travelType: "International",
    difficulty: "Moderate",
    priceFrom: 2790,
    priceNote: "Demonstration pricing per guest including multi-course Kaiseki dinners",
    heroImage: "/images/japan.jpg",
    overview: "Walk the 1,000-year-old cobblestone pilgrimage paths through towering ancient cedar groves on the Kii Peninsula, visiting grand Shinto shrines and soothing weary muscles in natural thermal onsen.",
    highlights: [
      "Hike the UNESCO-registered Nakahechi route through mossy cedar forests",
      "Overnight stays in authentic family-owned Japanese ryokan with private natural onsen baths",
      "Intricate multi-course Kaiseki banquets highlighting regional seasonal mountain and sea delicacies",
      "Visit the three grand shrines of Kumano: Hongu Taisha, Hayatama Taisha, and Nachi Taisha",
      "Baggage forwarded ahead daily so you hike light with only a daypack",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kyoto or Osaka to Tanabe & Sacred Mountain Gateway",
        description: "Board the scenic express train south along the Pacific coast to Kii-Tanabe. Transfer into the mist-shrouded foothills of Takahara, known as the 'Village in the Mist'.",
        meals: "Kaiseki Welcome Dinner",
        accommodation: "Traditional Mountain Ryokan, Takahara",
      },
      {
        day: 2,
        title: "Takahara to Tsugizakura-oji Ancient Water Springs",
        description: "Climb through dense forests of ancient cedar and cypress, passing historic stone Oji shrines worshipped by Japanese emperors since the 11th century.",
        meals: "Breakfast, Trail Bento Box, Local Ryokan Dinner",
        accommodation: "Family Minshuku, Nonaka",
      },
      {
        day: 3,
        title: "Hosshinmon-oji to Kumano Hongu Taisha",
        description: "Walk tranquil forest paths down into the sacred river basin of Hongu Taisha, the spiritual center of the pilgrimage route.",
        meals: "Breakfast, Bento Lunch, Onsen Feast",
        accommodation: "Historic Onsen Ryokan, Yunomine Onsen",
      },
      {
        day: 4,
        title: "Sacred River Boat Pilgrimage to Hayatama Taisha",
        description: "Glide down the sacred Kumano River on a traditional flat-bottom wooden boat to Shingu, home to the vermilion shrine of Hayatama Taisha.",
        meals: "Breakfast, Local Lunch, Kaiseki Dinner",
        accommodation: "Seaside Ryokan, Katsuura",
      },
      {
        day: 5,
        title: "Daimon-zaka Cobblestones & Nachi Waterfall",
        description: "Walk up the moss-covered stone staircase of Daimon-zaka flanked by centuries-old cryptomeria trees to the 133m cascading Nachi Waterfall and pagoda.",
        meals: "Breakfast, Mountain Lunch, Multi-Course Feast",
        accommodation: "Seaside Ryokan, Katsuura",
      },
      {
        day: 6,
        title: "Coastal Train Return to Kyoto / Osaka",
        description: "Morning visit to the vibrant local coastal tuna market before boarding the Kuroshio oceanfront express train back to Osaka or Kyoto.",
        meals: "Breakfast, Farewell City Dinner",
        accommodation: "Boutique Hotel, Kyoto",
      },
      {
        day: 7,
        title: "Homeward Departures",
        description: "Breakfast and flexible departure connections throughout Japan.",
        meals: "Breakfast included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "All regional train transfers and private luggage transfers between ryokan stops",
      "6 nights accommodation in handpicked authentic ryokan and boutique inns",
      "Sumptuous multi-course Kaiseki dinners and traditional Japanese breakfasts",
      "Certified bilingual Japanese mountain guide and cultural historian",
      "Luggage forwarding daily (1 suitcase per person)",
    ],
    exclusions: [
      "International flights to Japan (Kansai KIX or Tokyo)",
      "Lunches outside of specified bento days",
      "Personal expenses and drinks",
    ],
    travelInfo: {
      fitnessLevel: "Moderate. 4–6 hours of walking daily with stepped climbs and descents on cobblestone paths that can be slippery when damp.",
      weather: "Spring and autumn offer optimal hiking weather (15°C–22°C). Mild mountain rain can occur, enhancing the atmospheric mossy mist.",
      packingEssentials: [
        "Comfortable trail shoes with dependable wet-surface traction",
        "Lightweight rain jacket and compact umbrella",
        "Modest attire for temple visits and easy-to-slip-off footwear",
      ],
      entryAndVisas: "Visa waiver applies for travellers from US, Canada, UK, and European nations.",
    },
    departures: [
      { id: "dep-jp-1", startDate: "Oct 18, 2026", endDate: "Oct 24, 2026", status: "Guaranteed", price: 2790 },
      { id: "dep-jp-2", startDate: "Nov 08, 2026", endDate: "Nov 14, 2026", status: "Limited Spots", price: 2850 },
      { id: "dep-jp-3", startDate: "Mar 28, 2027", endDate: "Apr 03, 2027", status: "Almost Full", price: 2950 },
      { id: "dep-jp-4", startDate: "Apr 18, 2027", endDate: "Apr 24, 2027", status: "Guaranteed", price: 2950 },
    ],
    faqs: [
      {
        question: "Do ryokan accommodate dietary restrictions?",
        answer: "Yes, with advance notice our ryokan hosts cater carefully to vegetarian, pescatarian, and gluten-sensitive travellers.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "tour-iceland-highlands",
    slug: "iceland-highlands-laugavegur-trail",
    title: "Iceland Highlands Laugavegur Trail & Geothermal Hot Springs",
    destination: "Landmannalaugar to Þórsmörk Valley",
    country: "Iceland",
    region: "Southern Highlands",
    durationDays: 6,
    durationLabel: "6 Days / 5 Nights",
    groupSizeLabel: "Small Group (Max 12)",
    maxGroupSize: 12,
    category: "Wilderness Expedition",
    travelType: "International",
    difficulty: "Moderate",
    priceFrom: 2190,
    priceNote: "Demonstration pricing per guest with full mountain hut bookings",
    heroImage: "/images/iceland.jpg",
    overview: "Trek through the other-worldly volcanic landscapes of Iceland's interior, starting from the steaming rainbow rhyolite hills of Landmannalaugar across black obsidian deserts to the lush glacial sanctuary of Þórsmörk.",
    highlights: [
      "Natural geothermal hot spring soak in Landmannalaugar before heading into the wild",
      "Traverse surreal black volcanic sand deserts and neon green moss-covered gorges",
      "Overnight stays in mountain huts surrounded by towering glaciers (Eyjafjallajökull and Mýrdalsjökull)",
      "Wade crystal-clear glacial streams with your experienced Icelandic mountain leader",
      "Celebration Icelandic lamb barbecue in the Birch forests of Þórsmörk",
    ],
    itinerary: [
      {
        day: 1,
        title: "Reykjavík to Landmannalaugar & Hot Spring Soak",
        description: "Board our high-clearance 4x4 mountain bus heading into the interior. Arrive at Landmannalaugar, hike through the Laugahraun lava field, and soak in the natural thermal river.",
        meals: "Mountain Hut Dinner",
        accommodation: "Landmannalaugar Mountain Hut",
      },
      {
        day: 2,
        title: "Steaming Vents of Brennisteinsalda to Hrafntinnusker",
        description: "Ascend past sulfur-belching fumaroles and colorful mineral hills to the high obsidian plateau of Hrafntinnusker (1,027m).",
        meals: "Breakfast, Trail Lunch, Hut Dinner",
        accommodation: "Höskuldsskáli Hut, Hrafntinnusker",
      },
      {
        day: 3,
        title: "Jökultungur Panorama to Lake Álftavatn",
        description: "Climb out of the snowfields to the rim of Jökultungur with breathtaking vistas over green volcanic plains and mirror-like Lake Álftavatn. First glacial river wading.",
        meals: "Breakfast, Trail Lunch, Warm Stew Dinner",
        accommodation: "Álftavatn Lake Hut",
      },
      {
        day: 4,
        title: "Mælifellssandur Black Sands to Emstrur",
        description: "Hike through the surreal black volcanic ash plains of Mælifellssandur beneath the blue ice dome of Mýrdalsjökull glacier. Explore the 200m deep Markarfljótsgljúfur canyon.",
        meals: "Breakfast, Trail Lunch, Hut Dinner",
        accommodation: "Botnar Hut, Emstrur",
      },
      {
        day: 5,
        title: "Emstrur to the Enchanted Valley of Þórsmörk",
        description: "Descent through birch forests and alpine flowers into Þórsmörk (the Woods of Thor), sheltered between three massive glaciers. Traditional evening lamb BBQ feast.",
        meals: "Breakfast, Trail Lunch, Celebration BBQ",
        accommodation: "Volcano Huts, Þórsmörk",
      },
      {
        day: 6,
        title: "South Coast Waterfalls & Return to Reykjavík",
        description: "Fording glacial rivers in our modified mountain truck on the return journey, stopping at Seljalandsfoss waterfall before arriving in central Reykjavík.",
        meals: "Breakfast, Lunch included",
        accommodation: "Departure day",
      },
    ],
    inclusions: [
      "All 4x4 mountain bus transport from Reykjavík and back",
      "5 nights accommodation in mountain huts along the trail",
      "All meals on trail prepared by your expedition team",
      "Certified Icelandic wilderness guide (WFR certified)",
      "Luggage transfer between huts by 4x4 support vehicle",
    ],
    exclusions: [
      "International flights to Keflavík",
      "Sleeping bag (mandatory, rentals available)",
      "Personal travel insurance",
    ],
    travelInfo: {
      fitnessLevel: "Moderate. 12–16 km per day over volcanic sand, rocky trails, and occasional snowfields.",
      weather: "Sub-Arctic mountain conditions. Wind, rain, and sunshine can all happen in the same afternoon.",
      packingEssentials: [
        "Waterproof breathable jacket and pants",
        "Neoprene socks or river crossing sandals",
        "Warm 3-season sleeping bag",
        "Trekking poles with baskets",
      ],
      entryAndVisas: "Schengen area regulations. US/EU/UK visitors require no visa for stays under 90 days.",
    },
    departures: [
      { id: "dep-is-1", startDate: "Jul 03, 2027", endDate: "Jul 08, 2027", status: "Guaranteed", price: 2190 },
      { id: "dep-is-2", startDate: "Jul 24, 2027", endDate: "Jul 29, 2027", status: "Limited Spots", price: 2190 },
      { id: "dep-is-3", startDate: "Aug 14, 2027", endDate: "Aug 19, 2027", status: "Almost Full", price: 2190 },
    ],
    faqs: [
      {
        question: "How cold are the river crossings?",
        answer: "Glacial rivers are cold (around 2°C–4°C), but our leader chooses safe, shallow crossing points and demonstrates proper wading technique with trekking poles.",
      },
    ],
    isFeatured: true,
  },
];
