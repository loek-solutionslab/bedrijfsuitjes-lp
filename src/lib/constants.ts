export const COMPANY = {
  name: "Boot Huren Amsterdam",
  phone: "(020) 624 76 35",
  phoneIntl: "+31206247635",
  email: "info@amsterdam-boats.com",
  address: "Amsterdam",
  logoLong: "https://production-bha.b-cdn.net/assets/logo-long-nl-05ece1e5faf3214e1d0738d9780e3751ee34a69435f34e7743c168a5e385b6b9.svg",
  logoShort: "https://production-bha.b-cdn.net/assets/logo-ba514b23b0574acd16f9291af379a7f05888f8301ac252d7d8bde844470cb837.svg",
  rating: 9.1,
  reviewCount: 3796,
  boatCount: 38,
  locationCount: 120
};

export const ARRANGEMENTS = [
  { 
    id: "diner", 
    name: "Diner à la carte", 
    price: "€89", 
    badge: "Meest populair",
    description: "3-gangen menu op maat geserveerd aan tafel",
    icon: "utensils"
  },
  { 
    id: "buffet", 
    name: "Buffet", 
    price: "€75", 
    badge: "Flexibel",
    description: "Uitgebreid buffet met keuze uit vis, vlees en vegetarisch",
    icon: "soup"
  },
  { 
    id: "walking", 
    name: "Walking Dinner", 
    price: "€95", 
    badge: "Netwerken",
    description: "Meerdere gangen geserveerd in stijlvolle amuse-vorm",
    icon: "wine"
  },
  { 
    id: "bbq", 
    name: "Barbecue", 
    price: "€69", 
    badge: "Zomer favoriet",
    description: "Sfeervolle BBQ aan boord met kok aanwezig",
    icon: "flame"
  },
  { 
    id: "borrel", 
    name: "Borrel", 
    price: "€45", 
    badge: "Snel geboekt",
    description: "2 uur varen met drankjes en hapjes",
    icon: "wine"
  },
  { 
    id: "vergadering", 
    name: "Vergadering", 
    price: "€55", 
    badge: "Zakelijk",
    description: "Productieve meeting met catering en A/V",
    icon: "presentation"
  },
  { 
    id: "netwerk", 
    name: "Netwerkevent", 
    price: "€85", 
    badge: "",
    description: "Ontspannen netwerken met standing dinner",
    icon: "handshake"
  },
  { 
    id: "relatie", 
    name: "Relatie Event", 
    price: "€95", 
    badge: "Luxe",
    description: "Uw klanten verwennen met een exclusieve vaartocht",
    icon: "heart"
  },
  { 
    id: "jubileum", 
    name: "Jubileum", 
    price: "€79", 
    badge: "",
    description: "Feestelijke viering met taart en bubbels",
    icon: "cake"
  },
  { 
    id: "highfive", 
    name: "High Five Moment", 
    price: "Op aanvraag", 
    badge: "Maatwerk",
    description: "Iets te vieren? Wij zorgen voor het wow-effect",
    icon: "party"
  }
];

export const USP_ITEMS = [
  {
    icon: "ship",
    title: "38 luxe boten",
    description: "Keuze uit salonboten, sloepen en rondvaartboten"
  },
  {
    icon: "captain",
    title: "Professionele schippers",
    description: "Altijd ervaren kapitein aan boord"
  },
  {
    icon: "mapPin",
    title: "120+ opstaplocaties",
    description: "Overal in Amsterdam en omgeving"
  },
  {
    icon: "utensils",
    title: "Catering op maat",
    description: "Dieetwensen? Geen probleem"
  },
  {
    icon: "refresh",
    title: "Flexibel wijzigen",
    description: "Tot 5 dagen van tevoren gratis annuleren"
  },
  {
    icon: "star",
    title: "9.1 beoordeling",
    description: "3.796+ tevreden gasten gingen u voor"
  }
];

export const REVIEWS = [
  {
    text: "Perfect georganiseerd bedrijfsuitje. De boot was prachtig, het eten heerlijk en het personeel enorm vriendelijk. Een aanrader!",
    author: "Anoniem",
    role: "Marketing Manager",
    rating: 5
  },
  {
    text: "We hebben met 45 collega's een geweldige avond gehad. Het walking dinner was perfect voor netwerken onderweg.",
    author: "HRH boeking",
    role: "HR Manager",
    rating: 5
  },
  {
    text: "Uitstekende service van begin tot eind. Flexibel en professioneel. Zeker voor herhaling vatbaar!",
    author: "Tech Solutions BV",
    role: "Directeur",
    rating: 5
  },
  {
    text: "Ons jubileumfeest was fantastisch. De boot, het eten, de sfeer - alles klopte perfect.",
    author: "Van den Berg & Co",
    role: "Office Manager",
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  {
    src: "https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg",
    alt: "Diner op een boot in Amsterdam",
    category: "diner"
  },
  {
    src: "https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg",
    alt: "Borrel op boot in Amsterdam",
    category: "borrel"
  },
  {
    src: "https://production-bha.b-cdn.net//uploads/page_section/photo/1142/slideshow_2x_Buffet_op_een_boot_in_Amsterdam.jpg",
    alt: "Buffet op een boot in Amsterdam",
    category: "buffet"
  },
  {
    src: "https://production-bha.b-cdn.net//uploads/page_section/photo/1158/slideshow_2x_11406636_832146906841301_831726696146516709_n.png",
    alt: "Bedrijfsuitje op boot",
    category: "event"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Kan ik het arrangement nog wijzigen?",
    answer: "Ja, tot 5 dagen van tevoren kunt u uw boeking gratis wijzigen of annuleren. Hierna zijn er wel kosten aan verbonden."
  },
  {
    question: "Welke opstaplocaties zijn er?",
    answer: "Wij hebben meer dan 120 opstaplocaties in Amsterdam en omgeving. De meest populaire zijn bij de Rijksmuseum, Anne Frank Huis, en Centraal Station."
  },
  {
    question: "Zijn er opties voor dieetwensen?",
    answer: "Absoluut! Onze cateraars kunnen rekening houden met alle dieetwensen: vegetarisch, veganistisch, glutenvrij, allergieën, etc."
  },
  {
    question: "Wat gebeurt er bij slecht weer?",
    answer: "Al onze boten hebben overdekte ruimtes en verwarming. Bij extreme weersomstandigheden bieden we gratis verplaatsing aan naar een andere datum."
  },
  {
    question: "Hoe ver van tevoren moet ik boeken?",
    answer: "Voor de zomermaanden adviseren wij minimaal 4-6 weken van tevoren te boeken. In de winter is 2 weken vaak ook mogelijk."
  }
];

export const META = {
  title: "Bedrijfsuitje Amsterdam? Boot huren met catering | 2-200 personen",
  description: "Organiseer het perfecte bedrijfsuitje op de Amsterdamse grachten. 38 luxe boten, 10 arrangementen, 2-200 personen. Offerte aanvragen →"
};
