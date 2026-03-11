# Boot Huren Amsterdam - Landingspagina Bedrijfsuitjes

## OVERZICHT

Maak een conversie-gerichte landingspagina voor **bedrijfsuitjes** in de stijl van Boot Huren Amsterdam. Dit is GEEN rebuild van de bestaande site, maar een focused landing page specifiek gericht op zakelijke klanten die een bedrijfsuitje willen organiseren op de Amsterdamse grachten.

## BRAND IDENTITEIT (behoud exact deze stijl)

### Kleurenpalet (van huidige site)
- **Primair donkerblauw**: #1a365d (marineblauw - hoofdkleur)
- **Primair lichtblauw**: #3182ce (accent kleur)
- **Goud/crème**: #f6e05e (CTA accenten, luxe uitstraling)
- **Wit**: #ffffff (achtergrond secties)
- **Grijs licht**: #f7fafc (alternatieve sectie achtergronden)
- **Tekst donker**: #1a202c (hoofdtekst)
- **Tekst grijs**: #718096 (subtekst)

### Typografie
- **Headers**: Modern, bold sans-serif (Inter of vergelijkbaar)
- **Body**: Clean sans-serif, goed leesbaar
- **Accenten**: Elegant serif voor prijzen en highlights

### Logo
Gebruik het originele logo:
- Lange versie: https://production-bha.b-cdn.net/assets/logo-long-nl-05ece1e5faf3214e1d0738d9780e3751ee34a69435f34e7743c168a5e385b6b9.svg
- Korte versie: https://production-bha.b-cdn.net/assets/logo-ba514b23b0574acd16f9291af379a7f05888f8301ac252d7d8bde844470cb837.svg

### Tone of Voice
- Professioneel maar warm
- Ondernemend en servicegericht
- Luxe zonder arrogantie
- Expert in Amsterdamse grachten

## ARCHITECTUUR

### Tech Stack
- Next.js 14+ (App Router) met TypeScript
- Tailwind CSS
- Single page landingspagina met anchor navigatie

### Structuur
```
app/
  page.tsx              <- Single landing page
  layout.tsx            <- Root layout met metadata
components/
  Header.tsx            <- Sticky header met logo + CTA
  Hero.tsx              <- Hoofdsectie met booking widget
  Arrangements.tsx      <- 10 arrangement cards
  TrustSignals.tsx      <- Reviews, aantallen, USPs
  Gallery.tsx           <- Foto's van bedrijfsuitjes
  Contact.tsx           <- Contactformulier + gegevens
  Footer.tsx            <- Footer met links
lib/
  constants.ts          <- Alle bedrijfsgegevens
```

## PAGINA STRUCTUUR

### 1. HEADER (sticky)
- Logo links (korte versie)
- Navigatie: Arrangementen | Reviews | Contact
- CTA knop: "Offerte aanvragen" (rechtse kant, goud accent)
- Mobiel: hamburger menu

### 2. HERO SECTIE
**Achtergrond**: Hero afbeelding van Amsterdamse gracht met boot vol zakelijke gasten

**Headline**:
```
Het perfecte bedrijfsuitje
op de Amsterdamse grachten
```

**Subheadline**:
```
Van informele borrel tot uitgebreid diner. 
38 luxe boten • 2-200 personen • Professionele schippers
Gemiddelde beoordeling: 9.1/10
```

**Booking Widget** (centraal in hero):
- Datum picker
- Tijd selector (standaard tijden)
- Aantal personen (dropdown: 2-10, 11-25, 26-50, 51-100, 100+)
- Type evenement (dropdown met arrangementen)
- Grote CTA knop: "Bekijk beschikbaarheid"

**Trust badges onder widget**:
- ⭐ 9.1 uit 3.796 beoordelingen
- ✅ Meeste keuze in Amsterdam (38 boten)
- 🛡️ GRATIS annuleren tot 5 dagen van tevoren

### 3. ARRANGEMENTEN SECTIE

**Sectie titel**: "Kies uw arrangement"
**Sectie subtitle**: "Van intiem diner tot groot netwerkevent - wij regelen alles"

**10 Arrangement Cards** (3 kolommen op desktop, 1 op mobiel):

1. **Diner à la carte**
   - Icon: Bord met bestek
   - Beschrijving: "3-gangen menu op maat geserveerd aan tafel"
   - Vanaf prijs: €89 p.p.
   - Badge: "Meest populair"

