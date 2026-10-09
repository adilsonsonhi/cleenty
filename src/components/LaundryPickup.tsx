import { MapPin } from "lucide-react";

import { WhatsAppIcon } from "@/components/logos/whatsapp";
import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/components/ui/button-arrow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { supportHours, whatsappLink, whatsappNumber } from "@/data/contact";
import { useI18n } from "@/i18n/context";

export function LaundryPickup() {
  const { t } = useI18n();
  return (
    <section
      id="recolha-roupa"
      aria-labelledby="recolha-roupa-titulo"
      className="bg-white text-[#12263f]"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-[72px] md:gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-28 xl:gap-24">
        <Reveal className="lg:max-w-[600px]">
          <Eyebrow>{t.laundry.eyebrow}</Eyebrow>
          <h2
            id="recolha-roupa-titulo"
            className="mt-4 text-[clamp(32px,8vw,42px)] leading-[1.08] font-medium tracking-[-0.04em] md:text-[clamp(42px,4vw,64px)] lg:text-[clamp(40px,3.6vw,56px)]"
          >
            <span className="block">{t.laundry.title[0]}</span>
            <span className="block">{t.laundry.title[1]}</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-muted-foreground md:text-[17px]">
            {t.laundry.text}
          </p>

          <dl className="mt-10 border-b border-border">
            {t.laundry.details.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border py-4"
              >
                <dt className="text-[14px] text-muted-foreground">{label}</dt>
                <dd className="text-[15px] font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              asChild
              variant="navy"
              size="medium"
              className="group sm:h-14 sm:px-8 sm:text-[15px] sm:font-semibold [&_svg]:size-5"
            >
              <a {...whatsappLink(t.laundry.whatsappMessage)}>
                <WhatsAppIcon />
                {t.laundry.cta}
                <ButtonArrow />
                {whatsappNumber && (
                  <span className="sr-only">{t.common.opensWhatsApp}</span>
                )}
              </a>
            </Button>
            {supportHours && (
              <p className="text-[14px] leading-[1.5] text-muted-foreground">
                {t.common.supportDays},{" "}
                <span className="whitespace-nowrap">{supportHours.hours}</span>
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-muted lg:aspect-[4/5]">
            <img
              src="/images/recolha-entrega-roupa.jpg"
              alt={t.laundry.imageAlt}
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-[78%_center] lg:object-[72%_center]"
            />
            <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[13px] font-medium text-[#12263f] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.5)] backdrop-blur-md backdrop-saturate-150 md:bottom-6 md:left-6">
              <MapPin
                className="size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              Amora · Cruz de Pau
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
