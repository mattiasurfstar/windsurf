export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-center text-base font-medium sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 sm:px-8">
        <a
          href="https://instagram.com/surfstar_portopollo"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          IG: surfstar_portopollo
        </a>
        <a href="mailto:mattia.surfstar@gmail.com" className="underline underline-offset-4">
          mattia.surfstar@gmail.com
        </a>
        <a href="tel:+393318307683" className="underline-offset-4 hover:underline">
          +39 331 830 7683 (skipper)
        </a>
        <a href="tel:+393932002219" className="underline-offset-4 hover:underline">
          +39 393 200 2219 (instructor)
        </a>
      </div>
    </footer>
  );
}