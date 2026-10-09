import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/context";
import type { Dictionary } from "@/i18n/pt";
import { cn } from "@/lib/utils";

// Textos em src/i18n. Fotografias provisórias (Pexels) até existirem imagens próprias.
const steps: {
  key: keyof Dictionary["howItWorks"]["steps"];
  image: { src: string; className?: string };
}[] = [
  {
    key: "quote",
    image: {
      src: "/images/passo-orcamento.jpg",
      className: "object-[50%_40%]",
    },
  },
  {
    key: "details",
    image: {
      src: "/images/passo-detalhes.jpg",
      className: "object-[30%_40%]",
    },
  },
  {
    key: "cleaning",
    image: { src: "/images/passo-limpeza.jpg" },
  },
];

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="bg-white text-[#12263f]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-[72px] lg:px-12 lg:py-28">
        <Reveal>
          <Eyebrow>{t.howItWorks.eyebrow}</Eyebrow>
          <h2
            id="como-funciona-titulo"
            className="mt-4 text-[clamp(32px,8vw,42px)] leading-[1.08] font-medium tracking-[-0.04em] md:text-[clamp(42px,4vw,64px)]"
          >
            <span className="block">{t.howItWorks.title[0]}</span>
            <span className="block">{t.howItWorks.title[1]}</span>
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {steps.map(({ key, image }, index) => {
            const step = t.howItWorks.steps[key];
            return (
              <Reveal as="li" key={key} delay={(index % 3) * 120}>
                <p
                  aria-hidden="true"
                  className="text-[14px] font-medium tracking-[0.04em] text-muted-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 aspect-[1.75] overflow-hidden rounded-[14px] bg-muted">
                  <img
                    src={image.src}
                    alt={step.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn("size-full object-cover", image.className)}
                  />
                </div>
                <h3 className="mt-6 text-[24px] leading-[1.3] font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
