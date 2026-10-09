import { GoogleReviewSummary } from "@/components/testimonials/GoogleReviewSummary";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import {
  CarouselArrow,
  CarouselDots,
  CarouselItem,
  CarouselTrack,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  googleReviewSummary,
  testimonials as publishedTestimonials,
  type GoogleReviewSummaryData,
  type Testimonial,
} from "@/data/testimonials";
import { useSnapCarousel } from "@/hooks/use-snap-carousel";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

const TRACK_ID = "testemunhos-lista";

export function Testimonials({
  testimonials = publishedTestimonials,
  summary = googleReviewSummary,
}: {
  testimonials?: Testimonial[];
  summary?: GoogleReviewSummaryData | null;
}) {
  const { t } = useI18n();
  const carousel = useSnapCarousel(testimonials.length);

  // Sem avaliações reais, a secção não é publicada.
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testemunhos"
      aria-labelledby="testemunhos-titulo"
      className="bg-white text-[#12263f]"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <Reveal>
          <SectionHeading
            id="testemunhos-titulo"
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
          />
        </Reveal>

        <Reveal
          delay={120}
          className={cn(
            "mt-12 grid gap-12 md:mt-16",
            summary && "lg:grid-cols-[13.5rem_minmax(0,1fr)]",
          )}
        >
          {summary && <GoogleReviewSummary data={summary} />}

          <div className="@container min-w-0">
            <CarouselTrack
              ref={carousel.trackRef}
              id={TRACK_ID}
              aria-label={t.testimonials.listLabel}
              tabIndex={carousel.hasOverflow ? 0 : undefined}
              onKeyDown={carousel.onKeyDown}
              className="gap-5 rounded-2xl"
            >
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  aria-label={t.common.position(index + 1, testimonials.length)}
                  className="basis-full @min-[600px]:basis-[calc((100%-1.25rem)/2)] @min-[900px]:basis-[calc((100%-2.5rem)/3)]"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    className="w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselTrack>

            {carousel.hasOverflow && (
              <div className="mt-8 flex items-center justify-center md:grid md:grid-cols-[1fr_auto_1fr]">
                <span aria-hidden="true" className="hidden md:block" />

                <CarouselDots
                  count={carousel.pageCount}
                  active={carousel.activePage}
                  onSelect={carousel.goToPage}
                  itemLabel={(index) => t.testimonials.goTo(index + 1)}
                  controls={TRACK_ID}
                />

                <div className="hidden justify-self-end gap-3 md:flex">
                  <CarouselArrow
                    direction="prev"
                    label={t.testimonials.prev}
                    onClick={() => carousel.scrollByItem(-1)}
                    disabled={!carousel.canPrev}
                    aria-controls={TRACK_ID}
                  />
                  <CarouselArrow
                    direction="next"
                    label={t.testimonials.next}
                    onClick={() => carousel.scrollByItem(1)}
                    disabled={!carousel.canNext}
                    aria-controls={TRACK_ID}
                  />
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
