import { WhatsAppIcon } from "@/components/logos/whatsapp";
import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/components/ui/button-arrow";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink, whatsappNumber } from "@/data/contact";
import { useI18n } from "@/i18n/context";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative flex min-h-[700px] scroll-mt-[72px] items-start bg-[#196aae] bg-[length:auto_100%] bg-[position:35%_0%] bg-no-repeat text-white sm:min-h-[600px] sm:items-center sm:bg-cover sm:bg-[position:30%_center] md:scroll-mt-[84px] lg:min-h-[650px] lg:bg-center"
      style={{ backgroundImage: 'url("/cta-bg.png")' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[82px] bg-[linear-gradient(to_bottom,rgb(242_245_243/0),rgb(242_245_243/0.03)_10%,rgb(242_245_243/0.1)_20%,rgb(242_245_243/0.22)_30%,rgb(242_245_243/0.35)_40%,rgb(242_245_243/0.5)_50%,rgb(242_245_243/0.65)_60%,rgb(242_245_243/0.78)_70%,rgb(242_245_243/0.9)_80%,rgb(242_245_243/0.97)_88%,#f2f5f3_97%)] sm:h-[114px] lg:h-[162px]"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-[72px] lg:px-12 lg:py-24">
        <Reveal className="max-w-[760px] selection:bg-white/25 selection:text-white">
          <h2
            id="contacto-titulo"
            className="text-[clamp(36px,9vw,46px)] leading-[1.12] font-semibold tracking-[-0.04em] sm:text-[46px] sm:leading-[1.08] lg:text-[clamp(46px,4.5vw,72px)]"
          >
            <span className="block">{t.finalCta.title[0]}</span>
            <span className="block">{t.finalCta.title[1]}</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] font-normal text-white/90 sm:text-[18px] lg:text-[22px] lg:leading-[1.5]">
            {t.finalCta.text}
          </p>

          <div className="mt-10">
            <Button
              asChild
              variant="white"
              size="medium"
              className="group transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:h-14 sm:px-10 sm:text-[15px] sm:font-semibold motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0 [&_svg]:size-5"
            >
              <a {...whatsappLink(t.common.quoteMessage)}>
                <WhatsAppIcon />
                {t.common.quoteCta}
                <ButtonArrow />
                {whatsappNumber && (
                  <span className="sr-only">{t.common.opensWhatsApp}</span>
                )}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
