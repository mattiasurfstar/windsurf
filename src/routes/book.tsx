import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import bookHero from "@/assets/book-hero.webp";
import campWinterAsset from "@/assets/IMG_0584.webp";
import campChristmasAsset from "@/assets/IMG_0584_4.webp";
import campNewYearAsset from "@/assets/IMG_0589.webp";
import campJanuaryAsset from "@/assets/IMG_0584_3.webp";

const campWinter = campWinterAsset;
const campChristmas = campChristmasAsset;
const campNewYear = campNewYearAsset;
const campJanuary = campJanuaryAsset;

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Now — Winter Wing Foil Camps | SurfStar" },
      {
        name: "description",
        content:
          "Early Winter Week, Christmas Camp, New Year Camp and January Wing Week aboard our Lagoon catamaran. Eight spots a week, early booking discounts available.",
      },
      { property: "og:title", content: "Book Now — Winter Wing Foil Camps | SurfStar" },
      {
        property: "og:description",
        content: "Four winter wing foil weeks in the Canary Islands. Eight spots a week.",
      },
    ],
  }),
  component: Book,
});

const camps = [
  { name: "Early Winter Week", dates: "12/12 – 18/12", price: "€2,090", img: campWinter },
  { name: "Christmas Camp", dates: "21/12 – 27/12", price: "€2,190", img: campChristmas },
  { name: "New Year Camp", dates: "28/12 – 3/01", price: "€2,390", img: campNewYear },
  { name: "January Wing Week", dates: "5/01 – 11/01", price: "€1,990", img: campJanuary },
];

function Book() {
  return (
    <>
      <PageHero title="Book now" images={[bookHero]} eager />

      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
          {camps.map((c) => (
            <article key={c.name} className="text-center">
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <h2 className="mt-5 text-xl">{c.name}</h2>
              <p className="mt-1 text-lg opacity-80">{c.dates}</p>
              <p className="mt-2 font-display text-4xl text-white">{c.price}</p>
              <a
                href={`mailto:mattia.surfstar@gmail.com?subject=${encodeURIComponent(`Booking — ${c.name} (${c.dates})`)}`}
                className="mt-4 inline-block bg-ink px-6 py-2 font-display text-base tracking-wide text-brand uppercase"
              >
                Hold a spot
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl text-brand sm:text-3xl">Early booking</h2>
          <ul className="mt-6 space-y-3 text-lg">
            <li>
              Book by Friday 14/08/26 to receive a{" "}
              <strong className="text-destructive">15% discount</strong>
            </li>
            <li>
              Book by Friday 21/08/26 to receive a{" "}
              <strong className="text-destructive">10% discount</strong>
            </li>
          </ul>

          <h2 className="mt-14 text-2xl text-brand sm:text-3xl">Come aboard</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Eight spots a week. Message us to hold yours.</p>
            <p>
              Tell us which camp you're eyeing and we'll confirm availability directly, together
              with flights advice and everything you need to bring.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:mattia.surfstar@gmail.com"
              className="bg-brand px-8 py-3 font-display text-lg tracking-wide text-brand-foreground uppercase"
            >
              Write us an email
            </a>
            <a
              href="https://wa.me/393318307683"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-ink px-8 py-3 font-display text-lg tracking-wide text-ink uppercase"
            >
              WhatsApp the skipper
            </a>
          </div>
        </div>
      </section>
    </>
  );
}