2. **Buffet**
   - Icon: Serveer schaal
   - Beschrijving: "Uitgebreid buffet met keuze uit vis, vlees en vegetarisch"
   - Vanaf prijs: €75 p.p.
   - Badge: "Flexibel"

3. **Walking Dinner**
   - Icon: Wijn glas
   - Beschrijving: "Meerdere gangen geserveerd in stijlvolle amuse-vorm"
   - Vanaf prijs: €95 p.p.
   - Badge: "Netwerken"

4. **Barbecue**
   - Icon: Grill
   - Beschrijving: "Sfeervolle BBQ aan boord met kok aanwezig"
   - Vanaf prijs: €69 p.p.
   - Badge: "Zomer favoriet"

5. **Borrel**
   - Icon: Champagne
   - Beschrijving: "2 uur varen met drankjes en hapjes"
   - Vanaf prijs: €45 p.p.
   - Badge: "Snel geboekt"

6. **Vergadering**
   - Icon: Presentatie scherm
   - Beschrijving: "Productieve meeting met catering en A/V"
   - Vanaf prijs: €55 p.p.
   - Badge: "Zakelijk"

7. **Netwerkevent**
   - Icon: Handshake
   - Beschrijving: "Ontspannen netwerken met standing dinner"
   - Vanaf prijs: €85 p.p.

8. **Relatie Event**
   - Icon: Hart
   - Beschrijving: "Uw klanten verwennen met een exclusieve vaartocht"
   - Vanaf prijs: €95 p.p.
   - Badge: "Luxe"

9. **Jubileum**
   - Icon: Cake
   - Beschrijving: "Feestelijke viering met taart en bubbels"
   - Vanaf prijs: €79 p.p.

10. **High Five Moment**
    - Icon: High five handen
    - Beschrijving: "Iets te vieren? Wij zorgen voor het wow-effect"
    - Vanaf prijs: Op aanvraag
    - Badge: "Maatwerk"

**Card design**:
- Hover effect: subtiele lift + schaduw
- Klikbaar: scrollt naar contact met vooringevulde keuze
- Foto per arrangement (boot met betreffende setting)

### 4. WAAROM ONS SECTIE

**Titel**: "Waarom bedrijven voor ons kiezen"

**6 USP's in grid**:
1. 🚢 **38 luxe boten** - Keuze uit salonboten, sloepen en rondvaartboten
2. 👨‍✈️ **Professionele schippers** - Altijd ervaren kapitein aan boord
3. 📍 **120+ opstaplocaties** - Overal in Amsterdam en omgeving
4. 🍽️ **Catering op maat** - Dieetwensen? Geen probleem
5. 🔄 **Flexibel wijzigen** - Tot 5 dagen van tevoren gratis annuleren
6. 🏆 **9.1 beoordeling** - 3.796+ tevreden gasten gingen u voor

### 5. GROEPSGROTTEN SECTIE

**Titel**: "Van klein tot groot - wij regelen het"

**Visualisatie** (horizontale bar):
- 2-12 personen: Intieme salonboten
- 12-30 personen: Middelgrote boten  
- 30-60 personen: Grote salonboten
- 60-200 personen: Rondvaartboten & combinaties

**CTA**: "Bekijk alle boten per groepsgrootte"

### 6. REVIEWS SECTIE

**Titel**: "Wat andere bedrijven zeggen"

**3-4 Reviews uitlichten**:

> "Perfect georganiseerd bedrijfsuitje. De boot was prachtig, het eten heerlijk en het personeel enorm vriendelijk. Een aanrader!"
> **— Anoniem**, Marketing Manager, 5-sterren review

> "We hebben met 45 collega's een geweldige avond gehad. Het walking dinner was perfect voor netwerken onderweg."
> **— HRH boeking**, 5-sterren review

**Trust metrics**:
- 9.07 totaalscore
- 9.18 reserveringsproces
- 9.38 service aan boord
- 3.796 reviews

### 7. GALERIJ SECTIE

**Titel**: "Impressies van bedrijfsuitjes"

**Masonry grid** met foto's van:
- Bedrijfsborrel aan boord
- Diner setting op salonboot
- BBQ op groot dek
- Vergadering aan tafel
- Netwerkborrel bij zonsondergang
- Jubileum viering

**Foto's gebruiken van huidige site**:
- https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg
- https://production-bha.b-cdn.net//uploads/page_section/photo/1116/slideshow_2x_Borrel_op_boot_in_Amsterdam.jpg
- https://production-bha.b-cdn.net//uploads/page_section/photo/1142/slideshow_2x_Buffet_op_een_boot_in_Amsterdam.jpg
- https://production-bha.b-cdn.net//uploads/page_section/photo/1158/slideshow_2x_11406636_832146906841301_831726696146516709_n.png
- Boten foto's van homepage

