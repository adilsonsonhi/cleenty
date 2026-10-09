import {
  CarouselArrow,
  CarouselDots,
  CarouselItem,
  CarouselTrack,
} from "@/components/ui/carousel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { useSnapCarousel } from "@/hooks/use-snap-carousel";
import { useI18n } from "@/i18n/context";
import type { Dictionary } from "@/i18n/pt";
import { cn } from "@/lib/utils";

// Textos em src/i18n; aqui ficam apenas as fotografias (public/images).
const services: {
  key: keyof Dictionary["services"]["items"];
  image: { src: string; className?: string };
}[] = [
  {
    key: "domestic",
    image: {
      src: "/images/limpeza-domestica.jpg",
      className: "object-[50%_34%]",
    },
  },
  {
    key: "deep",
    image: {
      src: "/images/limpeza-profunda.jpg",
      className: "object-[50%_36%]",
    },
  },
  {
    key: "postConstruction",
    image: {
      src: "/images/limpeza-pos-obra.jpg",
      className: "object-[50%_67%]",
    },
  },
  {
    key: "laundry",
    image: { src: "/images/lavagem-engomadoria.jpg" },
  },
];

const TRACK_ID = "servicos-lista";

export function Services() {
  const { t } = useI18n();
  const carousel = useSnapCarousel(services.length);

  const arrows = (
    <div className="flex gap-3">
      <CarouselArrow
        direction="prev"
        label={t.services.prev}
        onClick={() => carousel.scrollByItem(-1)}
        disabled={!carousel.canPrev}
        aria-controls={TRACK_ID}
      />
      <CarouselArrow
        direction="next"
        label={t.services.next}
        onClick={() => carousel.scrollByItem(1)}
        disabled={!carousel.canNext}
        aria-controls={TRACK_ID}
      />
    </div>
  );

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="bg-[#eef6fa] text-[#12263f]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-[72px] lg:px-12 lg:py-28">
        <Reveal className="flex items-end justify-between gap-8">
          <div>
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <h2
              id="servicos-titulo"
              className="mt-4 text-[clamp(32px,8vw,42px)] leading-[1.08] font-medium tracking-[-0.04em] md:text-[clamp(42px,4vw,64px)]"
            >
              <span className="block">{t.services.title[0]}</span>
              <span className="block">{t.services.title[1]}</span>
            </h2>
          </div>

          {carousel.hasOverflow && (
            <div className="hidden shrink-0 md:block">{arrows}</div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <CarouselTrack
            ref={carousel.trackRef}
            id={TRACK_ID}
            aria-label={t.services.listLabel}
            tabIndex={carousel.hasOverflow ? 0 : undefined}
            onKeyDown={carousel.onKeyDown}
            className="mt-10 gap-5 rounded-[14px] md:mt-12"
          >
            {services.map(({ key, image }, index) => {
              const service = t.services.items[key];
              return (
                <CarouselItem
                  key={key}
                  aria-label={t.common.position(index + 1, services.length)}
                  className="basis-[86%] md:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
                >
                  <article className="w-full">
                    <div className="aspect-[1.75] overflow-hidden rounded-[14px] bg-muted">
                      <img
                        src={image.src}
                        alt={service.alt}
                        width={1672}
                        height={941}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                          "size-full object-cover",
                          image.className,
                        )}
                      />
                    </div>
                    <h3 className="mt-6 text-[24px] leading-[1.3] font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.65] text-muted-foreground">
                      {service.description}
                    </p>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselTrack>
        </Reveal>

        {carousel.hasOverflow && (
          <div className="mt-10 flex items-center justify-between gap-6 md:mt-12">
            <CarouselDots
              shape="bar"
              count={carousel.pageCount}
              active={carousel.activePage}
              onSelect={carousel.goToPage}
              itemLabel={(index) => t.services.goTo(index + 1)}
              controls={TRACK_ID}
              className="-mx-1"
            />
            <div className="md:hidden">{arrows}</div>
          </div>
        )}
      </div>
    </section>
  );
}
