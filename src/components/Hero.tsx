import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/components/ui/button-arrow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { whatsappLink, whatsappNumber } from "@/data/contact";
import { useI18n } from "@/i18n/context";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#153f3c]">
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-hero-zoom bg-cover bg-[position:78%_center] bg-no-repeat sm:bg-center motion-reduce:animate-none"
        style={{ backgroundImage: 'url("/Sunlit Blue Wall Interior.png")' }}
      />
      <div
        aria-hidden="true"
        data-hero-fade
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_bottom,rgb(255_255_255/0),rgb(255_255_255/0.06)_22%,rgb(255_255_255/0.28)_50%,rgb(255_255_255/0.66)_78%,#fff)] sm:h-32 lg:h-40"
      />
      <div className="relative z-10 mx-auto flex min-h-[max(100svh,600px)] max-w-[1180px] flex-col items-center justify-center px-6 pt-24 pb-[18vh] sm:px-5 md:px-8 md:pt-20 md:pb-[17vh] lg:px-12">
        <div className="w-full max-w-[480px] self-start text-left selection:bg-white/25 selection:text-white sm:max-w-none sm:self-auto sm:text-center">
          <Eyebrow
            tone="hero"
            className="mb-5 animate-reveal motion-reduce:animate-none"
          >
            {t.hero.eyebrow}
          </Eyebrow>

          <h1 className="animate-reveal [animation-delay:120ms] motion-reduce:animate-none text-[clamp(36px,9vw,48px)] leading-[1.12] tracking-[-0.035em] sm:text-[clamp(1.625rem,8.6vw,2.75rem)] sm:leading-[1.05] md:text-[3.75rem] md:leading-[1.06] lg:text-[clamp(3.75rem,4.6vw,4.5rem)]">
            <span className="block font-medium text-balance text-white sm:tracking-[-0.035em]">
              {t.hero.title[0]}
            </span>
            <span className="block font-normal text-balance text-[#9cd3e8] sm:tracking-[-0.02em]">
              {t.hero.title[1]}
            </span>
          </h1>

          <p className="mt-7 max-w-[360px] animate-reveal [animation-delay:240ms] motion-reduce:animate-none text-[15px] leading-[1.65] font-normal text-pretty text-white/90 sm:mx-auto sm:max-w-[580px] sm:text-wrap sm:text-[0.9375rem] sm:leading-[1.6] md:mt-8 md:text-[1.0625rem]">
            {t.hero.text}
          </p>

          <div className="mt-8 flex animate-reveal justify-start [animation-delay:360ms] motion-reduce:animate-none sm:mt-9 sm:justify-center md:mt-10">
            <Button
              asChild
              variant="white"
              size="medium"
              className="group transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:h-14 sm:px-10 sm:text-[15px] sm:font-semibold motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0"
            >
              <a {...whatsappLink(t.common.quoteMessage)}>
                {t.common.quoteCta}
                <ButtonArrow />
                {whatsappNumber && (
                  <span className="sr-only">{t.common.opensWhatsApp}</span>
                )}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
