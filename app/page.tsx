import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoImg from "./assets/images/logo.png";

const siteUrl = "https://www.htmlmaps.com";

export const metadata: Metadata = {
  title: "HTMLMaps | Clickable HTML Maps, Floor Plans, and Visual Layouts",
  description:
    "Create clickable HTML maps, SVG maps, floor plans, image hotspots, seating charts, venue layouts, campus maps, and interactive diagrams for websites.",
  keywords: [
    "HTML maps",
    "interactive map generator",
    "clickable map generator",
    "SVG map generator",
    "clickable SVG map",
    "clickable floor plan",
    "image hotspot generator",
    "interactive floor plan",
    "venue map builder",
    "campus map builder",
    "sales territory map",
    "website map embed",
    "interactive diagram builder",
    "product diagram builder",
    "real estate site plan",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "HTMLMaps | Clickable Maps and Visual Layouts for Websites",
    description:
      "Build clickable HTML/SVG maps, floor plans, site plans, venue maps, image hotspots, seating charts, and interactive visual embeds for websites.",
    url: siteUrl,
    siteName: "HTMLMaps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTMLMaps | Clickable Maps and Visual Layouts for Websites",
    description:
      "Create clickable maps, floor plans, image hotspots, and interactive visual layouts for websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const useCases = [
  {
    title: "Clickable SVG maps",
    text: "Create region-based maps where states, provinces, countries, districts, or custom areas can have their own colors, links, labels, and tooltip text.",
  },
  {
    title: "Interactive floor plans",
    text: "Turn a building layout, venue plan, apartment floor plan, or site plan into a clickable website embed with clear labels and helpful details.",
  },
  {
    title: "Venue and event maps",
    text: "Help visitors understand booths, rooms, entrances, stages, seating areas, sponsor zones, parking areas, or event sections from one visual layout.",
  },
  {
    title: "Campus and building maps",
    text: "Show departments, classrooms, offices, labs, facilities, entrances, and service areas in a simple map-style interface that works on a website.",
  },
  {
    title: "Sales territory maps",
    text: "Create visual sales coverage maps for regions, reps, service zones, franchise areas, or business territories without building a custom map app.",
  },
  {
    title: "Product and diagram hotspots",
    text: "Use hotspots to explain product parts, technical diagrams, infographics, process visuals, equipment layouts, or any image that needs clickable areas.",
  },
];

const plannedTools = [
  {
    title: "Interactive Map Generator",
    text: "Build clickable maps for websites with regions, labels, hover states, tooltips, and links.",
  },
  {
    title: "Clickable SVG Map Generator",
    text: "Customize SVG maps for countries, states, provinces, territories, and other region-based visuals.",
  },
  {
    title: "Image Hotspot Generator",
    text: "Upload an image and place clickable hotspots on diagrams, graphics, product images, or layouts.",
  },
  {
    title: "Floor Plan Builder",
    text: "Create clickable room, unit, office, booth, or building layouts from floor plans and site plans.",
  },
  {
    title: "Venue Map Builder",
    text: "Turn event spaces, halls, booths, sections, stages, and entrances into a website-ready visual map.",
  },
  {
    title: "Campus Map Builder",
    text: "Create simple interactive maps for schools, colleges, hospitals, offices, and multi-building locations.",
  },
  {
    title: "Sales Territory Map Builder",
    text: "Show service areas, sales regions, franchise zones, branch coverage, or rep ownership by territory.",
  },
  {
    title: "Product Diagram Builder",
    text: "Make product diagrams clickable so visitors can explore parts, features, specifications, or instructions.",
  },
];

const audiences = [
  {
    title: "Agencies and freelancers",
    text: "Create client-ready clickable maps, floor plans, diagrams, and website embeds without custom development for every project.",
  },
  {
    title: "Venues and event organizers",
    text: "Show booths, rooms, stages, entrances, seating areas, sponsor zones, parking areas, and visitor paths in one interactive layout.",
  },
  {
    title: "Real estate teams",
    text: "Publish clickable site plans, buildings, units, lots, amenities, and property layouts for buyers, renters, or internal teams.",
  },
  {
    title: "Schools and campuses",
    text: "Help students, visitors, parents, staff, and guests find departments, buildings, classrooms, entrances, and services.",
  },
  {
    title: "Small businesses",
    text: "Display service areas, branch locations, territories, product diagrams, office layouts, or location-based information.",
  },
  {
    title: "Developers",
    text: "Use hosted embeds and clean HTML/SVG output instead of building custom map interactions from scratch.",
  },
];

const differences = [
  {
    title: "Clickable visuals",
    text: "Focused on clickable maps, layouts, floor plans, diagrams, and image hotspots.",
  },
  {
    title: "Website embeds",
    text: "Designed around simple hosted embeds that can be placed into common website platforms.",
  },
  {
    title: "No GIS required",
    text: "Useful when you need clickable regions and labels, not advanced geographic mapping software.",
  },
  {
    title: "No custom JavaScript",
    text: "Built for users who want the result without hand-coding tooltips, links, regions, and hover states.",
  },
];

const platforms = [
  "WordPress",
  "Shopify",
  "Squarespace",
  "Wix",
  "Webflow",
  "Weebly",
  "Drupal",
  "Joomla",
  "Custom HTML",
];

const faq = [
  {
    question: "What is an HTML map?",
    answer:
      "An HTML map is a website-friendly interactive visual that can be embedded into a page. In the context of HTMLMaps, it means a clickable map, floor plan, diagram, or image hotspot layout built with web technologies such as HTML, SVG, CSS, and JavaScript.",
  },
  {
    question: "Is this only for geography maps?",
    answer:
      "No. Geography maps are one use case, but the same idea works for floor plans, seating charts, venue layouts, real estate site plans, campus maps, sales territories, event maps, and product diagrams.",
  },
  {
    question: "How would the embed work?",
    answer:
      "HTMLMaps is designed around hosted iframe embeds. A user creates a clickable visual, publishes it, and copies a small iframe snippet into their website. This keeps the embed simple and compatible with most platforms that allow custom HTML.",
  },
  {
    question:
      "Would this work with WordPress, Shopify, Wix, Squarespace, and Webflow?",
    answer:
      "The goal is to support common website platforms through standard iframe or custom HTML embed blocks. Platform-specific plugins or apps are not required for a basic embed-first version.",
  },
  {
    question: "Why not just use a normal map service?",
    answer:
      "Traditional map services are usually focused on geographic locations, pins, directions, and map tiles. HTMLMaps is aimed at clickable visual layouts, including region maps, floor plans, site plans, diagrams, and custom visuals where the user controls the areas, links, labels, and tooltips.",
  },
  {
    question: "Who is HTMLMaps for?",
    answer:
      "HTMLMaps is for small businesses, agencies, freelancers, schools, venues, real estate teams, event organizers, bloggers, and developers who need a simple clickable visual embed without building custom code from scratch.",
  },
  {
    question: "Can users upload their own floor plans or diagrams?",
    answer:
      "The planned workflow is to let users start with built-in map templates or upload their own image-based visuals, such as floor plans, venue layouts, site plans, campus maps, event maps, and product diagrams. Uploaded SVG support can come later because SVG uploads require stronger security controls.",
  },
  {
    question:
      "What makes HTMLMaps different from a general website widget tool?",
    answer:
      "HTMLMaps is focused on clickable visual layouts, not generic widgets. The goal is to solve a specific website problem: turning maps, plans, diagrams, and images into interactive embeds with clickable areas, tooltips, labels, and links.",
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
        "Clickable HTML maps, SVG maps, floor plans, image hotspots, seating charts, venue layouts, campus maps, and interactive diagrams for websites.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "HTMLMaps | Clickable HTML Maps, Floor Plans, and Visual Layouts",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      description:
        "Create clickable HTML maps, SVG maps, floor plans, image hotspots, seating charts, venue layouts, campus maps, and interactive diagrams for websites.",
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
        "A web-based builder for clickable maps, floor plans, image hotspots, seating charts, venue layouts, and interactive diagrams.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.map((item) => ({
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
              className="object-fit mr-2"
              aria-hidden="true"
            />
            <span className="text-slate-500 transition-colors">HTML</span>
            <span className="text-sky-600 transition-colors">Maps</span>
            <span className="text-sky-300 transition-colors group-hover:text-sky-500">
              .com
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link className="cursor-pointer hover:text-sky-700" href="#tools">
              Tools
            </Link>
            <Link
              className="cursor-pointer hover:text-sky-700"
              href="#use-cases"
            >
              Use cases
            </Link>
            <Link
              className="cursor-pointer hover:text-sky-700"
              href="#how-it-works"
            >
              How it works
            </Link>
            <Link
              className="cursor-pointer hover:text-sky-700"
              href="#compatibility"
            >
              Compatibility
            </Link>
            <Link className="cursor-pointer hover:text-sky-700" href="#faq">
              FAQ
            </Link>
          </nav>
        </div>
      </section>

      <section id="top" className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Clickable maps, floor plans, and visual website embeds
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-sky-700 sm:text-5xl lg:text-6xl">
              Create clickable maps and floor plans for any website.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Build interactive HTML maps, SVG maps, image hotspots, venue
              layouts, seating charts, campus maps, and real estate site plans
              without writing custom code. Add clickable areas, tooltips, links,
              colors, and labels, then publish a responsive embed for your
              website.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              HTMLMaps is designed for website owners, agencies, schools,
              venues, real estate teams, event organizers, and developers who
              need a clean clickable visual embed without GIS software,
              WordPress-only plugins, or a bloated design platform.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#concept-demo"
                className="flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                See how it works
              </Link>
              <Link
                href="#tools"
                className="flex cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-sky-300 hover:bg-sky-50"
              >
                View planned tools
              </Link>
            </div>
          </div>

          <div
            id="concept-demo"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl"
          >
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-sky-700">
                    Clickable layout preview
                  </h2>
                  <p className="text-sm text-slate-600">
                    Add links, labels, and tooltips to any map or visual layout
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Website-ready
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-3 text-sm font-semibold text-slate-900">
                    Selected area
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <label className="mb-1 block font-medium text-slate-700">
                        Label
                      </label>
                      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
                        North Wing
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block font-medium text-slate-700">
                        Tooltip
                      </label>
                      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
                        Meeting rooms, check-in desk, and visitor information.
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block font-medium text-slate-700">
                        Link
                      </label>
                      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
                        /north-wing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="grid h-72 grid-cols-3 gap-3">
                    <div className="col-span-2 rounded-2xl border-2 border-sky-300 bg-sky-50 p-4">
                      <p className="font-semibold text-sky-800">North Wing</p>
                      <p className="mt-2 text-sm text-sky-700">
                        Clickable area with tooltip and link
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                      <p className="font-semibold text-slate-700">Lobby</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                      <p className="font-semibold text-slate-700">Room A</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                      <p className="font-semibold text-slate-700">Room B</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                      <p className="font-semibold text-slate-700">Exit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-slate-950 p-4 text-sm text-slate-100">
                <code>{`<iframe src="https://htmlmaps.com/embed/your-map" width="100%" height="500" loading="lazy"></iframe>`}</code>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="problem"
        className="relative overflow-hidden border-y border-slate-200 bg-slate-50"
      >
        <div
          className="pointer-events-none absolute -right-24 bottom-0 hidden h-80 w-80 rounded-full border-[28px] border-sky-100 opacity-70 lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-12 hidden h-40 w-40 rounded-full bg-sky-100 opacity-60 lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-20 bottom-24 hidden h-5 w-5 rounded-full bg-sky-200 opacity-80 lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-28 bottom-32 hidden h-12 w-12 rounded-full border-8 border-white bg-sky-100 shadow-sm lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            Most websites still handle maps and floor plans as flat images.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              A static image can show a layout, but it cannot explain much.
              Visitors cannot click a room, open a location page, view a
              tooltip, check a section, or move from a visual plan to the next
              step. That creates a problem for venues, schools, real estate
              teams, event organizers, agencies, and businesses that need more
              than a plain image but do not need a full GIS platform.
            </p>
            <p>
              These jobs are not always a good fit for traditional map software.
              A geographic map is useful when the user needs addresses,
              directions, roads, and pins. But many website visuals are not
              about roads or coordinates. They are about regions, sections,
              rooms, labels, links, and explanations. A simple SVG or image can
              often do the job better, but making that image interactive usually
              requires custom code.
            </p>
            <p>
              HTMLMaps is designed around that gap. The core idea is to make
              clickable visual embeds easier for non-technical users while still
              producing output that feels practical for agencies, developers,
              and small businesses.
            </p>
          </div>
        </div>
      </section>

      <section id="tools" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Planned HTMLMaps tools
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The first version should focus on the highest-intent use cases:
              interactive maps, clickable SVG maps, image hotspots, and floor
              plan embeds. From there, the same editor model can support venue
              maps, campus maps, sales territory maps, real estate site plans,
              and product diagrams.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {plannedTools.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
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

      <section id="use-cases" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Target use cases
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              HTMLMaps should not be limited to one type of map. The strongest
              version supports a family of related visual tools: maps, plans,
              layouts, diagrams, and hotspots. The connection between them is
              simple: each one lets a website visitor click or tap part of a
              visual and get more information.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
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

      <section id="audience" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              Who HTMLMaps is for
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The strongest users are people who need a visual layout on a real
              website, not casual users looking for a one-off image. HTMLMaps is
              aimed at practical website projects where clickable sections,
              tooltips, and links make the visual more useful.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
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

      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            How HTMLMaps works
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-700">Step 1</p>
              <h3 className="mt-2 text-xl font-bold text-sky-700">
                Choose or upload
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Start from a built-in map template such as a US, Canada, or
                world map, or upload a visual like a floor plan, venue layout,
                site plan, diagram, or event map.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-700">Step 2</p>
              <h3 className="mt-2 text-xl font-bold text-sky-700">
                Add clickable areas
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Select regions, place hotspots, add labels, write tooltip text,
                assign links, choose colors, and preview how the visual behaves
                on desktop and mobile.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-700">Step 3</p>
              <h3 className="mt-2 text-xl font-bold text-sky-700">
                Publish the embed
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Generate a hosted iframe embed that can be copied into a
                website. The embed is intended to stay isolated from the host
                site so styling conflicts are minimized.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-700">Step 4</p>
              <h3 className="mt-2 text-xl font-bold text-sky-700">
                Edit later
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                A private edit link would let users return to the project
                without needing an account in the first version. Paid unlocks
                could remove branding permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-sky-700">
              How HTMLMaps is different
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              HTMLMaps is not meant to replace full mapping software, route
              planners, satellite maps, or advanced GIS tools. It is focused on
              a simpler website problem: making visual layouts clickable,
              informative, and easy to embed.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
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

      <section
        id="compatibility"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            Built around simple website compatibility
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              The lowest-friction version of HTMLMaps should use hosted iframe
              embeds. That approach avoids the need to build separate apps or
              plugins for every website platform at the start. If a platform
              allows custom HTML or iframe embeds, the same basic embed format
              can usually work.
            </p>
            <p>
              HTMLMaps is designed to work with common website platforms through
              standard embed code, including WordPress, Shopify, Squarespace,
              Wix, Webflow, Weebly, Drupal, Joomla, static HTML, and custom
              websites. A standard embed-first approach keeps the first version
              focused while still making the output useful across many site
              builders and CMS platforms.
            </p>
            <p>
              A WordPress shortcode or block plugin could be added later as a
              thin wrapper around the hosted embed. That would improve
              discoverability for WordPress users without duplicating the entire
              editor inside WordPress.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm"
              >
                {platform}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Platform names are trademarks of their respective owners.
            Compatibility does not imply endorsement, partnership, or
            affiliation.
          </p>
        </div>
      </section>

      <section id="validation" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            What this landing page is testing
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              This page is meant to test whether people understand and care
              about the idea: clickable website-ready maps and visual layouts
              without custom development work. The strongest signals would be
              visitors spending time on the page, clicking use-case sections,
              searching for specific tools, and returning for related pages such
              as floor plan builders, image hotspot generators, or SVG map
              tools.
            </p>
            <p>
              If demand is real, the first build should stay narrow. A practical
              MVP would include a few built-in map templates, an image hotspot
              builder, hosted iframe publishing, private edit links, and a clear
              free-to-paid model. The product does not need a huge asset library
              at launch because users can upload their own visual layouts for
              many use cases.
            </p>
          </div>
        </div>
      </section>

      <section id="beta" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Early access validation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            What should HTMLMaps build first?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700">
            The first version should focus on the use cases people actually
            need. The strongest early demand will likely come from clickable
            maps, image hotspots, floor plans, and website embeds, but the best
            signal is which specific tool visitors ask for first.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <h3 className="text-xl font-bold text-sky-700">Map templates</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Interactive US maps, Canada maps, world maps, clickable SVG
                maps, and territory maps.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <h3 className="text-xl font-bold text-sky-700">
                Uploaded visuals
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Image hotspots for floor plans, venue layouts, real estate site
                plans, event maps, and product diagrams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <h3 className="text-xl font-bold text-sky-700">Website embeds</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Hosted iframe embeds that work across common website builders,
                CMS platforms, and custom HTML sites.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="#top"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Review the concept again
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-sky-700">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50">
            {faq.map((item) => (
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
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-sky-300">
            A focused tool for clickable maps and visual embeds.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            HTMLMaps is best positioned as a practical website utility: not a
            general design platform, not a full GIS product, and not a generic
            widget library. The clearest opportunity is helping people turn
            maps, floor plans, site plans, venue layouts, seating charts,
            diagrams, and images into clickable embeds.
          </p>
          <div className="mt-8">
            <Link
              href="#top"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
            >
              Back to top
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
