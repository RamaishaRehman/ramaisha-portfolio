import { marqueeWords } from "@/content/site";

function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div className={`flex shrink-0 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center">
            <span
              className={`display px-6 text-[clamp(2.2rem,6vw,5.5rem)] ${
                outline ? "text-outline" : i % 3 === 0 ? "text-lime" : i % 3 === 1 ? "text-cyan" : "text-blush-2"
              }`}
            >
              {w}
            </span>
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-paper/50 sm:h-7 sm:w-7">
              <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden py-4">
      <section aria-label="Specialties" className="relative -rotate-1 border-y border-line bg-ink-2 py-6 sm:py-8">
        <Row />
        <div className="h-3 sm:h-4" />
        <Row reverse outline />
      </section>
    </div>
  );
}
