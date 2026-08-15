import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import gearAsset from "@/assets/WhatsApp Image 2026-08-15 at 2.57.41 PM-2.jpeg";
import anchorage from "@/assets/anchorage.webp";
import bookHero from "@/assets/book-hero.webp";

const programHero = gearAsset;

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program — A Day on Board | SurfStar Wing Foil Weeks" },
      {
        name: "description",
        content:
          "Morning coaching, afternoon sessions, sunset yoga and dinner at anchor. See a full day on board and where we sail across the Canary Islands.",
      },
      { property: "og:title", content: "Program — A Day on Board | SurfStar" },
      {
        property: "og:description",
        content: "Two water sessions a day, full board, and anchorages between Tenerife and Gran Canaria.",
      },
    ],
  }),
  component: Program,
});

const day = [
  {
    part: "Morning",
    items: [
      "Breakfast — coffee, fresh fruit and pancakes, made by our hostess, bay view included.",
      "Two hours of coaching or an assisted session. We learn to fly, gybe, or sharpen the foiling you already have.",
    ],
  },
  {
    part: "Afternoon",
    items: [
      "Lunch — light lunch on the trampoline, then we move to a new sheltered cove.",
      "Second water session as the wind builds. Rest on deck if you'd rather watch.",
      "Sunset yoga — stretching and mobility on the trampoline or the beach, to reset the muscles.",
    ],
  },
  {
    part: "Night",
    items: ["Dinner under the stars — good food, soft music, good wine, at anchor among friends."],
  },
];

function Program() {
  return (
    <>
      <PageHero title="Program" images={[programHero]} eager />

      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr]">
          <img
            src={anchorage}
            alt="Catamaran anchored in a turquoise bay"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl">A day on board</h2>
            <div className="mt-6 space-y-8">
              {day.map((block) => (
                <div key={block.part}>
                  <h3 className="text-xl">{block.part}</h3>
                  <ul className="mt-3 space-y-3 text-lg leading-relaxed">
                    {block.items.map((i) => (
                      <li key={i} className="border-l-4 border-brand-foreground/40 pl-4">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand sm:text-3xl">Where</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                We sail the Canary Islands. Departure and arrival port from{" "}
                <strong className="text-foreground">MARINA SAN MIGUEL (Tenerife)</strong> — most
                weeks run between Tenerife and Gran Canaria, chasing the best wind and the calmest
                anchorages of the moment.
              </p>
              <p>
                The route is decided day by day with the skipper: reliable trade winds, flat water
                lagoons for beginners and open bays for those who already fly.
              </p>
            </div>
            <Link
              to="/book"
              className="mt-8 inline-block bg-brand px-8 py-3 font-display text-lg tracking-wide text-brand-foreground uppercase"
            >
              Book now
            </Link>
          </div>
          <img
            src={bookHero}
            alt="Canary Islands coastline"
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl text-brand sm:text-3xl">What's included</h2>
          <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              "6 nights in a private cabin",
              "Full board: breakfast, lunch, dinner",
              "4 hours of wingfoil coaching a day",
              "Gaastra & Tabou 2026 equipment",
              "Skipper, instructor and hostess",
              "Safety gear, helmet and life jacket",
            ].map((i) => (
              <li key={i} className="bg-background px-6 py-5 text-lg">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}