# Zyntra - Real Estate, Reimagined

A world-class, full-spectrum real estate website for **Zyntra**, operating in
**Gurugram (Sector 14)** and **Indore (Vijay Nagar)**. Buy, sell, rent, and
co-develop premium property - advisory-grade, end to end.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and
**Tailwind CSS v4**. Designed to be deployed on **Vercel**.

## What the business does

| Service        | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Buy            | Curated, verified listings, off-market access, legal due diligence |
| Sell           | Data-backed valuation, marketing, qualified buyers, closing        |
| Rent           | Take on rent or give on rent - tenant/landlord matching + mgmt     |
| Joint Ventures | Landowner brings land, Zyntra brings capital/design/build/sales    |

## Key features

- Cinematic, responsive design system (deep forest green + warm gold + cream)
- 15+ page routes including per-property and per-article dynamic pages
- Interactive property explorer with search, city / type / listing filters, sort
- Six enquiry forms wired to **Web3Forms** (buyer, seller, rent, joint venture,
  contact, property-specific, newsletter) with success/error states + honeypot
- Insights / market-guides blog with full articles
- FAQ accordion with FAQ schema (JSON-LD), sitemap.xml, robots.txt, OpenGraph
- Floating WhatsApp CTA, scroll-reveal animations, accessible skip link
- SEO metadata on every route

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
  app/                 # routes (home, buy, sell, rent, joint-ventures,
                       #  properties, insights, about, locations, services,
                       #  faq, contact, privacy, terms, + dynamic [slug] pages)
  components/          # Navbar, Footer, Hero, PropertyCard, sections, icons
    forms/             # Web3Forms-powered enquiry forms + shared form toolkit
  lib/                 # site content, property listings, article content
```

## Configuration

- **Web3Forms access key** lives in `src/lib/site.ts` (`WEB3FORMS_ACCESS_KEY`).
  All form submissions are emailed to the address linked to that key. This is a
  public access key by design (Web3Forms), so it is safe in the client bundle.
- **Contact details, offices and copy** are centralised in `src/lib/site.ts`.
- **Property listings** live in `src/lib/properties.ts`.
- Remote images (Unsplash) are allow-listed in `next.config.ts`.

## Deploying to Vercel

1. Push this repo to GitHub (already configured).
2. Import the repository in Vercel.
3. Framework preset auto-detects **Next.js** - no extra config needed.
4. Connect your custom domain in Vercel's dashboard.

---

(c) Zyntra Real Estate. Two cities, one standard.
