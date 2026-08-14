import type { ReactNode } from "react";

export function PageHero({
  title,
  images,
  eager = false,
  children,
}: {
  title: ReactNode;
  images: string[];
  eager?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden sm:min-h-[78vh]">
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            loading={eager ? "eager" : "lazy"}
            className="size-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-ink/45" />
      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        <h1 className="font-display text-4xl leading-tight text-white uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="rule-brand mx-auto mt-6 w-full max-w-3xl" />
        {children}
      </div>
    </section>
  );
}