import { Fragment, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/Footer";
import { LanguageSelect } from "@/components/Header";
import { BackToTop } from "@/components/ui/back-to-top";
import { Logo } from "@/components/ui/logo";
import { address, email, legalName, nif, whatsappNumber } from "@/data/contact";
import { useI18n } from "@/i18n/context";
import { legal, LEGAL_UPDATED, type LegalContext } from "@/i18n/legal";

export type LegalPageKind = "privacy" | "terms";

const context: LegalContext = {
  entity: legalName
    ? `Cleenty (${legalName}${nif ? `, NIF ${nif}` : ""})`
    : "Cleenty",
  address: address ? `${address.street}, ${address.locality}` : "",
  email: email ?? "",
  phone: whatsappNumber
    ? `+${whatsappNumber.replace(/^(\d{3})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4")}`
    : "",
};

// Transforma URLs e e-mails do texto em links.
const linkPattern =
  /(https?:\/\/[^\s)]*[^\s).,;]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function linkify(text: string): ReactNode {
  return text.split(linkPattern).map((part, index) => {
    if (index % 2 === 0) return <Fragment key={index}>{part}</Fragment>;
    const isEmail = !part.startsWith("http");
    return (
      <a
        key={index}
        href={isEmail ? `mailto:${part}` : part}
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className="font-medium text-[#12263f] underline decoration-[#12263f]/30 underline-offset-4 transition-colors hover:text-[#2a7aa0] hover:decoration-[#2a7aa0] motion-reduce:transition-none"
      >
        {isEmail ? part : part.replace(/^https?:\/\//, "")}
      </a>
    );
  });
}

export function LegalPage({ page }: { page: LegalPageKind }) {
  const { t, language, locale } = useI18n();
  const doc = legal[language][page](context);
  const updated = new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
    new Date(`${LEGAL_UPDATED}T12:00:00`),
  );

  return (
    <div className="min-h-screen bg-background text-[#12263f]">
      <header className="sticky top-0 z-50 bg-white/80 shadow-[inset_0_-1px_0_rgb(18_38_63/0.08)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3 md:px-8 md:py-4 lg:px-12">
          <a href="/" className="text-[#12263f]">
            <Logo />
          </a>
          <LanguageSelect light />
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-6 pt-10 pb-[72px] md:pt-16 lg:pb-28">
        <a
          href="/"
          className="-ml-1 inline-flex min-h-11 items-center gap-2 rounded-sm px-1 text-[14px] font-medium text-muted-foreground transition-colors hover:text-[#2a7aa0] motion-reduce:transition-none"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden="true" />
          {t.legal.backHome}
        </a>

        <h1 className="mt-6 text-[clamp(32px,8vw,42px)] leading-[1.08] font-medium tracking-[-0.04em] text-balance md:text-[56px]">
          {t.footer[page]}
        </h1>
        <p className="mt-4 text-[14px] text-muted-foreground">
          {t.legal.updated} <time dateTime={LEGAL_UPDATED}>{updated}</time>
        </p>
        <p className="mt-8 text-[17px] leading-[1.7] md:text-[18px]">
          {doc.intro}
        </p>

        {doc.sections.map((section) => (
          <section
            key={section.heading}
            className="mt-10 border-t border-border pt-8 md:mt-12 md:pt-10"
          >
            <h2 className="text-[20px] leading-[1.3] font-semibold tracking-[-0.01em] md:text-[22px]">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-[1.7] text-muted-foreground">
              {section.body.map((block, index) =>
                Array.isArray(block) ? (
                  <ul
                    key={index}
                    className="list-disc space-y-2 pl-5 marker:text-[#2a7aa0]"
                  >
                    {block.map((item) => (
                      <li key={item}>{linkify(item)}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={index}>{linkify(block)}</p>
                ),
              )}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
