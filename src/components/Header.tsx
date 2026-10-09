import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Check, ChevronDown, MapPin, Menu } from "lucide-react";

import { FlagES, FlagGB, FlagPT } from "@/components/logos/flags";
import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/components/ui/button-arrow";
import { Logo } from "@/components/ui/logo";
import { whatsappLink, whatsappNumber } from "@/data/contact";
import { useI18n, type Language } from "@/i18n/context";
import type { Dictionary } from "@/i18n/pt";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links: { key: keyof Dictionary["header"]["nav"]; href: string }[] = [
  { key: "home", href: "#top" },
  { key: "services", href: "#servicos" },
  { key: "howItWorks", href: "#como-funciona" },
  { key: "contact", href: "#rodape-contacto" },
];

const languages: {
  code: string;
  lang: Language;
  label: string;
  Flag: typeof FlagPT;
}[] = [
  { code: "PT", lang: "pt", label: "Português", Flag: FlagPT },
  { code: "EN", lang: "en", label: "English", Flag: FlagGB },
  { code: "ES", lang: "es", label: "Español", Flag: FlagES },
];

const flagClass = "h-3.5 w-5 shrink-0 rounded-[3px] ring-1 ring-black/10";

export function LanguageSelect({ light }: { light: boolean }) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const current =
    languages.find((item) => item.lang === language) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={`-my-1 inline-flex h-11 items-center gap-2 rounded-full px-2.5 text-[0.8125rem] font-medium tracking-[0.04em] transition-colors duration-300 motion-reduce:transition-none ${
          light
            ? "text-[#12263f] hover:bg-[#12263f]/5"
            : "text-white hover:bg-white/10"
        }`}
      >
        <current.Flag className={flagClass} />
        <span>
          <span className="sr-only">{t.header.language} </span>
          {current.code}
        </span>
        <ChevronDown
          className={`size-4 transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute top-full right-0 z-10 mt-2 w-44 rounded-xl bg-white p-1.5 text-[#12263f] shadow-lg ring-1 ring-black/5"
        >
          {languages.map(({ code, lang, label, Flag }) => (
            <li key={code}>
              <button
                type="button"
                lang={lang}
                aria-pressed={lang === language}
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition-colors hover:bg-[#F2F5F8] motion-reduce:transition-none"
              >
                <Flag className={flagClass} />
                <span className="flex-1">{label}</span>
                {lang === language && (
                  <Check className="size-4" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  // top: sem fundo · dark: vidro sobre a hero · light: vidro sobre secções claras
  const [tone, setTone] = useState<"top" | "dark" | "light">("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();
  const pendingHash = useRef<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const light = tone === "light";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 16) return setTone("top");
      const hero = document.getElementById("top");
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      // O fim da Hero dissolve-se em branco: o Header passa a claro assim que
      // o texto fica sobre essa zona clara (≈ 40% de branco).
      const fadeHeight =
        hero?.querySelector("[data-hero-fade]")?.getBoundingClientRect()
          .height ?? 0;
      const overHero =
        !!hero &&
        hero.getBoundingClientRect().bottom >
          headerHeight / 2 + fadeHeight * 0.6;
      setTone(overHero ? "dark" : "light");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the menu first; navigate once its scroll lock has been released.
  const selectMenuLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    pendingHash.current = href && href !== "#" ? href : null;
    setMenuOpen(false);
  };

  const navigateAfterClose = (event: Event) => {
    const hash = pendingHash.current;
    if (!hash) return;
    pendingHash.current = null;
    event.preventDefault();
    history.pushState(null, "", hash);
    const target = hash.length > 1 ? document.querySelector(hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0 });
  };

  return (
    <header
      ref={headerRef}
      className={`width-before-scroll-bar fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out motion-reduce:transition-none ${
        tone === "top"
          ? "bg-transparent"
          : light
            ? "bg-white/65 shadow-[inset_0_-1px_0_rgb(18_38_63/0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-white/[0.08] shadow-[inset_0_-1px_0_rgb(255_255_255/0.12)] backdrop-blur-xl backdrop-saturate-150"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 pt-5 pb-3 md:px-8 md:pt-6 md:pb-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <a
          href="/"
          className={`justify-self-start transition-colors duration-300 motion-reduce:transition-none ${
            light ? "text-[#12263f]" : "text-white"
          }`}
        >
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-12 lg:flex"
          aria-label={t.header.mainNav}
        >
          {links.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              aria-current={index === 0 ? "page" : undefined}
              className={`relative py-2 text-[0.9375rem] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none ${
                light
                  ? "text-[#12263f]/80 after:bg-[#12263f] hover:text-[#12263f] focus-visible:text-[#12263f] aria-[current=page]:text-[#12263f]"
                  : "text-white/90 after:bg-white hover:text-white focus-visible:text-white aria-[current=page]:text-white"
              }`}
            >
              {t.header.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <LanguageSelect light={light} />

          <div className="flex lg:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`-my-1 -mr-2.5 size-11 transition-colors duration-300 motion-reduce:transition-none [&_svg]:size-6 ${
                    light
                      ? "text-[#12263f] hover:bg-[#12263f]/5 hover:text-[#12263f]"
                      : "text-white hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Menu strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">{t.header.openMenu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="flex h-dvh w-[min(340px,100vw)] flex-col gap-0 overflow-y-auto border-none bg-white p-0 px-6 text-[#12263f] shadow-none sm:max-w-none"
                onCloseAutoFocus={navigateAfterClose}
                closeLabel={t.header.closeMenu}
              >
                <SheetTitle className="sr-only">
                  {t.header.menuTitle}
                </SheetTitle>

                <div className="flex h-[72px] shrink-0 items-center pr-14">
                  <a href="/" className="text-[#12263f]">
                    <Logo />
                  </a>
                </div>

                <nav
                  className="mt-8 flex flex-col divide-y divide-[#E8EDF2]"
                  aria-label={t.header.mainNav}
                >
                  {links.map((link, index) => (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={selectMenuLink}
                      aria-current={index === 0 ? "page" : undefined}
                      className="flex min-h-14 items-center text-[17px] font-medium"
                    >
                      {t.header.nav[link.key]}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[#12263f]/70">
                    <MapPin
                      className="size-4 shrink-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    Amora · Cruz de Pau
                  </p>
                  <Button
                    asChild
                    variant="navy"
                    size="medium"
                    className="group w-full"
                  >
                    <a
                      {...whatsappLink(t.common.quoteMessage)}
                      onClick={() => setMenuOpen(false)}
                    >
                      {t.common.quoteCta}
                      <ButtonArrow />
                      {whatsappNumber && (
                        <span className="sr-only">
                          {t.common.opensWhatsApp}
                        </span>
                      )}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
