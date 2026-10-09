import type { ReactNode } from "react";
import { MapPin } from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/logos/social";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import {
  address,
  email,
  legalPages,
  socialLinks,
  supportHours,
  whatsappLink,
  whatsappNumber,
} from "@/data/contact";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

// Abre a morada no Google Maps.
const addressHref = address
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${address.street}, ${address.locality}`,
    )}`
  : null;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a7aa0]";

const linkClass = cn(
  "rounded-sm text-[15px] leading-[1.65] text-muted-foreground transition-colors hover:text-[#2a7aa0] focus-visible:text-[#2a7aa0] motion-reduce:transition-none",
  focusRing,
);

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// "351933617279" → "933 617 279"; outros indicativos ficam com "+".
function formatPhone(digits: string) {
  const local = digits.startsWith("351") ? digits.slice(3) : null;
  return local && local.length === 9
    ? local.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")
    : `+${digits}`;
}

const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

const contacts: {
  key: "email" | "whatsapp";
  value: string;
  href: string;
  external?: boolean;
}[] = [];
if (email)
  contacts.push({ key: "email", value: email, href: `mailto:${email}` });
// O número abre sempre o WhatsApp (sem ligação telefónica).
if (whatsappNumber && whatsappHref)
  contacts.push({
    key: "whatsapp",
    value: formatPhone(whatsappNumber),
    href: whatsappHref,
    external: true,
  });

const socials = [
  { label: "Instagram", href: socialLinks.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: socialLinks.facebook, Icon: FacebookIcon },
].filter(
  (item): item is { label: string; href: string; Icon: typeof InstagramIcon } =>
    !!item.href,
);

const legal = [
  { key: "privacy" as const, href: legalPages.privacy },
  { key: "terms" as const, href: legalPages.terms },
].filter(
  (item): item is { key: "privacy" | "terms"; href: string } => !!item.href,
);

// Em desenvolvimento, indica os dados que faltam (nunca publicado).
const missingContacts = [
  !email && "e-mail",
  !whatsappNumber && "WhatsApp",
].filter(Boolean);

function PendingNote({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null;
  return (
    <p className="text-[14px] leading-[1.6] text-muted-foreground italic">
      {children}
    </p>
  );
}

function FooterColumn({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="min-w-0 scroll-mt-24">
      <Eyebrow className="text-[#12263f]">{title}</Eyebrow>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function Footer() {
  const { t } = useI18n();
  // Os mesmos serviços apresentados na secção Serviços.
  const serviceNames = Object.values(t.services.items).map(
    (item) => item.title,
  );
  // Links absolutos (/#...) para funcionarem também nas páginas legais.
  const companyLinks = [
    {
      text: t.common.quoteCta,
      link: whatsappLink(t.common.quoteMessage),
      opensWhatsApp: !!whatsappNumber,
    },
    { text: t.header.nav.services, link: { href: "/#servicos" } },
    { text: t.header.nav.howItWorks, link: { href: "/#como-funciona" } },
    { text: t.header.nav.contact, link: { href: "/#rodape-contacto" } },
  ];

  return (
    <footer className="bg-muted text-[#12263f]">
      <div className="mx-auto max-w-[1440px] px-6 py-[72px] lg:px-12 lg:py-24">
        <Reveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr_1fr] lg:gap-x-10 xl:grid-cols-[1.6fr_1fr_1fr_1.4fr_1fr] xl:gap-x-8">
          <div className="min-w-0 sm:col-span-2 lg:col-span-4 xl:col-span-1">
            <a
              href="/"
              className={cn(
                "inline-block rounded-sm text-[#12263f]",
                focusRing,
              )}
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-[300px] text-[15px] leading-[1.65] text-muted-foreground">
              {t.footer.description}
            </p>

            {socials.length > 0 && (
              <ul aria-label={t.footer.social} className="mt-6 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...external}
                      className={cn(
                        "grid size-11 place-items-center rounded-full text-[#12263f] ring-1 ring-[#12263f]/15 transition-colors hover:bg-[#12263f] hover:text-white hover:ring-[#12263f] motion-reduce:transition-none",
                        focusRing,
                      )}
                    >
                      <Icon className="size-5" />
                      <span className="sr-only">
                        {label} {t.common.opensNewTab}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FooterColumn title={t.footer.servicesTitle}>
            <ul className="space-y-3">
              {serviceNames.map((name) => (
                <li
                  key={name}
                  className="text-[15px] leading-[1.65] text-muted-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={t.footer.companyTitle}>
            <ul className="space-y-3">
              {companyLinks.map(({ text, link, opensWhatsApp }) => (
                <li key={text}>
                  <a {...link} className={linkClass}>
                    {text}
                    {opensWhatsApp && (
                      <span className="sr-only"> {t.common.opensWhatsApp}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={t.footer.contactTitle} id="rodape-contacto">
            <ul className="space-y-5">
              {contacts.map(({ key, value, href, ...item }) => (
                <li key={key}>
                  <p className="text-[14px] leading-[1.4] text-muted-foreground">
                    {t.footer[key]}
                  </p>
                  <a
                    href={href}
                    {...("external" in item ? external : {})}
                    className={cn(
                      "mt-1 inline-block rounded-sm text-[20px] leading-[1.3] font-semibold tracking-[-0.02em] [overflow-wrap:anywhere] text-[#12263f] transition-colors hover:text-[#2a7aa0] focus-visible:text-[#2a7aa0] motion-reduce:transition-none",
                      focusRing,
                    )}
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>

            {missingContacts.length > 0 && (
              <div className="mt-5">
                <PendingNote>
                  Por confirmar: {missingContacts.join(", ")}.
                </PendingNote>
              </div>
            )}

            {address && addressHref && (
              <a
                href={addressHref}
                {...external}
                className={cn(
                  linkClass,
                  "mt-5 flex items-start gap-2 text-[#12263f]",
                )}
              >
                <MapPin
                  className="mt-[5px] size-4 shrink-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>
                  {address.street}
                  <span className="block">{address.locality}</span>
                  <span className="sr-only"> {t.footer.opensMaps}</span>
                </span>
              </a>
            )}
          </FooterColumn>

          {(supportHours || import.meta.env.DEV) && (
            <FooterColumn title={t.footer.hoursTitle}>
              {supportHours ? (
                <ul className="space-y-3 text-[15px] leading-[1.65]">
                  <li className="text-muted-foreground">
                    {t.common.supportDays}
                    <span className="block font-medium text-[#12263f]">
                      {supportHours.hours}
                    </span>
                  </li>
                  <li className="text-muted-foreground">
                    {t.common.supportNote}
                  </li>
                </ul>
              ) : (
                <PendingNote>
                  Por confirmar: horário de atendimento.
                </PendingNote>
              )}
            </FooterColumn>
          )}
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-[14px] leading-[1.6] text-muted-foreground md:flex-row md:items-center md:justify-between lg:mt-16">
          <p>
            © {new Date().getFullYear()} Cleenty. {t.footer.rights}
          </p>
          {legal.length > 0 && (
            <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
              {legal.map((page) => (
                <li key={page.key}>
                  <a href={page.href} className={cn(linkClass, "text-[14px]")}>
                    {t.footer[page.key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
