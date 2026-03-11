# Boot Huren Amsterdam - Bedrijfsuitjes Landing Page

Een conversie-gerichte landingspagina voor bedrijfsuitjes op de Amsterdamse grachten.

## 🚀 Tech Stack

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Multi-page routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📋 Pagina's

### Hoofdpagina's
- **/** - Homepagina met hero, arrangementen, reviews, FAQ
- **/arrangementen** - Overzicht van alle 10 arrangementen
- **/arrangementen/:id** - Detailpagina per arrangement
- **/boten** - Overzicht van beschikbare boten
- **/reviews** - Klantreviews en beoordelingen
- **/over-ons** - Over Boot Huren Amsterdam
- **/contact** - Contactformulier en gegevens

### Arrangementen Detailpagina's
Elk arrangement heeft zijn eigen detailpagina:
- /arrangementen/diner
- /arrangementen/buffet
- /arrangementen/walking
- /arrangementen/bbq
- /arrangementen/borrel
- /arrangementen/vergadering
- /arrangementen/netwerk
- /arrangementen/relatie
- /arrangementen/jubileum
- /arrangementen/highfive

## 🎨 Brand Identiteit

- **Primair donkerblauw**: #1a365d
- **Primair lichtblauw**: #3182ce
- **Goud/crème**: #f6e05e
- **Wit**: #ffffff
- **Grijs licht**: #f7fafc
- **Tekst donker**: #1a202c
- **Tekst grijs**: #718096

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

De `dist/` folder is klaar voor deployment op Vercel, Netlify, of een andere static hosting service.

Voor Vercel/Railway met React Router SPA, zorg ervoor dat je een `_redirects` of `vercel.json` bestand hebt:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## ✅ Features

- [x] Multi-page React applicatie met React Router
- [x] Detailpagina's voor alle 10 arrangementen
- [x] Responsief design (mobile-first)
- [x] React Router navigatie
- [x] Booking widget met validatie
- [x] Arrangement detail pagina's met rich content
- [x] Contact formulier met succes state
- [x] FAQ accordion
- [x] SEO vriendelijke meta tags
- [x] Breadcrumb navigatie op detailpagina's

## 📄 Licentie

© 2024 Boot Huren Amsterdam. Alle rechten voorbehouden.