### 8. CONTACT SECTIE

**Titel**: "Vraag een vrijblijvende offerte aan"

**2-kolom layout**:

**Links - Formulier**:
- Naam bedrijf*
- Aantal personen*
- Gewenste datum*
- Type arrangement (dropdown)
- Naam contactpersoon*
- Email*
- Telefoon
- Opmerkingen/verzoeken
- Checkbox: "Bel mij terug"
- Grote CTA: "Offerte aanvragen" (goud accent)

**Rechts - Direct contact**:
```
Direct contact?

📞 (020) 624 76 35
✉️ info@amsterdam-boats.com

Werkdagen: 09:00 - 17:30
Binnen 2 uur reactie
```

### 9. FAQ SECTIE (optioneel)

**3-5 veelgestelde vragen**:
- Kan ik het arrangement nog wijzigen?
- Welke opstaplocaties zijn er?
- Zijn er opties voor dieetwensen?
- Wat gebeurt er bij slecht weer?
- Hoe ver van tevoren moet ik boeken?

### 10. FOOTER

**Content**:
- Logo (lange versie)
- Adres: Amsterdam
- Telefoon: (020) 624 76 35
- Email: info@amsterdam-boats.com
- Links: Boten | Gelegenheden | Contact | Reviews
- Social icons (Facebook, Instagram, LinkedIn)
- Copyright: © 2024 Boot Huren Amsterdam
- Legal: Privacy | Algemene voorwaarden

## INTERACTIE & FUNCTIONALITEIT

### Navigatie
- Smooth scroll naar secties
- Active state in menu bij scroll
- Mobiel: hamburger met smooth open/close

### Booking Widget
- Datum niet selecteerbaar in verleden
- Minimaal 3 dagen van tevoren
- Validatie op aantal personen (2-200)
- Submit = scroll naar contact sectie + voorinvulling

### Formulier
- Client-side validatie
- Success state: bedankt bericht + verwachte reactietijd
- Foutmeldingen: duidelijk en vriendelijk

### Responsive Breakpoints
- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobiel: < 768px

## SEO & META

### Title
Bedrijfsuitje Amsterdam? Boot huren met catering | 2-200 personen

### Meta Description
Organiseer het perfecte bedrijfsuitje op de Amsterdamse grachten. 38 luxe boten, 10 arrangementen, 2-200 personen. Offerte aanvragen →

### OG Tags
- Title: Bedrijfsuitje op de Amsterdamse grachten
- Description: Van borrel tot diner - 38 boten, professionele service
- Image: Hero afbeelding

## KWALITEITSEISEN

- **Performance**: Lighthouse 90+ op alle metrics
- **Mobile-first**: Perfect werken op smartphone
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Schema.org LocalBusiness markup
- **Build**: `npm run build` foutloos
- **Deploy**: Klaar voor Vercel/Netlify

## CONTACT GEGEVENS (constants.ts)

```typescript
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
  { id: "diner", name: "Diner à la carte", price: "€89", badge: "Meest populair" },
  { id: "buffet", name: "Buffet", price: "€75", badge: "Flexibel" },
  { id: "walking", name: "Walking Dinner", price: "€95", badge: "Netwerken" },
  { id: "bbq", name: "Barbecue", price: "€69", badge: "Zomer favoriet" },
  { id: "borrel", name: "Borrel", price: "€45", badge: "Snel geboekt" },
  { id: "vergadering", name: "Vergadering", price: "€55", badge: "Zakelijk" },
  { id: "netwerk", name: "Netwerkevent", price: "€85", badge: "" },
  { id: "relatie", name: "Relatie Event", price: "€95", badge: "Luxe" },
  { id: "jubileum", name: "Jubileum", price: "€79", badge: "" },
  { id: "highfive", name: "High Five Moment", price: "Op aanvraag", badge: "Maatwerk" }
];
```

## BELANGRIJK

- Gebruik originele afbeeldingen van de huidige site
- Geen placeholder teksten - alle copy moet echt zijn
- Focus op conversie: elke sectie moet bijdragen aan offerte-aanvragen
- Behoud de luxe uitstraling van Boot Huren Amsterdam
- De pagina is specifiek voor bedrijfsuitjes - niet generiek
