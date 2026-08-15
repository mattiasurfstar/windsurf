import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroSplitAsset from "@/assets/IMG_0386.webp";
import boatAsset from "@/assets/IMG_0390.webp";
import cabin1Asset from "@/assets/IMG_0393.webp";
import cabin2Asset from "@/assets/IMG_0395.webp";
import layoutAsset from "@/assets/IMG_0396.webp";
import crewAsset from "@/assets/DSC_1240.webp";
import gearAsset from "@/assets/WhatsApp Image 2026-08-15 at 2.57.41 PM.jpeg";
import gearRackAsset from "@/assets/wait.webp";

const heroSplit = heroSplitAsset;
const boat = boatAsset;
const crew = crewAsset;
const gear = gearAsset;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SurfStar — Catamaran & Wing Foil Experience, Canary Islands" },
      {
        name: "description",
        content:
          "Six nights aboard a Lagoon catamaran, all inclusive, all levels. Four hours of wingfoil coaching a day across the Canary Islands from Marina San Miguel, Tenerife.",
      },
      { property: "og:title", content: "Catamaran and Wing — SurfStar Experience" },
      {
        property: "og:description",
        content: "All-inclusive wing foil weeks aboard a Lagoon catamaran in the Canary Islands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageHero
        title={
          <>
            Catamaran and Wing —<br />
            SurfStar Experience
          </>
        }
        images={[heroSplit]}
        eager
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/book"
            className="bg-brand px-7 py-3 font-display text-lg tracking-wide text-brand-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            Book your week
          </Link>
          <Link
            to="/program"
            className="border-2 border-white px-7 py-3 font-display text-lg tracking-wide text-white uppercase transition-colors hover:bg-white/15"
          >
            See the program
          </Link>
        </div>
      </PageHero>

      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl">Experience</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed sm:text-xl">
            <p>
              Six nights aboard a Lagoon catamaran, <strong>ALL INCLUSIVE and for all levels</strong>
              , from beginner to advanced.
              <br />
              Four hours of wingfoil coaching a day, and the trade winds doing the rest — across the
              Canary Islands from <strong>MARINA SAN MIGUEL, Tenerife</strong>.
            </p>
            <p>
              Eight guests, one qualified skipper, one certified wingfoil instructor, and an onboard
              hostess, moving between anchorages for a week of full board, flying sessions, and long
              dinners under the stars.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-brand-foreground/25 pt-8 sm:grid-cols-4">
            {[
              ["6", "nights aboard"],
              ["4h", "coaching a day"],
              ["8", "guests max"],
              ["3", "crew onboard"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-4xl">{n}</dt>
                <dd className="text-base opacity-80">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Split
        img={boat}
        alt="Lagoon catamaran moored in the marina"
        title="The boat"
        reverse={false}
      >
        <p>Lagoon catamaran with 4 cabins and 4 bathrooms.</p>
        <p>
          Spacious and comfortable sailing catamaran, ideal for families or groups: wide trampoline,
          shaded cockpit, big sunbathing deck and an easy platform to launch the boards straight
          into the water.
        </p>
      </Split>

      <section className="bg-background pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-lg text-brand">Cabins &amp; layout</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              [cabin1Asset, "Double cabin with towels ready"],
              [cabin2Asset, "Bright double cabin with sea view porthole"],
              [layoutAsset, "Catamaran layout plan with 4 cabins"],
            ].map(([src, alt]) => (
              <img
                key={src}
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-4/3 w-full bg-white object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <Split img={gear} alt="Gaastra and Tabou wing foil boards and rigs laid out" title="The gear" reverse>
        <p className="font-semibold">Gaastra &amp; Tabou Wing Foil 2026</p>
        <p>
          Ride the latest 2026 Gaastra &amp; Tabou wing foil equipment, designed for performance,
          stability, easy for BEGINNERS and with a performance set-up for ADVANCED. Suitable for
          both beginners and experienced riders, the setup includes wing, foil, board, leash, life
          jackets and helmet, offering excellent control and fun in a wide range of wind conditions.
        </p>
        <img
          src={gearRackAsset}
          alt="Full quiver of Gaastra Poison wings ready on the rack"
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      </Split>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <img
            src={crew}
            alt="The SurfStar crew on the beach"
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div>
            <h2 className="text-2xl text-brand sm:text-3xl">The crew</h2>
            <div className="mt-6 space-y-6">
              {[
                [
                  "Skipper",
                  "Young, friendly and experienced skipper with a valid Yacht Master License and multiple sailing certifications. Passionate about the sea, safety, and creating unforgettable experiences.",
                ],
                [
                  "Wing instructor",
                  "Professional wing foil instructor providing high-quality lessons for beginners and advanced riders, with a strong focus on safety and progression.",
                ],
                [
                  "Hostess",
                  "Warm, organized and attentive hostess, committed to creating a relaxed atmosphere and taking care of guests' needs.",
                ],
              ].map(([role, text]) => (
                <div key={role} className="border-l-4 border-brand pl-4">
                  <h3 className="text-lg">{role}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-center">
        <p className="px-6 text-lg text-white/80">
          For any information please contact us — details at the bottom of every page.
        </p>
        <Link
          to="/book"
          className="mt-6 inline-block bg-brand px-8 py-3 font-display text-lg tracking-wide text-brand-foreground uppercase"
        >
          Check the dates
        </Link>
      </section>
    </>
  );
}

function Split({
  img,
  alt,
  title,
  reverse,
  children,
}: {
  img: string;
  alt: string;
  title: string;
  reverse: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className={`aspect-4/3 w-full object-cover ${reverse ? "lg:order-2" : ""}`}
        />
        <div className={reverse ? "lg:order-1" : ""}>
          <h2 className="text-2xl text-brand sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
