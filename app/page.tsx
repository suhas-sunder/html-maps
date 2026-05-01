import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoImg from "./assets/images/logo.png";
import InterestForm from "./components/InterestForm";

const siteUrl = "https://www.htmlmaps.com";

export const metadata: Metadata = {
  title:
    "HTMLMaps | Interactive Site Plans, Event Maps, Floor Plans, and Visual Embeds",
  description:
    "Request early access to HTMLMaps, a planned tool for turning site plans, event maps, floor plans, product diagrams, SVG maps, and business visuals into interactive website embeds and reusable export assets.",
  keywords: [
    "interactive site plan builder",
    "interactive floor plan builder",
    "event map builder",
    "venue map builder",
    "image hotspot generator",
    "clickable map generator",
    "SVG map generator",
    "website map embed",
    "interactive visual embed",
    "real estate site plan map",
    "event floor plan software",
    "product diagram hotspot",
    "interactive timeline widget",
    "HTML maps",
    "interactive business visuals",
    "visual embed builder",
    "clickable floor plan",
    "interactive product diagram",
    "website visual widget",
    "interactive site map",
    "floor plan hotspot tool",
    "clickable event map",
    "interactive venue map",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "HTMLMaps | Interactive Website Visuals and Reusable Export Assets",
    description:
      "Turn site plans, event maps, floor plans, diagrams, image hotspots, and SVG maps into interactive website embeds and reusable business assets.",
    url: siteUrl,
    siteName: "HTMLMaps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTMLMaps | Interactive Website Visuals and Reusable Export Assets",
    description:
      "Clickable site plans, event maps, floor plans, diagrams, image hotspots, SVG maps, and export-ready business visuals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroBenefits = [
  "Clickable website embeds",
  "Image and PDF export packs",
  "Social, ad, and video-ready assets",
];

const visualTypes = [
  "Site plans",
  "Event maps",
  "Floor plans",
  "Product diagrams",
  "SVG maps",
  "Venue layouts",
];

const painPoints = [
  {
    title: "Flat images make visitors work too hard",
    text: "A static image can show a layout, but it cannot help someone click a unit, inspect a booth, view a room detail, compare sections, or move straight to a booking, inquiry, listing, or sales page.",
  },
  {
    title: "One visual gets rebuilt too many times",
    text: "The same map, plan, or diagram often has to be remade for the website, proposal, PDF, email, social post, ad, and presentation. That wastes time and creates inconsistent versions.",
  },
  {
    title: "Existing tools usually solve only one piece",
    text: "Design platforms are good at graphics. Hotspot tools are good at clickable areas. Animation tools are good at motion. HTMLMaps is being shaped around the full business workflow.",
  },
];

const coreUseCases = [
  {
    title: "Property site plans",
    text: "Turn site plans into clickable sales and leasing tools with units, lots, buildings, amenities, entrances, parking, availability states, and links to next steps.",
    examples: ["Apartment communities", "Builders", "Commercial leasing"],
  },
  {
    title: "Event and venue maps",
    text: "Make booth maps, sponsor zones, room layouts, seating sections, stages, entrances, vendor areas, and attendee paths easier to explore online.",
    examples: ["Trade shows", "Conferences", "Venues"],
  },
  {
    title: "Floor plans and facility maps",
    text: "Help visitors understand rooms, departments, office areas, classroom layouts, clinic areas, service counters, and campus buildings without a custom app.",
    examples: ["Schools", "Offices", "Clinics"],
  },
  {
    title: "Product diagrams and explainers",
    text: "Add clickable product parts, feature callouts, process steps, equipment notes, comparison points, and explainer sections to visuals people already use.",
    examples: ["Product pages", "B2B marketing", "Support content"],
  },
];

const workflowSteps = [
  {
    title: "Start with one important visual",
    text: "Use a site plan, floor plan, event layout, product diagram, SVG map, or other visual your business already depends on.",
  },
  {
    title: "Make the right areas interactive",
    text: "Add clickable regions, labels, tooltips, links, simple states, and callouts so visitors can explore the visual instead of guessing what matters.",
  },
  {
    title: "Put it on your website",
    text: "Use the interactive version as a website embed so the visual can support inquiries, bookings, leasing, navigation, product education, or client decisions.",
  },
  {
    title: "Reuse the same asset elsewhere",
    text: "Create matching assets for PDFs, proposals, listings, email, social posts, ad sizes, presentations, and short motion content from the same source visual.",
  },
];

const differentiators = [
  {
    title: "Different from design platforms",
    text: "If you only need a static graphic, a design tool is enough. HTMLMaps is for visuals that need to function on a website and stay useful across sales and marketing channels.",
  },
  {
    title: "Different from basic hotspot tools",
    text: "A hotspot tool can make an image clickable. HTMLMaps is being built around a bigger job: publish the visual, reuse it, export it, and keep the business asset consistent.",
  },
  {
    title: "Different from GIS software",
    text: "This is not meant for roads, routing, satellite layers, or geographic analysis. It is for visual layouts, areas, sections, rooms, booths, units, diagrams, and business context.",
  },
  {
    title: "Different from custom development",
    text: "Custom code can solve anything, but many teams do not need a full build for every clickable map, site plan, venue layout, or diagram they want to publish.",
  },
];

const outputCards = [
  {
    title: "Website embeds",
    text: "Put a clickable version of your visual on your website so visitors can explore areas, read details, follow links, and move to the next step.",
  },
  {
    title: "Image exports",
    text: "Create PNG or JPG versions for listings, emails, thumbnails, client sharing, social graphics, and simple promotional use.",
  },
  {
    title: "PDF exports",
    text: "Generate clean PDF versions for brochures, attendee guides, sales handouts, sponsor decks, proposal packets, and printable materials.",
  },
  {
    title: "Custom sizes",
    text: "Resize the same visual for website sections, presentation slides, listing images, social posts, display placements, and ad formats.",
  },
  {
    title: "Animated assets",
    text: "Create short motion assets for walkthroughs, promos, explainers, social posts, and visual storytelling without rebuilding the concept from scratch.",
  },
  {
    title: "Client and team workflow",
    text: "Keep repeat work organized with review links, reusable versions, brand presets, workspace tools, and white-label options as the product grows.",
  },
];

const audienceCards = [
  {
    title: "Real estate and property teams",
    text: "Use interactive site plans, property maps, unit maps, amenity layouts, and export assets to support leasing, listings, and buyer or renter decisions.",
  },
  {
    title: "Events, venues, and expos",
    text: "Use one event map across a website, attendee guide, sponsor deck, signage export, booth sales flow, and promo material.",
  },
  {
    title: "Schools, campuses, and facilities",
    text: "Turn buildings, departments, rooms, visitor areas, and service locations into clickable guides for students, staff, guests, and customers.",
  },
  {
    title: "Agencies, freelancers, and website owners",
    text: "Create client-ready interactive visual sections without rebuilding the same map, diagram, or layout manually for every channel.",
  },
];

const pricingSignals = [
  {
    name: "Free branded test",
    price: "$0",
    text: "Try a limited branded version when the first version is available.",
  },
  {
    name: "Single project unlock",
    price: "$19-$49",
    text: "Remove branding and unlock basic exports for one visual project.",
  },
  {
    name: "Pro",
    price: "$29/month",
    text: "Create multiple projects with hosted embeds, custom sizing, and stronger export options.",
  },
  {
    name: "Business / agency",
    price: "$79+/month",
    text: "Use workspaces, client review, brand presets, advanced exports, white-label options, and repeat-use features.",
  },
];

const fitQuestions = [
  "You already have a site plan, event map, floor plan, SVG map, or diagram that matters to your business.",
  "The visual would be more useful if visitors could click areas, read details, open links, or move to a next step.",
  "You need the same visual on a website, in a PDF, in a proposal, in social posts, in ads, or in short video assets.",
  "You would pay to avoid rebuilding the same visual across multiple tools or asking a developer to recreate it each time.",
];

const faqs = [
  {
    question: "Is HTMLMaps available today?",
    answer:
      "HTMLMaps is not fully launched yet. This page is for early access requests and product validation. The goal is to identify the most valuable first use cases before building the full editor.",
  },
  {
    question: "Why should I contact HTMLMaps if other tools already exist?",
    answer:
      "Existing tools usually solve one slice of the job. Design platforms create visuals, hotspot tools add clickable points, and export tools create separate files. HTMLMaps is being built around the full workflow: one source visual that can become an interactive website embed and reusable business asset.",
  },
  {
    question: "What makes this different from a general design platform?",
    answer:
      "General design platforms are strong for static graphics, social posts, and simple videos. HTMLMaps is aimed at business visuals that need clickable areas, website embeds, reusable exports, and a workflow built around maps, plans, layouts, and diagrams.",
  },
  {
    question: "What makes this different from a basic image hotspot tool?",
    answer:
      "A basic hotspot tool can make an image clickable. HTMLMaps is focused on the larger business need: turning a practical visual into something that works on the website and can also support PDFs, proposals, ads, social posts, client materials, and simple motion assets.",
  },
  {
    question: "Will I be charged after submitting the form?",
    answer:
      "No. The form does not collect payment information. It only asks whether the possible pricing would make sense for your use case.",
  },
  {
    question: "Why show pricing before launch?",
    answer:
      "Pricing is shown because interest after seeing a realistic price is more useful than a generic waitlist signup. If the product would only be useful for free, that is important to know before building it.",
  },
  {
    question: "Can I upload my floor plan, site plan, or event map here?",
    answer:
      "No. This page does not accept file uploads. The form only collects written details about your use case, business type, needed outputs, and email address.",
  },
  {
    question: "Can I include links in the form?",
    answer:
      "No. Links are blocked to reduce spam and security risk. Please describe your use case without pasting URLs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "HTMLMaps",
      url: siteUrl,
      description:
        "HTMLMaps is a planned tool for turning business visuals into interactive website embeds and reusable export assets.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "HTMLMaps | Interactive Site Plans, Event Maps, Floor Plans, and Visual Embeds",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      description:
        "Request early access to HTMLMaps, a planned tool for making site plans, event maps, floor plans, diagrams, and business visuals clickable, embeddable, and reusable.",
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "HTMLMaps",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "A planned web-based builder for clickable site plans, event maps, floor plans, image hotspots, visual embeds, and export-ready business visuals.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "79",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="group flex cursor-pointer items-center text-xl font-bold tracking-tight"
            aria-label="HTMLMaps home"
          >
            <Image
              src={logoImg}
              alt="logo image for HTMLMaps.com, a blue location pin with a white center and a small dot in the middle"
              width={42}
              height={42}
              className="mr-2 object-contain"
              aria-hidden="true"
              priority
            />
            <span className="text-slate-500 transition-colors">HTML</span>
            <span className="text-sky-600 transition-colors">Maps</span>
            <span className="text-sky-300 transition-colors group-hover:text-sky-500">
              .com
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link
              className="cursor-pointer transition hover:text-sky-700"
              href="#pain"
            >
              Pain points
            </Link>
            <Link
              className="cursor-pointer transition hover:text-sky-700"
              href="#use-cases"
            >
              Use cases
            </Link>
            <Link
              className="cursor-pointer transition hover:text-sky-700"
              href="#different"
            >
              Why different
            </Link>
            <Link
              className="cursor-pointer transition hover:text-sky-700"
              href="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="cursor-pointer transition hover:text-sky-700"
              href="#interest"
            >
              Early access
            </Link>
          </nav>
        </div>
      </section>

      <section id="top" className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Early access for interactive business visuals
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-700 sm:text-5xl lg:text-6xl">
              Turn one important visual into a website embed, export pack, and
              marketing asset.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              HTMLMaps is being built for businesses that rely on site plans,
              event maps, floor plans, product diagrams, SVG maps, and other
              visual layouts. Make the visual clickable on your website, then
              reuse the same source across PDFs, proposals, social posts, ads,
              and short animated assets.
            </p>

            <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-3">
              {heroBenefits.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  {point}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              The full editor is not live yet. If this would solve a real
              business problem, review the possible pricing and tell us what you
              need.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                Check possible pricing
              </Link>
              <Link
                href="#interest"
                className="flex cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-sky-300 hover:bg-sky-50"
              >
                Request early access
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                Built for practical visual assets
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-sky-700">
                If your visual helps people decide, book, lease, buy, attend, or
                understand, it should do more than sit there.
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {visualTypes.map((visual) => (
                  <span
                    key={visual}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
                  >
                    {visual}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {workflowSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-sky-700">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                Early access request only. No payment or file upload is
                collected on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pain" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              The pain point is not making another pretty graphic.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The real problem is that important business visuals often need to
              guide action. A flat image can show information, but it usually
              cannot help the visitor explore, compare, click through, or take
              the next step.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {painPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-sky-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Use cases where the visual affects real business outcomes
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              HTMLMaps is for visuals that support sales, leasing, bookings,
              navigation, event operations, product education, or client
              deliverables. It is not aimed at casual one-off graphics.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreUseCases.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-sky-700">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-sky-100 bg-white px-3 py-1 text-xs font-semibold text-sky-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="different" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700">
                Why contact HTMLMaps if other tools exist?
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-sky-700">
                Because the problem is the workflow, not just the graphic.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                The market already has design platforms, hotspot widgets, map
                tools, animation tools, and export tools. HTMLMaps is being
                built for the gap between them: one business visual that can
                work on your website and be reused across the rest of your sales
                and marketing materials.
              </p>
              <div className="mt-6">
                <Link
                  href="#interest"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
                >
                  Tell us if this solves your workflow
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-sky-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="outputs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Use the same visual across your website and marketing.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              A site plan, event map, floor plan, or product diagram should not
              have to be rebuilt every time you need it somewhere else. HTMLMaps
              is being built to help one source visual become an interactive
              website embed and matching assets for sales, events, listings,
              proposals, ads, social posts, and simple motion content.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outputCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-sky-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Best-fit users
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              HTMLMaps is most likely to be useful when a visual directly
              supports a decision, sale, booking, visit, proposal, event, or
              client deliverable.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-sky-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Possible early access pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Would this still be useful at these prices?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              No payment is collected here. These numbers are included because
              real interest only matters if the product would still be worth
              paying for.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricingSignals.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-sky-700">{item.name}</h3>
                <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  {item.price}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            These are not final prices and this is not a checkout. Your response
            helps decide whether HTMLMaps should launch, which users to serve
            first, and what features matter enough to build.
          </div>

          <div className="mt-8">
            <Link
              href="#interest"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              I would consider using this
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            Should you request early access?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            You are a better fit if at least one of these is true:
          </p>

          <div className="mt-7 grid gap-4">
            {fitQuestions.map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-base font-medium leading-8 text-slate-800 shadow-sm"
              >
                {question}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="#interest"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Share your use case
            </Link>
          </div>
        </div>
      </section>

      <section id="interest" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Request early access
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Tell us what you actually need.
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                If this could solve a real problem for your business, leave your
                email and a short explanation. Your response helps decide launch
                timing, first features, pricing, and whether the first version
                should focus on site plans, event maps, floor plans, diagrams,
                exports, or another use case.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-sky-700">
                  Useful details to include
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                  <li>What type of business or organization you run.</li>
                  <li>What kind of visual you need to make interactive.</li>
                  <li>
                    Where it would be used: website, proposal, ad, PDF, social,
                    event guide, listing, or sales material.
                  </li>
                  <li>
                    Which outputs matter most: embed, image, PDF, ad size,
                    social size, animation, or workspace.
                  </li>
                  <li>What would make it worth paying for.</li>
                </ul>
              </div>

              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                Do not include links. Do not try to upload files. This form only
                accepts written details and an email address.
              </p>
            </div>
          </div>

          <InterestForm />
        </div>
      </section>

      <section id="faq" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            Frequently asked questions
          </h2>

          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-sky-700">
                  {item.question}
                  <span className="text-slate-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-sky-300">
            Have a visual that should do more than sit on a page?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            If your site plan, event map, floor plan, diagram, or visual layout
            could help customers decide, inquire, book, lease, attend, or
            understand faster, HTMLMaps wants to hear what you need.
          </p>
          <div className="mt-8">
            <Link
              href="#interest"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
